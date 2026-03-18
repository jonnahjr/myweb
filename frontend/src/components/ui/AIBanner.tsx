import { Bot, Sparkles, ArrowRight, Globe, Lock } from 'lucide-react';
import { Button, Badge } from './Core';
import { Link } from 'react-router-dom';

export const AIBanner = () => {
  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-20" />
      </div>

      <div className="container-custom relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3 space-y-6 text-center lg:text-left">
             <Badge variant="blue" className="bg-white/10 text-white border-white/20 uppercase font-black tracking-widest font-mono px-4 py-1 h-auto">
                <Sparkles size={12} className="mr-2 animate-pulse" /> AI DEPLOYMENT
             </Badge>
             <h2 className="text-4xl md:text-6xl font-black font-outfit text-white leading-tight">
                Deploy your own <br /> AI assistant.
             </h2>
             <p className="text-lg text-white/70 font-medium max-w-xl leading-relaxed">
                Build a custom AI assistant trained on your company data in weeks. Secure, private, and global.
             </p>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { label: "Company Data", icon: <Bot size={12} /> },
                  { label: "Multi-Node", icon: <Globe size={12} /> },
                  { label: "Secure", icon: <Lock size={12} /> },
                  { label: "Multi-Lang", icon: <Sparkles size={12} /> }
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest font-mono">
                      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-white">{item.icon}</div>
                      {item.label}
                   </div>
                ))}
             </div>
          </div>
          
          <div className="lg:w-1/3 flex flex-col gap-4 w-full max-w-sm">
             <Link to="/contact" className="w-full">
               <Button variant="cyan" size="lg" className="w-full h-14 rounded-full text-base shadow-xl font-black">
                  Request AI Setup <ArrowRight className="ml-2" />
               </Button>
             </Link>
             <Link to="/contact" className="w-full">
               <Button variant="outline" size="lg" className="w-full h-14 rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all font-black">
                  Try Demo
               </Button>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
