import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  User, 
  Zap,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, Button } from '../components/ui/Core';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-brand-charcoal">
      
      {/* ============= HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 pt-32">
        <div className="container-custom relative z-10 mx-auto max-w-6xl">
           <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest font-bold">ABOUT NEXYOVI</Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight font-outfit"
              >
                Engineering <br />
                The <span className="text-brand-blue">Standard.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="text-lg md:text-xl text-brand-charcoal/60 font-medium max-w-2xl leading-relaxed"
              >
                 NEXYOVI is a global technology company focused on AI, cybersecurity, and infrastructure engineering. We build the future of secure digital systems.
              </motion.p>
           </div>
        </div>
      </section>

      {/* ============= MISSION & VISION ============= */}
      <section className="py-32 bg-brand-gray-light/30 border-y border-black/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <h3 className="text-3xl font-black font-outfit text-brand-charcoal uppercase flex items-center gap-4"><Target size={24} className="text-brand-blue" /> Mission</h3>
                    <p className="text-xl text-brand-charcoal/50 font-medium leading-relaxed">
                       To build intelligent, secure, and scalable digital systems that power the future economy.
                    </p>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-3xl font-black font-outfit text-brand-charcoal uppercase flex items-center gap-4"><Zap size={24} className="text-brand-blue" /> Vision</h3>
                    <p className="text-xl text-brand-charcoal/50 font-medium leading-relaxed">
                       To become a global leader in AI-driven infrastructure and secure digital transformation.
                    </p>
                 </div>
              </div>
              <div className="relative aspect-video bg-brand-charcoal rounded-[3rem] overflow-hidden flex items-center justify-center p-12 text-center text-white">
                 <div className="absolute inset-0 bg-brand-blue/10 animate-pulse" />
                 <div className="relative z-10 space-y-4">
                    <Globe size={80} className="text-brand-blue/50 mx-auto mb-6" />
                    <p className="text-5xl font-black font-outfit uppercase tracking-tighter leading-none">Global <br /> Node.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= LEADERSHIP ============= */}
      <section className="py-32 bg-white">
        <div className="container-custom">
           <div className="space-y-4 mb-20 text-center mx-auto max-w-3xl">
              <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent">Executive Unit</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-outfit tracking-tight text-brand-charcoal">Leadership Team.</h2>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                { name: "CEO", role: "Chief Executive Node", bio: "Leading continental expansion and strategic synchrony." },
                { name: "CTO", role: "Chief Technology Architect", bio: "Engineering the core logic and digital platforms." },
                { name: "Head of AI", role: "AI Engineering Lead", bio: "Orchestrating autonomous logic and Reasoning builds." },
                { name: "Head of SEC", role: "Security Infrastructure", bio: "Ensuring zero-trust military-grade protection." }
              ].map((member, i) => (
                <div key={i} className="space-y-6 text-center group">
                   <div className="aspect-square bg-brand-gray-light rounded-[2.5rem] flex items-center justify-center text-brand-charcoal/20 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 overflow-hidden relative">
                      <User size={60} className="opacity-10 group-hover:opacity-100 transition-all scale-110" />
                   </div>
                   <div className="space-y-1">
                      <h4 className="text-lg font-black font-outfit text-brand-charcoal uppercase leading-tight">{member.name}</h4>
                      <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest font-mono">{member.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= CERTIFICATIONS ============= */}
      <section className="py-32 bg-brand-gray-bold/50 border-y border-black/5">
        <div className="container-custom items-center">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue text-white border-transparent">Validation</Badge>
                 <h2 className="text-4xl md:text-5xl font-black font-outfit text-brand-charcoal">Global Standards.</h2>
                 <p className="text-lg text-brand-charcoal/50 font-medium leading-relaxed max-w-lg">
                    Our builds are validated by international regulatory bodies and sovereign cloud infrastructure standardizers.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { title: "ISO 27001", org: "International Security" },
                   { title: "SOC 2 Type II", org: "Access Registry" },
                   { title: "AWS Partnership", org: "Cloud Node" },
                   { title: "GCP Certified", org: "Global Node" }
                 ].map((c, i) => (
                    <div key={i} className="p-6 bg-white border border-black/5 rounded-[2rem] space-y-4 group hover:shadow-xl transition-all duration-700">
                       <div className="w-10 h-10 rounded-xl bg-brand-gray-light flex items-center justify-center text-brand-blue">
                          <CheckCircle2 size={20} />
                       </div>
                       <div>
                          <h4 className="text-base font-black text-brand-charcoal uppercase mb-0.5">{c.title}</h4>
                          <p className="text-[9px] font-black uppercase tracking-widest text-brand-charcoal/20 font-mono">{c.org}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ============= CONTACT CTA ============= */}
       <section className="py-32 bg-white">
        <div className="container-custom text-center space-y-8">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit tracking-tight text-brand-charcoal">
             Engage <br /> <span className="text-brand-blue">The Standard.</span>
           </h2>
           <Link to="/contact">
             <Button size="lg" className="h-14 px-12 bg-brand-charcoal text-white hover:bg-brand-blue rounded-full transition-all border-0 shadow-lg">
               Initialize Sync <ArrowRight className="ml-3" />
             </Button>
           </Link>
        </div>
      </section>

    </div>
  );
};
