import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Command, 
  Shield, 
  Layers, 
  Box, 
  ArrowUpRight, 
  Workflow
} from 'lucide-react';
import { GlassCard, Button, Badge } from '../components/ui/Core';
import techAbstract from '../assets/tech_abstract.png';

const products = [
  {
    id: "PROD_CORE_X",
    title: "Agentic-X Command",
    icon: <Command size={48} />,
    desc: "The primary orchestrator for autonomous agentic units. Deploy reasoning logic at scale with ultra-low latency.",
    specs: ["Latency: 0.1ms", "L10 Security", "LLM Native"],
    accent: "brand-blue"
  },
  {
    id: "PROD_MESH_ZT",
    title: "Zero-Trust Mesh",
    icon: <Shield size={48} />,
    desc: "A decentralized infrastructure guard protocol mapping global node identities to private sovereign clusters.",
    specs: ["AES-256 Sink", "Node Isolation", "Quantum Ready"],
    accent: "brand-mint"
  }
];

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen pt-20 overflow-hidden">
      
      {/* ============= PRODUCTS HERO ============= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={techAbstract} 
            className="w-full h-full object-cover brightness-[0.9] opacity-40 blur-[2px] scale-110" 
            alt="Product Abstract" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent" />
          <div className="absolute inset-0 mesh-gradient opacity-10" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-6xl space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="blue"><Box size={12} className="mr-2" /> Hardware-Software Sync v9.2</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tightest uppercase font-outfit"
            >
              The Product <br />
              <span className="gradient-text">Matrix.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-brand-charcoal/40 font-medium leading-relaxed max-w-4xl"
            >
              Engineered logic tools for high-frequency deployment. Explore our primary sovereign software clusters and command units.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============= PRODUCT BENTO GRID (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
          <div className="bento-grid">
            {products.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="lg:col-span-6 bento-item group bg-brand-cream-bold/30"
              >
                  {/* Decorative Monitor Design */}
                  <div className="absolute -bottom-20 -right-20 text-brand-blue/5 group-hover:text-brand-blue/10 transition-colors pointer-events-none">
                     <Workflow size={320} strokeWidth={0.5} />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="space-y-10">
                       <div className="flex justify-between items-start">
                          <div className={`w-20 h-20 rounded-3xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue shadow-sm`}>
                            {product.icon}
                          </div>
                          <div className="font-mono text-[10px] font-black tracking-[0.4em] text-brand-charcoal/20 uppercase mt-4">{product.id}</div>
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-5xl font-black uppercase tracking-tighter leading-tight text-brand-charcoal">{product.title}</h3>
                          <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed">{product.desc}</p>
                       </div>
                    </div>

                    <div className="pt-12 space-y-8">
                       <div className="flex flex-wrap gap-3">
                          {product.specs.map(spec => (
                             <span key={spec} className="px-5 py-2.5 rounded-xl bg-black/5 border border-black/5 text-[10px] font-black text-brand-blue uppercase tracking-widest">{spec}</span>
                          ))}
                       </div>
                       <button className="btn-primary w-full py-6 group/btn">
                          Initialize Deployment <ArrowUpRight className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                       </button>
                    </div>
                  </div>
              </motion.div>
            ))}

            {/* Modularity Protocol Feature (BOLD CREAM SECTION AS BENTO) */}
            <motion.div className="lg:col-span-12 bento-item bg-brand-cream-bold text-brand-charcoal">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10">
                     <Badge variant="mint">Modularity Protocol</Badge>
                     <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.8] text-brand-charcoal">
                        The <span className="gradient-text-mint">Stackable</span> <br /> Architecture.
                     </h2>
                     <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed font-outfit">
                        Every NEXYOVI product is designed to stack synchronously with others. Build your own sovereign logic mesh by connecting Agentic Command units with Zero-Trust Sink nodes.
                     </p>
                     <div className="pt-6">
                        <Button variant="outline" className="px-12">Review API Documentation</Button>
                     </div>
                  </div>
                  <div className="relative aspect-video">
                     <GlassCard intensity="strong" className="h-full flex items-center justify-center border-black/5 shadow-floating bg-white/40">
                        <div className="flex flex-col gap-4 items-center scale-125">
                           {[1, 2, 3].map(i => (
                             <motion.div 
                                key={i}
                                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                                className="w-48 h-12 bg-black/5 border border-black/5 rounded-2xl flex items-center justify-center text-brand-blue/60 font-mono text-[9px] font-black tracking-widest uppercase"
                             >
                                <Layers size={14} className="mr-3" /> LOGIC_BLOCK_0{i}
                             </motion.div>
                           ))}
                        </div>
                     </GlassCard>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
