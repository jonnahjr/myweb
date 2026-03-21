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
  Activity,
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
    <div className="min-h-screen overflow-hidden bg-[#F3EFE6] text-[#1A2332] font-outfit">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden px-6 bg-[#F3EFE6]">
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
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase font-medium">
                       <Activity size={12} className="text-emerald-500 animate-pulse" /> SYSTEM_STABLE
                    </div>
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
                    <Link to="/about">
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
         <div className="absolute inset-0 bg-white/5  hidden" />
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24">
               {[
                 { label: 'NETWORK_STANCE', val: '99.99%', sub: 'SLA_UPTIME' },
                 { label: 'COMPUTE_LOAD', val: '4.8 PFLOPS', sub: 'PEAK_THROUGHPUT' },
                 { label: 'SOVEREIGN_AI', val: '24 NODES', sub: 'GLOBAL_REGISTRY' },
                 { label: 'DATA_SECURITY', val: 'AES-256', sub: 'VALIDATED' }
               ].map((m, i) => (
                  <div key={i} className="space-y-4">
                     <div className="text-sm font-bold text-gray-400 uppercase tracking-wider font-medium">{m.label}</div>
                     <div className="text-2xl md:text-3xl lg:text-6xl font-bold font-outfit text-white tracking-tightest">{m.val}</div>
                     <div className="text-xs font-bold text-brand-blue uppercase font-medium flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-brand-purple animate-pulse" /> {m.sub}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <SectionDivider label="SYNC_TECHNICAL_LAYER" color="blue" />

      {/* ============= INSTITUTIONAL TECHNICAL HUB ============= */}
      <section className="py-40 relative overflow-hidden bg-[#F3EFE6]">
        <div className="container-custom">
           <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider font-bold uppercase text-sm font-medium">MISSION_CORE</Badge>
                 <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold font-outfit tracking-tight leading-tight text-[#1A2332] brightness-125">Institutional <br /> Technical Hub.</h2>
              </div>
              <p className="text-xl text-gray-500 font-bold max-w-md leading-tight">Engineering absolute synchrony for your national and enterprise logical builds.</p>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { 
                   title: "AI Systems", 
                   status: "INTELLIGENCE",
                   desc: "Custom LLM development, neural architectural sync, and autonomous reasoning.",
                   icon: <Bot size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Security & Testing", 
                   status: "SHIELDED",
                   desc: "Advanced security testing, implementation, and sovereign data controlling.",
                   icon: <Shield size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Custom Software", 
                   status: "ENG_NODE",
                   desc: "Bespoke software and app development with full system customization.",
                   icon: <Code size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Installation", 
                   status: "INFRA_CORE",
                   desc: "Institutional systems installation, hardware sync, and operational control.",
                   icon: <Cpu size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Design & Web", 
                   status: "VISUAL",
                   desc: "Premium website design, UI/UX systems, and architectural visual design.",
                   icon: <Globe2 size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Strategy", 
                   status: "ADVISORY",
                   desc: "Strategic consulting, logic transformation, and institutional planning.",
                   icon: <Zap size={28} className="text-brand-blue" />
                 }
               ].map((s, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group relative overflow-hidden"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                     <div className="absolute top-8 right-10 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                         <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest font-medium">{s.status}</span>
                     </div>
                     <div className="w-16 h-16 rounded-2xl bg-[#F3EFE6] border border-gray-100 flex items-center justify-center mb-10 group-hover:bg-brand-blue text-brand-blue group-hover:text-white transition-all duration-700 shadow-md">
                        {s.icon}
                     </div>
                      <h3 className="text-2xl font-bold mb-4 font-jakarta tracking-tighter uppercase text-[#1A2332]">{s.title}</h3>
                      <p className="text-base text-gray-500 font-bold leading-relaxed">{s.desc}</p>
                  </motion.div>
               ))}
            </div>
        </div>
      </section>

      <SectionDivider label="REGISTRY_HANDSHAKE" color="purple" />

      {/* ============= NETWORK SUCCESS ARTIFACTS ============= */}
      <section className="py-40 relative bg-[#000000]">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
               
               <div className="lg:col-span-4 space-y-12">
                  <Badge variant="blue" className="bg-teal-50 text-teal-700 border-transparent tracking-wider font-bold uppercase text-sm font-medium">REGISTRY_SUCCESS</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold font-outfit tracking-tight leading-tight text-white">Network <br /> <span className="bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8] bg-clip-text text-transparent italic">Artifacts.</span></h2>
                  <p className="text-xl text-gray-400 font-bold leading-tight">Institutional narratives from our global deployment nodes.</p>
                  
                  <div className="pt-12 grid grid-cols-2 gap-8 lg:block lg:space-y-8">
                     {[
                       { label: 'ACTIVE_MISSIONS', val: '140+' },
                       { label: 'CLIENT_TRUST_INDEX', val: '99.9%' }
                     ].map(m => (
                        <div key={m.label} className="space-y-2">
                           <div className="text-sm font-bold text-brand-muted uppercase tracking-wider font-medium">{m.label}</div>
                           <div className="text-5xl font-bold font-outfit text-white">{m.val}</div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      user: "Minister of Digital Sec.",
                      agency: "Regional Gov Node",
                      text: "The sovereign AI logic implemented by NEXYOVI has completely transformed our national data infrastructure stability.",
                      verified: true
                    },
                    {
                      user: "Chief Architect",
                      agency: "Pan-African Bank",
                      text: "Absolute synchrony. Their distributed database clusters handled our intercontinental traffic with zero latency variance.",
                      verified: true
                    },
                    {
                      user: "Director of Operations",
                      agency: "Global Logistics Hub",
                      text: "The security validation status provided by their pen-testing units allowed us to ship our core platform ahead of schedule.",
                      verified: false
                    },
                    {
                      user: "Lead Research Scientist",
                      agency: "AI Bio-Research Node",
                      text: "Deploying world-class reasoning engines across our research wings has catalyzed our insight generation by 4.8x.",
                      verified: true
                    }
                  ].map((t, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-8 bg-white/5 rounded-2xl shadow-none border border-white/10 hover:shadow-lg hover:-translate-y-1 transition-all hover:shadow-lg shadow-blue-500/20-purple transition-all duration-700 space-y-8"
                    >
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-5">
                             <div className="w-14 h-14 rounded-3xl bg-[#F3EFE6] border border-white/10 flex items-center justify-center font-bold text-brand-purple text-lg shadow-inner">
                                {t.user.charAt(0)}
                             </div>
                             <div>
                                 <div className="flex items-center gap-2">
                                    <div className="text-xl font-bold text-white leading-none">{t.user}</div>
                                    {t.verified && <CheckCircle2 size={18} className="text-brand-blue" />}
                                 </div>
                                 <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2 font-medium">{t.agency}</div>
                              </div>
                           </div>
                        </div>
                        <p className="text-xl text-gray-300 font-bold leading-relaxed italic opacity-80">"{t.text}"</p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <SectionDivider label="PARTNER_HANDOFF" color="blue" />

       {/* ============= PARTNERS MARQUEE ============= */}
      <section className="py-40 overflow-hidden bg-[#FDFBF7] relative bg-[#F3EFE6]">
         <div className="absolute inset-0 bg-[#FDFBF7]  hidden" />
         <div className="container-custom mb-24 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
               <div className="space-y-6">
                  <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider font-bold uppercase text-sm font-medium">PARTNER_REGISTRY</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold font-outfit tracking-tight leading-tight text-[#1A2332]">The <br/> Registry.</h2>
               </div>
               <p className="text-xl text-[#1A2332]/60 font-bold max-w-sm leading-tight">Trusted by global institutions and regional command nodes.</p>
            </div>
         </div>
         
         <div className="relative flex overflow-x-hidden py-12">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-32">
               {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-32 shrink-0">
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
                           className="flex flex-col items-center justify-center group transition-all duration-700 hover:-translate-y-4"
                        >
                           <div className="w-48 h-28 flex items-center justify-center p-4 transition-all duration-700 animate-float" style={{ animationDelay: `${idx * 0.1}s` }}>
                              <img src={item.logo} alt={item.name} className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                           </div>
                        </div>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </section>

      <SectionDivider label="TERMINAL_HANDSHAKE" color="purple" />

      {/* ============= CALL TO ACTION ============= */}
      <section className="py-40 relative overflow-hidden bg-[#000000]">
         <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-brand-blue/30 blur-[150px] rounded-full" />
            <div className="absolute inset-0 mesh-gradient opacity-10" />
         </div>

         <div className="container-custom relative z-10 text-center space-y-12">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-blue border-white/20 tracking-wider font-bold uppercase text-sm font-medium px-6 py-2">INITIALIZE_SEQUENCE</Badge>
            <h2 className="text-7xl md:text-[9rem] font-bold font-outfit text-white tracking-tight leading-tight mb-12">
               Engage <br /> <span className="text-brand-blue italic">The Unit.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
               <Link to="/contact">
                  <Button size="xl" className="h-24 px-16 bg-brand-yellow hover:bg-white/5 text-white rounded-2xl border-0 transition-all shadow-lg shadow-blue-500/20 text-2xl font-bold uppercase tracking-widest flex items-center gap-6 group">
                     Register Node <Zap size={32} className="group-hover:animate-bounce" />
                  </Button>
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};
