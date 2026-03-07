import { ArrowRight } from 'lucide-react';

interface NavCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export default function NavCard({ title, image, onClick }: NavCardProps) {
  return (
    <div 
      className="relative flex-1 rounded-3xl overflow-hidden group cursor-pointer min-h-[200px] lg:min-h-0"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
      <div className="absolute bottom-6 right-6 flex items-center gap-4">
        <span className="font-forum text-2xl text-white tracking-widest">{title}</span>
        <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-stone-900 transition-all">
          <ArrowRight size={18} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
