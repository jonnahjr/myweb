import { useState } from 'react';
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
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, Button } from '../components/ui/Core';

export const Portal = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/admin';
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 lg:p-12 relative overflow-hidden text-brand-charcoal">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-brand-gray-bold/50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-8"
        >
          <Link to="/" className="inline-block group">
             <span className="text-3xl font-black uppercase tracking-tightest font-outfit text-brand-charcoal">NEXYOVI</span>
          </Link>
          <div className="flex justify-center">
             <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent"><Activity size={12} className="mr-2" /> Access Node Active</Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-black/5 rounded-[3rem] p-10 md:p-20 shadow-floating relative overflow-hidden group"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 text-brand-blue/5 pointer-events-none -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
             <Cpu size={350} strokeWidth={0.5} />
          </div>

          <div className="relative z-10">
             <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-12"
                  >
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-brand-gray-light border border-black/5 rounded-3xl flex items-center justify-center text-brand-blue mx-auto shadow-sm group-hover:bg-white group-hover:shadow-premium transition-all duration-700">
                           <Fingerprint size={40} />
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-brand-charcoal font-outfit">Initialize Identity.</h2>
                        <p className="text-[10px] font-black text-brand-charcoal/20 uppercase tracking-[0.5em] font-mono">// Establishing_Secure_Tunnel</p>
                     </div>

                    <div className="space-y-10">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-brand-charcoal/40 uppercase tracking-[0.2em] ml-6 font-mono">Company_ID</label>
                           <div className="relative">
                              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-charcoal/20"><Lock size={18} /></div>
                              <input 
                                 type="text" 
                                 placeholder="SQUAD_ENGINEER_X"
                                 className="w-full bg-brand-gray-light border border-black/5 rounded-2xl py-6 px-16 text-lg focus:bg-white focus:border-brand-blue/30 transition-all font-bold text-brand-charcoal placeholder:text-brand-charcoal/10 font-mono"
                              />
                           </div>
                        </div>
                        <Button 
                           onClick={() => setStep(2)}
                           size="lg"
                           className="w-full h-16 py-8 text-lg uppercase tracking-widest font-black bg-brand-charcoal hover:bg-brand-blue text-white rounded-2xl border-0 shadow-premium"
                        >
                           Initialize Handshake <ArrowRight size={22} className="ml-3 transition-transform group-hover:translate-x-1" />
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
                    className="space-y-12"
                  >
                     <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mx-auto shadow-sm group-hover:shadow-glow transition-all duration-700">
                           <Shield size={40} />
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-brand-charcoal font-outfit">Sync Validation.</h2>
                        <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.5em] font-mono">// Multi-Node_Verification</p>
                     </div>

                    <div className="space-y-10">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-brand-charcoal/40 uppercase tracking-[0.2em] ml-6 font-mono">Access_Key</label>
                           <div className="relative">
                              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-blue"><Zap size={18} /></div>
                              <input 
                                 type="password" 
                                 placeholder="••••••••••••••••"
                                 className="w-full bg-brand-gray-light border border-black/5 rounded-2xl py-6 px-16 text-lg focus:bg-white focus:border-brand-blue/30 transition-all font-bold text-brand-charcoal tracking-[0.6em] font-mono placeholder:text-brand-charcoal/10"
                                 autoFocus
                              />
                           </div>
                        </div>
                        <Button 
                           type="submit"
                           disabled={loading}
                           size="lg"
                           className="w-full h-16 py-8 text-lg uppercase tracking-widest font-black bg-brand-charcoal hover:bg-brand-blue text-white rounded-2xl border-0 shadow-premium"
                        >
                           {loading ? (
                               <div className="flex items-center gap-3">
                                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
                                  Synchronizing Logic...
                               </div>
                           ) : (
                               <div className="flex items-center gap-2">Initialize Protocol <ChevronRight size={22} /></div>
                           )}
                        </Button>
                        <button 
                           type="button"
                           onClick={() => setStep(1)}
                           className="w-full text-[10px] font-black text-brand-charcoal/30 uppercase tracking-[0.4em] hover:text-brand-blue transition-colors"
                        >
                           [ Reset_Security_Registry ]
                        </button>
                    </div>
                  </motion.form>
                )}
             </AnimatePresence>
          </div>

          <div className="mt-16 pt-8 border-t border-black/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] font-mono opacity-30">
             <div className="flex gap-10">
                <div className="flex gap-2">LOG: <span className="text-brand-blue">OPTIMAL</span></div>
                <div className="flex gap-2">SINK: <span className="text-brand-blue">ACTIVE</span></div>
             </div>
             <div className="flex items-center gap-3">
                STATUS: L10 <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
             </div>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-12">
            <Link to="/" className="text-[10px] font-black text-brand-charcoal/30 hover:text-brand-charcoal transition-colors uppercase tracking-[0.6em] flex items-center gap-4 group">
                <Globe size={16} className="group-hover:rotate-45 transition-transform" /> COMMAND_VOID
            </Link>
            <button className="text-[10px] font-black text-brand-charcoal/30 hover:text-brand-charcoal transition-colors uppercase tracking-[0.6em] flex items-center gap-4 group">
                <Shield size={16} /> REGISTRY_SECURITY
            </button>
        </div>
      </div>
    </div>
  );
};
