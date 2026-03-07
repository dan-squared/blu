import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

interface NavBarProps {
  setPage: (page: string) => void;
  compact?: boolean;
}

export default function NavBar({ setPage, compact = false }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div className="flex items-center gap-3 md:gap-6 bg-white/90 backdrop-blur-md px-4 md:px-6 py-3 rounded-2xl shadow-sm text-stone-900 w-fit max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-3rem)]">
        <button 
          className={`flex items-center justify-center hover:text-stone-500 transition-colors shrink-0 ${compact ? '' : 'lg:hidden'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <MenuIcon size={20} strokeWidth={1.5} />}
        </button>
        {!compact && (
          <button className="hidden lg:flex items-center justify-center hover:text-stone-500 transition-colors shrink-0">
            <MenuIcon size={20} strokeWidth={1.5} />
          </button>
        )}
        <span 
          className="font-forum text-xl md:text-2xl font-bold tracking-wider cursor-pointer shrink-0" 
          onClick={() => setPage('home')}
        >
          Blu
        </span>
        
        {!compact && (
          <>
            <div className="hidden lg:flex items-center gap-3 xl:gap-6 text-sm font-medium tracking-widest uppercase shrink-0 overflow-x-auto no-scrollbar">
              <button onClick={() => setPage('menu')} className="hover:text-stone-500 transition-colors whitespace-nowrap">Menu</button>
              <button onClick={() => setPage('about')} className="hover:text-stone-500 transition-colors whitespace-nowrap">About</button>
              <button onClick={() => setPage('feedback')} className="hover:text-stone-500 transition-colors whitespace-nowrap">Feedback</button>
            </div>
            <button className="hidden xl:block border border-stone-900 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-colors ml-auto shrink-0 whitespace-nowrap">
              Book a Table
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg py-4 px-6 flex flex-col gap-4 ${compact ? '' : 'lg:hidden'}`}>
          <button 
            onClick={() => { setPage('home'); setIsOpen(false); }} 
            className="text-left text-sm font-medium tracking-widest uppercase hover:text-stone-500 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => { setPage('menu'); setIsOpen(false); }} 
            className="text-left text-sm font-medium tracking-widest uppercase hover:text-stone-500 transition-colors"
          >
            Menu
          </button>
          <button 
            onClick={() => { setPage('about'); setIsOpen(false); }} 
            className="text-left text-sm font-medium tracking-widest uppercase hover:text-stone-500 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => { setPage('feedback'); setIsOpen(false); }} 
            className="text-left text-sm font-medium tracking-widest uppercase hover:text-stone-500 transition-colors"
          >
            Feedback
          </button>
          <button className="border border-stone-900 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-colors w-full">
            Book
          </button>
        </div>
      )}
    </div>
  );
}
