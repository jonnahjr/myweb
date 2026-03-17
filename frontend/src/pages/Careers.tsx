import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, MapPin, Shield, Globe, Command } from 'lucide-react';
import { GlassCard, Badge } from '../components/ui/Core';

const jobs = [
  {
    title: "Senior AI Logic Architect",
    id: "UNIT_AI_X01",
    type: "FULL_MISSION",
    location: "Global / MIA_HUB",
    desc: "Orchestrating autonomous reasoning engines for high-frequency regional clusters.",
    col: "lg:col-span-8"
  },
  {
    title: "Infra Security Lead",
    id: "UNIT_SEC_ZT",
    type: "DEEP_SINK",
    location: "Addis_Node",
    desc: "Mapping zero-trust protocols for national-scale digital sovereignty.",
    col: "lg:col-span-4"
  },
  {
    title: "Data Flux Engineer",
    id: "UNIT_DATA_SYNC",
    type: "GLOBAL_SYNC",
    location: "London_Point",
    desc: "Optimizing high-bandwidth logic synchronization across intercontinental nodes.",
    col: "lg:col-span-4"
  },
  {
    title: "Strategic Unit Strategy",
    id: "UNIT_STRAT_OPS",
    type: "FULL_MISSION",
    location: "MIA_HUB",
    desc: "Bridging architectural logic with national digital transformation goals.",
    col: "lg:col-span-8"
  }
];

export const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen pt-20 overflow-hidden">
      
      {/* ============= CAREERS HERO ============= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cream/40 to-brand-cream" />

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-6xl space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="mint"><Users size={12} className="mr-2" /> Hitting the Sigils v3.0</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tightest uppercase font-outfit"
            >
              Deployment <br />
              <span className="gradient-text-mint">Registry.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-brand-charcoal/40 font-medium leading-relaxed max-w-4xl"
            >
              Assembling an elite engineering unit for the next epoch of national-scale digital infrastructure. Map your logic to our mission clusters.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============= DEPLOYMENT BENTO GRID (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
          <div className="bento-grid">
            {jobs.map((job, i) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`${job.col} bento-item group bg-brand-cream-bold/30`}
              >
                  {/* Decorative Background ID */}
                  <div className="absolute -bottom-10 -right-10 text-9xl font-black text-brand-charcoal/[0.02] tracking-tighter select-none pointer-events-none group-hover:text-brand-blue/5 transition-colors font-mono">
                    {job.id.split('_').pop()}
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between space-y-12">
                     <div className="space-y-6">
                        <div className="flex justify-between items-center">
                           <Badge variant="blue">{job.type}</Badge>
                           <span className="text-brand-charcoal/20 font-mono text-[9px] uppercase tracking-widest">{job.id}</span>
                        </div>
                        <h3 className="text-4xl font-black uppercase tracking-tighter leading-tight group-hover:text-brand-blue transition-colors text-brand-charcoal">
                           {job.title}
                        </h3>
                        <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed">
                           {job.desc}
                        </p>
                        <div className="flex items-center gap-3 text-brand-mint text-[10px] font-black uppercase tracking-[0.3em]">
                           <MapPin size={14} /> {job.location}
                        </div>
                     </div>
                     
                     <div className="pt-8 border-t border-black/5 flex items-center justify-between group/btn">
                        <button className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 group-hover/btn:text-brand-charcoal transition-colors">
                           Initialize_Ops_Application
                        </button>
                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover/btn:bg-brand-blue group-hover/btn:border-brand-blue transition-all shadow-sm">
                           <ArrowRight size={20} className="text-brand-charcoal group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                     </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CULTURE PROTOCOL (BOLD CREAM SECTION) ============= */}
      <section className="section-padding relative overflow-hidden bg-brand-cream-bold text-brand-charcoal">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Sovereign Ownership", icon: <Shield />, desc: "Complete architectural ownership over mission-critical digital stacks." },
                { title: "Global Synchrony", icon: <Globe />, desc: "Collaborate across intercontinental logic nodes with pure engineering focus." },
                { title: "Pure Logic Flow", icon: <Command />, desc: "No bureaucratic bloat. Just elite engineering and definitive results." }
              ].map((v, i) => (
                <GlassCard key={i} intensity="strong" className="p-10 border-black/5 space-y-6 group bg-white/40 shadow-floating">
                   <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-all shadow-sm">
                      {v.icon}
                   </div>
                   <h4 className="text-2xl font-bold uppercase tracking-tight text-brand-charcoal">{v.title}</h4>
                   <p className="text-lg text-brand-charcoal/40 font-medium leading-relaxed">{v.desc}</p>
                </GlassCard>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};