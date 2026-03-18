import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';

const RoleCard = ({ title, category, location, id }: { title: string, category: string, location: string, id: string }) => (
  <div className="group p-8 bg-white border border-black/5 rounded-[2.5rem] hover:shadow-xl transition-all duration-700 space-y-6">
     <div className="flex justify-between items-start">
        <div className="space-y-1">
           <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-mono text-[8px] tracking-widest">{id}</Badge>
           <h3 className="text-xl font-black font-outfit text-brand-charcoal uppercase leading-tight">{title}</h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-brand-gray-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
           <ArrowRight size={16} />
        </div>
     </div>
     <div className="flex gap-4">
        <span className="text-[9px] font-black uppercase tracking-widest text-brand-charcoal/30">{category}</span>
        <span className="text-[9px] font-black uppercase tracking-widest text-brand-blue">{location}</span>
     </div>
     <Button className="w-full h-12 rounded-xl border-black/5 group-hover:bg-brand-charcoal group-hover:text-white transition-all text-sm font-bold" variant="outline">
        Join Unit
     </Button>
  </div>
);

export const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-brand-charcoal">
      
      {/* ============= HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 pt-32 mx-auto max-w-6xl">
        <div className="container-custom relative z-10 w-full mx-auto">
           <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest font-bold">TALENT ASSEMBLY</Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight font-outfit"
              >
                Join <br />
                The <span className="text-brand-blue font-outfit">Unit.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="text-lg md:text-xl text-brand-charcoal/60 font-medium max-w-2xl leading-relaxed"
              >
                 Join a team building advanced AI and infrastructure systems for global businesses.
              </motion.p>
           </div>
        </div>
      </section>

      {/* ============= ROLES ============= */}
      <section className="py-32 bg-brand-gray-light/30 border-y border-black/5">
        <div className="container-custom space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <RoleCard id="AI_01" title="AI Engineer" category="Logic Systems" location="Remote" />
              <RoleCard id="BE_04" title="Backend Developer" category="Architecture" location="Hybrid" />
              <RoleCard id="SEC_09" title="Security Analyst" category="Offensive Ops" location="Hybrid" />
           </div>
        </div>
      </section>

      {/* ============= BENEFITS ============= */}
      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent">DNA & Culture</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-outfit text-brand-charcoal">
                 Elite <br /> <span className="text-brand-blue">Benefits.</span>
              </h2>
           </div>
           
           <div className="grid grid-cols-1 gap-8">
              {[
                { title: "Global Projects", desc: "Work on high-stakes missions spanning national clusters." },
                { title: "Remote Friendly", desc: "Our synchrony allows for absolute professional freedom." },
                { title: "High-impact", desc: "Engineer the future of the digital economy." }
              ].map((benefit, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-gray-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                       <CheckCircle2 size={18} />
                    </div>
                    <div className="space-y-1">
                       <h4 className="text-xl font-black font-outfit text-brand-charcoal uppercase">{benefit.title}</h4>
                       <p className="text-base text-brand-charcoal/50 font-medium leading-relaxed max-w-sm">{benefit.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= CONTACT CTA ============= */}
       <section className="py-32 bg-brand-gray-bold/50 border-t border-black/5">
        <div className="container-custom text-center space-y-8">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-brand-charcoal">
             Apply <br /> <span className="text-brand-blue">Now.</span>
           </h2>
           <Link to="/contact">
             <Button size="lg" className="h-14 px-12 bg-brand-blue text-white hover:bg-brand-blue-dark rounded-full transition-all border-0 shadow-lg">
                Join The Registry <ArrowRight className="ml-3" />
             </Button>
           </Link>
        </div>
      </section>

    </div>
  );
};