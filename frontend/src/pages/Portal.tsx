import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  ArrowRight, 
  Lock, 
  Globe, 
  Zap,
  Fingerprint,
  ChevronRight,
  Activity,
  Cpu,
  Globe2,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, Button } from '../components/ui/Core';

export const Portal = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/admin';
    }, 2000);
  };

  return (
    <div className="min-h-screen text-brand-charcoal font-outfit pt-24 overflow-hidden">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[40vh] flex items-center px-6 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
           <div className="max-w-7xl space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] uppercase text-[10px] font-black font-mono px-6 py-2">
                   <Activity size={14} className="mr-3 animate-pulse text-emerald-500" /> ACCESS_NODE_v4.2
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tightest uppercase"
                >
                  Command <br />
                  <span className="text-brand-blue italic">Unit.</span>
                </motion.h1>
              </div>
           </div>
        </div>
      </section>

      {/* ============= ACCESS TERMINAL ============= */}
      <section className="py-24 bg-brand-gray-bold/20 border-y border-black/5 relative min-h-[80vh] flex items-center">
         <div className="container-custom flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-3xl bg-brand-surface border border-black/5 rounded-[4rem] p-12 md:p-24 shadow-premium relative overflow-hidden group"
            >
               {/* Decorative Background */}
               <div className="absolute top-0 right-0 p-12 text-brand-blue/[0.03] pointer-events-none -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                  <Cpu size={500} strokeWidth={0.5} />
               </div>

               <div className="relative z-10">
                  <AnimatePresence mode="wait">
                     {step === 1 ? (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="space-y-16"
                        >
                           <div className="space-y-8">
                              <div className="w-24 h-24 bg-brand-gray-light border border-black/5 rounded-[2rem] flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-700">
                                 <Fingerprint size={48} />
                              </div>
                              <div className="space-y-4">
                                 <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[9px] tracking-[0.4em] font-mono">STEP_01: IDENTITY</Badge>
                                 <h2 className="text-5xl font-black uppercase tracking-tighter text-brand-charcoal font-outfit leading-none">Initialize Handshake.</h2>
                                 <p className="text-xl text-brand-charcoal/40 font-bold leading-tight">// Establish_Secure_Command_Tunnel</p>
                              </div>
                           </div>

                           <div className="space-y-12">
                              <div className="space-y-6">
                                 <label className="text-[10px] font-black text-brand-charcoal/40 uppercase tracking-[0.4em] ml-8 font-mono">Company_Registry_ID</label>
                                 <div className="relative">
                                    <div className="absolute left-10 top-1/2 -translate-y-1/2 text-brand-charcoal/20"><Lock size={22} /></div>
                                    <input 
                                       type="text" 
                                       placeholder="SQUAD_ENGINEER_X"
                                       className="w-full bg-brand-gray-light border border-black/5 rounded-[2rem] py-8 px-20 text-xl focus:bg-brand-surface focus:border-brand-blue/30 transition-all font-black text-brand-charcoal placeholder:text-brand-charcoal/10 font-mono tracking-widest shadow-sm"
                                    />
                                 </div>
                              </div>
                              <Button 
                                 onClick={() => setStep(2)}
                                 size="xl"
                                 className="h-24 w-full py-8 text-xl uppercase tracking-[0.3em] font-black bg-brand-charcoal hover:bg-brand-blue text-white rounded-[2rem] border-0 shadow-premium group"
                              >
                                 Establish Handshake <ArrowRight size={28} className="ml-4 transition-transform group-hover:translate-x-2" />
                              </Button>
                           </div>
                        </motion.div>
                     ) : (
                        <motion.form
                          key="step2"
                          onSubmit={handleLogin}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-16"
                        >
                           <div className="space-y-8">
                              <div className="w-24 h-24 bg-brand-blue/5 border border-brand-blue/10 rounded-[2rem] flex items-center justify-center text-brand-blue shadow-sm group-hover:shadow-glow transition-all duration-700">
                                 <Shield size={48} />
                              </div>
                              <div className="space-y-4">
                                 <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[9px] tracking-[0.4em] font-mono">STEP_02: VALIDATION</Badge>
                                 <h2 className="text-5xl font-black uppercase tracking-tighter text-brand-charcoal font-outfit leading-none">Sync Protocol.</h2>
                                 <p className="text-xl text-brand-blue font-bold leading-tight">// Multi-Node_Validation_Sequence</p>
                              </div>
                           </div>

                           <div className="space-y-12">
                              <div className="space-y-6">
                                 <label className="text-[10px] font-black text-brand-charcoal/40 uppercase tracking-[0.4em] ml-8 font-mono">Mission_Access_Key</label>
                                 <div className="relative">
                                    <div className="absolute left-10 top-1/2 -translate-y-1/2 text-brand-blue"><Zap size={22} /></div>
                                    <input 
                                       type="password" 
                                       placeholder="••••••••••••••••"
                                       className="w-full bg-brand-gray-light border border-black/5 rounded-[2rem] py-8 px-20 text-xl focus:bg-brand-surface focus:border-brand-blue/30 transition-all font-black text-brand-charcoal tracking-[1em] font-mono placeholder:text-brand-charcoal/10 shadow-sm"
                                       autoFocus
                                    />
                                 </div>
                              </div>
                              <Button 
                                 type="submit"
                                 disabled={loading}
                                 size="xl"
                                 className="h-24 w-full py-8 text-xl uppercase tracking-[0.3em] font-black bg-brand-charcoal hover:bg-brand-blue text-white rounded-[2rem] border-0 shadow-premium"
                              >
                                 {loading ? (
                                    <div className="flex items-center gap-4">
                                       <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full" />
                                       Synchronizing Matrix...
                                    </div>
                                 ) : (
                                    <div className="flex items-center gap-3">Initialize Protocol <ChevronRight size={28} /></div>
                                 )}
                              </Button>
                              <button 
                                 type="button"
                                 onClick={() => setStep(1)}
                                 className="w-full text-xs font-black text-brand-charcoal/30 uppercase tracking-[0.6em] hover:text-brand-blue transition-colors font-mono"
                              >
                                 [ RESET_COMMAND_PROTOCOL ]
                              </button>
                           </div>
                        </motion.form>
                     )}
                  </AnimatePresence>
               </div>

               {/* Institutional Status Terminal */}
               <div className="mt-20 pt-10 border-t border-black/5 flex flex-wrap justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] font-mono opacity-40">
                  <div className="flex gap-12">
                     <div className="flex gap-3 items-center">LINK: <span className="text-brand-blue text-xs">ENCRYPTED</span></div>
                     <div className="flex gap-3 items-center">SINK: <span className="text-brand-blue text-xs">ACTIVE</span></div>
                  </div>
                  <div className="flex items-center gap-4">
                     STATUS: L10 <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ============= GLOBAL NODE NETWORK ============= */}
      <section className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="container-custom">
           <div className="flex justify-center gap-16">
              <Link to="/" className="text-[11px] font-black text-brand-charcoal/30 hover:text-brand-charcoal transition-colors uppercase tracking-[0.8em] flex items-center gap-5 group">
                 <Globe2 size={20} className="group-hover:rotate-45 transition-transform" /> COMMAND_VOID
              </Link>
              <button className="text-[11px] font-black text-brand-charcoal/30 hover:text-brand-charcoal transition-colors uppercase tracking-[0.8em] flex items-center gap-5 group">
                 <Shield size={20} /> REGISTRY_SECURITY
              </button>
           </div>
        </div>
      </section>


    </div>
  );
};
