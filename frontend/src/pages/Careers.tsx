import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe2,
  Zap,
  Shield,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '../components/ui/Core';
import heroImg from '../assets/c3.jpg';

const CareerRoleNode = ({ title, category, location, id }: { title: string, category: string, location: string, id: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group p-8 bg-[#F3EFE6] border border-gray-100 rounded-[3.5rem] hover:shadow-floating transition-all duration-700 space-y-10 relative overflow-hidden"
  >
    <div className="absolute top-6 right-10 flex items-center gap-2">
       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
       <span className="text-xs font-bold text-brand-blue font-medium uppercase">OPEN_MISSION</span>
    </div>

    <div className="space-y-6">
       <div className="space-y-2">
          <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent uppercase font-medium text-xs font-bold tracking-wider">{id}</Badge>
          <h3 className="text-3xl font-bold font-outfit text-[#1A2332] uppercase leading-tight tracking-tighter">{title}</h3>
       </div>
       <div className="flex flex-wrap gap-4 pt-2">
          <div className="px-4 py-2 bg-[#F3EFE6] rounded-xl border border-gray-200 text-xs font-bold text-gray-400 uppercase font-medium">{category}</div>
          <div className="px-4 py-2 bg-brand-blue/5 rounded-xl border border-brand-blue/10 text-xs font-bold text-brand-blue uppercase font-medium">{location}</div>
       </div>
    </div>

    <div className="pt-8 border-t border-gray-200">
       <p className="text-base font-bold text-gray-400 leading-relaxed mb-8">Join the elite engineering unit responsible for this logical build.</p>
       <Link to="/contact">
         <Button size="xl" className="h-16 w-full rounded-xl bg-[#F3EFE6] text-[#1A2332] hover:bg-brand-blue transition-all border-gray-200 shadow-md hover:shadow-xl transition-all text-sm font-bold uppercase tracking-[0.2em] group">
            Apply to Unit <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
         </Button>
       </Link>
    </div>
  </motion.div>
);

export const Careers = () => {
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
                   <Globe2 size={14} className="mr-3 animate-pulse" /> TALENT_ASSEMBLY_HQ
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl lg:text-6xl lg:text-9xl font-bold leading-tight tracking-tightest uppercase"
                >
                  Join <br />
                  The <span className="text-brand-blue italic">Unit.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-3xl text-gray-500 font-bold max-w-3xl leading-tight tracking-tight"
                >
                   We are assembling a team of elite engineers building advanced AI and infrastructure systems for global businesses and national clusters.
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

      {/* ============= ROLE REGISTRY MATRIX ============= */}
      <section className="py-24 border-y border-gray-100 bg-[#000000]">
        <div className="container-custom space-y-12">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CareerRoleNode id="AI_SYNC_01" title="AI Engineer" category="Logic Systems" location="Remote" />
              <CareerRoleNode id="BE_SYNC_04" title="Backend Developer" category="Architecture" location="Hybrid" />
              <CareerRoleNode id="SEC_SYNC_09" title="Security Analyst" category="Offensive Ops" location="Hybrid" />
           </div>
        </div>
      </section>

      {/* ============= OPERATIONAL BENEFITS ============= */}
      <section className="py-40 relative overflow-hidden bg-[#F3EFE6]">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider font-bold uppercase text-sm font-medium">MISSION_BENEFITS</Badge>
                 <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold font-outfit tracking-tight leading-tight text-[#1A2332]">Elite <br /> <span className="text-brand-blue italic">DNA.</span></h2>
                 <p className="text-2xl text-gray-500 font-bold leading-tight max-w-xl tracking-tight">
                    Our units are engineered for high-performance and absolute synchrony across every deployment node.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: <Globe2 size={24} />, val: 'GLOBAL_MISSIONS' },
                      { icon: <Zap size={24} />, val: 'HIGH_PERF_DNA' },
                      { icon: <Shield size={24} />, val: 'SECURE_FUTURE' }
                    ].map((v, i) => (
                       <div key={i} className="flex items-center gap-4 text-brand-blue font-bold font-medium text-xs tracking-[0.2em] uppercase">
                          {v.icon}
                          {v.val}
                       </div>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                 {[
                   { title: "Global Projects", desc: "Work on high-stakes missions spanning national clusters and private enterprise nodes." },
                   { title: "Remote Friendly", desc: "Our virtual synchrony protocols allow for absolute professional freedom." },
                   { title: "High-impact", desc: "Engineer the future of the digital economy through sovereign logical builds." }
                 ].map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="p-6 bg-[#F3EFE6] border border-gray-100 rounded-2xl space-y-4 group transition-all duration-700"
                    >
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-blue shadow-sm">
                             <CheckCircle2 size={24} />
                          </div>
                          <h4 className="text-2xl font-bold font-outfit text-[#1A2332] tracking-tight">{benefit.title}</h4>
                       </div>
                       <p className="text-xl text-gray-500 font-bold leading-tight pl-18 max-w-sm">{benefit.desc}</p>
                    </motion.div>
                 ))}
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
             Apply <br /> <span className="text-brand-blue italic">Now.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-white/5/10 text-white hover:text-white rounded-2xl border-0 transition-all shadow-lg shadow-blue-500/20 text-2xl font-bold uppercase tracking-widest group">
                Join The Unit <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};