import NavBar from './NavBar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface AboutPageProps {
  setPage: (page: string) => void;
}

export default function AboutPage({ setPage }: AboutPageProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 h-full min-h-[calc(100vh-2rem)]">
      {/* Left Hero - Fixed on Desktop */}
      <div className="relative w-full lg:w-[40%] rounded-3xl overflow-hidden h-[40vh] lg:h-[calc(100vh-3rem)] lg:sticky lg:top-6">
        <img 
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Restaurant Ambiance" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          <NavBar setPage={setPage} compact={true} />
        </div>

        <div className="absolute bottom-8 md:bottom-12 left-0 w-full text-center z-10 px-4">
          <h1 className="font-forum text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-widest break-words">OUR STORY</h1>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-[60%] py-8 lg:py-16 lg:pr-8 xl:pr-16 flex flex-col gap-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-6 tracking-wide text-center lg:text-left">Global Flavor · Local Love</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Restaurant Interior" 
              referrerPolicy="no-referrer"
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-sm"
            />
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
              alt="Delicious Dish" 
              referrerPolicy="no-referrer"
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-sm"
            />
          </div>

          <p className="text-stone-600 leading-relaxed mb-6 text-base md:text-lg text-center lg:text-left">
            Welcome to Blu Kitchen, located in the vibrant heart of Addis Ababa at Laphto Mall. We are a culinary destination that celebrates the rich tapestry of global cuisine while honoring the deep-rooted traditions of Ethiopian flavors.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8 text-base md:text-lg text-center lg:text-left">
            Our menu is a carefully curated journey, offering everything from authentic Ethiopian national dishes like Tibs and Shiro, to classic Italian pastas, sizzling Asian stir-fries, and flame-broiled burgers. Whether you're joining us for a hearty breakfast, a quick business lunch, or a celebratory dinner, Blu Kitchen provides an inviting atmosphere where every meal is prepared with passion and the freshest ingredients.
          </p>
          
          <div className="w-full h-64 md:h-80 mb-8 rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
              alt="Chef cooking" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-stone-600 leading-relaxed text-base md:text-lg text-center lg:text-left">
            At Blu Kitchen, we don't just serve food; we create experiences. Our commitment to "Global Flavor · Local Love" means you can travel the world through your palate, right here in Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto w-full mt-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 mb-4">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-forum text-2xl mb-2 tracking-wide">Location</h3>
            <p className="text-stone-600">Laphto Mall<br />Addis Ababa, Ethiopia</p>
            <a href="https://www.laphto.com" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-medium mt-2 hover:underline">www.laphto.com</a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 mb-4">
              <Clock size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-forum text-2xl mb-2 tracking-wide">Hours</h3>
            <p className="text-stone-600">Monday - Sunday<br />7:00 AM - 11:00 PM</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 mb-4">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-forum text-2xl mb-2 tracking-wide">Contact</h3>
            <p className="text-stone-600">+251 11 320 6362<br />Reservations Available</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 mb-4">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-forum text-2xl mb-2 tracking-wide">Email</h3>
            <p className="text-stone-600">info@laphto.com<br />events@laphto.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
