import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Activity, 
  Zap, 
  Bot, 
  Shield, 
  Cpu,
  Database
} from 'lucide-react';
import { Badge, Button } from '../components/ui/Core';
import { Link } from 'react-router-dom';
import heroImg from '../assets/c1.jpg';

const posts = [
  {
    title: "The Epoch of Technical Sovereignty",
    id: "LOG_INTEL_01",
    excerpt: "Architecting autonomous digital foundations for the next world-scale infrastructure transition in Africa.",
    category: "STRATEGY",
    date: "MAR 18, 2026",
    author: "Force Leader",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Zero-Trust Protocol Sync",
    id: "LOG_SEC_X9",
    excerpt: "Ensuring data integrity across multi-node intercontinental clusters with elite ethical hacking sweep.",
    category: "SECURITY",
    date: "MAR 16, 2026",
    author: "Sec Unit 03",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Orchestration v4.0",
    id: "LOG_AI_REASON",
    excerpt: "Deploying high-frequency autonomous reasoning engines at the edge for national sync infrastructures.",
    category: "ENGINEERING",
    date: "MAR 14, 2026",
    author: "Logic Agent",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "National Cloud Node Mesh",
    id: "LOG_INFRA_01",
    excerpt: "The blueprint for architecting private national data nodes for sovereign African states.",
    category: "ENGINEERING",
    date: "MAR 12, 2026",
    author: "Mesh Unit",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Red Team Ops: Structural Audit",
    id: "LOG_SEC_RT",
    excerpt: "How our elite hackers harden the logical layers of critical intercontinental financial nodes.",
    category: "SECURITY",
    date: "MAR 10, 2026",
    author: "Unit L10",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Continental Dominance Strategy",
    id: "LOG_STRAT_AF",
    excerpt: "The roadmap for NEXYOVI's positioning as the state-scale implementation authority for the AU.",
    category: "STRATEGY",
    date: "MAR 08, 2026",
    author: "Strategic Node",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  }
];

