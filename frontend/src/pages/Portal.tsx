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
import { Badge } from '../components/ui/Core';

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
    <div className="bg-brand-cream min-h-screen flex items-center justify-center p-8 relative overflow-hidden font-inter text-brand-charcoal">
      
      {/* Background Decor */}
      <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
      <div className="absolute inset-0 radial-grid opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-8"
        >
          <Link to="/" className="inline-block group">
             <div className="flex items-center gap-4 justify-center">
                <span className="text-4xl font-black uppercase tracking-tightest font-outfit text-brand-charcoal">NEXYOVI</span>
             </div>
          </Link>
          <div className="flex justify-center">
             <Badge variant="blue"><Activity size={12} className="mr-2" /> Access Node Active</Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="premium-card p-12 md:p-20 relative overflow-hidden group border-black/5 bg-white/80 shadow-floating"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 text-brand-blue/5 pointer-events-none">
             <Cpu size={300} strokeWidth={0.5} />
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
                        <div className="w-24 h-24 bg-white/40 border border-black/[0.08] rounded-3xl flex items-center justify-center text-brand-blue mx-auto shadow-sm group-hover:bg-brand-blue/10 transition-all duration-700">
                           <Fingerprint size={48} />
                        </div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter text-brand-charcoal">Initialize Identity.</h2>
                        <p className="text-[10px] font-black text-brand-charcoal/20 uppercase tracking-[0.5em] font-mono">// Establishing_Secure_Tunnel</p>
                     </div>

                    <div className="space-y-10">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-brand-charcoal/10 uppercase tracking-[0.6em] ml-6 font-mono">Company_ID</label>
                           <div className="relative">
                              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-charcoal/20"><Lock size={20} /></div>
                              <input 
                                 type="text" 
                                 placeholder="SQUAD_ENGINEER_X"
                                 className="w-full bg-black/[0.02] border border-black/[0.08] rounded-[2rem] py-8 px-20 text-xl focus:outline-none focus:border-brand-blue/30 transition-all font-bold text-brand-charcoal placeholder:text-brand-charcoal/10 font-mono"
                              />
                           </div>
                        </div>
                        <button 
                           onClick={() => setStep(2)}
                           className="w-full btn-primary py-8 text-lg uppercase tracking-widest font-black shadow-sm"
                        >
                           Initialize Handshake <ArrowRight size={22} className="ml-3" />
                        </button>
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
                        <div className="w-24 h-24 bg-brand-mint/10 border border-brand-mint/20 rounded-3xl flex items-center justify-center text-brand-mint mx-auto shadow-sm animate-pulse">
                           <Shield size={48} />
                        </div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter text-brand-charcoal">Sync Validation.</h2>
                        <p className="text-[10px] font-black text-brand-mint uppercase tracking-[0.5em] font-mono">// Multi-Node_Verification</p>
                     </div>

                    <div className="space-y-10">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-brand-charcoal/10 uppercase tracking-[0.6em] ml-6 font-mono">Access_Key</label>
                           <div className="relative">
                              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-mint"><Zap size={20} /></div>
                              <input 
                                 type="password" 
                                 placeholder="••••••••••••••••"
                                 className="w-full bg-black/[0.02] border border-black/[0.08] rounded-[2rem] py-8 px-20 text-xl focus:outline-none focus:border-brand-mint/30 transition-all font-bold text-brand-charcoal tracking-[0.6em] font-mono placeholder:text-brand-charcoal/10"
                                 autoFocus
                              />
                           </div>
                        </div>
                        <button 
                           type="submit"
                           disabled={loading}
                           className="w-full btn-primary py-8 text-lg uppercase tracking-widest font-black shadow-sm !bg-black/5 !text-brand-charcoal hover:!bg-black/10"
                        >
                           {loading ? (
                              <>Synchronizing Logic...</>
                           ) : (
                              <>Initialize Protocol <ChevronRight size={22} className="ml-2" /></>
                           )}
                        </button>
                        <button 
                           type="button"
                           onClick={() => setStep(1)}
                           className="w-full text-[10px] font-black text-brand-charcoal/20 uppercase tracking-[0.4em] hover:text-brand-blue transition-colors"
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
                <div className="flex gap-2">SINK: <span className="text-brand-mint">ACTIVE</span></div>
             </div>
             <div className="flex items-center gap-3">
                STATUS: L10 <div className="w-2 h-2 rounded-full bg-brand-mint animate-pulse shadow-sm" />
             </div>
          </div>
        </motion.div>

        <div className="mt-16 flex justify-center gap-16">
            <Link to="/" className="text-[10px] font-black text-brand-charcoal/20 hover:text-brand-charcoal transition-colors uppercase tracking-[0.6em] flex items-center gap-4 group">
                <Globe size={16} className="group-hover:rotate-45 transition-transform" /> COMMAND_VOID
            </Link>
            <button className="text-[10px] font-black text-brand-charcoal/20 hover:text-brand-charcoal transition-colors uppercase tracking-[0.6em] flex items-center gap-4 group">
                <Shield size={16} /> REGISTRY_SECURITY
            </button>
        </div>
      </div>
    </div>
  );
};
