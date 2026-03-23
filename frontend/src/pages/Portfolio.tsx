import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Activity,
  Zap,
} from 'lucide-react';
import { Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';
import heroImg from '../assets/c2.jpg';

export const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1A2332] font-jakarta pt-24">
      
      {/* ============= INSTITUTIONAL HERO (Mission Proof) ============= */}
      <section className="relative min-h-[90vh] flex items-center pt-12 overflow-hidden px-6 bg-white">
        {/* Subtle Tech Environment Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
           <div className="tech-grid absolute inset-0" />
           <div className="scanline" />
        </div>

        <div className="container-custom relative z-10 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="space-y-16">
                 <div className="space-y-6">
                    <motion.div
                       initial={{ opacity: 0, x: -30 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.8 }}
                    >
                       <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.5em] font-bold uppercase text-[10px] px-8 py-2.5 rounded-full backdrop-blur-sm">
                          MISSION_SUCCESS_REGISTRY
                       </Badge>
                    </motion.div>

                    <div className="space-y-8">
                       <motion.h1 
                          initial={{ opacity: 0, y: 60 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          className="text-7xl md:text-8xl lg:text-[10rem] font-black font-jakarta text-[#1A2332] tracking-tightest leading-[0.8] uppercase"
                       >
                          Mission <br />
                          <span className="text-brand-blue italic drop-shadow-sm">Proof.</span>
                       </motion.h1>
                       
                       <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 1.5 }}
                          className="text-xl md:text-2xl text-gray-500 font-bold max-w-2xl leading-tight italic opacity-80"
                       >
                          A comprehensive log of institutional successes across national clusters and private enterprise nodes.
                       </motion.p>
                    </div>
                 </div>

                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex flex-wrap gap-6"
                 >
                    <Link to="/contact">
                       <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="h-20 px-12 bg-[#1A2332] text-white rounded-full text-lg font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-2xl hover:bg-brand-blue"
                       >
                          Explore Registry <ArrowRight size={22} />
                       </motion.button>
                    </Link>
                    <button className="h-20 px-12 bg-white text-[#1A2332] border border-gray-100 rounded-full text-lg font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 hover:bg-gray-50">
                       Request Case Study
                    </button>
                 </motion.div>
              </div>

              <motion.div 
                 initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }} 
                 animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }} 
                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
                 className="relative hidden lg:block"
                 style={{ perspective: "2000px" }}
              >
                 <div className="relative w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 group">
                    <img src={heroImg} alt="Hero" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/40 to-transparent pointer-events-none" />
                    
                    {/* Perspective Floating Label */}
                    <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                       <div className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">MISSION_STATUS</div>
                       <div className="text-2xl font-black text-white uppercase tracking-tighter">100%_Sync_Complete</div>
                    </div>
                 </div>

                 {/* Tech Accents */}
                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue/5 blur-3xl rounded-full -z-10" />
                 <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full -z-10" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= MISSION SUCCESS REGISTRY (Small Box Grid) ============= */}
      <section className="py-40 relative overflow-hidden bg-[#000000]">
        {/* Tech Background Infusion */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <div className="tech-grid-blue absolute inset-0 opacity-10" />
           <div className="scanline" />
        </div>

        <div className="container-custom relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  id: "LOG_01",
                  name: "National Registry",
                  client: "Sovereign Govt.",
                  scope: "National-scale digital identity and asset registry for 40M+ nodes.",
                  problem: "Fragmented national data systems.",
                  solution: "Zero-trust AI core for national identity.",
                  artifacts: ["99.9% Uptime", "Zero Breaches", "300ms Latency"],
                  status: "MISSION_COMPLETE",
                  sync: "100%",
                  icon: <span className="text-xl">🏛️</span>
                },
                { 
                  id: "LOG_02",
                  name: "Banking Cloud",
                  client: "Global Bank Corp",
                  scope: "Real-time ledger synchronization and fraud-AI integration.",
                  problem: "Legacy core banking bottlenecks.",
                  solution: "Encrypted cloud mesh with auto-sync.",
                  artifacts: ["High Rel.", "Sync Valid", "AES-256 Auth"],
                  status: "OPERATIONAL_SYNC",
                  sync: "99.8%",
                  icon: <span className="text-xl">$</span>
                },
                { 
                  id: "LOG_03",
                  name: "Digital Identity",
                  client: "Continental Auth.",
                  scope: "Autonomous biometric verification and node-auth registry.",
                  problem: "Manual processing fraud risk.",
                  solution: "Biometric identity reasoning engine.",
                  artifacts: ["10x Speed", "Auto Auth", "ZKP Valid"],
                  status: "AUTONOMOUS_BUILD",
                  sync: "100%",
                  icon: <span className="text-xl">👤</span>
                },
                { 
                  id: "LOG_04",
                  name: "Logistics Mesh",
                  client: "Trans-Global LTD",
                  scope: "Global supply chain tracking and autonomous route optimization.",
                  problem: "Blind spots in supply chain logic.",
                  solution: "Real-time tracking nodes with AI opt.",
                  artifacts: ["Global Sync", "100% Tracking", "Route Optima"],
                  status: "MISSION_COMPLETE",
                  sync: "99.9%",
                  icon: <span className="text-xl">🚢</span>
                },
                { 
                  id: "LOG_05",
                  name: "Healthcare Grid",
                  client: "National Health",
                  scope: "Cross-cluster medical data mesh and AI diagnostic logic.",
                  problem: "Data isolation in medical clusters.",
                  solution: "High-security diagnostic reasoning mesh.",
                  artifacts: ["Privacy Core", "99% Accuracy", "HIPAA Ready"],
                  status: "OPERATIONAL_SYNC",
                  sync: "100%",
                  icon: <span className="text-xl">🏥</span>
                },
                { 
                  id: "LOG_06",
                  name: "Energy Hub",
                  client: "Sovereign Grid",
                  scope: "Autonomous energy distribution and live load balancing mesh.",
                  problem: "Grid distribution inefficiencies.",
                  solution: "Autonomous energy balancing logic nodes.",
                  artifacts: ["30% Save", "Live Balancing", "Smart Sync"],
                  status: "AUTONOMOUS_BUILD",
                  sync: "99.7%",
                  icon: <span className="text-xl">⚡</span>
                }
              ].map((node, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.8 }}
                   whileHover={{ y: -8 }}
                   className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-brand-blue/30 rounded-[2.5rem] backdrop-blur-xl transition-all duration-700 flex flex-col justify-between overflow-hidden"
                >
                   {/* Background Glow */}
                   <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="space-y-8 relative z-10">
                      <div className="flex justify-between items-start">
                         <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-glow-blue font-black font-jakarta">
                            {node.icon}
                         </div>
                         <div className="text-right">
                            <div className="flex items-center gap-2 justify-end">
                               <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                               <span className="text-[10px] font-black text-brand-blue font-mono uppercase tracking-widest">{node.id}</span>
                            </div>
                            <div className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] mt-1">{node.status}</div>
                         </div>
                      </div>

                      <div className="space-y-6">
                         <div className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{node.client}</span>
                            <div className="flex items-center gap-2">
                               <span className="text-[9px] font-black text-brand-blue uppercase tracking-widest">SYNC</span>
                               <span className="text-[11px] font-black text-white font-mono">{node.sync}</span>
                            </div>
                         </div>
                         
                         <h3 className="text-2xl font-black font-jakarta text-white uppercase tracking-tighter leading-none">{node.name}</h3>
                         
                         <div className="space-y-4">
                            <div className="space-y-2">
                               <p className="text-[10px] font-bold text-brand-blue/60 uppercase tracking-widest">Project_Scope</p>
                               <p className="text-sm text-white/80 font-bold leading-tight line-clamp-2 italic">{node.scope}</p>
                            </div>
                            <div className="space-y-2">
                               <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Problem_Log</p>
                               <p className="text-sm text-gray-500 font-bold leading-relaxed line-clamp-2 italic opacity-80">"{node.problem}"</p>
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 py-6 border-y border-white/5">
                         {node.artifacts.map((art, i) => (
                            <div key={i} className="flex items-center gap-2 text-[9px] font-black text-white/30 uppercase tracking-[0.15em] group-hover:text-white/60 transition-colors">
                               <div className="w-1 h-1 rounded-full bg-brand-blue/40" /> {art}
                            </div>
                         ))}
                      </div>
                   </div>

                   <div className="pt-8 flex justify-between items-center relative z-10">
                      <div className="flex -space-x-2">
                         {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1A2332] bg-white/5 flex items-center justify-center text-white/20 text-[10px]">
                               <Activity size={12} />
                            </div>
                         ))}
                      </div>
                      <Link to="/contact">
                         <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 text-brand-blue text-[11px] font-black uppercase tracking-[0.2em] group/btn"
                         >
                            Initialize Sync <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                         </motion.div>
                      </Link>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= MISSION TERMINAL STATUS (Registry Hub) ============= */}
      <section className="py-40 relative overflow-hidden bg-white">
        {/* Subtle Tech Mesh */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
           <div className="tech-grid absolute inset-0" />
           <div className="scanline" />
        </div>

        <div className="container-custom relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-16">
                 <div className="space-y-6">
                    <motion.div
                       initial={{ opacity: 0, x: -25 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                    >
                       <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.4em] font-bold uppercase text-[9px] px-6 py-2 rounded-full">REGISTRY_TERMINAL_SYNC</Badge>
                    </motion.div>
                    
                    <h2 className="text-6xl md:text-7xl font-black font-jakarta text-[#1A2332] tracking-tightest leading-[0.85] uppercase">
                       Mission <br /><span className="text-brand-blue italic">Complete.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-bold leading-tight max-w-xl italic opacity-80">
                       Every mission logged is a testament to the absolute synchrony we bring to global digital infrastructures.
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-gray-100">
                    {[
                      { label: "Sovereign Build 1.0", status: "VERIFIED", delay: 0 },
                      { label: "Secure Node V4", status: "ACTIVE", delay: 0.1 },
                      { label: "AI Core Integrated", status: "STABLE", delay: 0.2 },
                      { label: "Global Deploy Active", status: "SYNCED", delay: 0.3 }
                    ].map((stat, i) => (
                       <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stat.delay }}
                          className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between group cursor-default hover:border-brand-blue/30 transition-all"
                       >
                          <div className="flex items-center gap-4">
                             <Activity size={18} className="text-brand-blue group-hover:animate-pulse" />
                             <span className="text-sm font-black text-[#1A2332] uppercase tracking-widest">{stat.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                             <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.status}</span>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>

              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2 }}
                 className="relative aspect-square flex items-center justify-center max-w-[500px] mx-auto lg:mx-0"
              >
                 {/* High-Tech Terminal Visual */}
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-gray-100 rounded-full" />
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-[15%] border-t-2 border-brand-blue/20 rounded-full" />
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-[30%] border border-dashed border-gray-100 rounded-full" />
                 
                 {/* Rotating Scanning Sweep */}
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-brand-blue/[0.04] to-transparent z-0 origin-center"
                 />

                 {/* Focus Glow Nodes */}
                 {[0, 120, 240].map((deg, i) => (
                    <motion.div
                       key={i}
                       animate={{ opacity: [0.2, 1, 0.2] }}
                       transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
                       className="absolute w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_15px_brand-blue]"
                       style={{ transform: `rotate(${deg}deg) translateY(-220px)` }}
                    />
                 ))}
                 
                 {/* Central Probability Core */}
                 <div className="relative z-10 text-center space-y-4">
                    <motion.div 
                       animate={{ scale: [1, 1.05, 1] }} 
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       className="relative"
                    >
                       <span className="text-[10rem] md:text-[12rem] font-black text-[#1A2332] leading-none tracking-tightest font-jakarta drop-shadow-sm group-hover:text-brand-blue transition-colors duration-700">
                          99%
                       </span>
                    </motion.div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="h-[2px] w-12 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(27,79,138,0.5)]" />
                       <Badge variant="blue" className="bg-transparent border-transparent text-gray-300 text-[9px] font-black uppercase tracking-[0.4em] font-mono">Mission_Success_Probability</Badge>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= CTA (Mission Registry Engagement) ============= */}
      <section className="py-48 relative overflow-hidden bg-[#000000]">
        {/* Immersive Tech Background (Loud) */}
        <div className="absolute inset-0 z-0">
           <div className="tech-grid-blue absolute inset-0 opacity-20" />
           <motion.div 
              animate={{ y: [0, 400, 0], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/30 shadow-[0_0_15px_brand-blue]"
           />
           {/* Pulsing Central Nebula */}
           <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.35, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-blue/40 blur-[180px] rounded-full"
           />
        </div>

        <div className="container-custom relative z-10 text-center space-y-20">
           <div className="flex flex-col items-center gap-6">
              <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-white/10 tracking-[0.5em] font-bold uppercase text-[10px] px-8 py-2.5 rounded-full backdrop-blur-md">PROTOCOL_INITIALIZE</Badge>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                 <span className="text-[10px] font-bold text-white font-mono uppercase tracking-widest">MISSION_READY_SYNC</span>
              </div>
           </div>

           <motion.h2 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[8rem] lg:text-[11rem] font-black font-jakarta text-white tracking-tightest leading-[0.8] uppercase"
           >
             Engage <br /> <span className="text-brand-blue italic drop-shadow-blue">The Registry.</span>
           </motion.h2>

           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex justify-center pt-10"
           >
              <Link to="/contact">
                <motion.button
                   whileHover={{ 
                     scale: 1.05,
                     boxShadow: "0 0 60px rgba(59, 130, 246, 0.5)"
                   }}
                   whileTap={{ scale: 0.98 }}
                   className="group relative h-24 px-16 bg-white text-black rounded-full text-2xl font-black uppercase tracking-[0.2em] transition-all overflow-hidden flex items-center justify-center gap-4 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25)]"
                >
                   Register New Mission 
                   <Zap size={28} className="fill-black group-hover:animate-pulse" />
                   {/* Hover Glow Effect */}
                   <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                </motion.button>
              </Link>
           </motion.div>
        </div>
      </section>


    </div>
  );
};
