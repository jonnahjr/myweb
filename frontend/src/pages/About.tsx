import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';
import { 
  User, 
  Globe2,
  Shield,
  Cpu,
  Cloud,
  ShieldCheck,
  Fingerprint,
  CreditCard,
  Database,
  Lock,
  Server,
  Terminal,
  Activity,
  Box
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Core';
import heroImg from '../assets/c3.jpg';


const MetricCounter = ({ value, label, unit }: { value: number | string, label: string, unit: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (typeof value === 'string' && value.includes('.')) {
      return latest.toFixed(1);
    }
    return Math.round(latest);
  });

  useEffect(() => {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return (
    <div className="flex flex-col items-center lg:items-start lg:px-12 first:pl-0 last:pr-0 border-gray-200/50 lg:border-r last:border-0 relative group">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] font-medium">{label}</span>
      </div>
      <div className="flex items-baseline gap-2 group-hover:translate-x-1 transition-transform duration-500">
        <motion.div className="text-5xl lg:text-7xl font-bold font-jakarta text-[#1A2332] tracking-tightest leading-none">
          {rounded as any}
        </motion.div>
        <div className="text-xs font-bold text-brand-blue uppercase tracking-widest">{unit}</div>
      </div>
    </div>
  );
};

export const About = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3EFE6] text-[#1A2332] font-jakarta pt-24">

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -1000],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute bottom-0 w-px h-24 bg-gradient-to-t from-brand-blue to-transparent"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      
      {/* ============= INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[50vh] flex items-center px-6 overflow-hidden bg-[#F3EFE6] border-b border-gray-100">
        <div className="absolute inset-0 bg-[#F3EFE6]  hidden" />
        <div className="container-custom relative z-10 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 py-12">
                 <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                   <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[9px] font-medium px-4 py-1.5 rounded-full">
                      <Globe2 size={12} className="mr-2 animate-pulse" /> WHO WE ARE
                   </Badge>
                 </motion.div>

                 <motion.h1 style={{ y: yHero, opacity: opacityHero }}
                   initial={{ opacity: 0, y: 40 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   className="text-4xl md:text-6xl lg:text-7xl font-bold font-jakarta leading-none tracking-tightest uppercase text-[#1A2332]"
                 >
                   The <span className="italic text-brand-blue">Logic</span><br />Behind Success.
                 </motion.h1>
                 <motion.p style={{ y: yHero, opacity: opacityHero }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-lg text-gray-500 font-bold max-w-lg leading-snug"
                 >
                    NEXYOVI is a technology company delivering software development, AI systems, cybersecurity, and digital infrastructure solutions to organizations across Africa and beyond.
                 </motion.p>
               </div>

               <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 1, delay: 0.4 }} 
                  className="hidden lg:flex items-center justify-center"
               >
                  <div className="relative z-10 w-full max-w-[460px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200">
                     <motion.img src={heroImg} alt="Hero" className="w-full h-full object-cover object-center scale-110" style={{ y: yImage }} />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ============= MISSION & VISION MATRIX ============= */}
      <section className="py-20 relative overflow-hidden bg-[#000000]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container-custom relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {[
                  { 
                    title: 'Our Mission', 
                    desc: 'To engineer high-integrity digital foundations that allow enterprises to scale securely — delivering AI systems, software, and security infrastructure built to world-class standards.',
                    label: 'CORE_OBJECTIVE'
                  },
                  { 
                    title: 'Our Vision', 
                    desc: 'A world where every organization, regardless of size, can access reliable, secure, and intelligent technology systems powered by African engineering excellence.',
                    label: 'FUTURE_DIRECTION'
                  }
                 ].map((item, i) => (
                   <motion.div
                     key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                      className="space-y-6 group"
                   >
                      <div className="flex items-center gap-3">
                         <div className="w-1 h-1 rounded-full bg-brand-blue" />
                         <span className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.4em]">{item.label}</span>
                      </div>
                      <h3 className="text-3xl font-bold font-jakarta text-white tracking-tight uppercase">{item.title}</h3>
                      <p className="text-lg text-gray-400 font-bold leading-relaxed max-w-lg">{item.desc}</p>
                      <div className="w-full h-px bg-white/5 relative overflow-hidden">
                         <motion.div 
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '100%' }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"
                         />
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        </section>

            {/* ============= LEADERSHIP NODES ============= */}
      <section className="py-20 bg-[#F3EFE6] border-y border-gray-100">
        <div className="container-custom">
           <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="space-y-4">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[9px] font-medium px-5 py-1.5 rounded-full">INSTITUTIONAL_LEADERSHIP</Badge>
                 <h2 className="text-4xl font-bold font-jakarta text-[#1A2332] tracking-tightest leading-none uppercase">Architectural <br /> <span className="text-brand-blue italic">Guardians.</span></h2>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Jonas Kassahun', role: 'Chief Executive Node', detail: 'Founder & Lead Systems Architect.' },
                { name: 'Nardos Tekle', role: 'Security Ops Director', detail: 'Global Asset Governance & Cloud Shield.' },
                { name: 'Elias Bekele', role: 'Head of Infrastructure', detail: 'Low-Latency Network & Cluster Logistics.' },
                { name: 'Sara Solomon', role: 'Chief of AI Research', detail: 'Neural Synchrony & Reasoning Protocols.' }
              ].map((leader, i) => (
                 <motion.div key={i} className="space-y-6 text-center lg:text-left">
                    <div className="w-20 h-20 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-sm relative overflow-hidden group">
                       <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <User size={32} className="text-brand-blue/20 group-hover:text-brand-blue transition-colors" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[9px] font-bold text-brand-blue uppercase tracking-widest">{leader.role}</p>
                       <h4 className="text-xl font-bold font-jakarta text-[#1A2332] tracking-tight">{leader.name}</h4>
                       <p className="text-[10px] text-gray-400 font-bold leading-tight uppercase tracking-wide pt-2 border-t border-gray-100 mt-2">{leader.detail}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= CORE LOGIC (Process) ============= */}
      <section className="py-20 relative overflow-hidden bg-[#000000]">
        <div className="container-custom">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
               <div className="space-y-4">
                  <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[10px] font-medium px-5 py-1.5 rounded-full">REGISTRY_LOGIC</Badge>
                  <h2 className="text-3xl md:text-5xl font-bold font-jakarta tracking-tightest leading-[0.9] text-white uppercase">Operational <br /> Framework.</h2>
               </div>
               <p className="text-lg text-gray-400 font-bold max-w-sm leading-tight italic opacity-70">The engineering protocols that define our institutional success.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { title: 'SYNCHRONY', sub: 'ALIGNMENT_NODE', desc: 'Ensuring absolute structural alignment with your organizational logic.' },
                 { title: 'MASTERY', sub: 'EXPERT_DEPLOYMENT', desc: 'Deploying elite engineering units to solve complex computational challenges.' },
                 { title: 'SOVEREIGNTY', sub: 'SECURE_GOVERNANCE', desc: 'Building systems that ensure absolute data independence and security.' }
               ].map((p, i) => (
                 <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="space-y-6 p-6 bg-white/5 border border-white/5 hover:border-brand-blue/30 rounded-2xl transition-all duration-500 group"
                 >
                    <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] font-medium opacity-50 group-hover:opacity-100 transition-opacity">{p.sub}</div>
                    <h4 className="text-2xl md:text-3xl font-bold font-jakarta tracking-tight text-white uppercase">{p.title}</h4>
                    <p className="text-sm text-gray-500 font-bold leading-relaxed">{p.desc}</p>
                 </motion.div>
               ))}
            </div>
        </div>
      </section>

      {/* ============= CORE STATS REGISTRY ============= */}
      <section className="py-20 bg-[#F3EFE6] relative overflow-hidden">
        {/* Animated Background Illustration */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#1B4F8A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <motion.div 
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-brand-blue/20 to-transparent blur-[120px] rounded-full" 
          />
        </div>

        <div className="container-custom relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 items-center">
              {[
                { label: 'Countries Covered', val: 2, unit: 'Nations' },
                { label: 'System Uptime', val: 99.9, unit: 'Percent' },
                { label: 'Active Projects', val: 17, unit: 'Missions' },
                { label: 'Security Audits', val: 1.2, unit: 'Completed' }
              ].map((stat, i) => (
                 <MetricCounter key={i} value={stat.val} label={stat.label} unit={stat.unit} />
              ))}
           </div>
        </div>
      </section>

      {/* ============= EXECUTIVE UNIT ============= */}
      {/* ============= EXECUTIVE UNIT ============= */}
      <section className="py-16 bg-[#000000] relative overflow-hidden">
        <div className="container-custom relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-4 text-center md:text-left">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[9px] font-medium px-4 py-1 rounded-full">EXECUTIVE_UNIT</Badge>
                 <h2 className="text-3xl md:text-4xl font-bold font-jakarta tracking-tightest leading-none text-white uppercase">Command Council.</h2>
              </div>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "CEO", role: "Chief Executive Node", group: "Strategic Operations" },
                { name: "CTO", role: "Chief Technology Architect", group: "System Logic" },
                { name: "COO", role: "Chief Operating Node", group: "Operational Synchrony" },
                { name: "CFO", role: "Chief Financial Node", group: "Capital Logic" },
                { name: "Head of AI", role: "Research Lead", group: "Reasoning Hub" },
                { name: "Head of SEC", role: "Security Director", group: "Shield Unit" },
                { name: "Head of DEV", role: "Chief Engineering Architect", group: "Core Logic Unit" },
                { name: "Head of Design", role: "Visual Director", group: "Visual Systems Hub" }
              ].map((member, i) => (
                <motion.div 
                  key={member.name} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="space-y-4 group text-center"
                >
                   <div className="w-28 h-28 mx-auto bg-white/5 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <User size={40} className="text-white/10 group-hover:text-brand-blue transition-colors duration-700" />
                   </div>
                   
                   <div className="space-y-1">
                      <div className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] font-medium opacity-70">{member.role}</div>
                      <h4 className="text-lg font-bold font-jakarta text-white tracking-tight">{member.name}</h4>
                      <div className="w-6 h-px bg-white/10 mx-auto mt-2 group-hover:w-10 transition-all duration-700" />
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest pt-1.5 font-medium">{member.group}</p>
                   </div>
                </motion.div>
              ))}
            </div>
         </div>
       </section>

      {/* ============= GLOBAL STANDARDS & REGISTRY VALIDATION ============= */}
      <section className="py-24 bg-[#F3EFE6] border-y border-gray-100 overflow-hidden">
        <div className="container-custom relative z-10 mb-20">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[10px] font-medium px-5 py-1.5 rounded-full">REGISTRY_VALIDATION</Badge>
                 <h2 className="text-4xl md:text-6xl font-bold font-jakarta tracking-tightest leading-[0.9] text-[#1A2332]">Mission <br /> <span className="text-brand-blue italic">Compliant.</span></h2>
              </div>
              <p className="text-xl text-gray-500 font-bold leading-tight max-w-xl lg:pb-2">
                 Our builds are validated by international regulatory bodies and sovereign cloud infrastructure standardizers across global deployment clusters.
              </p>
           </div>
        </div>

        {/* Infinite Horizontal Certification Slider */}
        <div className="relative flex overflow-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[
              { title: "ISO 27001+", org: "DATA_SECURITY", icon: <Shield size={22} /> },
              { title: "SOC 2 TYPE II", org: "TRUST_OPS", icon: <ShieldCheck size={22} /> },
              { title: "NVIDIA Elite", org: "AI_PARTNER", icon: <Cpu size={22} /> },
              { title: "AWS GovCloud", org: "SECURE_HOST", icon: <Cloud size={22} /> },
              { title: "GDPR Certified", org: "PRIVACY_SYNC", icon: <Fingerprint size={22} /> },
              { title: "PCI DSS", org: "CAPITAL_SEC", icon: <CreditCard size={22} /> },
              { title: "HIPAA Node", org: "BIO_LOGIC", icon: <Activity size={22} /> },
              { title: "GCP Certified", org: "GLOBAL_NODE", icon: <Database size={22} /> },
              { title: "Microsoft MPN", org: "SYSTEM_CLOUD", icon: <Box size={22} /> },
              { title: "NIST 800-53", org: "FEDERAL_OPS", icon: <Lock size={22} /> },
              { title: "FedRAMP Node", org: "GOV_SYNC", icon: <Server size={22} /> },
              { title: "Cisco Shield", org: "NET_LOGIC", icon: <Terminal size={22} /> }
            ].concat([
              { title: "ISO 27001+", org: "DATA_SECURITY", icon: <Shield size={22} /> },
              { title: "SOC 2 TYPE II", org: "TRUST_OPS", icon: <ShieldCheck size={22} /> },
              { title: "NVIDIA Elite", org: "AI_PARTNER", icon: <Cpu size={22} /> },
              { title: "AWS GovCloud", org: "SECURE_HOST", icon: <Cloud size={22} /> },
              { title: "GDPR Certified", org: "PRIVACY_SYNC", icon: <Fingerprint size={22} /> },
              { title: "PCI DSS", org: "CAPITAL_SEC", icon: <CreditCard size={22} /> },
              { title: "HIPAA Node", org: "BIO_LOGIC", icon: <Activity size={22} /> },
              { title: "GCP Certified", org: "GLOBAL_NODE", icon: <Database size={22} /> },
              { title: "Microsoft MPN", org: "SYSTEM_CLOUD", icon: <Box size={22} /> },
              { title: "NIST 800-53", org: "FEDERAL_OPS", icon: <Lock size={22} /> },
              { title: "FedRAMP Node", org: "GOV_SYNC", icon: <Server size={22} /> },
              { title: "Cisco Shield", org: "NET_LOGIC", icon: <Terminal size={22} /> }
            ]).map((c, i) => (
               <div key={i} className="inline-flex items-center gap-6 min-w-[280px] p-2 hover:scale-105 transition-transform duration-500">
                  <div className="w-12 h-12 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-700">
                     {c.icon}
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-[#1A2332] uppercase leading-none mb-1">{c.title}</h4>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-medium opacity-60 leading-none">{c.org}</p>
                  </div>
               </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="py-24 relative overflow-hidden bg-[#000000]">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div
             animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/30 blur-[120px] rounded-full"
           />
           <motion.div
             animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.1, 0.03] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
             className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[160px] rounded-full"
           />
        </div>

        <div className="container-custom relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left — Text & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                 <div className="space-y-2">
                    <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[9px] px-4 py-1.5 rounded-full">START A PROJECT</Badge>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-bold font-jakarta text-white tracking-tightest leading-none uppercase">
                    Ready to <br /><span className="text-brand-blue italic">Build?</span>
                 </h2>
                 <p className="text-xl text-gray-400 font-bold max-w-md leading-snug">
                    Whether you need a custom software system, AI integration, or full-stack digital infrastructure — we're ready to deploy.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/contact">
                       <motion.button
                         whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(27,79,138,0.5)" }}
                         whileTap={{ scale: 0.97 }}
                         transition={{ type: "spring", stiffness: 300, damping: 20 }}
                         className="relative h-14 px-12 bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8] text-white rounded-2xl text-base font-bold uppercase tracking-widest overflow-hidden group"
                       >
                         {/* Shimmer sweep */}
                         <motion.span
                           animate={{ x: ["-100%", "200%"] }}
                           transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                         />
                         Start a Project
                       </motion.button>
                    </Link>
                    <Link to="/services">
                       <motion.button
                         whileHover={{ scale: 1.05, borderColor: "rgba(27,79,138,0.6)" }}
                         whileTap={{ scale: 0.97 }}
                         transition={{ type: "spring", stiffness: 300, damping: 20 }}
                         className="h-14 px-12 bg-transparent border border-white/10 text-white rounded-2xl text-base font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                       >
                         View Services
                       </motion.button>
                    </Link>
                 </div>
              </motion.div>

              {/* Right — Contact Info + Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="space-y-8"
              >
                 {/* Quick Stats */}
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { val: "24h", label: "Average Response Time" },
                      { val: "100%", label: "Client Satisfaction Rate" },
                      { val: "17+", label: "Active Projects" },
                      { val: "2+", label: "Countries Served" }
                    ].map((s, i) => (
                       <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-blue/20 transition-all">
                          <div className="text-3xl font-bold font-jakarta text-white mb-1">{s.val}</div>
                          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{s.label}</div>
                       </div>
                    ))}
                 </div>

                 {/* Contact Quick Links */}
                 <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                    <div className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.4em] mb-1">CONTACT_CHANNELS</div>
                    {[
                      { label: "Email", value: "hello@nexyovi.com" },
                      { label: "Location", value: "Addis Ababa, Ethiopia" }
                    ].map((c, i) => (
                       <div key={i} className="flex justify-between items-center text-sm">
                          <span className="font-bold text-gray-500 uppercase tracking-widest text-[10px]">{c.label}</span>
                          <span className="font-bold text-white">{c.value}</span>
                       </div>
                    ))}
                 </div>
              </motion.div>
           </div>
        </div>
      </section>


    </div>
  );
};
