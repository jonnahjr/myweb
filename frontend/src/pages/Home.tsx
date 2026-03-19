import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Bot, 
  Cpu, 
  Shield,
  CheckCircle2,
  Zap,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';

// Global Assets
import nvidiaLogo from '../assets/nvidia-28.png';
import microsoftLogo from '../assets/microsoft-19.png';
import awsLogo from '../assets/aws-25.png';
import hpLogo from '../assets/hp-22.png';
import ibmLogo from '../assets/ibm-17.png';
import oracleLogo from '../assets/oracle-21.png';

// Local Assets
import ethioLogo from '../assets/ethio.jpg';
import globalLogo from '../assets/global.png';
import cbeLogo from '../assets/cbe.png';
import zemenLogo from '../assets/zemen-bank-logo.webp';
import insaLogo from '../assets/Insa-09.png';
import aastuLogo from '../assets/aastu-01.png';
import aauLogo from '../assets/aau-02.png';
import hawasaLogo from '../assets/Hawasa-08.png';
import c2Image from '../assets/c2.jpg';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden text-brand-charcoal font-outfit">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-brand-charcoal px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-brand-blue/10 blur-[150px] rounded-full" />
           <div className="absolute inset-0 mesh-gradient opacity-20" />
           <div className="absolute inset-0 tech-grid-blue opacity-20" />
           <div className="scanline" />
        </div>

        <div className="container-custom relative z-10 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Registry */}
              <div className="space-y-12">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6 }}
                   className="flex items-center gap-4"
                 >
                    <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] uppercase text-[10px] font-black font-mono px-5 py-2">
                       NEXYOVI_OPERATIONAL_HQ
                    </Badge>
                    <div className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-widest font-mono">
                       <Activity size={12} className="text-emerald-500 animate-pulse" /> SYSTEM_STABLE
                    </div>
                 </motion.div>

                 <div className="space-y-8">
                    <motion.h1 
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="text-7xl md:text-9xl lg:text-[7.5rem] font-black leading-[0.85] tracking-tightest uppercase text-white"
                    >
                       Engineering <br />
                       <span className="text-brand-blue italic">Systems.</span>
                    </motion.h1>
                    <motion.p
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.3, duration: 1 }}
                       className="text-xl md:text-3xl text-white/40 font-bold max-w-xl leading-tight tracking-tight"
                    >
                       We build secure AI systems, enterprise platforms, and digital infrastructure for global businesses and government agencies.
                    </motion.p>
                 </div>

                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-row flex-wrap gap-4 pt-4"
                  >
                    <Link to="/contact">
                      <Button size="md" className="bg-brand-charcoal hover:bg-brand-blue text-white rounded-xl border-0 transition-all shadow-premium group">
                        Start a Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button size="md" className="bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/5 hover:border-white/10 transition-all">
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
                  <div className="relative z-10 w-full max-w-[600px] aspect-square rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl bg-white/5 backdrop-blur-2xl">
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
                      <div className="absolute top-10 left-10 p-5 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 shadow-sm space-y-2 z-20">
                         <div className="text-[9px] font-black text-brand-blue uppercase tracking-widest font-mono">ENCRYPTION_LAYER</div>
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
      <section className="py-24 border-y border-black/5 bg-brand-gray-light relative overflow-hidden">
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
               {[
                 { label: 'NETWORK_STANCE', val: '99.99%', sub: 'SLA_UPTIME' },
                 { label: 'COMPUTE_LOAD', val: '4.8 PFLOPS', sub: 'PEAK_THROUGHPUT' },
                 { label: 'SOVEREIGN_AI', val: '24 NODES', sub: 'GLOBAL_REGISTRY' },
                 { label: 'DATA_SECURITY', val: 'AES-256', sub: 'VALIDATED' }
               ].map((m, i) => (
                  <div key={i} className="space-y-4">
                     <div className="text-[10px] font-black text-brand-charcoal/30 uppercase tracking-[0.5em] font-mono">{m.label}</div>
                     <div className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-brand-charcoal tracking-tightest">{m.val}</div>
                     <div className="text-[9px] font-black text-brand-blue uppercase tracking-widest font-mono flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-brand-blue animate-pulse" /> {m.sub}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>


      {/* ============= INSTITUTIONAL TECHNICAL HUB ============= */}
      <section className="py-40 bg-brand-surface relative overflow-hidden">
        <div className="container-custom">
           <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">MISSION_CORE</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tightest leading-[0.85]">Institutional <br /> Technical Hub.</h2>
              </div>
              <p className="text-xl text-brand-charcoal/40 font-bold max-w-md leading-tight">Engineering absolute synchrony for your national and enterprise logical builds.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "AI Logic & LLMs", 
                  status: "ACTIVE",
                  desc: "Deploying world-class Large Language Models and custom reasoning engines.",
                  icon: <Bot size={28} className="text-brand-blue" />
                },
                { 
                  title: "Security Audit", 
                  status: "SHIELDED",
                  desc: "Military-grade penetration testing and architectural validation.",
                  icon: <Shield size={28} className="text-brand-blue" />
                },
                { 
                  title: "Infrastructure", 
                  status: "STABLE",
                  desc: "Engineering sovereign cloud nodes and distributed database clusters.",
                  icon: <Cpu size={28} className="text-brand-blue" />
                },
                { 
                  title: "Data Insights", 
                  status: "SYNCED",
                  desc: "Real-time computational analysis of continental data streams.",
                  icon: <Globe size={28} className="text-brand-blue" />
                }
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-12 bg-white border border-black/5 rounded-[4rem] transition-all hover:bg-brand-gray-light hover:shadow-floating group relative overflow-hidden"
                >
                   <div className="absolute top-10 right-10 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                       <span className="text-[9px] font-black text-brand-blue tracking-widest font-mono">{s.status}</span>
                   </div>
                   <div className="w-16 h-16 rounded-3xl bg-brand-gray-light border border-black/5 flex items-center justify-center mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                      {s.icon}
                   </div>
                   <h3 className="text-3xl font-black mb-4 font-outfit tracking-tighter uppercase">{s.title}</h3>
                   <p className="text-xl text-brand-charcoal/40 font-bold leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= NETWORK SUCCESS ARTIFACTS ============= */}
      <section className="py-40 bg-brand-gray-bold/10 border-y border-black/5">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
               
               <div className="lg:col-span-4 space-y-12">
                  <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">REGISTRY_SUCCESS</Badge>
                  <h2 className="text-6xl md:text-7xl font-black font-outfit uppercase tracking-tightest leading-[0.8]">Network <br /> <span className="text-brand-blue italic">Artifacts.</span></h2>
                  <p className="text-xl text-brand-charcoal/40 font-bold leading-tight">Institutional narratives from our global deployment nodes.</p>
                  
                  <div className="pt-12 grid grid-cols-2 gap-8 lg:block lg:space-y-8">
                     {[
                       { label: 'ACTIVE_MISSIONS', val: '140+' },
                       { label: 'CLIENT_TRUST_INDEX', val: '99.9%' }
                     ].map(m => (
                        <div key={m.label} className="space-y-2">
                           <div className="text-[10px] font-black text-brand-charcoal/20 uppercase tracking-[0.5em] font-mono">{m.label}</div>
                           <div className="text-5xl font-black font-outfit text-brand-charcoal">{m.val}</div>
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
                      className="p-12 bg-brand-surface border border-black/5 rounded-[4rem] shadow-premium hover:shadow-floating transition-all duration-700 space-y-8"
                    >
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-5">
                             <div className="w-14 h-14 rounded-3xl bg-brand-gray-light border border-black/5 flex items-center justify-center font-black text-brand-blue text-lg">
                                {t.user.charAt(0)}
                             </div>
                             <div>
                                <div className="flex items-center gap-2">
                                   <div className="text-xl font-black text-brand-charcoal leading-none">{t.user}</div>
                                   {t.verified && <CheckCircle2 size={18} className="text-emerald-500" />}
                                </div>
                                <div className="text-[10px] font-black text-brand-charcoal/20 uppercase tracking-widest mt-2 font-mono">{t.agency}</div>
                             </div>
                          </div>
                       </div>
                       <p className="text-xl text-brand-charcoal/60 font-medium leading-relaxed italic">"{t.text}"</p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ============= PARTNERS MARQUEE ============= */}
      <section className="py-40 overflow-hidden bg-brand-surface">
         <div className="container-custom mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
               <div className="space-y-6">
                  <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">PARTNER_REGISTRY</Badge>
                  <h2 className="text-5xl md:text-7xl font-black font-outfit uppercase tracking-tightest leading-none">The <br/> Registry.</h2>
               </div>
               <p className="text-xl text-brand-charcoal/40 font-bold max-w-sm leading-tight">Trusted by global institutions and regional command nodes.</p>
            </div>
         </div>
         
         <div className="relative flex overflow-x-hidden border-y border-black/5 py-12">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-32">
               {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-32 shrink-0">
                     {[
                       { name: 'NVIDIA', logo: nvidiaLogo },
                       { name: 'Microsoft', logo: microsoftLogo },
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
                        <div key={idx} className="flex items-center gap-6 group grayscale hover:grayscale-0 transition-all duration-700 opacity-30 hover:opacity-100">
                           <img src={item.logo} alt={item.name} className="h-12 w-auto object-contain" />
                           <span className="text-lg font-black font-outfit text-brand-charcoal uppercase tracking-widest">{item.name}</span>
                        </div>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ============= CALL TO ACTION ============= */}
      <section className="py-40 relative overflow-hidden bg-brand-charcoal">
         <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-brand-blue/30 blur-[150px] rounded-full" />
            <div className="absolute inset-0 mesh-gradient opacity-10" />
         </div>

         <div className="container-custom relative z-10 text-center space-y-12">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-blue border-white/10 tracking-[0.5em] font-black uppercase text-[10px] font-mono px-6 py-2">INITIALIZE_SEQUENCE</Badge>
            <h2 className="text-7xl md:text-[9rem] font-black font-outfit text-white uppercase tracking-tightest leading-[0.8] mb-12">
               Engage <br /> <span className="text-brand-blue italic">The Unit.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
               <Link to="/contact">
                  <Button size="xl" className="h-24 px-16 bg-brand-yellow hover:bg-white text-brand-charcoal rounded-[3rem] border-0 transition-all shadow-glow text-2xl font-black uppercase tracking-widest flex items-center gap-6 group">
                     Register Node <Zap size={32} className="group-hover:animate-bounce" />
                  </Button>
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};
