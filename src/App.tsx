import { useState } from 'react';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import FeedbackPage from './components/FeedbackPage';

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'menu': return <MenuPage setPage={setPage} />;
      case 'about': return <AboutPage setPage={setPage} />;
      case 'feedback': return <FeedbackPage setPage={setPage} />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 p-2 md:p-4 lg:p-6 font-sans">
      {renderPage()}
    </div>
  );
}
