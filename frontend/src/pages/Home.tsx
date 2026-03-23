import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe2, 
  Bot, 
  Cpu, 
  Shield,
  CheckCircle2,
  Zap,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';

// --- Section Divider ---
const SectionDivider = ({ label = "NODE_TRANSITION", color = "blue" }: { label?: string, color?: "blue" | "purple" }) => {
  const colorClass = color === "blue" ? "bg-brand-blue" : "bg-brand-purple";
  const shadowColor = color === "blue" ? "shadow-none" : "shadow-none";

  return (
    <div className="relative py-8 flex items-center justify-center overflow-hidden">
       <div className="relative z-10 flex items-center gap-4 px-8 py-3 bg-white/40 backdrop-blur-xl border border-gray-100 rounded-full">
          <div className={`w-1.5 h-1.5 rounded-full ${colorClass} animate-pulse ${shadowColor}`} />
          <span className="text-xs font-bold text-gray-400 tracking-wider font-medium">{label}</span>
       </div>
    </div>
  );
};

// Global Assets
import awsLogo from '../assets/aws-25_transparent.png';
import hpLogo from '../assets/hp-22_transparent.png';
import ibmLogo from '../assets/ibm-17_transparent.png';
import oracleLogo from '../assets/oracle-21_transparent.png';

