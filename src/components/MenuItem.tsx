import { Leaf } from 'lucide-react';

interface MenuItemProps {
  title: string;
  price: string;
  description: string;
  image: string;
  isVegan?: boolean;
}

export default function MenuItem({ title, price, description, image, isVegan }: MenuItemProps) {
  return (
    <div className="flex flex-col gap-5 group">
      <div className="w-full h-64 md:h-[22rem] rounded-2xl overflow-hidden bg-stone-100 relative">
        <img 
          src={image} 
          alt={title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      <div>
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h3 className="font-forum text-2xl tracking-widest flex items-center gap-2">
            {title}
            {isVegan && <Leaf size={16} className="text-green-600" strokeWidth={1.5} />}
          </h3>
          <div className="flex-grow border-b border-dotted border-stone-400 relative -top-2 opacity-50"></div>
          <span className="font-forum text-2xl">{price}</span>
        </div>
        <p className="text-stone-500 text-sm leading-relaxed max-w-2xl font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
