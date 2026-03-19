import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp,
  Globe2,
  Activity,
  Zap,
  Shield,
  Bot,
  Database,
  Cpu,
  Lock
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';

const MissionSuccessNode = ({ id, name, client, problem, solution, results, status }: { id: string, name: string, client: string, problem: string, solution: string, results: string[], status: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-brand-surface border border-black/5 rounded-[4.5rem] overflow-hidden hover:shadow-floating transition-all duration-700 relative"
  >
    <div className="absolute top-12 right-12 flex items-center gap-2 z-20">
       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
       <span className="text-[10px] font-black text-brand-blue tracking-widest font-mono uppercase">{status}</span>
    </div>

    <div className="flex flex-col lg:grid lg:grid-cols-12">
       {/* Metadata Node */}
       <div className="lg:col-span-4 bg-brand-gray-light p-12 lg:p-16 flex flex-col justify-between border-r border-black/5">
          <div className="space-y-6">
             <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent uppercase font-mono text-[10px] font-black tracking-[0.5em]">{id}</Badge>
             <h3 className="text-4xl md:text-5xl font-black font-outfit text-brand-charcoal uppercase leading-[0.9] tracking-tighter">{name}</h3>
          </div>
          <div className="pt-12">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 font-mono mb-2">Project_Entity</p>
             <p className="text-xl font-bold text-brand-charcoal/60 leading-tight italic">"{client}"</p>
          </div>
       </div>

       {/* Logic Node */}
       <div className="lg:col-span-8 p-12 lg:p-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-4">
                <h4 className="text-brand-blue font-black uppercase text-[10px] tracking-[0.5em] font-mono">Mission_Problem</h4>
                <p className="text-xl font-bold text-brand-charcoal/40 leading-relaxed">{problem}</p>
             </div>
             <div className="space-y-4">
                <h4 className="text-brand-blue font-black uppercase text-[10px] tracking-[0.5em] font-mono">Mission_Solution</h4>
                <p className="text-xl font-bold text-brand-charcoal/40 leading-relaxed">{solution}</p>
             </div>
          </div>
          
          <div className="pt-10 border-t border-black/10">
             <h4 className="text-brand-blue font-black uppercase text-[10px] tracking-[0.5em] font-mono mb-8">Performance_Artifacts</h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.map((res, i) => (
                   <div key={i} className="flex items-center gap-4 text-base font-black text-brand-charcoal uppercase tracking-widest font-outfit">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                         <TrendingUp size={18} />
                      </div>
                      {res}
                   </div>
                ))}
             </div>
          </div>

          <div className="pt-8 flex justify-end">
             <Link to="/contact">
                <Button size="xl" className="h-16 px-10 rounded-[1.5rem] bg-brand-charcoal text-white hover:bg-brand-blue transition-all border-0 shadow-premium text-sm font-black uppercase tracking-widest group">
                   Initialize Node Sync <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
             </Link>
          </div>
       </div>
    </div>
  </motion.div>
);

export const Portfolio = () => {
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
                   <Globe2 size={14} className="mr-3 animate-pulse" /> MISSION_SUCCESS_REGISTRY
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tightest uppercase"
                >
                  Mission <br />
                  <span className="text-brand-blue italic">Proof.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-3xl text-brand-charcoal/40 font-bold max-w-3xl leading-tight tracking-tight"
                >
                   A comprehensive log of institutional successes across national clusters and private enterprise nodes.
                </motion.p>
              </div>
           </div>
        </div>
      </section>

      {/* ============= MISSION LOGS MATRIX ============= */}
      <section className="py-24 bg-brand-gray-bold/20 border-y border-black/5">
        <div className="container-custom space-y-12">
           <MissionSuccessNode 
             id="REGISTRY_LOG_01"
             status="MISSION_COMPLETE"
             name="National Registry"
             client="Strategic Government Agency"
             problem="Fragmented national data systems and high vulnerability across intercontinental nodes."
             solution="Built a scalable, zero-trust AI core for national data synchronization and identity registry."
             results={["99.9% Uptime", "300ms Latency", "Zero Breaches"]}
           />
           <MissionSuccessNode 
             id="REGISTRY_LOG_02"
             status="OPERATIONAL_SYNC"
             name="Banking Cloud"
             client="Commercial Bank Corp"
             problem="Legacy core banking architecture and high-frequency transaction bottlenecks."
             solution="Full migration to a high-availability encrypted cloud mesh with real-time replication logic."
             results={["High Reliability", "Instant Sync", "AES-256 Valid"]}
           />
           <MissionSuccessNode 
             id="REGISTRY_LOG_03"
             status="AUTONOMOUS_BUILD"
             name="Digital Identity"
             client="Continental Authority"
             problem="Manual processing lag and extreme high-risk for fraud throughout decentralized nodes."
             solution="Secure biometrics identity platform featuring auto-verification reasoning engines."
             results={["10x Speed", "Scalable Load", "Reduced Risk"]}
           />
        </div>
      </section>

      {/* ============= MISSION TERMINAL STATUS ============= */}
      <section className="py-40 bg-brand-surface relative overflow-hidden">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">REGISTRY_TERMINAL</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tightest leading-tight">Mission <br /> <span className="text-brand-blue italic">Complete.</span></h2>
                 <p className="text-2xl text-brand-charcoal/40 font-bold leading-tight max-w-xl tracking-tight">
                    Every mission logged is a testament to the absolute synchrony we bring to global digital infrastructures.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {['Sovereign Build 1.0', 'Secure Node V4', 'AI Core Integrated', 'Global Deploy Active'].map((loc, i) => (
                       <div key={i} className="flex items-center gap-5 text-[11px] font-black uppercase tracking-[0.2em] text-brand-charcoal/60 p-6 bg-brand-gray-light rounded-2xl border border-black/5">
                          <Activity size={18} className="text-brand-blue" />
                          {loc}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="relative aspect-square bg-brand-charcoal rounded-[5rem] flex items-center justify-center overflow-hidden shadow-premium group">
                 <div className="absolute inset-0 bg-brand-blue/10 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Cpu size={280} className="text-brand-blue/5 animate-spin-slow rotate-45" />
                 <div className="relative z-10 text-center space-y-6">
                    <p className="text-[10rem] font-black text-white leading-none tracking-tightest">99%</p>
                    <p className="text-[12px] font-black uppercase tracking-[0.6em] text-white/40 font-mono">Mission_Success_Probability</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= CONTACT CALL TO ACTION ============= */}
      <section className="py-40 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-blue/20 blur-[180px] rounded-full" />
        </div>
        <div className="container-custom text-center relative z-10 space-y-16">
           <Badge variant="blue" className="bg-brand-blue/20 text-brand-blue border-white/10 tracking-[0.5em] font-black uppercase text-[10px] font-mono px-6 py-2">PROTOCOL_INITIALIZE</Badge>
           <h2 className="text-6xl md:text-9xl font-black font-outfit text-white uppercase tracking-tightest leading-[0.8] mb-12">
             Engage <br /> <span className="text-brand-blue italic">The Registry.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-brand-surface text-white hover:text-brand-charcoal rounded-[3rem] border-0 transition-all shadow-glow text-2xl font-black uppercase tracking-widest group">
                Register New Mission <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
