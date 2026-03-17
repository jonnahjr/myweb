import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Globe, 
  MessageSquare, 
  Terminal,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { Button, Badge, GlassCard } from '../components/ui/Core';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen pt-20 overflow-hidden">
      
      {/* ============= CONTACT HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-5xl space-y-10 text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="blue"><Terminal size={12} className="mr-2" /> Global Communication Protocol</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tightest uppercase font-outfit"
            >
              Establish <br />
              <span className="gradient-text">Connection.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-brand-charcoal/40 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Our nodes are always scanning for your signals. Reach out to initialize a direct sync with our lead engineering units.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============= CONTACT MATRIX (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form Cluster */}
            <div className="lg:col-span-7">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="premium-card p-10 md:p-16 bg-white/40 border-black/5"
               >
                  <div className="space-y-12">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-bold uppercase tracking-tight text-brand-charcoal">Transmission Node</h2>
                        <p className="text-brand-charcoal/40 font-medium">Send us your technical requirements and our logic agents will synchronize within 24 hours.</p>
                     </div>

                     <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 ml-1">Agent_Name</label>
                              <input 
                                 type="text" 
                                 placeholder="IDENTIFY YOURSELF"
                                 className="w-full bg-black/[0.03] border border-black/[0.08] rounded-2xl px-8 py-6 text-brand-charcoal font-bold tracking-widest focus:outline-none focus:shadow-glow-soft transition-all placeholder:text-brand-charcoal/10"
                              />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 ml-1">Source_Email</label>
                              <input 
                                 type="email" 
                                 placeholder="MAIL_NODE@GATEWAY.COM"
                                 className="w-full bg-black/[0.03] border border-black/[0.08] rounded-2xl px-8 py-6 text-brand-charcoal font-bold tracking-widest focus:outline-none focus:shadow-glow-soft transition-all placeholder:text-brand-charcoal/10"
                              />
                           </div>
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 ml-1">Payload_Data</label>
                           <textarea 
                              rows={5}
                              placeholder="COMMUNICATE YOUR INTENT"
                              className="w-full bg-black/[0.03] border border-black/[0.08] rounded-2xl px-8 py-6 text-brand-charcoal font-bold tracking-widest focus:outline-none focus:shadow-glow-soft transition-all placeholder:text-brand-charcoal/10 resize-none"
                           />
                        </div>
                        <Button size="lg" className="w-full py-8 text-xl shadow-glow">
                           Initialize Sync Protocol <Send size={20} className="ml-3" />
                        </Button>
                     </form>
                  </div>
               </motion.div>
            </div>

            {/* Info Cluster */}
            <div className="lg:col-span-5 space-y-12">
               {/* Contact Info Cards */}
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: <Mail />, label: "Mail Node", val: "sync@nexyovi.tech", sub: "Priority Transmission" },
                    { icon: <Phone />, label: "Voice Link", val: "+251 900 123 456", sub: "Secure Voice Sync" },
                    { icon: <MapPin />, label: "Global Node", val: "Addis Ababa, Ethiopia", sub: "Strategic R&D Node" }
                  ].map((info, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-panel p-8 flex items-center gap-8 border-black/5 bg-white/40 group hover:bg-black hover:text-white transition-all duration-700"
                    >
                       <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-white group-hover:text-black transition-colors shadow-sm">
                          {info.icon}
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 group-hover:text-white/40 mb-1">{info.label}</p>
                          <h4 className="text-xl font-bold uppercase tracking-tight">{info.val}</h4>
                          <p className="text-[10px] font-bold text-brand-mint/60 uppercase tracking-widest">{info.sub}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>

               {/* Google Maps Embed - Tactical View */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="premium-card p-0 h-[400px] overflow-hidden border-black/5 shadow-floating relative group"
               >
                  <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
                  <iframe 
                    title="NEXYOVI Strategic Node"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.00000000001!2d38.75!3d9.033333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24c49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1710675000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.05)' }} 
                    allowFullScreen 
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 z-20">
                     <Badge variant="blue"><Globe size={12} className="mr-2" /> Node Location: L10_Sync_Ready</Badge>
                  </div>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ============= DEEP STATS ARCHIVE (BOLD CREAM SECTION) ============= */}
      <section className="section-padding relative overflow-hidden bg-brand-cream-bold text-brand-charcoal">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: "Logic Stability", val: "99.999%", sub: "Global Sync Uptime" },
                { label: "Sync Response", val: "< 24h", sub: "Operational Priority" },
                { label: "Sovereign nodes", val: "Alpha-Zero", sub: "High Performance Unit" }
              ].map((s, i) => (
                <div key={i} className="glass-panel p-10 border-black/5 space-y-4 bg-white/40">
                   <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{s.label}</div>
                   <div className="text-4xl font-black font-outfit text-brand-charcoal">{s.val}</div>
                   <div className="text-sm text-brand-charcoal/40 font-medium">{s.sub}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};
