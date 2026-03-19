import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  Cloud, 
  ArrowRight, 
  MessageSquare,
  Bot,
  CheckCircle2,
  Activity,
  Globe2,
  Zap,
  Shield,
  Cpu,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';

const ProductRegistryNode = ({ name, icon, desc, features, tags, version }: { name: string, icon: any, desc: string, features: string[], tags: string[], version: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group p-16 bg-brand-surface border border-black/5 rounded-[4.5rem] shadow-premium hover:shadow-floating transition-all duration-700 space-y-12 relative overflow-hidden"
  >
    <div className="absolute top-12 right-12 flex items-center gap-2">
       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
       <span className="text-[10px] font-black text-brand-blue tracking-widest font-mono uppercase">{version}</span>
    </div>

    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
       <div className="flex items-center gap-8">
          <div className="w-24 h-24 rounded-[2.5rem] bg-brand-gray-light border border-black/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
             {icon}
          </div>
          <div className="space-y-4">
             <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[9px] tracking-[0.4em] font-mono">PRODUCT_NODE</Badge>
             <h3 className="text-4xl md:text-5xl font-black font-outfit text-brand-charcoal uppercase leading-none tracking-tighter">{name}</h3>
          </div>
       </div>
       <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
             <div key={i} className="px-5 py-2 bg-brand-gray-light rounded-xl border border-black/5 text-[9px] font-black text-brand-charcoal/30 uppercase tracking-widest font-mono">{tag}</div>
          ))}
       </div>
    </div>
    
    <p className="text-2xl text-brand-charcoal/40 font-bold leading-tight max-w-3xl">{desc}</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-black/5">
       {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-4 text-sm font-black text-brand-charcoal uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity font-outfit">
             <div className="w-2 h-2 rounded-full border border-brand-blue/30" /> {feat}
          </div>
       ))}
    </div>
    
    <div className="pt-8 flex justify-between items-center">
       <div className="flex -space-x-3">
          {[1,2,3,4].map(i => (
             <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-brand-gray-light flex items-center justify-center text-brand-blue/40">
                <Bot size={18} />
             </div>
          ))}
       </div>
       <Link to="/contact">
         <Button size="xl" className="h-20 px-12 rounded-[2rem] bg-brand-charcoal text-white hover:bg-brand-blue transition-all border-0 shadow-premium text-lg font-black uppercase tracking-[0.2em] group">
            Initialize Deploy <ArrowRight size={22} className="ml-4 group-hover:translate-x-2 transition-transform" />
         </Button>
       </Link>
    </div>
  </motion.div>
);

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-brand-charcoal font-outfit pt-24">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
           <div className="max-w-7xl space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] uppercase text-[10px] font-black font-mono px-6 py-2">
                   <Globe2 size={14} className="mr-3 animate-pulse" /> PRODUCT_INVENTORY_HQ
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tightest uppercase"
                >
                  Sovereign <br />
                  <span className="text-brand-blue italic">Builds.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-3xl text-brand-charcoal/40 font-bold max-w-3xl leading-tight tracking-tight"
                >
                   Proprietary, high-scale digital products designed for immediate industry deployment and institutional node synchronization.
                </motion.p>
              </div>
           </div>
        </div>
      </section>

      {/* ============= PRODUCT REGISTRY MATRIX ============= */}
      <section className="py-24 bg-brand-gray-bold/20 border-y border-black/5">
        <div className="container-custom space-y-12">
           <ProductRegistryNode 
             name="NEXYOVI AI Chat"
             version="V2.4_STABLE"
             icon={<MessageSquare size={36} />}
             desc="Enterprise AI assistant for business logic and tactical automation across regional clusters."
             features={["Business Logic", "Support Nodes", "Private Data", "Multi-sync"]}
             tags={["AI", "LLM", "LOGIC"]}
           />
           <ProductRegistryNode 
             name="NEXYOVI SecureCore"
             version="V4.0_SHIELD"
             icon={<ShieldCheck size={36} />}
             desc="Security monitoring and threat detection hub for critical assets and sovereign national nodes."
             features={["Monitoring", "Threat Detection", "Risk Analysis", "Auth Unit"]}
             tags={["SEC", "TRUST", "ZERO"]}
           />
           <ProductRegistryNode 
             name="NEXYOVI DataGrid"
             version="V1.8_GRID"
             icon={<Database size={36} />}
             desc="Massive scale data management and analytics mesh for global organizational decision logic."
             features={["Pipelines", "Dashboards", "Analytics Nodes", "Live Sync"]}
             tags={["DATA", "GRID", "BI"]}
           />
        </div>
      </section>

      {/* ============= PERFORMANCE REGISTRY ============= */}
      <section className="py-40 bg-brand-surface relative overflow-hidden">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">PRODUCT_RELIABILITY</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tightest leading-tight">Reliability <br /> <span className="text-brand-blue italic">Metrics.</span></h2>
                 <p className="text-2xl text-brand-charcoal/40 font-bold leading-tight max-w-xl tracking-tight">
                    Every product build is validated against extreme operational load to ensure absolute uptime for our global registry.
                 </p>
                 <div className="grid grid-cols-2 gap-12 pt-4">
                    {[
                      { label: "Deployments", val: "1.2k+" },
                      { label: "Sync Nodes", val: "240+" },
                      { label: "Uptime", val: "99.9%" },
                      { label: "Capacity", val: "2.4 PB" }
                    ].map((stat, i) => (
                       <div key={i} className="space-y-2">
                          <p className="text-5xl font-black font-outfit text-brand-charcoal tracking-tighter">{stat.val}</p>
                          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 font-mono">{stat.label}</p>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-square bg-brand-charcoal rounded-[5rem] flex items-center justify-center overflow-hidden shadow-premium group">
                 <div className="absolute inset-x-0 bottom-0 h-4 bg-brand-blue shadow-glow z-20" />
                 <Activity size={240} className="text-brand-blue/5 animate-pulse-slow scale-125" />
                 <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-charcoal/90" />
                 <div className="relative z-10 text-center space-y-6">
                    <p className="text-[10rem] font-black text-white leading-none tracking-tightest">99.9%</p>
                    <p className="text-[12px] font-black uppercase tracking-[0.6em] text-white/40 font-mono">Uptime_Reliability_Score</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= CONTACT CALL TO ACTION ============= */}
      <section className="py-40 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-blue/20 blur-[180px] rounded-full" />
        </div>
        <div className="container-custom text-center relative z-10 space-y-16">
           <Badge variant="blue" className="bg-brand-blue/20 text-brand-blue border-white/10 tracking-[0.5em] font-black uppercase text-[10px] font-mono px-6 py-2">PROTOCOL_INITIALIZE</Badge>
           <h2 className="text-6xl md:text-9xl font-black font-outfit text-white uppercase tracking-tightest leading-[0.8] mb-12">
             Engage <br /> <span className="text-brand-blue italic">The Registry.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-brand-surface text-white hover:text-brand-charcoal rounded-[3rem] border-0 transition-all shadow-glow text-2xl font-black uppercase tracking-widest group">
                Establish Sync <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
