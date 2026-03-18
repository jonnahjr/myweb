import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  ShoppingCart, 
  Truck, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';

const IndustrySolution = ({ title, icon, iconColor, outcomes, desc }: { title: string, icon: any, iconColor: string, outcomes: string[], desc: string }) => (
  <div className="group p-10 bg-white border border-black/5 rounded-[3rem] hover:shadow-xl transition-all duration-700 space-y-10 group">
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
       <div className={`w-16 h-16 rounded-2xl bg-brand-gray-light flex items-center justify-center ${iconColor} shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-500`}>
          {icon}
       </div>
       <div className="space-y-1 flex-1">
          <h3 className="text-2xl font-black font-outfit text-brand-charcoal uppercase leading-tight">{title}</h3>
          <p className="text-sm text-brand-charcoal/40 font-medium leading-relaxed max-w-xl">{desc}</p>
       </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-black/5">
       {outcomes.map((outcome, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-bold text-brand-charcoal/50 group-hover:opacity-100 transition-opacity">
             <CheckCircle2 size={16} className="text-brand-blue" /> {outcome}
          </div>
       ))}
    </div>
    
    <div className="pt-4 flex justify-end">
       <Button variant="outline" className="h-12 px-8 rounded-full border-black/5 group-hover:bg-brand-charcoal group-hover:text-white transition-all">
          View Industry Solution <ArrowRight size={16} className="ml-2" />
       </Button>
    </div>
  </div>
);

export const Solutions = () => {
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
                <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest font-bold">INDUSTRY OUTCOMES</Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight font-outfit"
              >
                Deliver <br />
                <span className="text-brand-blue">Impact.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="text-lg md:text-xl text-brand-charcoal/60 font-medium max-w-2xl leading-relaxed"
              >
                 NEXYOVI solves industrial challenges through outcome-focused engineering for large-scale businesses.
              </motion.p>
           </div>
        </div>
      </section>

      {/* ============= SOLUTIONS ============= */}
      <section className="py-32 bg-brand-gray-light/30 border-y border-black/5">
        <div className="container-custom space-y-12">
           <IndustrySolution 
             title="Banking & Fintech"
             icon={<Landmark size={32} />}
             iconColor="text-brand-blue"
             desc="Redefining financial trust through secure core banking systems and AI fraud detection."
             outcomes={["Modern Core Banking", "Fraud AI Nodes", "Secure Payments"]}
           />
           <IndustrySolution 
             title="Government"
             icon={<Building2 size={32} />}
             iconColor="text-brand-blue"
             desc="Architecting national data systems and digital identity for sovereign state security."
             outcomes={["National Registries", "Digital Identity", "Smart Infrastructure"]}
           />
           <IndustrySolution 
             title="Logistics"
             icon={<Truck size={32} />}
             iconColor="text-brand-blue"
             desc="Optimizing supply chains with real-time tracking systems and autonomous optimization logic."
             outcomes={["Tracking Nodes", "Logic Optima", "Live Dashboards"]}
           />
           <IndustrySolution 
             title="Healthcare"
             icon={<Stethoscope size={32} />}
             iconColor="text-brand-blue"
             desc="Transforming patient systems and diagnostic logic with absolute data security and privacy."
             outcomes={["Patient Nodes", "AI Logic Diags", "Secure Registries"]}
           />
        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="py-32 bg-white">
        <div className="container-custom text-center space-y-8">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-brand-charcoal uppercase leading-[0.8]">
             Engage <br /> <span className="text-brand-blue">The Outcome.</span>
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
