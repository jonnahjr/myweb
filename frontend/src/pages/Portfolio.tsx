import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';

const ProjectProof = ({ id, name, client, problem, solution, results }: { id: string, name: string, client: string, problem: string, solution: string, results: string[] }) => (
  <div className="group flex flex-col md:flex-row bg-white border border-black/5 rounded-[3rem] overflow-hidden hover:shadow-xl transition-all duration-700">
    <div className="md:w-1/4 bg-brand-gray-light p-8 flex flex-col justify-between border-r border-black/5">
       <div className="space-y-4">
          <Badge variant="blue" className="bg-brand-blue text-white border-transparent uppercase font-mono text-[9px] tracking-widest">{id}</Badge>
          <h3 className="text-2xl font-black font-outfit text-brand-charcoal uppercase leading-tight">{name}</h3>
       </div>
       <div className="pt-8">
          <p className="text-[9px] font-black uppercase tracking-widest text-brand-charcoal/20 font-mono">Client</p>
          <p className="text-base font-bold text-brand-charcoal opacity-60 italic">{client}</p>
       </div>
    </div>
    <div className="md:w-3/4 p-10 space-y-8">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
             <h4 className="text-brand-blue font-black uppercase text-[9px] tracking-widest font-mono">Problem</h4>
             <p className="text-base font-medium text-brand-charcoal opacity-50 leading-relaxed">{problem}</p>
          </div>
          <div className="space-y-2">
             <h4 className="text-brand-blue font-black uppercase text-[9px] tracking-widest font-mono">Solution</h4>
             <p className="text-base font-medium text-brand-charcoal opacity-50 leading-relaxed">{solution}</p>
          </div>
       </div>
       
       <div className="pt-6 border-t border-black/5">
          <h4 className="text-brand-blue font-black uppercase text-[9px] tracking-widest font-mono mb-4">Results</h4>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
             {results.map((res, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-brand-charcoal">
                   <TrendingUp size={14} className="text-brand-blue" />
                   {res}
                </div>
             ))}
          </div>
       </div>
    </div>
  </div>
);

export const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-40 overflow-hidden text-brand-charcoal">
      
      {/* ============= HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 pt-32 mx-auto max-w-6xl">
        <div className="container-custom relative z-10 w-full mx-auto">
           <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest font-bold">SUCCESS REGISTER</Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight font-outfit"
              >
                Mission <br />
                <span className="text-brand-blue">Proof.</span>
              </motion.h1>
              
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="text-lg md:text-xl text-brand-charcoal/60 font-medium max-w-2xl leading-relaxed"
              >
                 A log of mission successes across national clusters and private enterprise nodes.
              </motion.p>
           </div>
        </div>
      </section>

      {/* ============= MISSION LOGS ============= */}
      <section className="py-32 bg-brand-gray-light/30 border-y border-black/5">
        <div className="container-custom space-y-8">
           <ProjectProof 
             id="LOG_01"
             name="National Registry"
             client="Strategic Government Agency"
             problem="Fragmented national data systems and high vulnerability."
             solution="Built a scalable, zero-trust AI core for national sync."
             results={["99.9% uptime", "Faster Sync", "Secure Node"]}
           />
           <ProjectProof 
             id="LOG_02"
             name="Banking Cloud"
             client="Commercial Bank"
             problem="Legacy core banking architecture and high latency."
             solution="Migration to a high-availability encrypted cloud mesh."
             results={["Real-time sync", "Reliability", "Zero Breaches"]}
           />
           <ProjectProof 
             id="LOG_03"
             name="Digital Identity"
             client="National Authority"
             problem="Manual processing and high risk of fraud."
             solution="Secure biometrics identity platform with auto-verification logic."
             results={["10x faster", "Scalable", "95% Reduction"]}
           />
        </div>
      </section>

      {/* ============= CONTACT CTA ============= */}
       <section className="py-32 bg-white border-t border-black/5">
        <div className="container-custom text-center space-y-8">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-brand-charcoal">
             Mission <br /> <span className="text-brand-blue">Complete.</span>
           </h2>
           <Link to="/contact">
             <Button size="lg" className="h-14 px-12 bg-brand-charcoal text-white hover:bg-brand-blue rounded-full transition-all border-0 shadow-lg">
               Request New Mission <ArrowRight className="ml-3" />
             </Button>
           </Link>
        </div>
      </section>

    </div>
  );
};
