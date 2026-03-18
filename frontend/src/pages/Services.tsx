import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  ArrowRight,
  Activity
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';

const ServiceTrack = ({ title, icon, items }: { title: string, icon: any, items: string[] }) => (
  <div className="group p-10 bg-white border border-black/5 rounded-[3rem] hover:shadow-xl transition-all duration-700 space-y-10 group">
    <div className="flex flex-col gap-6 items-start md:items-center text-center">
       <div className="w-16 h-16 rounded-2xl bg-brand-gray-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
          {icon}
       </div>
       <div className="space-y-2">
          <h3 className="text-2xl font-black font-outfit text-brand-charcoal uppercase">{title}</h3>
          <p className="text-sm text-brand-charcoal/40 font-medium leading-relaxed">High-fidelity engineering nodes.</p>
       </div>
    </div>
    
    <div className="pt-8 border-t border-black/5">
       <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {items.slice(0, 4).map((item, i) => (
             <li key={i} className="flex items-center gap-3 text-sm font-bold text-brand-charcoal opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/30" /> {item}
             </li>
          ))}
       </ul>
    </div>
    
    <div className="pt-4 flex justify-center">
       <Button variant="outline" className="h-14 px-8 rounded-full border-black/5 group-hover:bg-brand-charcoal group-hover:text-white transition-all">
          Learn Track <ArrowRight size={18} className="ml-2" />
       </Button>
    </div>
  </div>
);

export const Services = () => {
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest font-bold">CORE CAPABILITIES</Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight font-outfit"
              >
                Engineering <br />
                The <span className="text-brand-blue">Logic.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="text-lg md:text-xl text-brand-charcoal/60 font-medium max-w-2xl leading-relaxed"
              >
                 We provide expert engineering services across AI, cybersecurity, and global software development.
              </motion.p>
           </div>
        </div>
      </section>

      {/* ============= TRACKS ============= */}
      <section className="py-32 bg-brand-gray-light/30 border-y border-black/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceTrack 
                title="AI & ML"
                icon={<Bot size={32} />}
                items={["Predictive Analytics", "Large Language Models", "Computer Vision", "Automated Logic Engines"]}
              />
              <ServiceTrack 
                title="Cybersecurity"
                icon={<Shield size={32} />}
                items={["Penetration Testing", "Security Architecture", "Managed SEC Ops", "Incident Response"]}
              />
              <ServiceTrack 
                title="Software Dev"
                icon={<Code size={32} />}
                items={["Enterprise Platforms", "Web/Mobile Core", "Backend Infrastructure", "System Integration"]}
              />
              <ServiceTrack 
                title="Cloud & Data"
                icon={<Database size={32} />}
                items={["Cloud Migration", "Data Engineering", "Real-time Sync", "Managed Databases"]}
              />
           </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
       <section className="py-32 bg-white">
        <div className="container-custom text-center space-y-8">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-brand-charcoal">
             Engage <br /> <span className="text-brand-blue">The Expert.</span>
           </h2>
           <Link to="/contact">
             <Button size="lg" className="h-14 px-12 bg-brand-charcoal text-white hover:bg-brand-blue rounded-full transition-all border-0 shadow-lg">
               Mission Sync <ArrowRight className="ml-3" />
             </Button>
           </Link>
        </div>
      </section>

    </div>
  );
};
