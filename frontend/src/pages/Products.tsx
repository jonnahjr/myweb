import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  MessageSquare,
  Bot,
  Activity,
  Landmark,
  Stethoscope,
  Globe2,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Core';
import heroImg from '../assets/c1.jpg';

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
     <div className="min-h-screen bg-white text-[#1A2332] font-outfit pt-24">
      
      {/* ============= INSTITUTIONAL HERO (Product Inventory) ============= */}
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
                          PRODUCT_INVENTORY_HQ
                       </Badge>
                    </motion.div>

                    <div className="space-y-8">
                       <motion.h1 
                          initial={{ opacity: 0, y: 60 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          className="text-7xl md:text-8xl lg:text-[10rem] font-black font-jakarta text-[#1A2332] tracking-tightest leading-[0.8] uppercase"
                       >
                          Sovereign <br />
                          <span className="text-brand-blue italic drop-shadow-sm">Builds.</span>
                       </motion.h1>
                       
                       <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 1.5 }}
                          className="text-xl md:text-2xl text-gray-500 font-bold max-w-2xl leading-tight italic opacity-80"
                       >
                          Proprietary, high-scale digital products designed for immediate industry deployment and institutional node synchronization.
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
                          Initialize Deploy <ArrowRight size={22} />
                       </motion.button>
                    </Link>
                    <button className="h-20 px-12 bg-white text-[#1A2332] border border-gray-100 rounded-full text-lg font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 hover:bg-gray-50">
                       Scan Inventory
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
                       <div className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">NODE_STATUS</div>
                       <div className="text-2xl font-black text-white uppercase tracking-tighter">Ready_for_Sync</div>
                    </div>
                 </div>

                 {/* Tech Accents */}
                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue/5 blur-3xl rounded-full -z-10" />
                 <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full -z-10" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= PRODUCT REGISTRY MATRIX (Small Box Grid) ============= */}
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
                  name: "NEXY_FinCore", 
                  version: "V3.2_TRANSACT", 
                  icon: <span className="text-xl font-black">$</span>, 
                  desc: "Next-gen banking transaction hub with real-time settlement logic.",
                  features: ["Ledger Sync", "Fraud AI", "Swift Node", "Multi-Sig"],
                  tags: ["FIN", "BANK"]
                },
                { 
                  name: "NEXY_GovNode", 
                  version: "V5.0_SOVEREIGN", 
                  icon: <Landmark size={24} />, 
                  desc: "National digital identity and sovereign asset registry for gov nodes.",
                  features: ["ID Registry", "Policy Sync", "Secure LOG", "State Auth"],
                  tags: ["GOV", "ID"]
                },
                { 
                  name: "NEXY_MedicRegistry", 
                  version: "V2.1_CORE", 
                  icon: <Stethoscope size={24} />, 
                  desc: "High-security patient data mesh and diagnostic reasoning clusters.",
                  features: ["Patient Sync", "Diag Logic", "HCP Auth", "Privacy Grid"],
                  tags: ["HLTH", "DR"]
                },
                { 
                  name: "NEXY_AI Chat", 
                  version: "V2.4_STABLE", 
                  icon: <MessageSquare size={24} />, 
                  desc: "Enterprise AI assistant for business logic and tactical automation.",
                  features: ["LLM Sync", "Private Data", "Logic Auth", "Multi-Node"],
                  tags: ["AI", "LLM"]
                },
                { 
                  name: "NEXY_SecureCore", 
                  version: "V4.0_SHIELD", 
                  icon: <ShieldCheck size={24} />, 
                  desc: "Security monitoring hub for critical assets and sovereign nodes.",
                  features: ["Threat Det.", "Risk Logic", "Auth Unit", "DDoS Shield"],
                  tags: ["SEC", "CERT"]
                },
                { 
                  name: "NEXY_CorpPortal", 
                  version: "V2.8_ENTERPRISE", 
                  icon: <Globe2 size={24} />, 
                  desc: "High-scale corporate resource mesh and decision command nodes.",
                  features: ["Portal Sync", "ERP Node", "Task Logic", "Auth Grid"],
                  tags: ["CORP", "WEB"]
                },
                { 
                  name: "NEXY_DataGrid", 
                  version: "V1.8_GRID", 
                  icon: <Database size={24} />, 
                  desc: "Massive scale data mesh for global decision logic.",
                  features: ["Live Sync", "BI Nodes", "Pipelines", "Storage"],
                  tags: ["DATA", "GRID"]
                },
                { 
                  name: "NEXY_OpsNode", 
                  version: "V1.2_SYNC", 
                  icon: <Activity size={24} />, 
                  desc: "Operational health registry for distributed infrastructure clusters.",
                  features: ["Health LOG", "Alert Nodes", "Auto Heal", "Cluster Sync"],
                  tags: ["OPS", "INFRA"]
                },
                { 
                  name: "NEXY_LogicMesh", 
                  version: "V0.8_BETA", 
                  icon: <Bot size={24} />, 
                  desc: "Decentralized reasoning mesh for cross-node autonomous tasks.",
                  features: ["Reasoning", "Task Sync", "Mesh Auth", "Logic Flow"],
                  tags: ["MESH", "AI"]
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
                         <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-glow-blue">
                            {node.icon}
                         </div>
                         <div className="text-right">
                            <div className="flex items-center gap-2 justify-end">
                               <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                               <span className="text-[10px] font-black text-brand-blue font-mono uppercase tracking-widest">{node.version}</span>
                            </div>
                            <div className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] mt-1">PRODUCT_NODE_ACTIVE</div>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <div className="flex gap-2">
                            {node.tags.map((tag, i) => (
                               <span key={i} className="text-[9px] font-black text-white/40 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/5">{tag}</span>
                            ))}
                         </div>
                         <h3 className="text-2xl font-black font-jakarta text-white uppercase tracking-tighter leading-none">{node.name}</h3>
                         <p className="text-sm text-gray-500 font-bold leading-relaxed line-clamp-2 italic opacity-80">{node.desc}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 py-6 border-y border-white/5">
                         {node.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-[9px] font-black text-white/30 uppercase tracking-[0.15em] group-hover:text-white/60 transition-colors">
                               <div className="w-1 h-1 rounded-full bg-brand-blue/40" /> {feat}
                            </div>
                         ))}
                      </div>
                   </div>

                   <div className="pt-8 flex justify-between items-center relative z-10">
                      <div className="flex -space-x-2">
                         {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1A2332] bg-white/5 flex items-center justify-center text-white/20 text-[10px]">
                               <Bot size={12} />
                            </div>
                         ))}
                      </div>
                      <Link to="/contact">
                         <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 text-brand-blue text-[11px] font-black uppercase tracking-[0.2em] group/btn"
                         >
                            Initialize Deploy <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                         </motion.div>
                      </Link>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= PERFORMANCE REGISTRY (Reliability Hub) ============= */}
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
                       <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.4em] font-bold uppercase text-[9px] px-6 py-2 rounded-full">PRODUCT_RELIABILITY_SYNC</Badge>
                    </motion.div>
                    
                    <h2 className="text-6xl md:text-7xl font-black font-jakarta text-[#1A2332] tracking-tightest leading-[0.85] uppercase">
                       Reliability <br /><span className="text-brand-blue italic">Metrics.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-bold leading-tight max-w-xl italic opacity-80">
                       Every product build is validated against extreme operational load to ensure absolute uptime for our global registry.
                    </p>
                 </div>

                 <div className="grid grid-cols-2 gap-6 pt-10 border-t border-gray-100">
                    {[
                      { label: "Deployments", val: "1.2k+", delay: 0 },
                      { label: "Sync Nodes", val: "240+", delay: 0.1 },
                      { label: "Capacity", val: "2.4 PB", delay: 0.2 },
                      { label: "Logic Nodes", val: "15k+", delay: 0.3 }
                    ].map((stat, i) => (
                       <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stat.delay }}
                          className="space-y-1 group cursor-default"
                       >
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                             <span className="text-4xl md:text-5xl font-black text-[#1A2332] tracking-tighter group-hover:text-brand-blue transition-colors">{stat.val}</span>
                          </div>
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 font-mono">{stat.label}</p>
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
                 {/* High-Tech Radar Protocol */}
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
                 {[0, 90, 180, 270].map((deg, i) => (
                    <motion.div
                       key={i}
                       animate={{ opacity: [0.2, 0.5, 0.2] }}
                       transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                       className="absolute w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_brand-blue]"
                       style={{ transform: `rotate(${deg}deg) translateY(-210px)` }}
                    />
                 ))}
                 
                 {/* Central Reliability Node */}
                 <div className="relative z-10 text-center space-y-4">
                    <motion.div 
                       animate={{ scale: [1, 1.05, 1] }} 
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       className="relative"
                    >
                       <span className="text-[8rem] md:text-[10rem] font-black text-[#1A2332] leading-none tracking-tightest group-hover:text-brand-blue transition-colors duration-700 font-jakarta drop-shadow-sm">
                          99.9%
                       </span>
                    </motion.div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="h-[2px] w-12 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(27,79,138,0.5)]" />
                       <Badge variant="blue" className="bg-transparent border-transparent text-gray-300 text-[9px] font-black uppercase tracking-[0.4em] font-mono">Uptime_Reliability_Score</Badge>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= CTA (Product Inventory Engagement) ============= */}
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
                 <span className="text-[10px] font-bold text-white font-mono uppercase tracking-widest">CORE_DEPLOY_ACTIVE</span>
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
                   Register Node 
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
