import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  Truck, 
  Stethoscope, 
  ArrowRight,
  Globe2,
  Zap,
  Shield,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';
import heroImg from '../assets/c2.jpg';

const IndustrySolutionMatrix = ({ title, icon, outcomes, desc, status }: { title: string, icon: any, outcomes: string[], desc: string, status: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all hover:shadow-floating transition-all duration-700 space-y-12 relative overflow-hidden"
  >
    <div className="absolute top-8 right-12 flex items-center gap-2">
       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
       <span className="text-sm font-bold text-brand-blue font-medium uppercase">{status}</span>
    </div>

    <div className="flex flex-col md:flex-row gap-8 items-start">
       <div className="w-24 h-24 rounded-[2.5rem] bg-brand-gray-light border border-gray-200 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-[#1A2332] transition-all duration-500 shadow-sm shrink-0">
          {icon}
       </div>
       <div className="space-y-6 flex-1">
          <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-bold text-xs tracking-wider font-medium">SOLUTION_NODE</Badge>
          <h3 className="text-2xl md:text-3xl font-bold font-outfit text-[#1A2332] tracking-tight leading-none">{title}</h3>
          <p className="text-xl text-gray-500 font-bold leading-tight max-w-2xl">{desc}</p>
       </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-gray-200">
       {outcomes.map((outcome, i) => (
          <div key={i} className="flex items-center gap-4 text-sm font-bold text-[#1A2332] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity font-outfit">
             <div className="w-2 h-2 rounded-full border border-brand-blue/30" /> {outcome}
          </div>
       ))}
    </div>
    
    <div className="pt-6 flex justify-end">
       <Link to="/contact">
         <Button size="xl" className="h-20 px-12 rounded-2xl bg-[#F3EFE6] text-[#1A2332] hover:bg-brand-blue transition-all border-gray-100 shadow-md hover:shadow-xl transition-all text-lg font-bold uppercase tracking-[0.2em] group">
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
    <div className="min-h-screen bg-[#F3EFE6] text-[#1A2332] font-outfit pt-24">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 overflow-hidden bg-[#F3EFE6]">
        <div className="container-custom relative z-10 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                 <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider uppercase text-sm font-bold font-medium px-6 py-2">
                   <Globe2 size={14} className="mr-3 animate-pulse" /> SOLUTION_MATRIX_HQ
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl lg:text-6xl lg:text-9xl font-bold leading-tight tracking-tightest uppercase"
                >
                  Deliver <br />
                  <span className="text-brand-blue italic">Impact.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-3xl text-gray-500 font-bold max-w-3xl leading-tight tracking-tight"
                >
                   NEXYOVI solves industrial challenges through outcome-focused engineering for large-scale businesses and national infrastructures.
                 </motion.p>
               </div>
              </div>
              
              <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 1, delay: 0.4 }} 
                  className="relative flex items-center justify-center pt-16 lg:pt-0"
              >
                 <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200">
                    <img src={heroImg} alt="Hero" className="w-full h-full object-cover object-center animate-float" />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= SOLUTIONS REGISTRY ============= */}
      <section className="py-24 border-y border-gray-100 bg-[#000000]">
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
      <section className="py-40 relative overflow-hidden bg-[#F3EFE6]">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider font-bold uppercase text-sm font-medium">REGISTRY_OUTCOME</Badge>
                 <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold font-outfit tracking-tight leading-tight text-[#1A2332]">Absolute <br /> <span className="text-brand-blue italic">Efficacy.</span></h2>
                 <p className="text-2xl text-gray-500 font-bold leading-tight max-w-xl">
                    Every solution is engineered for absolute efficacy, ensuring that your enterprise outcomes are realized with technical precision.
                 </p>
                 <div className="flex flex-wrap gap-8">
                    {[
                      { icon: <Zap size={24} />, val: 'MAX_PERFORMANCE' },
                      { icon: <Shield size={24} />, val: 'SOVEREIGN_AUTH' },
                      { icon: <Bot size={24} />, val: 'AI_REASONING' }
                    ].map((v, i) => (
                       <div key={i} className="flex items-center gap-4 text-brand-blue font-bold font-medium text-xs tracking-[0.2em] uppercase">
                          {v.icon}
                          {v.val}
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-video bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-md hover:shadow-xl transition-all group">
                 <div className="absolute inset-0 bg-brand-blue/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Globe2 size={200} className="text-brand-blue/5 animate-spin-slow" />
                 <div className="relative z-10 text-center space-y-4">
                    <p className="text-8xl font-bold text-[#1A2332] leading-none tracking-tightest">100%</p>
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 font-medium">Mission_Success_Registry</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="py-40 relative overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-blue/20 blur-[180px] rounded-full" />
        </div>
        <div className="container-custom text-center relative z-10 space-y-16">
           <Badge variant="blue" className="bg-brand-blue/20 text-brand-blue border-white/20 tracking-wider font-bold uppercase text-sm font-medium px-6 py-2">PROTOCOL_INITIALIZE</Badge>
           <h2 className="text-6xl md:text-9xl font-bold font-outfit text-white tracking-tight leading-tight mb-12">
             Engage <br /> <span className="text-brand-blue italic">The Outcome.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-white/5/10 text-white hover:text-white rounded-2xl border-0 transition-all shadow-lg shadow-blue-500/20 text-2xl font-bold uppercase tracking-widest group">
                Register Node <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
