import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
import { GlassCard, Badge } from '../components/ui/Core';
import { useEffect, useState } from 'react';

import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';

export const About = () => {
  const images = [c1, c2, c3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-20">
      {/* Company Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={images[currentIndex]} 
                alt="NEXYOVI Corporate" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-slate-900 z-10"></div>
          <div className="absolute inset-0 backdrop-blur-[1px] z-10"></div>
        </div>

        <div className="container-custom relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Badge className="mb-8 !bg-nexyovi-primary/20 !text-nexyovi-primary border-nexyovi-primary/30">
              Corporate Intelligence & Vision
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Modern <br />
              <span className="gradient-text-primary">Engineering Force</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Pioneering the next era of digital infrastructure from Miami to Addis Ababa. 
              We don't just build software; we architect the future.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter">
              Next-Level <span className="gradient-text">Vision & Innovation</span>
            </h1>
            <div className="space-y-6">
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  Led by visionary founder <span className="text-slate-900 font-bold">Yonas Bogale</span>, NEXYOVI is a modern technology powerhouse dedicated to the "Next-Level Vision and Innovation." 
                  Our name is our mission: <span className="text-nexyovi-primary font-bold">NEX</span> (Next-Level Technology), <span className="text-nexyovi-secondary font-bold">YO</span> (Yovani), and <span className="text-nexyovi-accent font-bold">VI</span> (Vision & Innovation).
                </p>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  Based in the vibrant tech landscapes of <span className="text-slate-900 font-bold">Addis Ababa, Ethiopia</span> and <span className="text-slate-900 font-bold">Miami, Florida</span>, we engineer high-performance digital solutions across the globe. 
                  We believe that the next generation of technology should be an invisible force that empowers, automates, and inspires users everywhere.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-white/40 border border-black/5 rounded-xl">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Established</p>
                        <p className="text-sm font-black text-slate-900 uppercase">2026 Tech Frontier</p>
                    </div>
                    <div className="p-4 bg-white/40 border border-black/5 rounded-xl">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Headquarters</p>
                        <p className="text-sm font-black text-slate-900 uppercase">Miami & Addis Ababa</p>
                    </div>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-panel p-2 border-black/5 animate-float-slow">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                 alt="Team collaborating" 
                 className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 hover:opacity-100"
               />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 glass-card p-6 border-nexyovi-primary/20 shadow-xl shadow-black/5">
               <p className="text-3xl font-black text-slate-900 mb-1">50+</p>
               <p className="text-xs text-slate-400 uppercase tracking-widest font-black">Global Engineers</p>
            </div>
          </motion.div>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Target className="text-nexyovi-primary" />,
              title: "Our Mission",
              desc: "To deliver high-performance digital tools that empower businesses to scale infinitely and serve their customers with precision."
            },
            {
              icon: <Eye className="text-nexyovi-secondary" />,
              title: "Our Vision",
              desc: "To become the global standard for enterprise software excellence, where every interaction is seamless and every process is optimized."
            },
            {
              icon: <Award className="text-nexyovi-accent" />,
              title: "Our Value",
              desc: "Integrity, innovation, and an obsession with quality. We don't just ship code; we deliver competitive advantages."
            }
          ].map((item, i) => (
            <GlassCard key={i} className="text-center p-10 border-black/5 shadow-xl shadow-black/5">
              <div className="w-16 h-16 bg-nexyovi-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-nexyovi-primary/10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Culture / Team Section */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tighter">Driven by <span className="gradient-text">Elite Talent</span></h2>
           <p className="text-slate-500 max-w-2xl mx-auto font-medium">
             Our team consists of veterans from top tech firms and hungry innovators 
             pushing the boundaries of what's possible in AI, Cloud, and Software Engineering.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-card p-0 mb-4 border-black/5 group-hover:border-nexyovi-primary/40 transition-all duration-700 shadow-xl shadow-black/5">
                   <div className="w-full h-full bg-slate-50 flex items-center justify-center relative">
                      <Users className="text-nexyovi-primary opacity-5" size={60} />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 to-transparent p-6 backdrop-blur-md">
                         <p className="text-slate-900 font-black uppercase tracking-tighter text-sm">Tech Lead 0{i}</p>
                         <p className="text-[10px] font-black uppercase tracking-widest text-nexyovi-primary">Software Architecture</p>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
