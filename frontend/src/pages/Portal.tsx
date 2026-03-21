import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Fingerprint,
  Eye,
  EyeOff,
  User,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export const Portal = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    setStep(2);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/client-dashboard';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white font-jakarta overflow-hidden flex flex-col">

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-blue/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full"
        />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* Top Nav Bar */}
      <div className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">NEXYOVI · SECURE ACCESS</span>
        </div>
        <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-widest text-white/20">
          <span>LINK: <span className="text-emerald-400">ENCRYPTED</span></span>
          <span>STATUS: <span className="text-brand-blue">ACTIVE</span></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 mb-6">
              <Shield size={28} className="text-brand-blue" />
            </div>
            <h1 className="text-3xl font-bold font-jakarta text-white tracking-tight uppercase">
              Client Portal
            </h1>
            <p className="text-sm text-gray-500 font-bold mt-2">
              Secure access to your NEXYOVI workspace
            </p>
          </motion.div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all duration-500
                  ${step >= s ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white/5 border-white/10 text-white/30'}`}>
                  {step > s ? <CheckCircle2 size={14} /> : s}
                </div>
                {s < 2 && <div className={`w-12 h-px transition-all duration-500 ${step > s ? 'bg-brand-blue' : 'bg-white/10'}`} />}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">

              {/* Step 1 — Username */}
              {step === 1 && (
                <motion.form
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleNext}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <div className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.4em]">STEP 01 · IDENTITY</div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Welcome back</h2>
                    <p className="text-sm text-gray-500 font-bold">Enter your username to continue</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Username</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="your_username"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:bg-white/8 transition-all tracking-wide"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(27,79,138,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full h-12 bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8] text-white rounded-xl text-sm font-bold uppercase tracking-widest overflow-hidden"
                  >
                    <motion.span
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                    />
                    Continue
                  </motion.button>
                </motion.form>
              )}

              {/* Step 2 — Password */}
              {step === 2 && (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleLogin}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <div className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.4em]">STEP 02 · VERIFICATION</div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Enter password</h2>
                    <p className="text-sm text-gray-500 font-bold">Signing in as <span className="text-white">{username}</span></p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Password</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                        <Lock size={16} />
                      </div>
                      <input
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-12 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:bg-white/8 transition-all tracking-widest"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 transition-colors"
                      >
                        {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button type="button" className="text-[10px] font-bold text-brand-blue/50 hover:text-brand-blue uppercase tracking-widest transition-colors">
                      Forgot password?
                    </button>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 24px rgba(27,79,138,0.4)" } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className="relative w-full h-12 bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8] text-white rounded-xl text-sm font-bold uppercase tracking-widest overflow-hidden disabled:opacity-60"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Authenticating...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Fingerprint size={16} /> Sign In <ChevronRight size={16} />
                      </div>
                    )}
                    {!loading && (
                      <motion.span
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                      />
                    )}
                  </motion.button>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full flex items-center justify-center gap-2 text-[10px] font-bold text-white/20 hover:text-white/50 uppercase tracking-widest transition-colors"
                  >
                    <ArrowLeft size={12} /> Back
                  </button>
                </motion.form>
              )}

            </AnimatePresence>
          </motion.div>

          {/* Footer note */}
          <p className="text-center text-[9px] font-bold text-white/15 uppercase tracking-widest mt-8">
            Protected by NEXYOVI Security Layer · All sessions are monitored
          </p>
        </div>
      </div>
    </div>
  );
};
