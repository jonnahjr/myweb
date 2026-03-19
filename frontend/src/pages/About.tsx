import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  User, 
  Zap,
  Globe,
  Globe2,
  Shield,
  Activity,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, Button } from '../components/ui/Core';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-brand-charcoal font-outfit pt-24">
      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[60vh] flex items-center px-6 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
           <div className="max-w-7xl space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] uppercase text-[10px] font-black font-mono px-6 py-2">
                   <Globe2 size={14} className="mr-3 animate-pulse" /> ABOUT_OPERATIONAL_UNIT
                </Badge>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tightest uppercase"
                >
                  Engineering <br />
                  The <span className="text-brand-blue italic">Standard.</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="text-xl md:text-3xl text-brand-charcoal/40 font-bold max-w-3xl leading-tight tracking-tight"
                >
                   NEXYOVI is a global technology company focused on AI, cybersecurity, and infrastructure engineering. We build the future of secure digital systems.
                </motion.p>
              </div>
           </div>
        </div>
      </section>

      {/* ============= MISSION & VISION MATRIX ============= */}
      <section className="py-24 bg-brand-gray-bold/20 border-y border-black/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {[
                { 
                  title: 'Mission', 
                  desc: 'To build intelligent, secure, and scalable digital systems that power the future economy.',
                  icon: <Target size={32} />,
                  label: 'OPERATIONAL_MISSION'
                },
                { 
                  title: 'Vision', 
                  desc: 'To become a global leader in AI-driven infrastructure and secure digital transformation.',
                  icon: <Zap size={32} />,
                  label: 'STRATEGIC_VISION'
                }
              ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="p-16 bg-brand-surface border border-black/5 rounded-[4rem] shadow-premium space-y-10 group hover:bg-brand-gray-light transition-all duration-700"
                 >
                    <div className="flex items-center justify-between">
                       <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent uppercase font-black text-[10px] tracking-[0.4em] font-mono">{item.label}</Badge>
                       <div className="w-16 h-16 rounded-3xl bg-brand-gray-light border border-black/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                          {item.icon}
                       </div>
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-5xl font-black font-outfit uppercase tracking-tighter leading-none">{item.title}</h3>
                       <p className="text-xl text-brand-charcoal/40 font-bold leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= CORE LOGIC (Process) ============= */}
      <section className="py-40 bg-brand-surface relative overflow-hidden">
        <div className="container-custom">
           <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">REGISTRY_LOGIC</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tightest leading-[0.85]">Operational <br /> Framework.</h2>
              </div>
              <p className="text-xl text-brand-charcoal/40 font-bold max-w-md leading-tight">The engineering protocols that define our institutional success.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'SYNCHRONY', sub: 'ALIGNMENT_NODE', desc: 'Ensuring absolute structural alignment with your organizational logic.' },
                { title: 'MASTERY', sub: 'EXPERT_DEPLOYMENT', desc: 'Deploying elite engineering units to solve complex computational challenges.' },
                { title: 'SOVEREIGNTY', sub: 'SECURE_GOVERNANCE', desc: 'Building systems that ensure absolute data independence and security.' }
              ].map((p, i) => (
                <div key={i} className="space-y-8 p-12 bg-brand-surface border-l-2 border-brand-blue shadow-sm hover:shadow-premium transition-all duration-700">
                   <div className="text-[10px] font-black text-brand-blue uppercase tracking-[0.5em] font-mono">{p.sub}</div>
                   <h4 className="text-4xl font-black font-outfit uppercase tracking-tighter">{p.title}</h4>
                   <p className="text-xl text-brand-charcoal/40 font-bold leading-tight">{p.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= EXECUTIVE UNIT ============= */}
      <section className="py-40 bg-brand-gray-bold/20 border-y border-black/5">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">EXECUTIVE_UNIT</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tightest leading-tight">Command <br /> Council.</h2>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "CEO", role: "Chief Executive Node", group: "Strategic Operations" },
                { name: "CTO", role: "Chief Technology Architect", group: "System Logic" },
                { name: "Head of AI", role: "Research Lead", group: "Reasoning Hub" },
                { name: "Head of SEC", role: "Security Director", group: "Shield Unit" }
              ].map((member, i) => (
                <motion.div 
                  key={member.name} 
                  whileHover={{ y: -10 }}
                  className="space-y-8 p-10 bg-brand-surface border border-black/5 rounded-[3rem] shadow-premium group transition-all duration-700"
                >
                   <div className="aspect-square bg-brand-gray-light rounded-[2rem] flex items-center justify-center relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <User size={80} className="text-brand-charcoal/5 group-hover:text-brand-blue/20 transition-all scale-110" />
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-2xl font-black font-outfit text-brand-charcoal uppercase tracking-tighter">{member.name}</h4>
                      <p className="text-[11px] font-black text-brand-blue uppercase tracking-widest font-mono">{member.role}</p>
                      <div className="h-1px w-12 bg-black/10 mt-4 group-hover:w-full transition-all duration-700" />
                      <p className="text-[9px] font-black text-brand-charcoal/20 uppercase tracking-[0.4em] font-mono pt-2">{member.group}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= GLOBAL STANDARDS ============= */}
      <section className="py-40 bg-brand-surface">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent tracking-[0.5em] font-black uppercase text-[10px] font-mono">REGISTRY_VALIDATION</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tightest leading-tight">Mission <br /> <span className="text-brand-blue italic">Compliant.</span></h2>
                 <p className="text-2xl text-brand-charcoal/40 font-bold leading-tight max-w-xl">
                    Our builds are validated by international regulatory bodies and sovereign cloud infrastructure standardizers.
                 </p>
                 <div className="flex flex-wrap gap-8">
                    {[
                      { icon: <Shield size={24} />, val: 'ISO 27001+' },
                      { icon: <CheckCircle2 size={24} />, val: 'SOC 2 TYPE II' },
                      { icon: <Cpu size={24} />, val: 'AWS GOVCLOUD' }
                    ].map((v, i) => (
                       <div key={i} className="flex items-center gap-4 text-brand-blue font-black font-mono text-sm tracking-widest">
                          {v.icon}
                          {v.val}
                       </div>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6 md:gap-8">
                 {[
                   { title: "NVIDIA Elite", org: "AI_PARTNER" },
                   { title: "Microsoft MPN", org: "SYSTEM_CLOUD" },
                   { title: "AWS GovCloud", org: "SECURE_HOST" },
                   { title: "GCP Certified", org: "GLOBAL_NODE" }
                 ].map((c, i) => (
                    <div key={i} className="p-10 bg-brand-gray-light border border-black/5 rounded-[3rem] space-y-6 group hover:bg-brand-surface hover:shadow-premium transition-all duration-700">
                       <div className="w-14 h-14 rounded-2xl bg-brand-surface flex items-center justify-center text-brand-blue shadow-sm">
                          <CheckCircle2 size={24} />
                       </div>
                       <div>
                          <h4 className="text-lg font-black text-brand-charcoal uppercase mb-1">{c.title}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/20 font-mono">{c.org}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ============= CONTACT CALL TO ACTION ============= */}
      <section className="py-40 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-blue/20 blur-[180px] rounded-full" />
        </div>
        <div className="container-custom text-center relative z-10 space-y-16">
           <Badge variant="blue" className="bg-brand-blue/20 text-brand-blue border-white/10 tracking-[0.5em] font-black uppercase text-[10px] font-mono px-6 py-2">PROTOCOL_INITIALIZE</Badge>
           <h2 className="text-6xl md:text-9xl font-black font-outfit text-white uppercase tracking-tightest leading-[0.8] mb-12">
             Engage <br /> <span className="text-brand-blue italic">The Standard.</span>
           </h2>
           <Link to="/contact">
             <Button size="xl" className="h-24 px-16 bg-brand-blue hover:bg-brand-surface text-white hover:text-brand-charcoal rounded-[3rem] border-0 transition-all shadow-glow text-2xl font-black uppercase tracking-widest group">
                Establish Sync <ArrowRight size={28} className="ml-4 group-hover:translate-x-3 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>


    </div>
  );
};
