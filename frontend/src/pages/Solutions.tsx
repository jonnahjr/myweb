import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  ShoppingCart, 
  Truck, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight,
  Globe2,
  Activity,
  Zap,
  Shield,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';

const IndustrySolutionMatrix = ({ title, icon, outcomes, desc, status }: { title: string, icon: any, outcomes: string[], desc: string, status: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group p-16 bg-brand-surface border border-black/5 rounded-[4.5rem] shadow-premium hover:shadow-floating transition-all duration-700 space-y-12 relative overflow-hidden"
  >
    <div className="absolute top-12 right-12 flex items-center gap-2">
       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
       <span className="text-[10px] font-black text-brand-blue tracking-widest font-mono uppercase">{status}</span>
    </div>

    <div className="flex flex-col md:flex-row gap-12 items-start">
       <div className="w-24 h-24 rounded-[2.5rem] bg-brand-gray-light border border-black/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
          {icon}
       </div>
       <div className="space-y-6 flex-1">
          <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[9px] tracking-[0.4em] font-mono">SOLUTION_NODE</Badge>
          <h3 className="text-4xl md:text-5xl font-black font-outfit text-brand-charcoal uppercase tracking-tighter leading-none">{title}</h3>
          <p className="text-xl text-brand-charcoal/40 font-bold leading-tight max-w-2xl">{desc}</p>
       </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-black/5">
       {outcomes.map((outcome, i) => (
          <div key={i} className="flex items-center gap-4 text-sm font-black text-brand-charcoal uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity font-outfit">
             <div className="w-2 h-2 rounded-full border border-brand-blue/30" /> {outcome}
          </div>
       ))}
    </div>
    
    <div className="pt-6 flex justify-end">
       <Link to="/contact">
         <Button size="xl" className="h-20 px-12 rounded-[2rem] bg-brand-charcoal text-white hover:bg-brand-blue transition-all border-0 shadow-premium text-lg font-black uppercase tracking-[0.2em] group">
            Establish Outcome Sync <ArrowRight size={22} className="ml-4 group-hover:translate-x-2 transition-transform" />
         </Button>
       </Link>
    </div>
  </motion.div>
);

export const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-brand-charcoal font-outfit pt-24">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
           <div className="max-w-7xl space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] uppercase text-[10px] font-black font-mono px-6 py-2">
                   <Globe2 size={14} className="mr-3 animate-pulse" /> SOLUTION_MATRIX_HQ
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tightest uppercase"
                >
                  Deliver <br />
                  <span className="text-brand-blue italic">Impact.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-3xl text-brand-charcoal/40 font-bold max-w-3xl leading-tight tracking-tight"
                >
                   NEXYOVI solves industrial challenges through outcome-focused engineering for large-scale businesses and national infrastructures.
                </motion.p>
              </div>
           </div>
        </div>
      </section>

      {/* ============= SOLUTIONS REGISTRY ============= */}
      <section className="py-24 bg-brand-gray-bold/20 border-y border-black/5">
        <div className="container-custom space-y-12">
           <IndustrySolutionMatrix 
             title="Banking & Fintech"
             status="SECURE_CORE"
             icon={<Landmark size={40} />}
             desc="Redefining financial trust through secure core banking systems and AI fraud detection nodes."
             outcomes={["Modern Core Banking", "Fraud AI Nodes", "Secure Payments"]}
           />
           <IndustrySolutionMatrix 
             title="Government"
             status="SOVEREIGN_NODE"
             icon={<Building2 size={40} />}
             desc="Architecting national data systems and digital identity for sovereign state security and governance."
             outcomes={["National Registries", "Digital Identity", "Smart Infrastructure"]}
           />
           <IndustrySolutionMatrix 
             title="Logistics"
             status="LIVE_SYNC"
             icon={<Truck size={40} />}
             desc="Optimizing supply chains with real-time tracking systems and autonomous optimization logic builds."
             outcomes={["Tracking Nodes", "Logic Optima", "Live Dashboards"]}
           />
           <IndustrySolutionMatrix 
             title="Healthcare"
             status="CLINICAL_TRUST"
             icon={<Stethoscope size={40} />}
             desc="Transforming patient systems and diagnostic logic with absolute data security and institutional privacy."
             outcomes={["Patient Nodes", "AI Logic Diags", "Secure Registries"]}
           />
        </div>
      </section>

      {/* ============= MISSION OUTCOME ============= */}
      <section className="py-40 bg-brand-surface relative overflow-hidden">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">REGISTRY_OUTCOME</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tightest leading-tight">Absolute <br /> <span className="text-brand-blue italic">Efficacy.</span></h2>
                 <p className="text-2xl text-brand-charcoal/40 font-bold leading-tight max-w-xl">
                    Every solution is engineered for absolute efficacy, ensuring that your enterprise outcomes are realized with technical precision.
                 </p>
                 <div className="flex flex-wrap gap-8">
                    {[
                      { icon: <Zap size={24} />, val: 'MAX_PERFORMANCE' },
                      { icon: <Shield size={24} />, val: 'SOVEREIGN_AUTH' },
                      { icon: <Bot size={24} />, val: 'AI_REASONING' }
                    ].map((v, i) => (
                       <div key={i} className="flex items-center gap-4 text-brand-blue font-black font-mono text-xs tracking-[0.2em] uppercase">
                          {v.icon}
                          {v.val}
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-video bg-brand-charcoal rounded-[5rem] flex items-center justify-center overflow-hidden shadow-premium group">
                 <div className="absolute inset-0 bg-brand-blue/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Globe2 size={200} className="text-brand-blue/5 animate-spin-slow" />
                 <div className="relative z-10 text-center space-y-4">
                    <p className="text-8xl font-black text-white leading-none tracking-tightest">100%</p>
                    <p className="text-[11px] font-black uppercase tracking-[0.6em] text-white/40 font-mono">Mission_Success_Registry</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="py-40 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-blue/20 blur-[180px] rounded-full" />
        </div>
        <div className="container-custom text-center relative z-10 space-y-16">
           <Badge variant="blue" className="bg-brand-blue/20 text-brand-blue border-white/10 tracking-[0.5em] font-black uppercase text-[10px] font-mono px-6 py-2">PROTOCOL_INITIALIZE</Badge>
           <h2 className="text-6xl md:text-9xl font-black font-outfit text-white uppercase tracking-tightest leading-[0.8] mb-12">
             Engage <br /> <span className="text-brand-blue italic">The Outcome.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-brand-surface text-white hover:text-brand-charcoal rounded-[3rem] border-0 transition-all shadow-glow text-2xl font-black uppercase tracking-widest group">
                Register Node <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
