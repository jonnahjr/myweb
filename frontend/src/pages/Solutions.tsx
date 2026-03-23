import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  Truck, 
  Stethoscope, 
  ArrowRight,
  Zap,
  Shield,
  Bot,
  Wifi,
  Factory,
  GraduationCap,
  TowerControl
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Core';
import heroImg from '../assets/c2.jpg';

const IndustrySolutionMatrix = ({ title, icon, outcomes, desc, status }: { title: string, icon: any, outcomes: string[], desc: string, status: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] transition-all duration-700 space-y-8 relative overflow-hidden backdrop-blur-sm"
  >
    <div className="flex items-center justify-between">
       <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-glow-blue cursor-default">
          {icon}
       </div>
       <div className="flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse shadow-glow" />
          <span className="text-[9px] font-bold text-brand-blue font-mono uppercase tracking-widest">{status}</span>
       </div>
    </div>

    <div className="space-y-4">
       <div className="space-y-1">
          <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent uppercase font-bold text-[8px] tracking-[0.3em] font-mono px-3 py-1 rounded-full w-fit">SOLUTION_NODE</Badge>
          <h3 className="text-2xl font-bold font-jakarta text-white tracking-tightest leading-none uppercase">{title}</h3>
       </div>
       <p className="text-sm text-gray-500 font-bold leading-tight line-clamp-2 italic opacity-80">{desc}</p>
    </div>
    
    <div className="space-y-2 pt-6 border-t border-white/5">
       {outcomes.map((outcome, i) => (
          <div key={i} className="flex items-center gap-3 text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] group-hover:text-white transition-colors font-mono">
             <div className="w-1 h-1 rounded-none bg-brand-blue/30 group-hover:bg-brand-blue transition-colors shrink-0" /> 
             {outcome}
          </div>
       ))}
    </div>
    
    <div className="pt-2 flex justify-end">
       <Link to="/contact">
         <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-[9px] font-black font-jakarta text-brand-blue/50 hover:text-brand-blue uppercase tracking-[0.3em] group/btn transition-all"
         >
            Sync Node <ArrowRight size={12} className="group-hover/btn:translate-x-1" />
         </motion.button>
       </Link>
    </div>
  </motion.div>
);

