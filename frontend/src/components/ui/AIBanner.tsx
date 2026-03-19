import { Bot, Sparkles, ArrowRight, Globe, Lock } from 'lucide-react';
import { Button, Badge } from './Core';
import { Link } from 'react-router-dom';

export const AIBanner = () => {
  return (
    <section className="py-32 bg-[#001133] relative overflow-hidden">
      {/* High-Fidelity Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/[0.1] blur-[160px] rounded-full translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/[0.05] blur-[140px] rounded-full -translate-x-1/2 translate-y-1/2" />
         <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      </div>

      <div className="container-custom relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-2/3 space-y-8 text-center lg:text-left">
             <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/30 uppercase font-black tracking-[0.4em] font-mono px-6 py-2 h-auto text-[11px]">
                <Sparkles size={12} className="mr-3 animate-pulse" /> AI DEPLOYMENT
             </Badge>
             <h2 className="text-5xl md:text-7xl font-black font-outfit text-white leading-[0.9] tracking-tightest">
                Deploy your own <br /> AI assistant.
             </h2>
             <p className="text-xl text-white/50 font-bold max-w-xl leading-relaxed tracking-tight">
                Build a custom AI assistant trained on your company data in weeks. Secure, private, and global.
             </p>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                {[
                  { label: "Company Data", icon: <Bot size={16} /> },
                  { label: "Multi-Node", icon: <Globe size={16} /> },
                  { label: "Secure", icon: <Lock size={16} /> },
                  { label: "Multi-Lang", icon: <Sparkles size={16} /> }
                ].map((item, i) => (
                   <div key={i} className="flex flex-col gap-3 group cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                         {item.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">{item.label}</span>
                   </div>
                ))}
              </div>
          </div>
          
          <div className="lg:w-1/3 flex flex-col gap-6 w-full max-w-sm">
             <Link to="/contact" className="w-full group">
               <Button size="xl" className="w-full h-24 bg-white text-[#001133] hover:bg-brand-blue hover:text-white rounded-3xl text-2xl shadow-premium font-black uppercase tracking-widest transition-all duration-500 flex justify-between px-10">
                  Request AI Setup <ArrowRight className="group-hover:translate-x-2 transition-transform" size={32} />
               </Button>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
