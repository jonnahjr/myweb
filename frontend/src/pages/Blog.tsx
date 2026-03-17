import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Calendar, User } from 'lucide-react';
import { Badge } from '../components/ui/Core';

const posts = [
  {
    title: "The Epoch of Technical Sovereignty",
    id: "LOG_INTEL_01",
    excerpt: "Architecting autonomous digital foundations for the next world-scale infrastructure transition.",
    category: "STRATEGY",
    date: "MAR 12, 2026",
    author: "Unit L10",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    col: "lg:col-span-8"
  },
  {
    title: "Zero-Trust Protocol Sync",
    id: "LOG_SEC_X9",
    excerpt: "Ensuring data integrity across multi-node intercontinental clusters.",
    category: "SECURITY",
    date: "MAR 10, 2026",
    author: "Unit SEC",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    col: "lg:col-span-4"
  },
  {
    title: "AI Orchestration v4.0",
    id: "LOG_AI_REASON",
    excerpt: "Deploying high-frequency autonomous reasoning engines at the edge.",
    category: "ENGINEERING",
    date: "MAR 08, 2026",
    author: "Unit AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    col: "lg:col-span-4"
  },
  {
    title: "Global Logic Mesh",
    id: "LOG_MESH_NET",
    excerpt: "Optimizing cross-border data flux for sovereign cloud infrastructure.",
    category: "INFRASTRUCTURE",
    date: "MAR 05, 2026",
    author: "Unit CLOUD",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    col: "lg:col-span-8"
  }
];

export const Blog = () => {
  const [activeTab, setActiveTab] = useState('ALL_LOGS');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen pt-20 overflow-hidden">
      
      {/* ============= ACADEMY HERO ============= */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cream/40 to-brand-cream" />
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-6xl space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="blue"><Activity size={12} className="mr-2" /> Signal Intelligence Feed</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tightest uppercase font-outfit"
            >
              Intelligence <br />
              <span className="gradient-text">Logbooks.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-brand-charcoal/40 font-medium leading-relaxed max-w-4xl"
            >
              Technical documentation, strategic insight, and engineering artifacts from the mission frontier.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============= INTEL REGISTRY (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
          {/* Filter Registry */}
          <div className="flex gap-4 mb-20 overflow-x-auto pb-6 scrollbar-hide">
            {['ALL_LOGS', 'STRATEGY', 'SECURITY', 'ENGINEERING', 'INFRA'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 relative ${
                   activeTab === tab ? 'text-brand-charcoal' : 'text-brand-charcoal/20 hover:text-brand-charcoal'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="intel-nav" 
                    className="absolute inset-0 rounded-xl bg-black/5 border border-black/10 shadow-sm -z-10" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="bento-grid">
            {posts.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`${post.col} bento-item group relative h-[500px] overflow-hidden`}
              >
                 {/* Card Background Image */}
                 <div className="absolute inset-0 z-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.9] contrast-[0.9]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-cream-bold via-brand-cream-bold/40 to-transparent" />
                 </div>

                 <div className="relative z-10 h-full flex flex-col justify-between p-10">
                    <div className="flex justify-between items-start">
                       <Badge variant="blue">{post.category}</Badge>
                       <span className="text-brand-charcoal/20 font-mono text-[9px] uppercase tracking-widest">{post.id}</span>
                    </div>

                    <div className="space-y-6">
                       <div className="flex items-center gap-6 text-brand-charcoal/40 text-[9px] font-black uppercase tracking-[0.3em]">
                          <span className="flex items-center gap-2 font-mono"><Calendar size={12} className="text-brand-blue" /> {post.date}</span>
                          <span className="flex items-center gap-2 font-mono"><User size={12} className="text-brand-blue" /> {post.author}</span>
                       </div>
                       <h3 className="text-4xl font-black uppercase tracking-tighter leading-tight group-hover:text-brand-blue transition-colors duration-500 font-outfit text-brand-charcoal">
                          {post.title}
                       </h3>
                       <p className="text-lg text-brand-charcoal/60 font-medium max-w-xl line-clamp-2">
                          {post.excerpt}
                       </p>
                       <div className="pt-6">
                         <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal hover:text-brand-blue transition-colors group/btn">
                            Initialize_Reading_Protocol <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                         </button>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= INTEL SYNC CTA (BOLD CREAM SECTION) ============= */}
      <section className="section-padding bg-brand-cream-bold">
         <div className="container-custom">
            <div className="premium-card p-16 md:p-24 text-center space-y-12 overflow-hidden relative border-black/5 bg-white/40">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
               
               <div className="relative z-10 space-y-6">
                  <Badge variant="blue">Deep Sync Registry</Badge>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tightest font-outfit text-brand-charcoal">Sync with the <br /><span className="gradient-text">Frontier.</span></h2>
                  <p className="text-xl text-brand-charcoal/40 font-medium max-w-2xl mx-auto">Get technical intel and mission updates delivered to your mail node via secure broadcast.</p>
               </div>

               <div className="relative z-10 max-w-xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-4">
                     <input 
                        type="email" 
                        placeholder="MAIL_NODE@SECURE.LOG"
                        className="flex-grow bg-black/5 border border-black/5 rounded-2xl py-6 px-8 text-brand-charcoal font-bold tracking-widest focus:outline-none focus:border-brand-blue/30 transition-all font-mono"
                     />
                     <button className="btn-primary py-6 px-12 shadow-sm uppercase font-black tracking-widest">Establish_Sync</button>
                  </div>
                  <p className="text-[9px] font-black text-brand-charcoal/10 uppercase tracking-[0.5em] mt-8 font-mono">Zero-Trust_Transport_Active // Priority_Node_Registry</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};