// Local Assets
import ethioLogo from '../assets/ethio_transparent.png';
import globalLogo from '../assets/global_transparent.png';
import cbeLogo from '../assets/cbe_transparent.png';
import zemenLogo from '../assets/zemen-bank-logo_transparent.png';
import insaLogo from '../assets/Insa-09_transparent.png';
import aastuLogo from '../assets/aastu-01_transparent.png';
import aauLogo from '../assets/aau-02_transparent.png';
import hawasaLogo from '../assets/Hawasa-08_transparent.png';
import c2Image from '../assets/c2.jpg';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#1A2332] font-outfit">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden px-6 bg-white">
        {/* Background Elements (AMSH Mesh Infusion) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div className="absolute inset-0 bg-[#F3EFE6]  hidden" />
           <div className="absolute inset-0 hidden" />
           <div className="hidden" />
        </div>

        <div className="container-custom relative z-10 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Text Registry */}
              <div className="space-y-12">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6 }}
                   className="flex items-center gap-4"
                 >
                    <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider uppercase text-sm font-bold font-medium px-5 py-2">
                       NEXYOVI_OPERATIONAL_HQ
                    </Badge>

                 </motion.div>

                 <div className="space-y-8">
                    <motion.h1 
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.85] tracking-tightest uppercase text-[#1A2332]"
                    >
                       Engineering <br />
                       <span className="text-brand-blue italic">Systems.</span>
                    </motion.h1>
                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-xl md:text-3xl text-gray-600 font-bold max-w-3xl leading-tight tracking-tight animate-float"
                 >
                    NEXYOVI is an institutional-grade technology unit engineering the future of AI Logic, Secure Data Sovereignty, and High-Sync infrastructure architectures.
                 </motion.p>
                 </div>

                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-row flex-wrap gap-4 pt-4"
                  >
                    <Link to="/contact">
                      <Button size="md" className="bg-brand-blue hover:bg-brand-blue-dark text-[#1A2332] rounded-xl border-0 transition-all shadow-lg shadow-blue-500/20 group">
                        Start a Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/company">
                      <Button size="md" className="bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue rounded-xl border border-brand-blue/30 hover:border-brand-blue/50 transition-all">
                        Talk to an Architect
                      </Button>
                    </Link>
                 </motion.div>
              </div>

              {/* Visual Hub */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center pt-20 lg:pt-0"
              >
                  <div className="absolute inset-0 bg-brand-blue/20 blur-[150px] rounded-full animate-pulse-slow" />
                  <div className="relative z-10 w-full max-w-[600px] aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-3xl bg-white backdrop-blur-2xl">
                     <img 
                       src={c2Image} 
                       alt="AI Model" 
                       className="w-full h-full object-cover scale-110 blur-2xl opacity-40 absolute inset-0 pointer-events-none"
                     />
                     <img 
                       src={c2Image} 
                       alt="AI Model" 
                       className="w-full h-full object-cover relative z-10 drop-shadow-3xl animate-float"
                     />
                      {/* Overlay Markers */}
                      <div className="absolute top-6 left-10 p-5 bg-gray-50 backdrop-blur-md rounded-3xl border border-gray-200 shadow-sm space-y-2 z-20">
                         <div className="text-xs font-bold text-brand-blue uppercase font-medium">ENCRYPTION_LAYER</div>
                         <div className="w-24 progress-layer rounded-full overflow-hidden">
                            <div className="progress-layer-inner" />
                         </div>
                      </div>
                   </div>
               </motion.div>

           </div>
        </div>
      </section>

      {/* ============= COMMAND NODE STATUS (Metrics) ============= */}
      <section className="py-24 relative overflow-hidden bg-[#000000]">
         {/* Background Dynamic Gradients */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 blur-[120px] rounded-full" />
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-32 h-32 bg-brand-purple/10 blur-[60px] rounded-full animate-pulse-slow" />
         </div>

         <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
               {[
                 { label: 'NETWORK_STANCE', val: '99.99%', sub: 'SLA_UPTIME', color: 'bg-brand-blue' },
                 { label: 'COMPUTE_LOAD', val: '4.8 PFLOPS', sub: 'PEAK_THROUGHPUT', color: 'bg-emerald-500' },
                 { label: 'SOVEREIGN_AI', val: '24 NODES', sub: 'GLOBAL_REGISTRY', color: 'bg-brand-purple' },
                 { label: 'DATA_SECURITY', val: 'AES-256', sub: 'VALIDATED', color: 'bg-cyan-500' }
               ].map((m, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="relative group"
                  >
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <motion.div 
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className={`w-1 h-1 rounded-full ${m.color}`} 
                           />
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] font-mono leading-none">{m.label}</span>
                        </div>
                        
                        <div className="relative">
                           <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                              className="text-3xl md:text-5xl lg:text-7xl font-bold font-jakarta text-white tracking-tightest leading-none"
                           >
                              {m.val}
                           </motion.div>
                           {/* Decorative horizontal line marker */}
                           <motion.div 
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 1.5, delay: i * 0.1 + 0.5 }}
                              className={`h-px w-8 origin-left ${m.color} opacity-40 mt-4`} 
                           />
                        </div>

                        <div className="flex flex-col gap-1 pt-1">
                           <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{m.sub}</span>
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '40%' }}
                              transition={{ duration: 1.2, delay: i * 0.1 + 0.7 }}
                              className="h-[1px] bg-white/5" 
                           />
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      <SectionDivider label="SYNC_TECHNICAL_LAYER" color="blue" />

      {/* ============= INSTITUTIONAL TECHNICAL HUB ============= */}
      <section className="py-40 relative overflow-hidden bg-white">
        {/* Animated Architectural Glow */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div 
              animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/4 -right-1/4 w-[1200px] h-[1200px] bg-brand-blue/30 blur-[200px] rounded-full" 
           />
           <div className="tech-grid absolute inset-0 opacity-10" />
        </div>

        <div className="container-custom relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-end">
              <div className="lg:col-span-8 space-y-10 text-center lg:text-left">
                 <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-brand-blue/10 tracking-[0.5em] font-bold uppercase text-[11px] px-8 py-3 rounded-full">MISSION_CORE_SYNC</Badge>
                 <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold font-jakarta tracking-tightest leading-[0.8] text-[#1A2332] uppercase">
                    Technical <br /> <span className="text-brand-blue italic">Architectures.</span>
                 </h2>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                 <p className="text-2xl text-gray-500 font-bold leading-tight tracking-tight border-l-4 border-brand-blue/40 pl-10 max-w-sm mx-auto lg:mx-0">
                    Engineering absolute structural synchrony for global organizational builds.
                 </p>
              </div>
           </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { 
                   num: "01",
                   title: "AI Systems", 
                   status: "INTELLIGENCE",
                   desc: "Custom LLM development, neural architectural sync, and autonomous reasoning.",
                   icon: <Bot size={40} />
                 },
                 { 
                   num: "02",
                   title: "Security & Testing", 
                   status: "SHIELDED",
                   desc: "Advanced security testing, implementation, and sovereign data controlling.",
                   icon: <Shield size={40} />
                 },
                 { 
                   num: "03",
                   title: "Custom Software", 
                   status: "ENG_NODE",
                   desc: "Bespoke software and app development with full system customization.",
                   icon: <Code size={40} />
                 },
                 { 
                   num: "04",
                   title: "Installation", 
                   status: "INFRA_CORE",
                   desc: "Institutional systems installation, hardware sync, and operational control.",
                   icon: <Cpu size={40} />
                 },
                 { 
                   num: "05",
                   title: "Design & Web", 
                   status: "VISUAL",
                   desc: "Premium website design, UI/UX systems, and architectural visual design.",
                   icon: <Globe2 size={40} />
                 },
                 { 
                   num: "06",
                   title: "Strategy", 
                   status: "ADVISORY",
                   desc: "Strategic consulting, logic transformation, and institutional planning.",
                   icon: <Zap size={40} />
                 }
               ].map((s, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative"
                  >
                     <div className="absolute -top-4 -right-4 text-9xl font-black text-gray-100/50 group-hover:text-brand-blue/10 transition-colors duration-1000 select-none z-0 tracking-tighter">{s.num}</div>
                     <div className="relative z-10 p-12 bg-white rounded-[3rem] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_60px_120px_-20px_rgba(27,79,138,0.2)] transition-all duration-1000 group-hover:-translate-y-4 hover:border-brand-blue/30 overflow-hidden">
                        
                        {/* Top Accent Bar */}
                        <div className="absolute top-0 left-0 w-0 h-2 bg-brand-blue group-hover:w-full transition-all duration-1000 ease-in-out" />
                        
                        <div className="flex items-center justify-between mb-16">
                           <div className="w-24 h-24 rounded-3xl bg-gray-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-1000 perspective-3d shadow-sm group-hover:shadow-[0_20px_40px_-10px_rgba(27,79,138,0.5)]">
                              {s.icon}
                           </div>
                           <div className="flex flex-col items-end">
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono group-hover:text-brand-blue transition-colors">{s.status}</span>
                              <div className="w-8 h-px bg-gray-200 mt-2 group-hover:w-16 group-hover:bg-brand-blue transition-all" />
                           </div>
                        </div>

                        <h3 className="text-4xl font-bold mb-8 font-jakarta tracking-tightest uppercase text-[#1A2332] group-hover:tracking-normal transition-all duration-1000">{s.title}</h3>
                        <p className="text-xl text-gray-400 font-bold leading-relaxed tracking-tight group-hover:text-gray-600 transition-colors duration-500">{s.desc}</p>
                        
                        <div className="mt-12 flex items-center gap-4 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                           <span className="text-xs font-bold uppercase tracking-[0.4em]">Initialize_Sync</span>
                           <ArrowRight size={16} />
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
        </div>
      </section>

      <SectionDivider label="REGISTRY_HANDSHAKE" color="purple" />

      {/* ============= NETWORK ARTIFACTS (Success Stories) ============= */}
      <section className="py-40 relative bg-[#000000] overflow-hidden">
         {/* Tech Background Infusion */}
         <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/4 w-[1000px] h-[500px] bg-brand-blue/10 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="tech-grid-blue absolute inset-0 opacity-10" />
            <div className="scanline" />
         </div>

         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
               
               {/* Fixed Sidebar for Stats & Headings */}
               <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-40">
                  <div className="space-y-10">
                     <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.4em] font-bold uppercase text-[10px] px-6 py-2 rounded-full">REGISTRY_SUCCESS</Badge>
                     <h2 className="text-6xl md:text-7xl font-bold font-jakarta tracking-tightest leading-[0.85] text-white uppercase">
                        Network <br /> <span className="text-brand-blue italic drop-shadow-blue">Artifacts.</span>
                     </h2>
                     <p className="text-xl text-gray-500 font-bold leading-tight tracking-tight border-l-2 border-brand-blue/30 pl-8 max-w-sm">
                        Institutional narratives from our global deployment nodes.
                     </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-12 pt-6">
                     {[
                       { label: 'ACTIVE_MISSIONS', val: '140+', color: 'text-brand-blue' },
                       { label: 'CLIENT_TRUST', val: '99.9%', color: 'text-emerald-500' }
                     ].map(m => (
                        <div key={m.label} className="space-y-3">
                           <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-mono">{m.label}</div>
                           <div className={`text-5xl font-bold font-jakarta ${m.color} tracking-tightest`}>{m.val}</div>
                           <div className="w-8 h-1 bg-white/5" />
                        </div>
                     ))}
                  </div>
               </div>

               {/* Testimonial Nodes Stack */}
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    {
                      user: "Minister of Digital Sec.",
                      agency: "Regional Gov Node",
                      text: "The sovereign AI logic implemented by NEXYOVI has completely transformed our national data infrastructure stability.",
                      verified: true,
                      initials: "M"
                    },
                    {
                      user: "Chief Architect",
                      agency: "Pan-African Bank",
                      text: "Absolute synchrony. Their distributed database clusters handled our intercontinental traffic with zero latency variance.",
                      verified: true,
                      initials: "C"
                    },
                    {
                      user: "Director of Operations",
                      agency: "Global Logistics Hub",
                      text: "The security validation status provided by their pen-testing units allowed us to ship our core platform ahead of schedule.",
                      verified: false,
                      initials: "D"
                    },
                    {
                      user: "Lead Research Scientist",
                      agency: "AI Bio-Research Node",
                      text: "Deploying world-class reasoning engines across our research wings has catalyzed our insight generation by 4.8x.",
                      verified: true,
                      initials: "L"
                    }
                  ].map((t, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                      whileHover={{ y: -10 }}
                      className="p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/5 hover:bg-white/[0.04] hover:border-brand-blue/30 transition-all duration-700 shadow-2xl relative group overflow-hidden"
                    >
                       <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
                       
                       <div className="space-y-8 relative z-10">
                          <div className="flex items-center justify-between">
                             <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center font-bold text-brand-blue text-2xl group-hover:bg-brand-blue group-hover:text-white transition-all duration-700 shadow-glow-blue cursor-default">
                                   {t.initials}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                       <div className="text-xl font-bold text-white tracking-tight leading-none">{t.user}</div>
                                       {t.verified && <CheckCircle2 size={16} className="text-brand-blue animate-pulse" />}
                                    </div>
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] font-mono">{t.agency}</div>
                                 </div>
                              </div>
                           </div>

                           <div className="relative">
                              <span className="absolute -top-6 -left-4 text-6xl font-serif text-white/5 select-none leading-none">“</span>
                              <p className="text-xl text-gray-400 font-bold leading-relaxed italic opacity-80 group-hover:text-white transition-colors duration-500">
                                 {t.text}
                              </p>
                           </div>

                           <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-glow" />
                              <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest font-mono">Verified_Mission_Log</span>
                           </div>
                        </div>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <SectionDivider label="PARTNER_HANDOFF" color="blue" />

      {/* ============= PARTNER REGISTRY (Ultra-Compact Logo Ticker) ============= */}
      <section className="py-12 bg-white relative overflow-hidden">
         {/* Minimal Header Node */}
         <div className="container-custom mb-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
               <div className="space-y-4">
                  <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-brand-blue/10 tracking-[0.4em] font-bold uppercase text-[9px] px-6 py-2 rounded-full">PARTNER_REGISTRY</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold font-jakarta tracking-tightest leading-none text-[#1A2332] uppercase">The <span className="text-brand-blue italic">Registry.</span></h2>
               </div>
               <div className="hidden md:block w-px h-10 bg-gray-100" />
               <p className="text-sm text-gray-400 font-bold max-w-sm leading-tight italic opacity-80">
                  Trusted by global institutions and regional command nodes.
               </p>
            </div>
         </div>
         
         <div className="relative flex overflow-hidden border-y border-gray-50 py-10 bg-gray-50/20">
            <motion.div 
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
               className="flex items-center gap-24 whitespace-nowrap"
            >
               {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-24 shrink-0">
                     {[
                       { name: 'AWS', logo: awsLogo },
                       { name: 'HP', logo: hpLogo },
                       { name: 'IBM', logo: ibmLogo },
                       { name: 'Oracle', logo: oracleLogo },
                       { name: 'Ethio Telecom', logo: ethioLogo },
                       { name: 'Global Bank', logo: globalLogo },
                       { name: 'CBE', logo: cbeLogo },
                       { name: 'Zemen Bank', logo: zemenLogo },
                       { name: 'INSA', logo: insaLogo },
                       { name: 'AASTU', logo: aastuLogo },
                       { name: 'AAU', logo: aauLogo },
                       { name: 'Hawasa Unit', logo: hawasaLogo }
                     ].map((item, idx) => (
                        <div 
                           key={idx} 
                           className="w-56 h-24 flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-default group/logo"
                        >
                           <img 
                              src={item.logo} 
                              alt={item.name} 
                              className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover/logo:drop-shadow-blue transition-all duration-500" 
                           />
                        </div>
                     ))}
                  </div>
               ))}
            </motion.div>
         </div>
      </section>

      <SectionDivider label="TERMINAL_HANDSHAKE" color="purple" />

      {/* ============= CALL TO ACTION (Initialize Sequence) ============= */}
      <section className="py-48 relative overflow-hidden bg-[#000000]">
         {/* Immersive Digital Background */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 tech-grid-blue opacity-10" />
            <motion.div 
               animate={{ 
                  opacity: [0.05, 0.15, 0.05],
                  scale: [1, 1.1, 1] 
               }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-blue/20 blur-[180px] rounded-full" 
            />
            <div className="scanline" />
         </div>

         <div className="container-custom relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="space-y-16"
            >
               <div className="space-y-6">
                  <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.5em] font-bold uppercase text-[11px] px-8 py-2.5 rounded-full">INITIALIZE_SEQUENCE</Badge>
                  <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-bold font-jakarta text-white tracking-tightest leading-[0.85] uppercase">
                     Engage <br /> <span className="text-brand-blue italic drop-shadow-blue">The Unit.</span>
                  </h2>
               </div>

               <div className="flex flex-col items-center gap-10">
                  <p className="text-xl text-gray-500 font-bold max-w-lg mx-auto leading-tight italic opacity-60">
                     Establish a direct command link with our engineering nodes to scale your technological sovereignty.
                  </p>
                  
                  <Link to="/contact">
                     <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        className="h-24 px-16 bg-white text-black rounded-[2rem] text-2xl font-black uppercase tracking-[0.2em] flex items-center gap-6 group transition-all duration-500 relative overflow-hidden"
                     >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        Register Node 
                        <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-500">
                           <Zap size={24} className="group-hover:animate-pulse" />
                        </div>
                     </motion.button>
                  </Link>

                  <div className="flex items-center gap-3 pt-4">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-glow" />
                     <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-mono">Operations_Online // Cluster_Stable</span>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};
