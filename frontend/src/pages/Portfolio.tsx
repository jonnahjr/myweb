import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp,
  Globe2,
  Activity,
  Cpu
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';
import heroImg from '../assets/c2.jpg';

const MissionSuccessNode = ({ id, name, client, problem, solution, results, status, delay = 0 }: { id: string, name: string, client: string, problem: string, solution: string, results: string[], status: string, delay?: number }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 overflow-hidden transition-all duration-700 relative animate-float shadow-md hover:shadow-xl transition-all"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="absolute top-8 right-12 flex items-center gap-2 z-20">
       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
       <span className="text-sm font-bold text-brand-blue font-medium uppercase">{status}</span>
    </div>

    <div className="flex flex-col lg:grid lg:grid-cols-12">
       {/* Metadata Node */}
        <div className="lg:col-span-4 bg-[#F3EFE6] p-8 lg:p-8 flex flex-col justify-between border-r border-gray-100 relative overflow-hidden">
           <div className="absolute inset-0 bg-[#F3EFE6]  hidden pointer-events-none" />
           <div className="space-y-6 relative z-10">
              <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent uppercase font-medium text-sm font-bold tracking-wider">{id}</Badge>
              <h3 className="text-2xl md:text-3xl font-bold font-jakarta text-[#1A2332] uppercase leading-[0.9] tracking-tighter">{name}</h3>
           </div>
          <div className="pt-12">
             <p className="text-sm font-bold uppercase tracking-wider text-[#1A2332]/20 font-medium mb-2">Project_Entity</p>
             <p className="text-xl font-bold text-gray-500 leading-tight italic">"{client}"</p>
          </div>
       </div>

       {/* Logic Node */}
       <div className="lg:col-span-8 p-8 lg:p-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-4">
                <h4 className="text-brand-blue font-bold uppercase text-sm tracking-wider font-medium">Mission_Problem</h4>
                <p className="text-xl font-bold text-gray-500 leading-relaxed">{problem}</p>
             </div>
             <div className="space-y-4">
                <h4 className="text-brand-blue font-bold uppercase text-sm tracking-wider font-medium">Mission_Solution</h4>
                <p className="text-xl font-bold text-gray-500 leading-relaxed">{solution}</p>
             </div>
          </div>
          
          <div className="pt-10 border-t border-gray-200">
             <h4 className="text-brand-blue font-bold uppercase text-sm tracking-wider font-medium mb-8">Performance_Artifacts</h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.map((res, i) => (
                   <div key={i} className="flex items-center gap-4 text-sm font-bold text-[#1A2332] uppercase tracking-widest font-outfit">
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
                <Button size="xl" className="h-16 px-10 rounded-xl bg-[#F3EFE6] text-[#1A2332] hover:bg-brand-blue transition-all border-gray-200 shadow-md hover:shadow-xl transition-all text-sm font-bold uppercase tracking-widest group">
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
    <div className="min-h-screen bg-[#F3EFE6] text-[#1A2332] font-jakarta pt-24">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 overflow-hidden bg-[#F3EFE6]">
        <div className="absolute inset-0 bg-[#F3EFE6]  hidden" />
        <div className="container-custom relative z-10 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                 <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider uppercase text-sm font-bold font-medium px-6 py-2">
                   <Globe2 size={14} className="mr-3 animate-pulse" /> MISSION_SUCCESS_REGISTRY
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl lg:text-6xl lg:text-9xl font-bold leading-tight tracking-tightest uppercase"
                >
                  Mission <br />
                  <span className="text-brand-blue italic">Proof.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-3xl text-gray-500 font-bold max-w-3xl leading-tight tracking-tight"
                >
                   A comprehensive log of institutional successes across national clusters and private enterprise nodes.
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

      {/* ============= MISSION LOGS MATRIX ============= */}
      <section className="py-24 border-y border-gray-100 bg-[#000000]">
        <div className="container-custom space-y-12">
           <MissionSuccessNode 
             id="REGISTRY_LOG_01"
             status="MISSION_COMPLETE"
             name="National Registry"
             client="Strategic Government Agency"
             problem="Fragmented national data systems and high vulnerability across intercontinental nodes."
             solution="Built a scalable, zero-trust AI core for national data synchronization and identity registry."
             results={["99.9% Uptime", "300ms Latency", "Zero Breaches"]}
             delay={0.1}
           />
           <MissionSuccessNode 
             id="REGISTRY_LOG_02"
             status="OPERATIONAL_SYNC"
             name="Banking Cloud"
             client="Commercial Bank Corp"
             problem="Legacy core banking architecture and high-frequency transaction bottlenecks."
             solution="Full migration to a high-availability encrypted cloud mesh with real-time replication logic."
             results={["High Reliability", "Instant Sync", "AES-256 Valid"]}
             delay={0.3}
           />
           <MissionSuccessNode 
             id="REGISTRY_LOG_03"
             status="AUTONOMOUS_BUILD"
             name="Digital Identity"
             client="Continental Authority"
             problem="Manual processing lag and extreme high-risk for fraud throughout decentralized nodes."
             solution="Secure biometrics identity platform featuring auto-verification reasoning engines."
             results={["10x Speed", "Scalable Load", "Reduced Risk"]}
             delay={0.5}
           />
        </div>
      </section>

      {/* ============= MISSION TERMINAL STATUS ============= */}
      <section className="py-40 relative overflow-hidden bg-[#F3EFE6]">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider font-bold uppercase text-sm font-medium">REGISTRY_TERMINAL</Badge>
                 <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold font-outfit tracking-tight leading-tight text-[#1A2332]">Mission <br /> <span className="text-brand-blue italic">Complete.</span></h2>
                 <p className="text-2xl text-gray-500 font-bold leading-tight max-w-xl tracking-tight">
                    Every mission logged is a testament to the absolute synchrony we bring to global digital infrastructures.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {['Sovereign Build 1.0', 'Secure Node V4', 'AI Core Integrated', 'Global Deploy Active'].map((loc, i) => (
                       <div key={i} className="flex items-center gap-5 text-sm font-bold uppercase tracking-[0.2em] text-gray-500 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                          <Activity size={18} className="text-brand-blue" />
                          {loc}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="relative aspect-square bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-md hover:shadow-xl transition-all group">
                 <div className="absolute inset-0 bg-brand-blue/10 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Cpu size={280} className="text-brand-blue/5 animate-spin-slow rotate-45" />
                 <div className="relative z-10 text-center space-y-6">
                    <p className="text-[10rem] font-bold text-[#1A2332] leading-none tracking-tightest">99%</p>
                    <p className="text-[12px] font-bold uppercase tracking-wider text-gray-500 font-medium">Mission_Success_Probability</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= CONTACT CALL TO ACTION ============= */}
      <section className="py-40 relative overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-blue/20 blur-[180px] rounded-full" />
        </div>
        <div className="container-custom text-center relative z-10 space-y-16">
           <Badge variant="blue" className="bg-brand-blue/20 text-brand-blue border-white/20 tracking-wider font-bold uppercase text-sm font-medium px-6 py-2">PROTOCOL_INITIALIZE</Badge>
           <h2 className="text-6xl md:text-9xl font-bold font-outfit text-white tracking-tight leading-tight mb-12">
             Engage <br /> <span className="text-brand-blue italic">The Registry.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-white/5/10 text-white hover:text-white rounded-2xl border-0 transition-all shadow-lg shadow-blue-500/20 text-2xl font-bold uppercase tracking-widest group">
                Register New Mission <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
