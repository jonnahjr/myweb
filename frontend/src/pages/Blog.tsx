import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, User, Zap, Bot, Shield, Cpu } from 'lucide-react';
import { Badge, Button } from '../components/ui/Core';
import { Link } from 'react-router-dom';

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
    <div className="bg-white min-h-screen pt-24 overflow-hidden text-brand-charcoal">
      
      {/* ============= BLOG HERO ============= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-white px-6">
        <div className="container-custom relative z-10 w-full">
           <div className="max-w-5xl space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest uppercase text-[10px] font-black font-mono"><Activity size={12} className="mr-2" /> Intelligence_Registry_v5.0</Badge>
              </motion.div>

              <div className="space-y-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[10vw] md:text-[8vw] lg:text-[7rem] font-black leading-[0.85] tracking-tightest font-outfit uppercase"
                >
                  Technical <br />
                  <span className="text-brand-blue italic">Intel.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-2xl md:text-3xl text-brand-charcoal/40 font-medium max-w-3xl leading-relaxed"
                >
                   Documentation, artifacts, and strategic blueprints from the frontlines of African digital implementation.
                </motion.p>
              </div>
           </div>
        </div>
      </section>

      {/* ============= INTEL REGISTRY ============= */}
      <section className="py-40 bg-brand-gray-bold/50 border-y border-black/5">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-24 pb-12 border-b border-black/5">
              <div className="flex flex-wrap gap-4">
                 {['ALL_LOGS', 'STRATEGY', 'SECURITY', 'ENGINEERING'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`h-12 px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border-2 ${
                        activeTab === tab 
                          ? 'bg-brand-charcoal border-brand-charcoal text-white shadow-premium' 
                          : 'bg-white border-black/5 text-brand-charcoal/30 hover:border-black/10'
                      }`}
                    >
                      {tab.replace('_', ' ')}
                    </button>
                 ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 font-mono">Registry_Nodes: {posts.length}</p>
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
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group p-10 bg-white border border-black/5 rounded-[3.5rem] space-y-10 hover:shadow-floating transition-all duration-700 h-full flex flex-col"
                    >
                       <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute top-6 left-6">
                            <Badge variant="blue" className="bg-brand-blue text-white shadow-glow border-0 h-8 px-5 font-black uppercase text-[9px]">{post.category}</Badge>
                          </div>
                       </div>
                       
                       <div className="flex-grow space-y-6">
                          <div className="flex justify-between items-center text-[10px] font-black text-brand-charcoal/20 uppercase tracking-widest font-mono">
                             <span>{post.id}</span>
                             <span>{post.date}</span>
                          </div>
                          <h3 className="text-3xl font-black font-outfit text-brand-charcoal uppercase leading-none tracking-tighter group-hover:text-brand-blue transition-colors">{post.title}</h3>
                          <p className="text-lg text-brand-charcoal/40 font-medium leading-relaxed">{post.excerpt}</p>
                       </div>

                       <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-brand-gray-light border border-black/5 flex items-center justify-center text-brand-blue">
                                <User size={12} />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/30">{post.author}</span>
                          </div>
                          <Link to="#" className="w-10 h-10 rounded-xl bg-brand-gray-light border border-black/5 flex items-center justify-center text-brand-charcoal/40 group-hover:bg-brand-blue group-hover:text-white transition-all">
                             <ArrowRight size={16} />
                          </Link>
                       </div>
                    </motion.div>
                 ))}
              </AnimatePresence>
           </div>
        </div>
      </section>

      {/* ============= DEEP-TECH: INTEL PULSE ============= */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[10px] tracking-widest">Global Sync</Badge>
                 <h2 className="text-6xl md:text-[8rem] font-black font-outfit tracking-tighter text-brand-charcoal uppercase leading-[0.85]">
                    System <br /> <span className="text-brand-blue italic">Pulse.</span>
                 </h2>
                 <p className="text-2xl text-brand-charcoal/50 font-medium leading-relaxed max-w-lg">
                    Real-time operational updates and engineering artifacts from the only AI logic implementers in Africa.
                 </p>
                 <div className="pt-4 flex gap-8">
                    <Button size="xl" className="h-18 px-12 bg-brand-charcoal text-white hover:bg-brand-blue rounded-2xl transition-all shadow-premium">Request Full Intel Access</Button>
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { label: "AI Blueprints", val: "140+", icon: <Bot /> },
                   { label: "Security Logs", val: "2.4k", icon: <Shield /> },
                   { label: "Logic Nodes", val: "∞", icon: <Cpu /> },
                   { label: "Sync Stable", val: "99.9%", icon: <Zap /> }
                 ].map((m, i) => (
                    <div key={i} className="p-10 bg-brand-gray-light border border-black/5 rounded-[3rem] space-y-6 group hover:bg-white hover:shadow-floating transition-all duration-700">
                       <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                          {m.icon}
                       </div>
                       <div>
                          <h4 className="text-4xl font-black font-outfit text-brand-charcoal">{m.val}</h4>
                          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 font-mono">{m.label}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ============= CALL TO ACTION ============= */}
      <section className="py-40 bg-brand-gray-bold/50 border-t border-black/5">
        <div className="container-custom text-center space-y-12">
           <h2 className="text-7xl md:text-[10rem] font-black font-outfit tracking-tighter text-brand-charcoal uppercase leading-[0.8] mb-12">
             Access <br /> <span className="text-brand-blue italic">The Registry.</span>
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
              <Link to="/contact">
                <Button size="xl" className="h-20 px-20 text-xl bg-brand-charcoal text-white hover:bg-brand-blue rounded-full border-0 shadow-premium transition-all">
                   Join Deployment <ArrowRight className="ml-4" />
                </Button>
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
};
