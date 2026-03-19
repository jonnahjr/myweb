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
    <div className="min-h-screen overflow-hidden text-brand-charcoal font-outfit">

      {/* ===== DARK HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-20 overflow-hidden bg-black px-6">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-brand-blue/10 blur-[200px] rounded-full" />
          <div className="absolute inset-0 tech-grid-blue opacity-10" />
          <div className="scanline" />
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
                <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] uppercase text-[10px] font-black font-mono px-5 py-2">
                  INITIATE_CONTACT_NODE
                </Badge>
                <div className="flex items-center gap-2 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">
                  <Activity size={12} className="text-brand-yellow animate-pulse" /> RELAY_ACTIVE
                </div>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tightest uppercase text-white"
                >
                  Let's Build <br />
                  <span className="text-brand-blue italic">Together.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-xl md:text-2xl text-white/40 font-bold max-w-xl leading-tight tracking-tight"
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
                  <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                    <span className="text-brand-blue">{s.icon}</span>
                    <div>
                      <p className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">{s.label}</p>
                      <p className="text-sm font-black text-white">{s.val}</p>
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
              <div className="tilt-node bg-white/5 border border-white/10 rounded-[4rem] p-12 backdrop-blur-xl space-y-10">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.5em] font-mono">SECURE_CHANNEL</p>
                  <p className="text-3xl font-black text-white">sync@nexyovi.tech</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] font-mono">VOICE_NODE</p>
                  <p className="text-3xl font-black text-white">+251 911 123 456</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] font-mono">PRIMARY_HQ</p>
                  <p className="text-xl font-black text-white/60">Bole Subcity, Innovation Tower<br/>Floor 12–16, Addis Ababa</p>
                </div>
                {/* Animated progress bar */}
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">RELAY_UPTIME</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
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
      <section className="py-32 bg-brand-surface">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                {/* Form */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-black/5 rounded-[4rem] p-12 lg:p-16 shadow-premium"
                  >
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-12">
                      {[1, 2].map(s => (
                        <div key={s} className="flex items-center gap-3">
                          <button
                            onClick={() => setStep(s)}
                            className={`w-10 h-10 rounded-full font-black text-sm transition-all duration-500 ${
                              step === s
                                ? 'bg-brand-charcoal text-white shadow-premium scale-110'
                                : step > s
                                ? 'bg-brand-blue text-white'
                                : 'bg-brand-gray-light text-brand-charcoal/30 border border-black/5'
                            }`}
                          >
                            {step > s ? <CheckCircle2 size={16} className="mx-auto" /> : s}
                          </button>
                          {s < 2 && <div className={`w-16 h-0.5 transition-all duration-700 ${step > s ? 'bg-brand-blue' : 'bg-black/10'}`} />}
                        </div>
                      ))}
                      <span className="ml-4 text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 font-mono">
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
                              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest leading-tight mb-2">Your Identity</h2>
                              <p className="text-brand-charcoal/40 font-bold">Tell us who you are and how to reach you.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                { name: 'name', label: 'Full_Name', placeholder: 'John Doe', type: 'text' },
                                { name: 'email', label: 'Work_Email', placeholder: 'sync@org.com', type: 'email' },
                                { name: 'org', label: 'Organization', placeholder: 'NEXYOVI Corp', type: 'text' },
                                { name: 'phone', label: 'Phone_Node', placeholder: '+251 911 000 000', type: 'tel' },
                              ].map((f) => (
                                <div key={f.name} className="space-y-3">
                                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 font-mono">{f.label}</label>
                                  <input
                                    type={f.type}
                                    name={f.name}
                                    value={(form as any)[f.name]}
                                    onChange={handleChange}
                                    placeholder={f.placeholder}
                                    required
                                    className="w-full bg-brand-surface border border-black/5 rounded-2xl px-6 py-4 text-brand-charcoal font-bold focus:bg-white focus:border-brand-blue/40 focus:outline-none transition-all placeholder:text-brand-charcoal/20 text-base"
                                  />
                                </div>
                              ))}
                            </div>
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              className="w-full h-16 bg-brand-charcoal hover:bg-brand-blue text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-4 text-base group"
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
                              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest leading-tight mb-2">Your Mission</h2>
                              <p className="text-brand-charcoal/40 font-bold">Describe your project and scale.</p>
                            </div>
                            <div className="space-y-6">
                              <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 font-mono">Mission_Type</label>
                                <select
                                  name="mission"
                                  value={form.mission}
                                  onChange={handleChange}
                                  required
                                  className="w-full bg-brand-surface border border-black/5 rounded-2xl px-6 py-4 text-brand-charcoal font-bold focus:bg-white focus:border-brand-blue/40 focus:outline-none transition-all appearance-none"
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
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 font-mono">Budget_Range</label>
                                <select
                                  name="budget"
                                  value={form.budget}
                                  onChange={handleChange}
                                  className="w-full bg-brand-surface border border-black/5 rounded-2xl px-6 py-4 text-brand-charcoal font-bold focus:bg-white focus:border-brand-blue/40 focus:outline-none transition-all appearance-none"
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
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 font-mono">Mission_Details</label>
                                <textarea
                                  name="details"
                                  value={form.details}
                                  onChange={handleChange}
                                  rows={5}
                                  required
                                  placeholder="Describe your operational requirements, technical scale, and desired timeline..."
                                  className="w-full bg-brand-surface border border-black/5 rounded-[2rem] px-6 py-5 text-brand-charcoal font-bold focus:bg-white focus:border-brand-blue/40 focus:outline-none transition-all placeholder:text-brand-charcoal/20 resize-none"
                                />
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="h-16 px-8 bg-brand-surface hover:bg-brand-gray-light border border-black/5 text-brand-charcoal rounded-2xl font-black uppercase tracking-widest transition-all text-sm"
                              >
                                Back
                              </button>
                              <button
                                type="submit"
                                className="flex-1 h-16 bg-brand-yellow hover:bg-brand-charcoal text-brand-charcoal hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-4 text-base group"
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
                    className="bg-brand-charcoal rounded-[3rem] p-10 space-y-8"
                  >
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-brand-yellow uppercase tracking-[0.5em] font-mono">NEXYOVI_HQ</p>
                      <h3 className="text-4xl font-black text-white uppercase tracking-tightest leading-tight">Addis Ababa, <br />Ethiopia.</h3>
                    </div>
                    <div className="space-y-6">
                      {[
                        { icon: Mail, label: 'Secure Channel', val: 'sync@nexyovi.tech' },
                        { icon: Phone, label: 'Voice Node', val: '+251 911 123 456' },
                        { icon: MapPin, label: 'Nav Location', val: 'Innovation Tower, Floor 12–16' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-5 group">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shrink-0">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <p className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono mb-1">{item.label}</p>
                            <p className="text-base font-black text-white">{item.val}</p>
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
                    className="bg-white border border-black/5 rounded-[3rem] p-10 space-y-6 shadow-premium"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-charcoal/20 font-mono">VALIDATION_STATUS</p>
                    <div className="flex flex-wrap gap-3">
                      {['ISO 27001+', 'SOC 2 Type II', 'NVIDIA Elite', 'AWS GovCloud'].map(c => (
                        <div key={c} className="flex items-center gap-2 h-10 px-5 bg-brand-blue/5 border border-brand-blue/10 rounded-xl text-[10px] font-black text-brand-blue uppercase tracking-wide">
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
                    className="bg-brand-yellow rounded-[3rem] p-10 space-y-4"
                  >
                    <Zap size={28} className="text-brand-charcoal" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/50 font-mono">RESPONSE SLA</p>
                    <p className="text-3xl font-black text-brand-charcoal uppercase tracking-tightest">Response in<br />Under 24 Hours.</p>
                    <p className="text-sm font-bold text-brand-charcoal/60">Our global relay nodes ensure your mission brief reaches the right engineering unit, worldwide.</p>
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
                  className="w-32 h-32 rounded-[3rem] bg-brand-yellow flex items-center justify-center shadow-premium"
                >
                  <CheckCircle2 size={56} className="text-brand-charcoal" />
                </motion.div>
                <div className="space-y-4 max-w-2xl">
                  <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] uppercase text-[10px] font-black font-mono">HANDSHAKE_ESTABLISHED</Badge>
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tightest leading-[0.85]">Mission <span className="text-brand-blue italic">Received.</span></h2>
                  <p className="text-xl text-brand-charcoal/40 font-bold leading-relaxed">Your brief has been synchronized with our operational relay. Expect a response from our elite engineering unit within 24 hours.</p>
                </div>
                <Link to="/">
                  <Button size="xl" className="h-16 px-12 bg-brand-charcoal text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand-blue transition-all">
                    Back to NEXYOVI HQ
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== GLOBAL NODE NETWORK ===== */}
      <section className="py-32 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-brand-blue/20 blur-[200px] rounded-full" />
          <div className="absolute inset-0 tech-grid-blue opacity-10" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] uppercase text-[10px] font-black font-mono">GLOBAL_REACH</Badge>
              <h2 className="text-6xl md:text-8xl font-black tracking-tightest text-white uppercase leading-[0.85]">
                Mission <br /><span className="text-brand-blue italic">Presence.</span>
              </h2>
              <p className="text-2xl text-white/40 font-bold max-w-xl leading-tight">
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
                    className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-white/60 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
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
              className="relative aspect-square bg-white/5 border border-white/10 rounded-[4rem] flex items-center justify-center overflow-hidden backdrop-blur-xl"
            >
              <Globe size={320} className="text-brand-blue/10 animate-spin-slow" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              <div className="relative z-10 text-center space-y-4">
                <p className="text-8xl font-black text-white leading-none tracking-tightest">240+</p>
                <p className="text-[11px] font-black uppercase tracking-[0.6em] text-white/20 font-mono">Active_Nodes_Global</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                  <span className="text-[9px] font-black text-brand-blue uppercase tracking-widest font-mono">All Systems Nominal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 bg-brand-surface border-t border-black/5">
        <div className="container-custom text-center space-y-8">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-charcoal/20 font-mono">EMERGENCY_RELAY</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tightest leading-[0.85]">
            Need Immediate <span className="text-brand-blue italic">Sync?</span>
          </h2>
          <p className="text-xl text-brand-charcoal/40 font-bold">Call our voice relay directly or send a priority encrypted message.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+251911123456">
              <Button size="xl" className="h-16 px-12 bg-brand-charcoal text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand-blue transition-all flex items-center gap-4">
                <Phone size={20} /> +251 911 123 456
              </Button>
            </a>
            <a href="mailto:sync@nexyovi.tech">
              <Button size="xl" className="h-16 px-12 bg-brand-yellow text-brand-charcoal rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-all flex items-center gap-4">
                <Mail size={20} /> sync@nexyovi.tech
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
