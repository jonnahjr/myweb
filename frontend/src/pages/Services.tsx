import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  ArrowRight,
  Activity,
  Globe2,
  Zap,
  Cpu,
  Lock
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';

const ServiceRegistryNode = ({ title, icon, items, status }: { title: string, icon: any, items: string[], status: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group p-16 bg-brand-surface border border-black/5 rounded-[4rem] shadow-premium hover:shadow-floating transition-all duration-700 space-y-12 relative overflow-hidden"
  >
    <div className="absolute top-12 right-12 flex items-center gap-2">
       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
       <span className="text-[10px] font-black text-brand-blue tracking-widest font-mono uppercase">{status}</span>
    </div>

    <div className="flex flex-col gap-8 items-start">
       <div className="w-20 h-20 rounded-[2rem] bg-brand-gray-light border border-black/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
          {icon}
       </div>
       <div className="space-y-4">
          <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[9px] tracking-[0.4em] font-mono">SERVICE_NODE</Badge>
          <h3 className="text-4xl md:text-5xl font-black font-outfit text-brand-charcoal uppercase tracking-tighter leading-none">{title}</h3>
          <p className="text-xl text-brand-charcoal/40 font-bold leading-tight max-w-sm">Engineering absolute synchrony for your logical builds.</p>
       </div>
    </div>
    
    <div className="pt-10 border-t border-black/5">
       <ul className="space-y-4">
          {items.map((item, i) => (
             <li key={i} className="flex items-center gap-4 text-base font-black text-brand-charcoal uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity font-outfit">
                <div className="w-2 h-2 rounded-full border border-brand-blue/30" /> {item}
             </li>
          ))}
       </ul>
    </div>
    
    <div className="pt-6">
       <Link to="/contact">
         <Button size="xl" className="h-20 w-full rounded-[2rem] bg-brand-charcoal text-white hover:bg-brand-blue transition-all border-0 shadow-premium text-lg font-black uppercase tracking-[0.2em] group">
            Initialize Sync <ArrowRight size={22} className="ml-4 group-hover:translate-x-2 transition-transform" />
         </Button>
       </Link>
    </div>
  </motion.div>
);

export const Services = () => {
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
                   <Globe2 size={14} className="mr-3 animate-pulse" /> SERVICE_REGISTRY_HQ
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tightest uppercase"
                >
                  Engineering <br />
                  The <span className="text-brand-blue italic">Logic.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-3xl text-brand-charcoal/40 font-bold max-w-3xl leading-tight tracking-tight"
                >
                   We provide expert engineering services across AI, cybersecurity, and global software development within our institutional framework.
                </motion.p>
              </div>
           </div>
        </div>
      </section>

      {/* ============= SERVICE REGISTRY MATRIX ============= */}
      <section className="py-24 bg-brand-gray-bold/20 border-y border-black/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ServiceRegistryNode 
                title="AI & ML"
                status="ACTIVE"
                icon={<Bot size={36} />}
                items={["Predictive Analytics", "Large Language Models", "Computer Vision", "Automated Logic Engines"]}
              />
              <ServiceRegistryNode 
                title="Cybersecurity"
                status="SHIELDED"
                icon={<Shield size={36} />}
                items={["Penetration Testing", "Security Architecture", "Managed SEC Ops", "Incident Response"]}
              />
              <ServiceRegistryNode 
                title="Software Dev"
                status="SYNCED"
                icon={<Code size={36} />}
                items={["Enterprise Platforms", "Web/Mobile Core", "Backend Infrastructure", "System Integration"]}
              />
              <ServiceRegistryNode 
                title="Cloud & Data"
                status="STABLE"
                icon={<Database size={36} />}
                items={["Cloud Migration", "Data Engineering", "Real-time Sync", "Managed Databases"]}
              />
           </div>
        </div>
      </section>

      {/* ============= GLOBAL NODE NETWORK ============= */}
      <section className="py-40 bg-brand-surface relative overflow-hidden">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">REGISTRY_NETWORK</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tightest leading-tight">Global <br /> <span className="text-brand-blue italic">Sync.</span></h2>
                 <p className="text-2xl text-brand-charcoal/40 font-bold leading-tight max-w-xl">
                    Our units operate across intercontinental nodes to ensure absolute synchrony for your enterprise logical builds.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['Addis Ababa Hub', 'Nairobi Node', 'Dubai Hub', 'Remote Command'].map((loc, i) => (
                       <div key={i} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-brand-charcoal/60 p-4 bg-brand-gray-light rounded-xl border border-black/5">
                          <Activity size={16} className="text-brand-blue" />
                          {loc}
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-square bg-brand-gray-light border border-black/5 rounded-[5rem] flex items-center justify-center overflow-hidden shadow-premium">
                 <div className="absolute inset-x-0 top-0 h-2 bg-brand-blue shadow-glow z-20" />
                 <Globe2 size={300} className="text-brand-blue/[0.03] animate-spin-slow rotate-12" />
                 <div className="absolute inset-0 bg-radial-gradient from-transparent to-white/90" />
                 <div className="relative z-10 text-center space-y-6">
                    <p className="text-[10rem] font-black text-brand-charcoal leading-none tracking-tightest">240+</p>
                    <p className="text-[12px] font-black uppercase tracking-[0.6em] text-brand-charcoal/20 font-mono">Active_Nodes_Global</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
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
                Register Node <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