export const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1A2332] font-outfit">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden px-6 bg-white">
        {/* Background Elements (AMSH Mesh Infusion) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div className="absolute inset-0 bg-white" />
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
           <div className="tech-grid absolute inset-0 opacity-10" />
        </div>

        <div className="container-custom relative z-10 w-full py-20 pb-40">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-6"
                 >
                    <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-[0.3em] font-bold uppercase text-[10px] px-5 py-2 rounded-full">
                       SOLUTION_MATRIX_HQ
                    </Badge>
                 </motion.div>

                 <div className="space-y-8">
                    <motion.h1 
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="text-6xl md:text-8xl lg:text-9xl font-bold font-jakarta tracking-tightest leading-[0.85] text-[#1A2332] uppercase"
                    >
                      Deliver <br />
                      <span className="text-brand-blue italic drop-shadow-blue">Impact.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-2xl text-gray-500 font-bold max-w-xl leading-snug tracking-tight"
                    >
                        NEXYOVI solves industrial challenges through outcome-focused engineering for large-scale businesses and national infrastructures.
                    </motion.p>
                 </div>

                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                 >
                    <Link to="/contact">
                       <motion.button
                         whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(27,79,138,0.3)" }}
                         whileTap={{ scale: 0.98 }}
                         className="h-16 px-12 bg-[#1B4F8A] text-white rounded-2xl text-sm font-bold uppercase tracking-widest shadow-lg shadow-blue-500/10"
                       >
                         Initialize Outcome Sync
                       </motion.button>
                    </Link>
                 </motion.div>
              </div>
              
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} 
                 animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
                 transition={{ duration: 1.5, delay: 0.2 }} 
                 className="hidden lg:flex items-center justify-center perspective-3d"
              >
                 <div className="relative z-10 w-full max-w-[550px] aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-white/5 transition-all duration-700 hover:shadow-[0_60px_100px_-20px_rgba(27,79,138,0.25)]">
                    <img src={heroImg} alt="Solutions" className="w-full h-full object-cover grayscale-0 group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B4F8A]/20 to-transparent pointer-events-none" />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= SOLUTIONS REGISTRY ============= */}
      <section className="py-40 relative bg-[#000000] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <div className="tech-grid-blue absolute inset-0 opacity-10" />
           <div className="scanline" />
        </div>

        <div className="container-custom relative z-10 space-y-12">
           <div className="mb-24 space-y-4">
              <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.4em] font-bold uppercase text-[10px] px-6 py-2 rounded-full">SYSTEM_SOLUTIONS_MATRIX</Badge>
              <h2 className="text-6xl md:text-7xl font-bold font-jakarta text-white tracking-tightest leading-none uppercase">
                 Industry <br /><span className="text-brand-blue italic drop-shadow-blue">Verticals.</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-12">
              <IndustrySolutionMatrix 
                title="Banking"
                status="SECURE_CORE"
                icon={<Landmark size={24} />}
                desc="Redefining financial trust through secure core banking systems and AI fraud detection nodes."
                outcomes={["Modern Core Banking", "Fraud AI Nodes", "Secure Payments"]}
              />
              <IndustrySolutionMatrix 
                title="Government"
                status="SOVEREIGN_NODE"
                icon={<Building2 size={24} />}
                desc="Architecting national data systems and digital identity for sovereign state security and governance."
                outcomes={["National Registries", "Digital Identity", "Smart City Sync"]}
              />
              <IndustrySolutionMatrix 
                title="Logistics"
                status="LIVE_SYNC"
                icon={<Truck size={24} />}
                desc="Optimizing supply chains with real-time tracking systems and autonomous optimization logic builds."
                outcomes={["Tracking Nodes", "Logic Optima", "Live Dashboards"]}
              />
              <IndustrySolutionMatrix 
                title="Healthcare"
                status="CLINICAL_TRUST"
                icon={<Stethoscope size={24} />}
                desc="Transforming patient systems and diagnostic logic with absolute data security and institutional privacy."
                outcomes={["Patient Nodes", "AI Logic Diags", "Secure Registries"]}
              />
              <IndustrySolutionMatrix 
                title="Telecom"
                status="NETWORK_NODE"
                icon={<Wifi size={24} />}
                desc="Deploying next-gen network infrastructure and secure communication logic for global connectivity."
                outcomes={["5G Infrastructure", "Secure Comms", "Fiber Logic Sync"]}
              />
              <IndustrySolutionMatrix 
                title="Industrial"
                status="OPT_FLOW"
                icon={<Factory size={24} />}
                desc="Engineering autonomous manufacturing lines and real-time optimization nodes for industrial scale."
                outcomes={["Smart Factories", "Predictive Optima", "IoT Control Nodes"]}
              />
              <IndustrySolutionMatrix 
                title="Education"
                status="ACAD_SYNC"
                icon={<GraduationCap size={24} />}
                desc="Modernizing academic institutions with decentralized learning nodes and integrated student registries."
                outcomes={["LMS Integration", "Secure Registries", "Virtual Hubs"]}
              />
              <IndustrySolutionMatrix 
                title="Energy"
                status="GRID_LOGIC"
                icon={<TowerControl size={24} />}
                desc="Architecting smart grid control systems and sovereign energy management logic nodes."
                outcomes={["Smart Grid Sync", "Resource Optima", "Sovereign Power"]}
              />
           </div>
        </div>
      </section>

      {/* ============= MISSION OUTCOME (Registry Efficacy - Compact version) ============= */}
      <section className="py-32 relative overflow-hidden bg-white">
        {/* Cinematic Tech Mesh Overlay (Subtle) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
           <div className="tech-grid absolute inset-0" />
           <motion.div 
              animate={{ y: [0, 400, 0], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/30"
           />
        </div>

        <div className="container-custom relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                 <div className="space-y-4">
                    <motion.div
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                    >
                       <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.4em] font-bold uppercase text-[9px] px-5 py-2 rounded-full">REGISTRY_OUTCOME_SYNC</Badge>
                    </motion.div>
                    
                    <motion.h2 
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 1 }}
                       className="text-6xl lg:text-7xl font-black font-jakarta text-[#1A2332] tracking-tightest leading-[0.85] uppercase"
                    >
                       Absolute <br /><span className="text-brand-blue italic">Efficacy.</span>
                    </motion.h2 >
                    <motion.p 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.3, duration: 1 }}
                       className="text-lg text-gray-500 font-bold leading-tight max-w-lg italic opacity-80"
                    >
                       Every solution is engineered for absolute efficacy, ensuring that your enterprise outcomes are realized with technical precision.
                    </motion.p>
                 </div>

                 <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: <Zap size={18} />, val: 'MAX_PERFORMANCE', desc: 'System-wide optimization nodes' },
                      { icon: <Shield size={18} />, val: 'SOVEREIGN_AUTH', desc: 'Authenticated data security nodes' },
                      { icon: <Bot size={18} />, val: 'AI_REASONING', desc: 'Custom autonomous reasoning clusters' }
                    ].map((v, i) => (
                       <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center gap-6 group p-4 border border-transparent hover:border-brand-blue/10 rounded-2xl transition-all duration-500 cursor-default relative overflow-hidden"
                       >
                          {/* Auto-Pulsing Holographic Glow */}
                          <motion.div 
                             animate={{ 
                               opacity: [0.02, 0.08, 0.02],
                               scale: [1, 1.05, 1] 
                             }}
                             transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                             className="absolute inset-0 bg-brand-blue/5 rounded-2xl z-0"
                          />

                          <div className="relative">
                             <motion.div 
                                animate={{ 
                                  boxShadow: [
                                    "0 0 0px rgba(27,79,138,0)",
                                    "0 0 20px rgba(27,79,138,0.2)",
                                    "0 0 0px rgba(27,79,138,0)"
                                  ]
                                }}
                                transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                                className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-700 shadow-sm relative z-10"
                             >
                                {v.icon}
                             </motion.div>
                             
                             {/* Perpetual Scanline on Icon Source */}
                             <motion.div 
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-[1px] bg-brand-blue/20 z-20 pointer-events-none"
                             />
                          </div>
                          
                          <div className="space-y-0.5 relative z-10">
                             <div className="flex items-center gap-3">
                                <div className="text-[11px] font-black text-[#1A2332] uppercase tracking-[0.25em] font-mono group-hover:text-brand-blue transition-colors">{v.val}</div>
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                             </div>
                             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{v.desc}</div>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>

              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className="relative w-full max-w-[450px] aspect-square flex items-center justify-center mx-auto lg:mx-0"
              >
                 {/* High-Tech Radar Visual (Compact) */}
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-gray-100 rounded-full" />
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-[15%] border border-brand-blue/5 rounded-full" />
                 
                 {/* Expanding Echo Rings */}
                 {[1, 2, 3].map((v) => (
                    <motion.div 
                       key={v}
                       animate={{ 
                         scale: [1, 1.4],
                         opacity: [0.3, 0]
                       }}
                       transition={{ duration: 3, delay: v * 1, repeat: Infinity, ease: "easeOut" }}
                       className="absolute inset-[20%] border border-brand-blue/20 rounded-full z-0"
                    />
                 ))}

                 {/* Rotating Scanning Sweep */}
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-brand-blue/[0.04] to-transparent z-0 origin-center"
                 />
                 
                 {/* Central Data Node */}
                 <div className="relative z-10 text-center space-y-3 group">
                    <motion.div 
                       animate={{ 
                         scale: [1, 1.02, 1],
                         textShadow: [
                           "0 0 0px rgba(27,79,138,0)",
                           "0 0 20px rgba(27,79,138,0.2)",
                           "0 0 0px rgba(27,79,138,0)"
                         ]
                       }}
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       className="relative"
                    >
                       <span className="text-8xl md:text-[10rem] font-black text-[#1A2332] leading-none tracking-tightest group-hover:text-brand-blue transition-colors duration-700 font-jakarta flex items-baseline justify-center">
                          <motion.span
                             initial={{ opacity: 0 }}
                             whileInView={{ opacity: 1 }}
                             viewport={{ once: true }}
                             className="inline-block"
                          >
                             {/* Animated Number Logic (Simplified Counter for pure JSX) */}
                             <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate={{ 
                                  opacity: [1, 0.8, 1],
                                  x: [0, -1, 1, 0] 
                                }}
                                transition={{ 
                                  opacity: { duration: 0.1, repeat: Infinity, repeatDelay: 3 },
                                  x: { duration: 0.1, repeat: Infinity, repeatDelay: 5 }
                                }}
                             >
                                100
                             </motion.span>
                          </motion.span>
                          <span className="text-4xl md:text-6xl text-brand-blue ml-1">%</span>
                       </span>
                    </motion.div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="h-[2px] w-12 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(27,79,138,0.5)]" />
                       <Badge variant="blue" className="bg-transparent border-transparent text-gray-400 text-[9px] font-black uppercase tracking-[0.4em] font-mono">Mission_Success_Registry</Badge>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= CTA (Outcome Engagement Node) ============= */}
      <section className="py-48 relative overflow-hidden bg-[#000000]">
        {/* Immersive Tech Background */}
        <div className="absolute inset-0 z-0">
           <div className="tech-grid-blue absolute inset-0 opacity-20" />
           <div className="scanline" />
           {/* Pulsing Central Nebula */}
           <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/30 blur-[150px] rounded-full"
           />
        </div>

        <div className="container-custom relative z-10 text-center space-y-20">
           <div className="flex flex-col items-center gap-6">
              <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-white/10 tracking-[0.5em] font-bold uppercase text-[10px] px-8 py-2.5 rounded-full backdrop-blur-md">PROTOCOL_INITIALIZE</Badge>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                 <span className="text-[10px] font-bold text-white font-mono uppercase tracking-widest">SYSTEM_SYNC_ACTIVE</span>
              </div>
           </div>

           <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[8rem] lg:text-[12rem] font-black font-jakarta text-white tracking-tightest leading-[0.8] uppercase"
           >
             Engage <br /> <span className="text-brand-blue italic drop-shadow-blue">The Outcome.</span>
           </motion.h2>

           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex justify-center pt-10"
           >
              <Link to="/contact">
                <motion.button
                   whileHover={{ 
                     scale: 1.05,
                     boxShadow: "0 0 50px rgba(59, 130, 246, 0.4)"
                   }}
                   whileTap={{ scale: 0.98 }}
                   className="group relative h-24 px-16 bg-white text-black rounded-full text-2xl font-black uppercase tracking-[0.2em] transition-all overflow-hidden flex items-center justify-center gap-4 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
                >
                   Register Node 
                   <Zap size={28} className="fill-black group-hover:animate-pulse" />
                   {/* Hover Glow Effect */}
                   <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
                </motion.button>
              </Link>
           </motion.div>
        </div>
      </section>


    </div>
  );
};
