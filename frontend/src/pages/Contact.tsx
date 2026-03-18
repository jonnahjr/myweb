import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  Phone,
  ArrowRight,
  Globe,
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 overflow-hidden text-brand-charcoal">
      
      {/* ============= CONTACT HERO ============= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-white px-6">
        <div className="container-custom relative z-10 w-full">
           <div className="max-w-5xl space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest uppercase text-[10px] font-black font-mono"><Globe2 size={12} className="mr-2" /> Global_Synchrony_Registry</Badge>
              </motion.div>

              <div className="space-y-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[10vw] md:text-[8vw] lg:text-[7.5rem] font-black leading-[0.85] tracking-tightest font-outfit uppercase"
                >
                  Establish <br />
                  <span className="text-brand-blue italic">The Sync.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-2xl md:text-3xl text-brand-charcoal/40 font-medium max-w-3xl leading-relaxed"
                >
                   Our global engineering units are ready to synchronize with your organizational requirements. Initiate the protocol below.
                </motion.p>
              </div>
           </div>
        </div>
      </section>

      {/* ============= CONTACT MATRIX ============= */}
      <section className="py-40 bg-brand-gray-bold/50 border-y border-black/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              
              {/* Form Cluster */}
              <div className="lg:col-span-7">
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="bg-white border border-black/5 rounded-[4rem] p-12 lg:p-20 shadow-floating"
                 >
                    <div className="space-y-16">
                       <div className="space-y-6">
                          <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[10px] tracking-widest">Protocol Sync</Badge>
                          <h2 className="text-5xl font-black font-outfit text-brand-charcoal uppercase tracking-tighter leading-none">Initialize <br/> Handshake.</h2>
                          <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed">Fill out the secure protocol form and our response team will get back to you within 24 hours.</p>
                       </div>

                       <form className="space-y-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                             <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-charcoal/20 ml-2 font-mono">Full_Name</label>
                                <input 
                                   type="text" 
                                   placeholder="John Doe"
                                   className="w-full bg-brand-gray-light border border-black/5 rounded-[2rem] px-8 py-6 text-brand-charcoal font-bold focus:bg-white focus:border-brand-blue/30 focus:outline-none transition-all placeholder:text-brand-charcoal/20 shadow-sm"
                                />
                             </div>
                             <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-charcoal/20 ml-2 font-mono">Work_Email</label>
                                <input 
                                   type="email" 
                                   placeholder="sync@organization.com"
                                   className="w-full bg-brand-gray-light border border-black/5 rounded-[2rem] px-8 py-6 text-brand-charcoal font-bold focus:bg-white focus:border-brand-blue/30 focus:outline-none transition-all placeholder:text-brand-charcoal/20 shadow-sm"
                                />
                             </div>
                          </div>
                          <div className="space-y-4">
                             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-charcoal/20 ml-2 font-mono">Mission_Type</label>
                             <select className="w-full bg-brand-gray-light border border-black/5 rounded-[2rem] px-8 py-6 text-brand-charcoal font-bold focus:bg-white focus:border-brand-blue/30 focus:outline-none transition-all shadow-sm">
                                <option>National Infrastructure Sync</option>
                                <option>AI Logical Registry Build</option>
                                <option>Elite Security & Defensive Sync</option>
                                <option>High-Load Cloud Synchronization</option>
                                <option>Sovereign Development Mission</option>
                             </select>
                          </div>
                          <div className="space-y-4">
                             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-charcoal/20 ml-2 font-mono">Mission_Details</label>
                             <textarea 
                                rows={6}
                                placeholder="Describe your operational requirements and technical scale..."
                                className="w-full bg-brand-gray-light border border-black/5 rounded-[2rem] px-8 py-6 text-brand-charcoal font-bold focus:bg-white focus:border-brand-blue/30 focus:outline-none transition-all placeholder:text-brand-charcoal/20 resize-none shadow-sm"
                             />
                          </div>
                          <Button size="xl" className="w-full h-20 bg-brand-charcoal hover:bg-brand-blue text-white rounded-[2rem] border-0 transition-all shadow-premium text-lg font-black uppercase tracking-widest">
                             Establish Handshake Protocol <Send size={24} className="ml-4" />
                          </Button>
                       </form>
                    </div>
                 </motion.div>
              </div>

              {/* Info Cluster */}
              <div className="lg:col-span-5 space-y-16 lg:pt-12">
                 <div className="space-y-12">
                    <div className="space-y-4">
                       <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.5em] font-mono">African_HQ</p>
                       <h3 className="text-5xl font-black font-outfit text-brand-charcoal uppercase tracking-tighter leading-none">Addis Ababa, <br /> Ethiopia.</h3>
                    </div>

                    <div className="space-y-10">
                       {[
                         { icon: Mail, label: 'Intel Registry', val: 'sync@nexyovi.tech' },
                         { icon: Phone, label: 'Voice Node', val: '+251 911 123 456' },
                         { icon: MapPin, label: 'Nav Location', val: 'BoleSubcity, Innovation Tower, Floor 12-16' }
                       ].map((item, i) => (
                          <div key={i} className="flex items-start gap-8 group">
                             <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                                <item.icon size={28} />
                             </div>
                             <div className="space-y-2">
                                <div className="text-[9px] font-black text-brand-charcoal/20 uppercase tracking-[0.4em] font-mono">{item.label}</div>
                                <div className="text-2xl font-black font-outfit text-brand-charcoal">{item.val}</div>
                             </div>
                          </div>
                       ))}
                    </div>

                    <div className="pt-12 border-t border-black/5">
                       <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-charcoal/20 mb-8 font-mono">Validation_Status</h4>
                       <div className="flex flex-wrap gap-4">
                          {['ISO 27001+', 'SOC 2 Type II', 'NVIDIA Elite', 'AWS GovCloud'].map(c => (
                             <div key={c} className="h-10 px-6 bg-brand-gray-light border border-black/5 rounded-xl flex items-center justify-center text-[10px] font-black text-brand-charcoal/30 shadow-sm">{c}</div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= GLOBAL NODE NETWORK ============= */}
      <section className="py-40 bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[10px] tracking-widest">Global Reach</Badge>
                 <h2 className="text-6xl md:text-[8rem] font-black font-outfit tracking-tighter text-brand-charcoal uppercase leading-[0.85]">
                    Mission <br /> <span className="text-brand-blue italic">Presence.</span>
                 </h2>
                 <p className="text-2xl text-brand-charcoal/50 font-medium leading-relaxed max-w-lg">
                    Our units operate across intercontinental nodes to ensure absolute synchrony for your national and enterprise logical builds.
                 </p>
                 <div className="flex flex-col gap-6">
                    {['Addis Ababa Cluster (HQ)', 'Nairobi Deployment Node', 'Dubai Sync Hub', 'Remote Logic Command'].map((loc, i) => (
                       <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-brand-charcoal/60">
                          <CheckCircle2 size={16} className="text-brand-blue" />
                          {loc}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="relative aspect-square bg-brand-gray-light border border-black/5 rounded-[4rem] flex items-center justify-center overflow-hidden shadow-floating">
                 <div className="absolute inset-x-0 top-0 h-1 bg-brand-blue shadow-glow" />
                 <Globe size={240} className="text-brand-blue/10 animate-spin-slow rotate-12" />
                 <div className="absolute inset-0 bg-radial-gradient from-transparent to-white/80" />
                 <div className="relative z-10 text-center space-y-4">
                    <p className="text-5xl font-black font-outfit text-brand-charcoal">240+</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 font-mono">Active_Nodes_Global</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ============= CALL TO ACTION ============= */}
      <section className="py-40 bg-brand-gray-bold/50 border-t border-black/5">
        <div className="container-custom text-center space-y-12">
           <h2 className="text-7xl md:text-[10rem] font-black font-outfit tracking-tighter text-brand-charcoal uppercase leading-[0.8] mb-12">
             Engage <br /> <span className="text-brand-blue italic">The Unit.</span>
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
              <Link to="/portal">
                <Button size="xl" className="h-20 px-20 text-xl bg-brand-charcoal text-white hover:bg-brand-blue rounded-full border-0 shadow-premium transition-all">
                   Portal Sync <ArrowRight className="ml-4" />
                </Button>
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
};