export const Blog = () => {
  const [activeTab, setActiveTab] = useState('ALL_LOGS');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = activeTab === 'ALL_LOGS' 
    ? posts 
    : posts.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F3EFE6] text-[#1A2332] font-outfit pt-24">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 overflow-hidden bg-[#F3EFE6]">
        <div className="container-custom relative z-10 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                 <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider uppercase text-sm font-bold font-medium px-6 py-2">
                   <Activity size={14} className="mr-3 animate-pulse text-emerald-500" /> INTELLIGENCE_REGISTRY_v5.0
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl lg:text-6xl lg:text-9xl font-bold leading-tight tracking-tightest uppercase"
                >
                  Technical <br />
                  <span className="text-brand-blue italic">Intel.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-4xl text-gray-500 font-bold max-w-4xl leading-tight tracking-tight"
                >
                   Documentation, artifacts, and strategic blueprints from the frontlines of African digital implementation.
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

      {/* ============= INTEL REGISTRY MATRIX ============= */}
      <section className="py-24 border-y border-gray-100 bg-[#000000]">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-24 pb-12 border-b border-white/20">
              <div className="flex flex-wrap gap-4">
                 {['ALL_LOGS', 'STRATEGY', 'SECURITY', 'ENGINEERING'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`h-14 px-10 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-700 border-2 ${
                        activeTab === tab
                          ? 'bg-white/5 border-white text-white shadow-md hover:shadow-xl transition-all'
                          : 'bg-[#F3EFE6] border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      {tab.replace('_', ' ')}
                    </button>
                 ))}
              </div>
              <div className="space-y-1 text-right">
                 <p className="text-sm font-bold uppercase tracking-wider text-white/20 font-medium">Registry_Nodes</p>
                 <p className="text-3xl font-bold font-outfit text-white">{posts.length}</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <AnimatePresence mode="popLayout">
                 {filteredPosts.map((post, i) => (
                    <motion.div
                      layout
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="group p-6 bg-[#F3EFE6] border border-white/10 rounded-2xl flex flex-col hover:shadow-floating transition-all duration-700 relative overflow-hidden h-full"
                    >
                       <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-none grayscale group-hover:grayscale-0 transition-all duration-700 mb-10">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute top-8 right-8">
                            <Badge variant="blue" className="bg-brand-blue text-white shadow-lg shadow-blue-500/20 border-0 h-10 px-6 font-bold uppercase text-sm tracking-widest">{post.category}</Badge>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
                       </div>

                       <div className="flex-grow space-y-8">
                          <div className="flex justify-between items-center text-sm font-bold text-white/20 uppercase tracking-wider font-medium">
                             <span>{post.id}</span>
                             <span>{post.date}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold font-outfit text-white uppercase leading-none tracking-tighter group-hover:text-brand-blue transition-colors duration-500">{post.title}</h3>
                          <p className="text-xl text-gray-400 font-bold leading-tight">{post.excerpt}</p>
                       </div>

                       <div className="pt-10 mt-10 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-2xl bg-[#F3EFE6] border border-white/10 flex items-center justify-center text-brand-blue font-bold text-xs">
                                {post.author.charAt(0)}
                             </div>
                             <div className="space-y-1">
                                <span className="text-sm font-bold uppercase tracking-widest text-white leading-none block">{post.author}</span>
                                <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 font-medium leading-none block">INTEL_UNIT</span>
                             </div>
                          </div>
                          <Link to="#" className="w-14 h-14 rounded-2xl bg-[#F3EFE6] border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-none">
                             <ArrowRight size={20} />
                          </Link>
                       </div>
                    </motion.div>
                 ))}
              </AnimatePresence>
           </div>
        </div>
      </section>

      {/* ============= SYSTEM PULSE MATRIX ============= */}
      <section className="py-40 relative overflow-hidden bg-[#F3EFE6]">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider font-bold uppercase text-sm font-medium">REGISTRY_METRICS</Badge>
                  <h2 className="text-6xl md:text-[8rem] font-bold font-outfit tracking-tighter text-[#1A2332] uppercase leading-[0.85]">
                     System <br /> <span className="text-brand-blue italic">Pulse.</span>
                  </h2>
                  <p className="text-2xl text-gray-500 font-bold leading-tight max-w-xl tracking-tight">
                     Real-time operational updates and engineering artifacts from the only AI logic implementers in Africa.
                  </p>
                 <div className="flex flex-wrap gap-8">
                    {[
                      { icon: <Bot size={24} />, val: 'INTEL_REASON' },
                      { icon: <Shield size={24} />, val: 'SECURE_NODE' },
                      { icon: <Database size={24} />, val: 'DATA_SOVEREIGN' }
                    ].map((v, i) => (
                       <div key={i} className="flex items-center gap-4 text-brand-blue font-bold font-medium text-xs tracking-[0.2em] uppercase">
                          {v.icon}
                          {v.val}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "AI Blueprints", val: "140+", icon: <Bot /> },
                    { label: "Security Logs", val: "2.4k", icon: <Shield /> },
                    { label: "Logic Nodes", val: "MAX", icon: <Cpu /> },
                    { label: "Sync Stable", val: "99.9%", icon: <Zap /> }
                  ].map((m, i) => (
                     <motion.div
                       key={i}
                       whileHover={{ scale: 1.05 }}
                       className="p-6 bg-[#F3EFE6] border border-gray-100 rounded-2xl space-y-6 group hover:bg-gray-50 hover:shadow-floating transition-all duration-700"
                     >
                        <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-[#1A2332] transition-all duration-500">
                           {m.icon}
                        </div>
                        <div>
                           <p className="text-4xl font-bold font-outfit text-[#1A2332] tracking-tighter">{m.val}</p>
                           <p className="text-sm font-bold uppercase tracking-wider text-[#1A2332]/20 font-medium pt-1">{m.label}</p>
                        </div>
                     </motion.div>
                  ))}
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
             Access <br /> <span className="text-brand-blue italic">The Registry.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-white/5/10 text-white hover:text-white rounded-2xl border-0 transition-all shadow-lg shadow-blue-500/20 text-2xl font-bold uppercase tracking-widest group">
                Enter Command Unit <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
