import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield,
  Cpu,
  Unplug
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Core';

export const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roles = [
    { 
      id: "AI_01", 
      title: "AI Systems Engineer", 
      category: "Logic Nodes", 
      location: "Global / Remote", 
      sync: "100%",
      desc: "Architecting elite AI logic cores for national data synchronization and sovereign registry nodes. Requires deep expertise in LLM orchestration and neural mesh grid logic."
    },
    { 
      id: "BE_04", 
      title: "Senior Backend Architect", 
      category: "Mesh Core", 
      location: "Hybrid / HQ", 
      sync: "99.8%",
      desc: "Designing high-scale distributed systems for intercontinental mesh networks. Focused on zero-latency replication protocols and absolute transaction reliability."
    },
    { 
      id: "SEC_09", 
      title: "Security Protocols Lead", 
      category: "Sovereign Shield", 
      location: "Hybrid / Cluster", 
      sync: "100%",
      desc: "Executing offensive and defensive security operations for critical digital infrastructure. Implementing zero-trust frameworks across sovereign national clusters."
    },
    { 
      id: "UI_12", 
      title: "Interface Logic Designer", 
      category: "Creative Hub", 
      location: "Remote / Sync", 
      sync: "99.5%",
      desc: "Defining the visual language of high-tech command centers and digital twins. Bridging the gap between complex system data and premium, intuitive user interaction."
    },
    { 
      id: "DS_15", 
      title: "Data Neural Scientist", 
      category: "Analytic Nodes", 
      location: "Global / Remote", 
      sync: "100%",
      desc: "Analyzing massive-scale datasets to extract strategic insights for institutional decision logic. Building predictive models for global market synchrony."
    },
    { 
      id: "OPS_18", 
      title: "Cloud Deployment Admin", 
      category: "Sync Grid", 
      location: "HQ / Node", 
      sync: "99.9%",
      desc: "Managing the elastic deployment grid for global organizational nodes. Ensuring absolute uptime through automated scaling and live sync-stabilization protocols."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A2332] font-jakarta pt-40 pb-32">
       {/* Subtle Tech Mesh Overlay */}
       <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="tech-grid absolute inset-0" />
          <div className="scanline" />
       </div>

       <div className="container-custom relative z-10">
          <div className="max-w-4xl space-y-12 mb-32">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
             >
                <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.5em] font-bold uppercase text-[10px] px-8 py-2.5 rounded-full">
                   TALENT_REGISTRY_v4.0
                </Badge>
             </motion.div>

             <div className="space-y-6">
                <motion.h1 
                   initial={{ opacity: 0, y: 40 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   className="text-7xl md:text-8xl lg:text-9xl font-black font-jakarta text-[#1A2332] tracking-tightest leading-[0.8] uppercase"
                >
                   Open <br />
                   <span className="text-brand-blue italic drop-shadow-sm">Missions.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.4, duration: 1.5 }}
                   className="text-2xl text-gray-400 font-bold leading-tight max-w-2xl italic opacity-80"
                >
                   We are assembling a team of elite engineers building advanced AI and infrastructure systems for global businesses and national clusters.
                </motion.p>
             </div>
          </div>

          <div className="space-y-8">
             {roles.map((role, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.8 }}
                   whileHover={{ x: 10 }}
                   className="group relative flex flex-col lg:flex-row lg:items-center justify-between p-12 bg-gray-50/50 border border-gray-100 hover:border-brand-blue/30 rounded-[3rem] transition-all duration-700 gap-12"
                >
                   <div className="flex flex-col lg:flex-row lg:items-center gap-12 flex-1">
                      <div className="w-20 h-20 rounded-3xl bg-white border border-gray-100 flex items-center justify-center text-brand-blue font-black font-jakarta text-xl shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                         {role.id.split('_')[0]}
                      </div>
                      
                      <div className="space-y-6 flex-1">
                         <div className="space-y-2">
                            <div className="flex items-center gap-3">
                               <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{role.id}</span>
                               <div className="h-[1px] w-6 bg-gray-200" />
                               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">SYNC_{role.sync}</span>
                            </div>
                            <h3 className="text-4xl font-black font-jakarta text-[#1A2332] tracking-tighter uppercase">{role.title}</h3>
                            <div className="flex gap-4">
                               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{role.category}</span>
                               <span className="text-[11px] font-bold text-brand-blue uppercase tracking-widest">/</span>
                               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{role.location}</span>
                            </div>
                         </div>
                         
                         <div className="space-y-2 max-w-2xl">
                            <div className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em]">MISSION_SCOPE</div>
                            <p className="text-sm text-gray-500 font-bold leading-relaxed italic opacity-80">{role.desc}</p>
                         </div>
                      </div>
                   </div>

                   <Link to="/contact">
                      <motion.button
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.98 }}
                         className="h-20 px-12 bg-[#1A2332] text-white rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-xl hover:bg-brand-blue"
                      >
                         Apply Now <ArrowRight size={20} />
                      </motion.button>
                   </Link>

                   {/* Background Tech Pulse */}
                   <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[3rem]" />
                </motion.div>
             ))}
          </div>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1, duration: 1.5 }}
             className="mt-32 pt-20 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10"
          >
             <div className="space-y-2 text-center md:text-left">
                <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">SYSTEM_REGISTRY_v4.0</div>
                <div className="text-sm font-bold text-gray-400 max-w-sm italic">All missions are globally synchronized and require absolute technical precision.</div>
             </div>
             <div className="flex gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
                <Shield size={32} />
                <Cpu size={32} />
                <Unplug size={32} />
             </div>
          </motion.div>
       </div>
    </div>
  );
};