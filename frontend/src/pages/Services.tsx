import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Shield, 
  Code, 
  Globe2,
  Cpu,
  MonitorCheck,
  Lightbulb,
  ChevronRight
} from 'lucide-react';
import { Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';
import heroImg from '../assets/c1.jpg';

const services = [
  { 
    id: 'INTELLIGENCE_NODE',
    title: 'AI Systems Development',
    icon: <Bot size={22} />,
    desc: 'Custom AI models, LLM fine-tuning, and intelligent automation built for enterprise-scale operations.',
    items: ['Custom LLM Fine-tuning', 'Autonomous Reasoning Engines', 'Neural Net Architecture', 'Vector Storage & RAG Pipelines']
  },
  { 
    id: 'SHIELD_PROTOCOL',
    title: 'Security & Testing',
    icon: <Shield size={22} />,
    desc: 'Comprehensive security audits, penetration testing, and risk mitigation protocols.',
    items: ['Penetration Testing & Audits', 'Vulnerability Assessments', 'Risk Mitigation Protocols', 'Security Implementation']
  },
  { 
    id: 'ENG_BUILD',
    title: 'Custom Software & Apps',
    icon: <Code size={22} />,
    desc: 'Bespoke software, mobile and web applications, and ERP systems built to global standards.',
    items: ['Web & Mobile App Development', 'Systems Customization', 'ERP & CRM Solutions', 'Full-Stack Engineering']
  },
  { 
    id: 'STABLE_NODE',
    title: 'Installation & Control',
    icon: <Cpu size={22} />,
    desc: 'Hardware setup, network configuration, system installation and operational management.',
    items: ['Hardware & Network Setup', 'Systems Deployment', 'Operational Control', 'Infrastructure Management']
  },
  { 
    id: 'VISUAL_SYNC',
    title: 'Design & Web Development',
    icon: <MonitorCheck size={22} />,
    desc: 'Premium website design, UI/UX systems, and brand identity engineering.',
    items: ['Website & Landing Page Design', 'UI/UX Design Systems', 'Brand Identity & Visuals', 'Interface Engineering']
  },
  { 
    id: 'LOGIC_ADVISORY',
    title: 'Strategy & Consulting',
    icon: <Lightbulb size={22} />,
    desc: 'Digital transformation planning, IT strategy, and institutional architecture consulting.',
    items: ['IT Architecture Consulting', 'Digital Transformation Strategy', 'Technology Roadmapping', 'Project Management']
  }
];

export const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1A2332] font-jakarta">
      
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
                       SERVICE_REGISTRY_HQ
                    </Badge>
                 </motion.div>

                 <div className="space-y-8">
                    <motion.h1 
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="text-6xl md:text-8xl lg:text-9xl font-bold font-jakarta tracking-tightest leading-[0.85] text-[#1A2332] uppercase"
                    >
                      Engineering<br />The <span className="italic text-brand-blue">Logic.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-2xl text-gray-500 font-bold max-w-xl leading-snug tracking-tight"
                    >
                        We provide expert services across AI, cybersecurity, software, and digital infrastructure — built to global standards.
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
                         View Services Inventory
                       </motion.button>
                    </Link>
                 </motion.div>
              </div>
              
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9, rotateY: 10 }} 
                 animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
                 transition={{ duration: 1.2, delay: 0.2 }} 
                 className="hidden lg:flex items-center justify-center perspective-3d"
              >
                 <div className="relative z-10 w-full max-w-[550px] aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-white/5 transition-all duration-700 hover:shadow-[0_60px_100px_-20px_rgba(27,79,138,0.25)]">
                    <img src={heroImg} alt="Services" className="w-full h-full object-cover grayscale-0 group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B4F8A]/20 to-transparent pointer-events-none" />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= SERVICE REGISTRY MATRIX ============= */}
      <section className="py-20 relative overflow-hidden bg-[#000000]">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10">
           {/* Header */}
           <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[10px] font-medium px-5 py-1.5 rounded-full">TECHNICAL_REGISTRY</Badge>
                 <h2 className="text-4xl md:text-6xl font-bold font-jakarta text-white tracking-tightest leading-none uppercase">
                    Operational <br /><span className="text-brand-blue italic">Capabilities.</span>
                 </h2>
              </div>
              <p className="text-lg text-gray-400 font-bold max-w-sm leading-tight italic opacity-70 lg:pb-2">
                 Deploying world-class services for sovereign digital infrastructure.
              </p>
           </div>
            
           {/* Services Grid — Compact List Style */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.07 }}
                   whileHover={{ y: -5 }}
                   className="group p-6 bg-white/5 border border-white/5 hover:border-brand-blue/30 rounded-2xl transition-all duration-500 space-y-5 relative overflow-hidden"
                 >
                    {/* subtle bg glow */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-blue/5 blur-[80px] group-hover:bg-brand-blue/10 transition-all rounded-full" />

                    {/* Top row: icon + status tag */}
                    <div className="flex items-center justify-between relative z-10">
                       <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                          {svc.icon}
                       </div>
                       <span className="text-[8px] font-bold text-brand-blue/50 uppercase tracking-[0.3em]">{svc.id}</span>
                    </div>

                    {/* Title + Desc */}
                    <div className="space-y-2 relative z-10">
                       <h3 className="text-xl font-bold font-jakarta text-white tracking-tight leading-none">{svc.title}</h3>
                       <p className="text-sm text-gray-500 font-bold leading-snug">{svc.desc}</p>
                    </div>

                    {/* Sub-items list */}
                    <div className="space-y-2 relative z-10 pt-2 border-t border-white/5">
                       {svc.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                             <div className="w-1 h-1 rounded-full bg-brand-blue/40 group-hover:bg-brand-blue transition-colors shrink-0" />
                             {item}
                          </div>
                       ))}
                    </div>

                    {/* Bottom Link */}
                    <Link to="/contact" className="relative z-10 flex items-center gap-2 text-[10px] font-bold text-brand-blue/50 group-hover:text-brand-blue uppercase tracking-widest transition-colors pt-2">
                       Get Started <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= GLOBAL NODE NETWORK ============= */}
      <section className="py-16 bg-[#F3EFE6] border-y border-gray-100">
        <div className="container-custom">
           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              {/* Left: heading + desc */}
              <div className="space-y-4 max-w-md">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[9px] font-medium px-5 py-1.5 rounded-full">REGISTRY_NETWORK</Badge>
                 <h2 className="text-3xl md:text-4xl font-bold font-jakarta tracking-tightest leading-none text-[#1A2332] uppercase">Global <span className="text-brand-blue italic">Sync.</span></h2>
                 <p className="text-base text-gray-500 font-bold leading-snug">
                    Our teams operate across multiple hubs to deliver consistent, world-class results for every client.
                 </p>
              </div>

              {/* Center: Hub pills */}
              <div className="flex flex-wrap gap-3">
                 {[
                   { label: 'Addis Ababa, Ethiopia', color: 'bg-brand-blue' },
                   { label: 'Miami, Florida — USA', color: 'bg-emerald-500' },
                   { label: 'East Africa Hub', color: 'bg-amber-500' },
                   { label: 'Remote Worldwide', color: 'bg-purple-500' }
                 ].map((loc, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-2.5 px-5 py-3 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                       <span className={`w-2 h-2 rounded-full ${loc.color} shrink-0`} />
                       <span className="text-[11px] font-bold uppercase tracking-widest text-gray-600">{loc.label}</span>
                    </motion.div>
                 ))}
              </div>

              {/* Right: Stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center lg:text-right shrink-0"
              >
                 <div className="text-6xl font-bold font-jakarta text-[#1A2332] leading-none tracking-tightest">17+</div>
                 <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-2">Active Projects</div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= CALL TO ACTION NODE ============= */}
      <section className="py-24 relative overflow-hidden bg-[#000000]">
         <motion.div
           animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/30 blur-[100px] rounded-full pointer-events-none"
         />

         <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
               {/* Left */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-7 max-w-xl"
               >
                  <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.4em] font-bold uppercase text-[9px] px-4 py-1.5 rounded-full">INITIALIZE_SEQUENCE</Badge>
                  <h2 className="text-5xl md:text-7xl font-bold font-jakarta text-white tracking-tightest leading-none uppercase">
                     Ready to <span className="text-brand-blue italic">Start?</span>
                  </h2>
                  <p className="text-lg text-gray-400 font-bold leading-snug max-w-md">
                     From AI systems to security, software to strategy — let's build something exceptional together.
                  </p>
               </motion.div>

               {/* Right — Buttons */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
               >
                  <Link to="/contact">
                     <motion.button
                       whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(27,79,138,0.5)" }}
                       whileTap={{ scale: 0.97 }}
                       transition={{ type: "spring", stiffness: 300, damping: 20 }}
                       className="relative h-14 px-12 w-full bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8] text-white rounded-2xl text-sm font-bold uppercase tracking-widest overflow-hidden"
                     >
                        <motion.span
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                        />
                        Start a Project
                     </motion.button>
                  </Link>
                  <Link to="/portal">
                     <motion.button
                       whileHover={{ scale: 1.04, borderColor: "rgba(27,79,138,0.6)" }}
                       whileTap={{ scale: 0.97 }}
                       transition={{ type: "spring", stiffness: 300, damping: 20 }}
                       className="h-12 px-10 w-full bg-transparent border border-white/10 text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                     >
                        Access Portal
                     </motion.button>
                  </Link>
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
};
