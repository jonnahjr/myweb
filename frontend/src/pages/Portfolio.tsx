import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Terminal,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { Badge } from '../components/ui/Core';

const projects = [
  {
    title: "Project: Sovereign Mesh",
    category: "INFRA_SECURITY",
    client: "National Gov Node",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
    desc: "Deployment of a nationwide zero-trust logic mesh across 48 sovereign regional clusters.",
    metrics: ["100% Isolation", "6.4ms Latency"],
    id: "MISSION_LOG_01"
  },
  {
    title: "Project: Agentic Oracle",
    category: "AI_ORCHESTRATION",
    client: "Global Fin Cluster",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    desc: "Architecting a decentralized agentic reasoning engine for high-frequency financial settlement.",
    metrics: ["4.2B Tokens/sec", "Zero-Failure"],
    id: "MISSION_LOG_02"
  },
  {
    title: "Project: Neural Sink",
    category: "DATA_ENGINEERING",
    client: "Health Tech Node",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=2074",
    desc: "A massive decentralized neural data synchronization pipeline for secure patient data orchestration.",
    metrics: ["99.9% Logic Sync", "AES-256 Valid"],
    id: "MISSION_LOG_03"
  }
];

export const Portfolio = () => {
  const [filter, setFilter] = useState('ALL_LOGS');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['ALL_LOGS', 'INFRA_SECURITY', 'AI_ORCHESTRATION', 'DATA_ENGINEERING'];

  const filteredProjects = filter === 'ALL_LOGS' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-brand-cream min-h-screen pt-20 overflow-hidden">
      
      {/* ============= PORTFOLIO HERO ============= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        <div className="absolute inset-0 radial-grid opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cream/40 to-brand-cream" />

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-6xl space-y-12">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
            >
              <Badge variant="blue"><Terminal size={12} className="mr-2" /> Mission Archive v2.4</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tightest uppercase font-outfit"
            >
              Operational <br />
              <span className="gradient-text">History.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-brand-charcoal/40 font-medium leading-relaxed max-w-4xl"
            >
              Examine our historical mission records and global deployments. A registry of technical excellence and sovereign stability.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============= PROJECT HUD & REGISTRY (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
          {/* HUD Filter Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 border-b border-black/[0.06] pb-10">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative ${
                    filter === cat 
                      ? 'bg-brand-blue text-white shadow-sm' 
                      : 'text-brand-charcoal/40 hover:text-brand-charcoal hover:bg-black/[0.04]'
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 text-brand-charcoal/20 font-mono text-xs">
               <Activity size={14} className="text-brand-blue animate-pulse" />
               REGISTRY_COUNT: {filteredProjects.length}
            </div>
          </div>

          {/* Project List */}
          <div className="space-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <div className="premium-card p-0 overflow-hidden group border-black/[0.05] bg-brand-cream-bold/30">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Image Area */}
                      <div className="lg:col-span-5 relative overflow-hidden min-h-[400px]">
                        <img 
                          src={project.image} 
                          className="w-full h-full object-cover brightness-[0.9] group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100 contrast-[0.9]" 
                          alt={project.title} 
                        />
                        <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay group-hover:bg-transparent transition-colors" />
                        <div className="absolute top-8 left-8">
                           <span className="bg-brand-cream-bold/80 backdrop-blur-md px-5 py-2 rounded-xl text-[10px] font-black tracking-widest text-brand-blue border border-brand-blue/30 uppercase">
                              {project.id}
                           </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="lg:col-span-7 p-12 lg:p-16 flex flex-col justify-between space-y-12">
                         <div className="space-y-8">
                            <div className="flex items-center gap-4">
                               <Badge variant="blue">{project.category}</Badge>
                               <span className="text-brand-charcoal/20 font-black text-[10px] uppercase tracking-[0.4em]">• {project.client}</span>
                            </div>
                            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight text-brand-charcoal">{project.title}</h3>
                            <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed max-w-2xl">{project.desc}</p>
                         </div>

                         <div className="flex flex-col sm:flex-row gap-12 items-end sm:items-center justify-between">
                            <div className="flex gap-8">
                               {project.metrics.map(m => (
                                  <div key={m} className="space-y-1">
                                     <div className="flex items-center gap-2 text-brand-mint">
                                        <CheckCircle2 size={14} />
                                        <span className="text-xl font-black uppercase font-outfit">{m.split(' ')[0]}</span>
                                     </div>
                                     <div className="text-[9px] font-bold text-brand-charcoal/20 uppercase tracking-[0.3em]">{m.split(' ').slice(1).join(' ')}</div>
                                  </div>
                               ))}
                            </div>
                            
                            <button className="btn-primary px-10 py-5 group/btn shadow-sm">
                                Access Intel <ArrowUpRight className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                         </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ============= DEEP STATS ARCHIVE (BOLD CREAM SECTION) ============= */}
      <section className="section-padding relative overflow-hidden bg-brand-cream-bold text-brand-charcoal">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: "Deployment Logic", val: "L10 Secure", sub: "National Architecture Std" },
                { label: "Throughput Cap", val: "4.2 PB/s", sub: "Global Sync Node Ready" },
                { label: "Stability Index", val: "Alpha-Zero", sub: "Mission Critical Uptime" }
              ].map((s, i) => (
                <div key={i} className="glass-panel p-10 border-black/5 space-y-4 bg-white/40">
                   <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{s.label}</div>
                   <div className="text-4xl font-black font-outfit text-brand-charcoal">{s.val}</div>
                   <div className="text-sm text-brand-charcoal/40 font-medium">{s.sub}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};
