import Database from 'better-sqlite3';
import 'dotenv/config';
import express from 'express';
import { randomUUID } from 'node:crypto';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 3001);
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const databasePath = path.resolve(process.env.FEEDBACK_DB_PATH || path.join(rootDir, 'data', 'blu-feedback.sqlite'));

mkdirSync(path.dirname(databasePath), { recursive: true });
const db = new Database(databasePath);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS feedback_submissions (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    message TEXT NOT NULL,
    source TEXT NOT NULL DEFAULT 'laphto-mall',
    created_at TEXT NOT NULL
  )
`);

app.use(express.json({ limit: '20kb' }));

const requireStaffToken: express.RequestHandler = (request, response, next) => {
  const expectedToken = process.env.FEEDBACK_ADMIN_TOKEN;
  const suppliedToken = request.header('authorization')?.replace(/^Bearer\s+/i, '');
  if (!expectedToken) return response.status(503).json({ error: 'Feedback staff access is not configured.' });
  if (suppliedToken !== expectedToken) return response.status(401).json({ error: 'Enter a valid staff access token.' });
  return next();
};

app.get('/api/health', (_request, response) => response.json({ status: 'ok' }));

app.post('/api/feedback', (request, response) => {
  const name = typeof request.body?.name === 'string' ? request.body.name.trim() : '';
  const email = typeof request.body?.email === 'string' ? request.body.email.trim() : '';
  const message = typeof request.body?.message === 'string' ? request.body.message.trim() : '';
  const rating = Number(request.body?.rating);

  if (!name || name.length > 120) return response.status(400).json({ error: 'Enter a name under 120 characters.' });
  if (email.length > 254 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return response.status(400).json({ error: 'Enter a valid email address.' });
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return response.status(400).json({ error: 'Choose a rating from 1 to 5.' });
  }
  if (!message || message.length > 5000) return response.status(400).json({ error: 'Enter a comment under 5,000 characters.' });

  const entry = {
    id: randomUUID(), name, email: email || null, rating, message, createdAt: new Date().toISOString(),
  };
  db.prepare(`INSERT INTO feedback_submissions (id, name, email, rating, message, created_at)
    VALUES (@id, @name, @email, @rating, @message, @createdAt)`).run(entry);
  return response.status(201).json({ entry });
});

app.get('/api/feedback', requireStaffToken, (request, response) => {
  const parsedLimit = Number(request.query.limit || 100);
  const limit = Number.isFinite(parsedLimit) ? Math.min(Math.max(Math.floor(parsedLimit), 1), 500) : 100;
  const entries = db.prepare(`SELECT id, name, email, rating, message, created_at AS createdAt
    FROM feedback_submissions ORDER BY created_at DESC LIMIT ?`).all(limit);
  const summary = db.prepare(`SELECT COUNT(*) AS total, ROUND(AVG(rating), 2) AS averageRating
    FROM feedback_submissions`).get();
  return response.json({ entries, summary });
});

app.get('/api/feedback/export.csv', requireStaffToken, (_request, response) => {
  const entries = db.prepare(`SELECT id, name, email, rating, message, source, created_at AS createdAt
    FROM feedback_submissions ORDER BY created_at DESC`).all() as Array<Record<string, string | number | null>>;
  const escapeCsv = (value: string | number | null) => `"${String(value ?? '').replaceAll('"', '""')}"`;
  const columns = ['id', 'name', 'email', 'rating', 'message', 'source', 'createdAt'];
  const lines = [columns.join(','), ...entries.map((entry) => columns.map((column) => escapeCsv(entry[column])).join(','))];
  response.setHeader('Content-Type', 'text/csv; charset=utf-8');
  response.setHeader('Content-Disposition', 'attachment; filename="laphto-mall-feedback.csv"');
  return response.send(lines.join('\r\n'));
});

const distDir = path.join(rootDir, 'dist');
app.use(express.static(distDir));
app.get('*', (_request, response) => response.sendFile(path.join(distDir, 'index.html')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Blu app/API listening on port ${port}`);
});
