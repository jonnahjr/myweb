import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Variants } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  Phone,
  Globe,
  CheckCircle2,
  Activity,
  Zap,
  ArrowRight,
  Clock,
  Shield
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';
import { Link } from 'react-router-dom';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: 'easeOut' }
  })
};

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
    <div className="min-h-screen overflow-hidden bg-[#F3EFE6] text-[#1A2332] font-outfit">

      {/* ===== DARK HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-20 overflow-hidden px-6 bg-[#F3EFE6]">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-brand-purple/5 blur-[200px] rounded-full" />
          <div className="absolute inset-0 tech-grid-blue opacity-5" />
          <div className="hidden" />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left: Title */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider uppercase text-sm font-bold font-medium px-5 py-2">
                  INITIATE_CONTACT_NODE
                </Badge>
                <div className="flex items-center gap-2 text-sm font-bold text-[#1A2332]/20 uppercase font-medium">
                  <Activity size={12} className="text-brand-yellow animate-pulse" /> RELAY_ACTIVE
                </div>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-7xl md:text-9xl font-bold leading-[0.85] tracking-tightest uppercase text-[#1A2332]"
                >
                  Let's Build <br />
                  <span className="bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8] bg-clip-text text-transparent italic">Together.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-xl md:text-2xl text-gray-500 font-bold max-w-xl leading-tight tracking-tight"
                >
                  Our global engineering units are ready to synchronize with your mission. Response within 24 hours — guaranteed.
                </motion.p>
              </div>

              {/* Live status row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap gap-6"
              >
                {[
                  { label: 'Response Time', val: '< 24h', icon: <Clock size={14} /> },
                  { label: 'Active Nodes', val: '240+', icon: <Globe size={14} /> },
                  { label: 'Uptime', val: '99.99%', icon: <Activity size={14} /> },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-2xl backdrop-blur-md">
                    <span className="text-brand-blue">{s.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-[#1A2332]/20 uppercase font-medium">{s.label}</p>
                      <p className="text-sm font-bold text-[#1A2332]">{s.val}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block perspective-3d"
            >
              <div className="tilt-node bg-white border border-gray-200 rounded-2xl p-8 backdrop-blur-xl space-y-10">
                <div className="space-y-2">
                  <p className="text-sm font-bold text-brand-blue uppercase tracking-wider font-medium">SECURE_CHANNEL</p>
                  <p className="text-3xl font-bold text-[#1A2332]">sync@nexyovi.tech</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-[#1A2332]/20 uppercase tracking-wider font-medium">VOICE_NODE</p>
                  <p className="text-3xl font-bold text-[#1A2332]">+251 911 123 456</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-[#1A2332]/20 uppercase tracking-wider font-medium">PRIMARY_HQ</p>
                  <p className="text-xl font-bold text-gray-500">Bole Subcity, Innovation Tower<br/>Floor 12–16, Addis Ababa</p>
                </div>
                {/* Animated progress bar */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-[#1A2332]/20 uppercase font-medium">RELAY_UPTIME</p>
                  <div className="h-1 bg-gray-50 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ['60%', '95%', '78%', '99%'] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-full bg-brand-blue"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MULTI-STEP FORM ===== */}
      <section className="py-32 border-y border-gray-100 bg-[#000000]">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Form */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#F3EFE6] border border-white/20 rounded-2xl p-8 lg:p-8 shadow-md hover:shadow-xl transition-all"
                  >
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-12">
                      {[1, 2].map(s => (
                        <div key={s} className="flex items-center gap-3">
                          <button
                            onClick={() => setStep(s)}
                            className={`w-10 h-10 rounded-full font-bold text-sm transition-all duration-500 ${
                              step === s
                                ? 'bg-brand-purple text-white shadow-md hover:shadow-xl transition-all scale-110'
                                : step > s
                                ? 'bg-brand-blue text-white'
                                : 'bg-white/5/10 text-gray-400 border border-white/10'
                            }`}
                          >
                            {step > s ? <CheckCircle2 size={16} className="mx-auto" /> : s}
                          </button>
                          {s < 2 && <div className={`w-16 h-0.5 transition-all duration-700 ${step > s ? 'bg-brand-blue' : 'bg-white/5/10'}`} />}
                        </div>
                      ))}
                      <span className="ml-4 text-sm font-bold uppercase tracking-wider text-gray-400 font-medium">
                        STEP_{step}_OF_2
                      </span>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-8"
                          >
                            <div>
                              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-2 text-white">Your Identity</h2>
                              <p className="text-gray-400 font-bold">Tell us who you are and how to reach you.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                { name: 'name', label: 'Full_Name', placeholder: 'John Doe', type: 'text' },
                                { name: 'email', label: 'Work_Email', placeholder: 'sync@org.com', type: 'email' },
                                { name: 'org', label: 'Organization', placeholder: 'NEXYOVI Corp', type: 'text' },
                                { name: 'phone', label: 'Phone_Node', placeholder: '+251 911 000 000', type: 'tel' },
                              ].map((f) => (
                                <div key={f.name} className="space-y-3">
                                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400 font-medium">{f.label}</label>
                                  <input
                                    type={f.type}
                                    name={f.name}
                                    value={(form as any)[f.name]}
                                    onChange={handleChange}
                                    placeholder={f.placeholder}
                                    required
                                    className="w-full bg-white/5/10 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:bg-white/5/10/80 focus:border-brand-purple/40 focus:outline-none transition-all placeholder:text-white/20 text-base"
                                  />
                                </div>
                              ))}
                            </div>
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              className="w-full h-16 bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8] text-white rounded-2xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-4 text-base group shadow-lg shadow-blue-500/20"
                            >
                              Next: Mission Details <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-8"
                          >
                            <div>
                              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-2 text-white">Your Mission</h2>
                              <p className="text-gray-400 font-bold">Describe your project and scale.</p>
                            </div>
                            <div className="space-y-6">
                              <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-400 font-medium">Mission_Type</label>
                                <select
                                  name="mission"
                                  value={form.mission}
                                  onChange={handleChange}
                                  required
                                  className="w-full bg-white/5/10 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:bg-white/5/10 focus:border-brand-purple/40 focus:outline-none transition-all appearance-none"
                                >
                                  <option value="">Select mission type...</option>
                                  <option>National Infrastructure Build</option>
                                  <option>AI & LLM System Deployment</option>
                                  <option>Security & Defensive Sync</option>
                                  <option>High-Load Cloud Architecture</option>
                                  <option>Sovereign Development Mission</option>
                                  <option>AI Assistant Deployment</option>
                                  <option>Other</option>
                                </select>
                              </div>
                              <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-400 font-medium">Budget_Range</label>
                                <select
                                  name="budget"
                                  value={form.budget}
                                  onChange={handleChange}
                                  className="w-full bg-white/5/10 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:bg-white/5/10 focus:border-brand-blue/40 focus:outline-none transition-all appearance-none"
                                >
                                  <option value="">Select budget range...</option>
                                  <option>Under $10k</option>
                                  <option>$10k – $50k</option>
                                  <option>$50k – $200k</option>
                                  <option>$200k – $1M</option>
                                  <option>$1M+</option>
                                </select>
                              </div>
                              <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-400 font-medium">Mission_Details</label>
                                <textarea
                                  name="details"
                                  value={form.details}
                                  onChange={handleChange}
                                  rows={5}
                                  required
                                  placeholder="Describe your operational requirements, technical scale, and desired timeline..."
                                  className="w-full bg-white/5/10 border border-white/20 rounded-2xl px-6 py-5 text-white font-bold focus:bg-white/5/10 focus:border-brand-blue/40 focus:outline-none transition-all placeholder:text-white/20 resize-none"
                                />
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="h-16 px-8 bg-white/5/10 hover:bg-[#F3EFE6] border border-white/20 text-white rounded-2xl font-bold uppercase tracking-widest transition-all text-sm"
                              >
                                Back
                              </button>
                              <button
                                type="submit"
                                className="flex-1 h-16 bg-brand-yellow hover:bg-[#F3EFE6] text-white hover:text-white rounded-2xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-4 text-base group"
                              >
                                Establish Handshake <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </motion.div>
                </div>

                {/* Side Info */}
                <div className="lg:col-span-5 space-y-8 lg:pt-4">
                  {/* Contact details */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-2xl p-6 space-y-8"
                  >
                    <div className="space-y-4">
                      <p className="text-sm font-bold text-brand-yellow uppercase tracking-wider font-medium">NEXYOVI_HQ</p>
                      <h3 className="text-4xl font-bold text-white tracking-tight leading-tight">Addis Ababa, <br />Ethiopia.</h3>
                    </div>
                    <div className="space-y-6">
                      {[
                        { icon: Mail, label: 'Secure Channel', val: 'sync@nexyovi.tech' },
                        { icon: Phone, label: 'Voice Node', val: '+251 911 123 456' },
                        { icon: MapPin, label: 'Nav Location', val: 'Innovation Tower, Floor 12–16' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-5 group">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shrink-0">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white/20 uppercase font-medium mb-1">{item.label}</p>
                            <p className="text-base font-bold text-white">{item.val}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Certifications */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/5 border border-white/20 rounded-2xl p-6 space-y-6 shadow-md hover:shadow-xl transition-all"
                  >
                    <p className="text-sm font-bold uppercase tracking-wider text-white/20 font-medium">VALIDATION_STATUS</p>
                    <div className="flex flex-wrap gap-3">
                      {['ISO 27001+', 'SOC 2 Type II', 'NVIDIA Elite', 'AWS GovCloud'].map(c => (
                        <div key={c} className="flex items-center gap-2 h-10 px-5 bg-brand-blue/20 border border-brand-blue/10 rounded-xl text-sm font-bold text-brand-blue uppercase tracking-wide">
                          <Shield size={12} /> {c}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Response SLA */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-brand-yellow rounded-2xl p-6 space-y-4"
                  >
                    <Zap size={28} className="text-white" />
                    <p className="text-sm font-bold uppercase tracking-wider text-white/50 font-medium">RESPONSE SLA</p>
                    <p className="text-3xl font-bold text-white tracking-tight">Response in<br />Under 24 Hours.</p>
                    <p className="text-sm font-bold text-white/60">Our global relay nodes ensure your mission brief reaches the right engineering unit, worldwide.</p>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              /* ===== SUCCESS STATE ===== */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center py-32 space-y-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-32 h-32 rounded-2xl bg-brand-yellow flex items-center justify-center shadow-md hover:shadow-xl transition-all"
                >
                  <CheckCircle2 size={56} className="text-white" />
                </motion.div>
                <div className="space-y-4 max-w-2xl">
                  <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider uppercase text-sm font-bold font-medium">HANDSHAKE_ESTABLISHED</Badge>
                  <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold tracking-tight leading-tight">Mission <span className="text-brand-blue italic">Received.</span></h2>
                  <p className="text-xl text-white/40 font-bold leading-relaxed">Your brief has been synchronized with our operational relay. Expect a response from our elite engineering unit within 24 hours.</p>
                </div>
                <Link to="/">
                  <Button size="xl" className="h-16 px-12 bg-white/5 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-blue transition-all">
                    Back to NEXYOVI HQ
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== GLOBAL NODE NETWORK ===== */}
      <section className="py-32 relative overflow-hidden bg-[#F3EFE6]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-brand-blue/20 blur-[200px] rounded-full" />
          <div className="absolute inset-0 hidden" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <Badge variant="blue" className="bg-blue-50 text-[#1B4F8A] border-transparent tracking-wider uppercase text-sm font-bold font-medium">GLOBAL_REACH</Badge>
              <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold tracking-tightest text-[#1A2332] uppercase leading-[0.85]">
                Mission <br /><span className="text-brand-blue italic">Presence.</span>
              </h2>
              <p className="text-2xl text-gray-500 font-bold max-w-xl leading-tight">
                Our units operate across intercontinental nodes to ensure absolute synchrony for your national and enterprise builds.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Addis Ababa Cluster (HQ)', 'Nairobi Deployment Node', 'Dubai Sync Hub', 'Remote Logic Command'].map((loc, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-gray-500 p-5 bg-white border border-gray-200 rounded-2xl backdrop-blur-sm"
                  >
                    <CheckCircle2 size={16} className="text-brand-yellow shrink-0" />
                    {loc}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-white border border-gray-200 rounded-2xl flex items-center justify-center overflow-hidden backdrop-blur-xl"
            >
              <Globe size={320} className="text-brand-blue/10 animate-spin-slow" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              <div className="relative z-10 text-center space-y-4">
                <p className="text-8xl font-bold text-[#1A2332] leading-none tracking-tightest">240+</p>
                <p className="text-sm font-bold uppercase tracking-wider text-[#1A2332]/20 font-medium">Active_Nodes_Global</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                  <span className="text-xs font-bold text-brand-blue uppercase font-medium">All Systems Nominal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 border-t border-gray-200 bg-[#000000]">
        <div className="container-custom text-center space-y-8">
          <p className="text-sm font-bold uppercase tracking-wider text-white/20 font-medium">EMERGENCY_RELAY</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Need Immediate <span className="text-brand-blue italic">Sync?</span>
          </h2>
          <p className="text-xl text-white/40 font-bold">Call our voice relay directly or send a priority encrypted message.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+251911123456">
              <Button size="xl" className="h-16 px-12 bg-white/5 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-blue transition-all flex items-center gap-4">
                <Phone size={20} /> +251 911 123 456
              </Button>
            </a>
            <a href="mailto:sync@nexyovi.tech">
              <Button size="xl" className="h-16 px-12 bg-brand-yellow text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all flex items-center gap-4">
                <Mail size={20} /> sync@nexyovi.tech
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
