import NavBar from './NavBar';
import NavCard from './NavCard';
import { Instagram, Twitter, Facebook } from 'lucide-react';

interface HomePageProps {
  setPage: (page: string) => void;
}

export default function HomePage({ setPage }: HomePageProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-full min-h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)]">
      {/* Left Hero */}
      <div className="relative w-full lg:w-[65%] rounded-3xl overflow-hidden min-h-[60vh] lg:min-h-0 flex-grow">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" 
          alt="Restaurant Interior" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="absolute top-6 left-6 z-10">
          <NavBar setPage={setPage} />
        </div>

        <div className="absolute bottom-12 left-6 md:left-12 z-10 pr-6">
          <h1 className="font-forum text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] text-white leading-[0.9] tracking-wide break-words">
            BLU<br />KITCHEN
          </h1>
          <p className="text-white/90 mt-4 text-base sm:text-lg md:text-xl font-medium tracking-widest uppercase break-words">Global Flavor · Local Love</p>
        </div>

        <div className="absolute bottom-8 right-6 md:right-8 z-10 flex gap-2 md:gap-3">
          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white hover:text-stone-900 transition-all">
            <Facebook size={16} strokeWidth={1.5} />
          </button>
          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white hover:text-stone-900 transition-all">
            <Instagram size={16} strokeWidth={1.5} />
          </button>
          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white hover:text-stone-900 transition-all">
            <Twitter size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Right Cards */}
      <div className="w-full lg:w-[35%] flex flex-col gap-4 lg:gap-6">
        <NavCard 
          title="MENU" 
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
          onClick={() => setPage('menu')} 
        />
        <NavCard 
          title="OUR STORY" 
          image="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
          onClick={() => setPage('about')}
        />
        <NavCard 
          title="FEEDBACK" 
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" 
          onClick={() => setPage('feedback')}
        />
      </div>
    </div>
  );
}
