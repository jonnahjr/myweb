import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Shield, 
  BarChart, 
  HeartPulse, 
  ChevronRight,
  Zap,
  Monitor
} from 'lucide-react';
import { GlassCard, Badge } from '../components/ui/Core';
import futureCityImage from '../assets/future_city.png';

const sectors = [
  {
    title: "Sovereign Finance",
    role: "FIN_CORE_01",
    icon: <BarChart size={40} />,
    desc: "Next-gen banking infrastructure and autonomous clearing houses for regional financial nodes.",
    metrics: ["0.1ms Settlement", "Zero-Failure Matrix", "L10 Security"],
    col: "lg:col-span-12"
  },
  {
    title: "Defense & Security",
    role: "SEC_UNIT_02",
    icon: <Shield size={32} />,
    desc: "Secure intercontinental communications and threat detection meshes for national defense clusters.",
    metrics: ["Encrypted Sink", "L10 Validation"],
    col: "lg:col-span-6"
  },
  {
    title: "Healthcare Tech",
    role: "MED_LOGIC_03",
    icon: <HeartPulse size={32} />,
    desc: "Decentralized patient data orchestration and AI-driven clinical reasoning for large-scale health systems.",
    metrics: ["99.9% Logic Accuracy", "Privacy First"],
    col: "lg:col-span-6"
  }
];

export const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen pt-20 overflow-hidden">
      
      {/* ============= SOLUTIONS HERO ============= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={futureCityImage} 
            className="w-full h-full object-cover brightness-[0.9] opacity-40 blur-[2px] scale-110" 
            alt="Future Solutions City" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/60 to-transparent" />
          <div className="absolute inset-0 mesh-gradient opacity-10" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-6xl space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="blue"><Target size={12} className="mr-2" /> Sector Matrix v2.1</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tightest uppercase font-outfit"
            >
              Sectoral <br />
              <span className="gradient-text">Mastery.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-brand-charcoal/40 font-medium leading-relaxed max-w-4xl"
            >
              Deploying specialized architectural clusters for high-frequency finance, national security, and healthcare logic.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============= SECTOR BENTO MATRIX (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white text-brand-charcoal">
        <div className="container-custom">
          <div className="bento-grid">
            {sectors.map((sector, i) => (
              <motion.div 
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`${sector.col} bento-item group bg-brand-cream-bold/30`}
              >
                  {/* Decorative Logic ID */}
                  <div className="absolute top-10 right-10 text-8xl font-black text-brand-charcoal/[0.02] font-mono tracking-tighter select-none pointer-events-none group-hover:text-brand-blue/5 transition-colors">
                    {sector.role}
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="space-y-10">
                      <div className="w-20 h-20 rounded-3xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-all shadow-sm">
                        {sector.icon}
                      </div>
                      <div className="space-y-4">
                        <h3 className={`${i === 0 ? 'text-6xl' : 'text-4xl'} font-black uppercase tracking-tighter text-brand-charcoal`}>{sector.title}</h3>
                        <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed max-w-2xl">{sector.desc}</p>
                      </div>
                    </div>

                    <div className="pt-12 flex flex-wrap gap-8 items-center border-t border-black/5 mt-12 w-full">
                       <div className="flex flex-wrap gap-3 flex-grow">
                          {sector.metrics.map(m => (
                             <span key={m} className="px-5 py-2.5 rounded-xl bg-black/5 border border-black/5 text-[10px] font-black text-brand-blue uppercase tracking-widest">{m}</span>
                          ))}
                       </div>
                       <button className="btn-secondary group/inner">
                          Deploy Sector Logic <ChevronRight size={18} className="group-hover/inner:translate-x-1 transition-transform" />
                       </button>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= TACTICAL EXCELLENCE (BOLD CREAM SECTION) ============= */}
      <section className="section-padding relative overflow-hidden bg-brand-cream-bold text-brand-charcoal">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <Badge variant="mint">Strategic Protocol</Badge>
                 <h2 className="text-5xl md:text-8xl font-black font-outfit uppercase leading-[0.8] tracking-tightest">
                    Tactical <br /> <span className="gradient-text-mint">Precision.</span>
                 </h2>
                 <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed">
                    Our solutions are pre-validated against L10 security standards and intercontinental latency benchmarks. We don't just solve problems; we engineer certainty.
                 </p>
                 <div className="grid grid-cols-2 gap-10">
                    {[
                      { icon: <Zap />, title: "Rapid Deploy", sub: "Mission ready in < 24h" },
                      { icon: <Monitor />, title: "Live Command", sub: "Full architectural HUD" }
                    ].map((item, i) => (
                      <div key={i} className="space-y-4">
                         <div className="w-12 h-12 bg-brand-mint/10 rounded-xl flex items-center justify-center text-brand-mint">
                            {item.icon}
                         </div>
                         <h4 className="text-xl font-bold">{item.title}</h4>
                         <p className="text-sm text-brand-charcoal/40 font-medium">{item.sub}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <GlassCard intensity="strong" className="aspect-video p-0 overflow-hidden border-black/5 shadow-floating bg-white/40">
                    <img src={futureCityImage} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 contrast-[0.9]" alt="Tactical View" />
                    <div className="absolute inset-0 bg-brand-mint/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <motion.div 
                          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="w-48 h-48 rounded-full border border-brand-mint/30 flex items-center justify-center"
                       >
                          <div className="w-32 h-32 rounded-full border border-brand-mint/50 flex items-center justify-center">
                             <Target size={40} className="text-brand-mint" />
                          </div>
                       </motion.div>
                    </div>
                 </GlassCard>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};
