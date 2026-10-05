<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Blu Kitchen at Laphto Mall

Digital menu and guest feedback site for Blu Kitchen, Laphto Mall. The menu can be opened directly at `/menu` for table QR codes.

## Run Locally

**Prerequisites:** Node.js 20 or newer


1. Install dependencies: `npm install`
2. Start the API and SQLite-backed app: `npm start`
3. For local frontend development, run `npm run server` in one terminal and `npm run dev` in another. The Vite server on port 3000 proxies `/api` requests to port 3001.

Feedback is stored in `data/blu-feedback.sqlite`. Set `FEEDBACK_DB_PATH` to choose a persistent database location in deployment. Set a long random `FEEDBACK_ADMIN_TOKEN` in the server environment for staff access, and set `PORT` if needed. Deployments must retain the SQLite data directory across restarts; use a persistent volume for `FEEDBACK_DB_PATH`.

Laphto Mall staff can review submissions at `/feedback-admin`, retrieve JSON at `/api/feedback`, or download a CSV at `/api/feedback/export.csv`. The page prompts for the staff token; JSON and CSV endpoints require it as a bearer token.

Open `/table-qr` after deployment to generate and download a QR code for that deployment's `/menu` route. The menu route loads directly on mobile and supports browser back/forward navigation; the QR never embeds a localhost URL.
