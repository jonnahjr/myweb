import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Phone,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Building2,
  Smartphone,
  Shield,
  Zap,
  Cpu,
  Unplug
} from 'lucide-react';
import { Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', org: '', phone: '', mission: '', details: '', budget: ''
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A2332] font-jakarta">

      {/* ============= SECTION 01: PROFESSIONAL CONTACT HERO ============= */}
      <section className="relative min-h-[65vh] flex items-center pt-48 pb-16 overflow-hidden px-6 bg-white">
        {/* Clean Professional Environment */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#f0f7ff_0%,transparent_50%)] opacity-40" />
           <div className="tech-grid absolute inset-0 opacity-[0.03]" style={{ backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10 w-full">
           <div className="max-w-4xl space-y-14">
              {/* Refined Identity */}
              <div className="space-y-6">
                 <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4"
                 >
                    <span className="w-10 h-[3px] bg-brand-blue" />
                    <span className="text-[11px] font-black text-brand-blue uppercase tracking-[0.4em]">Connect with our unit</span>
                 </motion.div>

                 <div className="space-y-4">
                    <motion.h1 
                       initial={{ opacity: 0, y: 15 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8, delay: 0.1 }}
                       className="text-5xl md:text-6xl lg:text-[5rem] font-black font-jakarta text-[#1A2332] tracking-tightest leading-[1.05]"
                    >
                       Let's build <br />
                       <span className="text-brand-blue">the future.</span>
                    </motion.h1>
                    
                    <motion.p
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ duration: 0.8, delay: 0.3 }}
                       className="text-lg md:text-2xl text-gray-600 font-bold max-w-2xl leading-relaxed"
                    >
                       A global engineering unit ready to synchronize with your mission. 
                       Experience engineering excellence in every handshake.
                    </motion.p>
                 </div>
              </div>

              {/* Clean Contact Point Grid */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                 {[
                   { label: 'Direct Relay', val: 'sync@nexyovi.tech', icon: <Mail size={22} />, link: 'mailto:sync@nexyovi.tech' },
                   { label: 'Voice Node', val: '+251 911 123 456', icon: <Phone size={22} />, link: 'tel:+251911123456' },
                   { label: 'Primary HQ', val: 'Addis Ababa, 혁 Tower', icon: <Building2 size={22} />, link: '#' },
                 ].map((item, i) => (
                    <a 
                       key={i} 
                       href={item.link}
                       className="group p-8 bg-white border border-gray-200 hover:border-brand-blue/40 rounded-[2.5rem] transition-all duration-500 shadow-xl shadow-brand-blue/[0.03] hover:shadow-2xl hover:shadow-brand-blue/[0.08] hover:-translate-y-1"
                    >
                       <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                          {item.icon}
                       </div>
                       <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">{item.label}</p>
                       <p className="text-xl font-black text-[#1A2332] group-hover:text-brand-blue transition-colors leading-none">{item.val}</p>
                    </a>
                 ))}
              </motion.div>
           </div>
        </div>
      </section>

      {/* ============= SECTION 02: MISSION HANDSHAKE (Refined Form) ============= */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="container-custom relative z-10">
           <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Form Core */}
                <div className="lg:col-span-12 xl:col-span-8">
                  <motion.div
                    className="bg-white border border-gray-200 rounded-[3rem] p-10 lg:p-14 shadow-2xl shadow-brand-blue/[0.05] relative overflow-hidden"
                  >
                    {/* Step Registry */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-14">
                       <div className="flex items-center gap-5">
                          {[1, 2].map(s => (
                             <div key={s} className="flex items-center gap-5">
                                <motion.button
                                   whileHover={{ scale: 1.05 }}
                                   onClick={() => setStep(s)}
                                   className={`w-12 h-12 rounded-2xl font-black text-base transition-all duration-500 flex items-center justify-center ${
                                     step === s
                                       ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/30'
                                       : step > s
                                       ? 'bg-emerald-500 text-white'
                                       : 'bg-gray-100 text-gray-400 border border-gray-200'
                                   }`}
                                >
                                   {step > s ? <CheckCircle2 size={20} /> : `0${s}`}
                                </motion.button>
                                {s < 2 && <div className={`w-16 h-[2.5px] rounded-full transition-all duration-500 ${step > s ? 'bg-emerald-500' : 'bg-gray-200'}`} />}
                             </div>
                          ))}
                       </div>
                       <div className="flex flex-col items-end gap-1">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Mission Phase</span>
                          <span className="text-2xl font-black text-[#1A2332] uppercase tracking-tighter">0{step} of 02</span>
                       </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                       <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            className="space-y-10"
                          >
                            <div className="space-y-3">
                               <h2 className="text-4xl lg:text-5xl font-black text-[#1A2332] tracking-tighter uppercase leading-none">Your <span className="text-brand-blue">Identity.</span></h2>
                               <p className="text-lg text-gray-500 font-bold">Tell us who you are and how we can reach you.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                               {[
                                 { name: 'name', label: 'FULL NAME', placeholder: 'John Doe', type: 'text', icon: <MessageSquare size={18} /> },
                                 { name: 'email', label: 'WORK EMAIL', placeholder: 'sync@org.com', type: 'email', icon: <Mail size={18} /> },
                                 { name: 'org', label: 'ORGANIZATION', placeholder: 'NEXYOVI Corp', type: 'text', icon: <Building2 size={18} /> },
                                 { name: 'phone', label: 'PHONE NUMBER', placeholder: '+251 911 000 000', type: 'tel', icon: <Smartphone size={18} /> },
                               ].map((f) => (
                                 <div key={f.name} className="space-y-4">
                                   <label className="text-[11px] font-black text-gray-700 uppercase tracking-[0.2em] pl-1">{f.label}</label>
                                   <div className="relative group">
                                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue transition-colors">
                                         {f.icon}
                                      </div>
                                      <input
                                        type={f.type}
                                        name={f.name}
                                        value={(form as any)[f.name]}
                                        onChange={handleChange}
                                        placeholder={f.placeholder}
                                        required
                                        className="w-full h-16 bg-gray-50 border border-gray-200 rounded-2xl pl-14 pr-8 text-[#1A2332] font-black text-lg focus:bg-white focus:border-brand-blue/40 focus:outline-none transition-all placeholder:text-gray-300"
                                      />
                                   </div>
                                 </div>
                               ))}
                            </div>

                            <motion.button
                              type="button"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setStep(2)}
                              className="w-full h-20 bg-[#1A2332] text-white rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-5 text-xl shadow-2xl group"
                            >
                               Initialize Mission Details <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            className="space-y-10"
                          >
                            <div className="space-y-3">
                               <h2 className="text-4xl lg:text-5xl font-black text-[#1A2332] tracking-tighter uppercase leading-none">Your <span className="text-brand-blue">Mission.</span></h2>
                               <p className="text-lg text-gray-500 font-bold">Describe your project scale and technical requirements.</p>
                            </div>

                            <div className="space-y-8">
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div className="space-y-4">
                                     <label className="text-[11px] font-black text-gray-700 uppercase tracking-[0.2em] pl-1">MISSION TYPE</label>
                                     <select
                                       name="mission"
                                       value={form.mission}
                                       onChange={handleChange}
                                       required
                                       className="w-full h-16 bg-gray-50 border border-gray-200 rounded-2xl px-8 text-[#1A2332] font-black text-lg focus:bg-white focus:border-brand-blue/40 focus:outline-none transition-all appearance-none"
                                     >
                                       <option value="">Select mission type...</option>
                                       <option>National Infrastructure Build</option>
                                       <option>AI & LLM System Deployment</option>
                                       <option>Security & Defensive Sync</option>
                                       <option>High-Load Cloud Architecture</option>
                                       <option>Sovereign Development Mission</option>
                                     </select>
                                  </div>
                                  <div className="space-y-4">
                                     <label className="text-[11px] font-black text-gray-700 uppercase tracking-[0.2em] pl-1">BUDGET RANGE</label>
                                     <select
                                       name="budget"
                                       value={form.budget}
                                       onChange={handleChange}
                                       className="w-full h-16 bg-gray-50 border border-gray-200 rounded-2xl px-8 text-[#1A2332] font-black text-lg focus:bg-white focus:border-brand-blue/40 focus:outline-none transition-all appearance-none"
                                     >
                                       <option value="">Select budget range...</option>
                                       <option>$50k – $200k</option>
                                       <option>$200k – $1M</option>
                                       <option>$1M+</option>
                                     </select>
                                  </div>
                               </div>

                               <div className="space-y-4">
                                  <label className="text-[11px] font-black text-gray-700 uppercase tracking-[0.2em] pl-1">MISSION DETAILS</label>
                                  <textarea
                                    name="details"
                                    value={form.details}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                    placeholder="Describe your operational requirements and technical goals..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-8 text-[#1A2332] font-semibold text-lg focus:bg-white focus:border-brand-blue/40 focus:outline-none transition-all placeholder:text-gray-300 resize-none leading-relaxed"
                                  />
                               </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                               <button
                                 type="button"
                                 onClick={() => setStep(1)}
                                 className="h-20 px-10 bg-gray-100 text-gray-500 hover:text-[#1A2332] border border-gray-200 rounded-2xl font-black uppercase tracking-[0.1em] transition-all"
                               >
                                 Back
                               </button>
                               <motion.button
                                 type="submit"
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}
                                 className="flex-1 h-20 bg-brand-blue text-white rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-5 text-xl shadow-xl shadow-brand-blue/30 group"
                                >
                                 Register Mission <Send size={24} className="group-hover:translate-x-1 transition-transform" />
                               </motion.button>
                            </div>
                          </motion.div>
                        )}
                       </AnimatePresence>
                    </form>
                  </motion.div>
                </div>

                {/* Vertical Side Panel */}
                <div className="lg:col-span-12 xl:col-span-4 space-y-8">
                   <div className="p-10 bg-white border border-gray-200 rounded-[2.5rem] space-y-8 shadow-2xl shadow-brand-blue/[0.03]">
                      <div className="space-y-2">
                         <div className="flex items-center gap-3">
                            <Shield size={18} className="text-brand-blue" />
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Validation Status</span>
                         </div>
                         <h3 className="text-2xl font-black text-[#1A2332] uppercase tracking-tighter">Elite Sync Certified.</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                         {['ISO 27001+', 'SOC 2 Type II', 'NVIDIA Elite', 'AWS GovCloud'].map(c => (
                            <div key={c} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200 font-black text-[10px] text-gray-500 uppercase tracking-widest shadow-sm">
                               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                               {c}
                            </div>
                         ))}
                      </div>
                   </div>

                   <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-10 bg-brand-blue text-white rounded-[2.5rem] space-y-5 relative overflow-hidden group shadow-2xl shadow-brand-blue/30"
                   >
                      <Zap size={32} className="text-white group-hover:scale-110 transition-transform" />
                      <div className="space-y-1">
                         <p className="text-[10px] font-black opacity-60 uppercase tracking-[0.3em]">Response SLA</p>
                         <p className="text-3xl font-black text-white leading-tight uppercase tracking-tighter">Handshake in <br /> Under 24h.</p>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full" />
                   </motion.div>
                </div>
              </motion.div>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-16 space-y-12"
              >
                <div className="w-32 h-32 rounded-3xl bg-brand-blue flex items-center justify-center shadow-2xl shadow-brand-blue/40 rotate-12">
                   <CheckCircle2 size={56} className="text-white -rotate-12" />
                </div>

                <div className="space-y-8 max-w-2xl">
                   <div className="flex flex-col items-center gap-5">
                      <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 tracking-[0.4em] font-black uppercase text-[10px] px-8 py-3 rounded-full shadow-sm">HANDSHAKE_ESTABLISHED</Badge>
                      <h2 className="text-6xl lg:text-7xl font-black font-jakarta text-[#1A2332] tracking-tightest leading-tight uppercase">Mission <br /><span className="text-brand-blue italic">Received.</span></h2>
                   </div>
                   <p className="text-2xl text-gray-500 font-black leading-tight italic opacity-90">
                      Expect a response from our elite engineering unit within 24 hours.
                   </p>
                </div>

                <Link to="/">
                   <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="h-20 px-16 bg-[#1A2332] text-white rounded-2xl font-black uppercase tracking-[0.2em] transition-all text-xl shadow-2xl border border-white/10"
                   >
                      Back to Home
                   </motion.button>
                </Link>
              </motion.div>
            )}
           </AnimatePresence>
        </div>

        {/* Minimal Footer Closure */}
        <div className="mt-24 pt-10 border-t border-gray-200 flex justify-between items-center container-custom opacity-50">
           <div className="flex gap-4">
              <Shield size={18} className="text-gray-500" />
              <Cpu size={18} className="text-gray-500" />
              <Unplug size={18} className="text-gray-500" />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
