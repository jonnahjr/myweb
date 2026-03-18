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
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';

const ProductCard = ({ name, icon, desc, features, tags }: { name: string, icon: any, desc: string, features: string[], tags: string[] }) => (
  <div className="group p-10 bg-white border border-black/5 rounded-[3rem] hover:shadow-xl transition-all duration-700 space-y-10 group">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
       <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-gray-light flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
             {icon}
          </div>
          <h3 className="text-2xl font-black font-outfit text-brand-charcoal uppercase leading-tight">{name}</h3>
       </div>
       <div className="flex gap-2">
          {tags.map((tag, i) => (
             <Badge key={i} variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-mono text-[8px]">{tag}</Badge>
          ))}
       </div>
    </div>
    
    <p className="text-lg text-brand-charcoal/40 font-medium leading-relaxed max-w-xl">{desc}</p>
    
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-black/5">
       {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-bold text-brand-charcoal/50">
             <CheckCircle2 size={14} className="text-brand-blue" /> {feat}
          </div>
       ))}
    </div>
    
    <div className="pt-4 flex justify-between items-center">
       <div className="flex -space-x-2">
          {[1,2,3].map(i => (
             <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-gray-light flex items-center justify-center text-brand-blue">
                <Bot size={14} />
             </div>
          ))}
       </div>
       <Link to="/contact">
         <Button variant="outline" className="h-12 px-8 rounded-full border-black/5 group-hover:bg-brand-charcoal group-hover:text-white transition-all">
            Deploy Node <ArrowRight size={16} className="ml-2" />
         </Button>
       </Link>
    </div>
  </div>
);

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-brand-charcoal">
      
      {/* ============= HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 pt-32">
        <div className="container-custom relative z-10 mx-auto max-w-6xl">
           <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest font-bold">DIGITAL INVENTORY</Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight font-outfit"
              >
                Sovereign <br />
                <span className="text-brand-blue">Builds.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="text-lg md:text-xl text-brand-charcoal/60 font-medium max-w-2xl leading-relaxed"
              >
                 Proprietary, high-scale digital products designed for immediate industry deployment and node synchronization.
              </motion.p>
           </div>
        </div>
      </section>

      {/* ============= PRODUCTS ============= */}
      <section className="py-32 bg-brand-gray-light/30 border-y border-black/5">
        <div className="container-custom space-y-8">
           <ProductCard 
             name="NEXYOVI AI Chat"
             icon={<MessageSquare size={28} />}
             desc="Enterprise AI assistant for business logic and tactical automation across clusters."
             features={["Business Logic", "Support Nodes", "Private Data", "Multi-sync"]}
             tags={["AI", "LLM"]}
           />
           <ProductCard 
             name="NEXYOVI SecureCore"
             icon={<ShieldCheck size={28} />}
             desc="Security monitoring and threat detection hub for critical assets and national nodes."
             features={["Monitoring", "Threat Detection", "Risk Analysis"]}
             tags={["SEC", "TRUST"]}
           />
           <ProductCard 
             name="NEXYOVI DataGrid"
             icon={<Database size={28} />}
             desc="Massive scale data management and analytics mesh for organizational decision logic."
             features={["Pipelines", "Dashboards", "Analytics Nodes"]}
             tags={["DATA", "GRID"]}
           />
        </div>
      </section>

      {/* ============= STATS ============= */}
      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent">Performance Matrix</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-outfit text-brand-charcoal">
                 Reliability <br /> <span className="text-brand-blue">Metrics.</span>
              </h2>
              <div className="grid grid-cols-2 gap-8 pt-4">
                 {[
                   { label: "Deployments", val: "1.2k+" },
                   { label: "Sync Nodes", val: "240+" },
                   { label: "Uptime", val: "99.9%" },
                   { label: "Capacity", val: "2.4 PB" }
                 ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                       <p className="text-3xl font-black font-outfit text-brand-charcoal">{stat.val}</p>
                       <p className="text-[9px] font-black uppercase tracking-widest text-brand-charcoal/20 font-mono">{stat.label}</p>
                    </div>
                 ))}
              </div>
           </div>
           <div className="relative aspect-video bg-brand-charcoal rounded-[3rem] overflow-hidden flex items-center justify-center">
              <Activity size={80} className="text-brand-blue/20 animate-spin-slow" />
           </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
       <section className="py-32 bg-brand-gray-bold/50 border-t border-black/5">
        <div className="container-custom text-center space-y-8">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-brand-charcoal uppercase leading-[0.8] mb-12">
             Engage <br /> <span className="text-brand-blue">The Registry.</span>
           </h2>
           <Link to="/contact">
             <Button size="lg" className="h-14 px-12 bg-brand-charcoal text-white hover:bg-brand-blue rounded-full transition-all border-0 shadow-lg">
               Initialize Sync <ArrowRight className="ml-3" />
             </Button>
           </Link>
        </div>
      </section>

    </div>
  );
};
