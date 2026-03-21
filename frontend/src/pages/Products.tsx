import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  MessageSquare,
  Bot,
  Activity,
  Globe2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';
import heroImg from '../assets/c1.jpg';

const ProductRegistryNode = ({ name, icon, desc, features, tags, version }: { name: string, icon: any, desc: string, features: string[], tags: string[], version: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all hover:shadow-floating transition-all duration-700 space-y-12 relative overflow-hidden"
  >
    <div className="absolute top-8 right-12 flex items-center gap-2">
       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
       <span className="text-sm font-bold text-brand-blue font-medium uppercase">{version}</span>
    </div>

    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
       <div className="flex items-center gap-8">
          <div className="w-24 h-24 rounded-[2.5rem] bg-brand-gray-light border border-gray-200 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-[#1A2332] transition-all duration-500 shadow-sm shrink-0">
             {icon}
          </div>
           <div className="space-y-4">
              <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-bold text-xs tracking-wider font-medium">PRODUCT_NODE</Badge>
              <h3 className="text-2xl md:text-3xl font-bold font-outfit text-[#1A2332] uppercase leading-none tracking-tighter">{name}</h3>
           </div>
       </div>
        <div className="flex flex-wrap gap-3">
           {tags.map((tag, i) => (
              <div key={i} className="px-5 py-2 bg-[#F3EFE6] rounded-xl border border-gray-200 text-xs font-bold text-gray-400 uppercase font-medium">{tag}</div>
           ))}
        </div>
    </div>
    
     <p className="text-2xl text-gray-500 font-bold leading-tight max-w-3xl">{desc}</p>
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-200">
        {features.map((feat, i) => (
           <div key={i} className="flex items-center gap-4 text-sm font-bold text-[#1A2332] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity font-outfit">
              <div className="w-2 h-2 rounded-full border border-brand-blue/30" /> {feat}
           </div>
        ))}
     </div>
     
     <div className="pt-8 flex justify-between items-center">
        <div className="flex -space-x-3">
           {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-primary bg-gray-50 flex items-center justify-center text-brand-blue/40">
                 <Bot size={18} />
              </div>
           ))}
        </div>
        <Link to="/contact">
          <Button size="xl" className="h-20 px-12 rounded-2xl bg-[#F3EFE6] text-[#1A2332] hover:bg-brand-blue transition-all border-gray-100 shadow-md hover:shadow-xl transition-all text-lg font-bold uppercase tracking-[0.2em] group">
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
                   <Globe2 size={14} className="mr-3 animate-pulse" /> PRODUCT_INVENTORY_HQ
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl lg:text-6xl lg:text-9xl font-bold leading-tight tracking-tightest uppercase"
                >
                  Sovereign <br />
                  <span className="text-brand-blue italic">Builds.</span>
                </motion.h1>
                 <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-xl md:text-3xl text-gray-500 font-bold max-w-3xl leading-tight tracking-tight"
                 >
                    Proprietary, high-scale digital products designed for immediate industry deployment and institutional node synchronization.
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

      {/* ============= PRODUCT REGISTRY MATRIX ============= */}
      <section className="py-24 border-y border-gray-200 bg-[#000000]">
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
      <section className="py-40 relative overflow-hidden bg-[#F3EFE6]">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider font-bold uppercase text-sm font-medium">PRODUCT_RELIABILITY</Badge>
                  <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold font-outfit tracking-tight leading-tight text-[#1A2332]">Reliability <br /> <span className="text-brand-blue italic">Metrics.</span></h2>
                  <p className="text-2xl text-gray-500 font-bold leading-tight max-w-xl tracking-tight">
                     Every product build is validated against extreme operational load to ensure absolute uptime for our global registry.
                  </p>
                 <div className="grid grid-cols-2 gap-8 pt-4">
                    {[
                      { label: "Deployments", val: "1.2k+" },
                      { label: "Sync Nodes", val: "240+" },
                      { label: "Uptime", val: "99.9%" },
                      { label: "Capacity", val: "2.4 PB" }
                    ].map((stat, i) => (
                       <div key={i} className="space-y-2">
                          <p className="text-5xl font-bold font-outfit text-[#1A2332] tracking-tighter">{stat.val}</p>
                          <p className="text-sm font-bold uppercase tracking-wider text-[#1A2332]/20 font-medium">{stat.label}</p>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-square bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-md hover:shadow-xl transition-all group">
                 <div className="absolute inset-x-0 bottom-0 h-4 bg-brand-blue shadow-lg shadow-blue-500/20 z-20" />
                 <Activity size={240} className="text-brand-blue/5 animate-pulse-slow scale-125" />
                 <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-charcoal/90" />
                 <div className="relative z-10 text-center space-y-6">
                    <p className="text-[10rem] font-bold text-[#1A2332] leading-none tracking-tightest">99.9%</p>
                    <p className="text-[12px] font-bold uppercase tracking-wider text-gray-500 font-medium">Uptime_Reliability_Score</p>
                 </div>
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
             Engage <br /> <span className="text-brand-blue italic">The Registry.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-white/5/10 text-white hover:text-white rounded-2xl border-0 transition-all shadow-lg shadow-blue-500/20 text-2xl font-bold uppercase tracking-widest group">
                Establish Sync <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
