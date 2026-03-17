import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Camera, 
  Code, 
  Layout, 
  ShieldCheck, 
  Database, 
  ArrowUpRight, 
  CheckCircle2,
  Cpu,
  Zap,
  Activity
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';
import techAbstractImage from '../assets/tech_abstract.png';

const services = [
  {
    title: "IT & Network Installation",
    icon: Network,
    desc: "Advanced enterprise network architecture, high-bandwidth fiber optics, and robust server room commissioning for high-frequency operations.",
    features: ["Fiber Optic Splicing", "Cat6/7 Structured Cabling", "High-Bandwidth Rack Ops"],
    color: "brand-blue"
  },
  {
    title: "CCTV & Security Systems",
    icon: Camera,
    desc: "Military-grade surveillance solutions with AI-driven object recognition, night-vision logic, and decentralized cloud sync storage nodes.",
    features: ["AI Perimeter Shielding", "4K Ultra-Low Light", "Remote Command Access"],
    color: "brand-mint"
  },
  {
    title: "Web Development",
    icon: Code,
    desc: "Architecting high-performance digital products and sovereign web applications with neural logic flows and reactive front-ends.",
    features: ["Full-Stack React Flow", "Decentralized APIs", "High-Throughput Backends"],
    color: "brand-purple"
  },
  {
    title: "UI/UX Design",
    icon: Layout,
    desc: "Designing immersive and intuitive user experiences that bridge the gap between complex architectural systems and human interaction.",
    features: ["Glasmore Aesthetic", "Micro-Animation Logic", "Cross-Platform Sync"],
    color: "brand-blue"
  },
  {
    title: "Cybersecurity Testing",
    icon: ShieldCheck,
    desc: "Aggressive penetration testing, zero-trust vulnerability assessment, and sovereign encryption protocol implementation.",
    features: ["Red Team Ops", "Logic Breach Defense", "AES-256 Sink Clusters"],
    color: "brand-mint"
  },
  {
    title: "Data Recovery & System Repair",
    icon: Database,
    desc: "Critical data orchestration and emergency recovery protocols for hardware nodes and logic clusters facing catastrophic failure.",
    features: ["Neural Data Reconstruction", "Logic Node Repair", "Disaster Sync Protocols"],
    color: "brand-purple"
  }
];

export const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen pt-20 overflow-hidden">
      
      {/* ============= SERVICES HERO ============= */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={techAbstractImage} 
            className="w-full h-full object-cover brightness-[0.9] opacity-40 blur-[2px] scale-110" 
            alt="Technical Abstract" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-brand-cream/60 to-brand-cream" />
          <div className="absolute inset-0 mesh-gradient opacity-10" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-6xl space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="blue"><Activity size={12} className="mr-2" /> Technical Ops Registry Active</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tightest uppercase font-outfit"
            >
              Logical <br />
              <span className="gradient-text">Competencies.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-brand-charcoal/40 font-medium leading-relaxed max-w-4xl"
            >
              NEXYOVI provides elite technical orchestration across infrastructure, development, and security domains. We build the foundations of a smart society.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============= SERVICES REGISTRY (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="premium-card group bg-white/40 border-black/5 p-10 h-full flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-700"
              >
                 <div className="space-y-10">
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-white group-hover:text-black transition-all shadow-sm">
                       <service.icon size={32} />
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-bold leading-tight uppercase font-outfit">{service.title}</h3>
                       <p className="text-lg text-brand-charcoal/40 group-hover:text-white/60 font-medium leading-relaxed">{service.desc}</p>
                    </div>
                 </div>
                 
                 <div className="flex flex-col gap-8 pt-12">
                    <div className="flex flex-wrap gap-2">
                       {service.features.map(f => (
                          <div key={f} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/5 border border-black/5 text-[9px] font-bold text-brand-charcoal/30 group-hover:text-white/40 group-hover:border-white/10 uppercase tracking-widest whitespace-nowrap">
                             <CheckCircle2 size={10} className="text-brand-mint" /> {f}
                          </div>
                       ))}
                    </div>
                    <div className="pt-8 border-t border-black/5 group-hover:border-white/10 flex justify-between items-center group/btn">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 group-hover:text-white/20">Operational_Status_L10</span>
                       <button className="w-12 h-12 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center group-hover/btn:bg-brand-blue group-hover/btn:border-brand-blue transition-all shadow-sm">
                          <ArrowUpRight size={20} className="text-brand-charcoal group-hover:text-white group-hover/btn:rotate-45 transition-transform" />
                       </button>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= DEPLOYMENT PROTOCOL (BOLD CREAM SECTION) ============= */}
      <section className="section-padding relative overflow-hidden bg-brand-cream-bold text-brand-charcoal">
        <div className="container-custom">
           <div className="premium-card p-12 md:p-32 relative overflow-hidden group border-black/5 bg-white/40">
              <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                 <div className="space-y-10">
                    <Badge variant="purple">Rapid Response Phase</Badge>
                    <h2 className="text-5xl md:text-8xl font-black font-outfit uppercase leading-[0.8] tracking-tightest">
                       Engineering <br /> <span className="gradient-text">Excellence.</span>
                    </h2>
                    <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed">
                       Our service deployment is pre-validated against L10 security standards and intercontinental latency benchmarks. We don't just solve problems; we engineer certainty for your digital operations.
                    </p>
                    <div className="pt-6">
                       <Button variant="secondary" className="px-12">Initialize Deployment Pipeline</Button>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { label: "Response", val: "24h", icon: <Zap /> },
                      { label: "Uptime", val: "99.9%", icon: <Activity /> },
                      { label: "Sync Speed", val: "0.1ms", icon: <Cpu /> },
                      { label: "Security", val: "L10", icon: <ShieldCheck /> }
                    ].map((s, i) => (
                      <div key={i} className="glass-panel p-8 space-y-4 border-black/5 bg-white/60 group/stat">
                         <div className="w-10 h-10 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue group-hover/stat:bg-brand-blue group-hover/stat:text-white transition-colors">
                            {s.icon}
                         </div>
                         <div>
                            <div className="text-[10px] font-black text-brand-charcoal/20 uppercase tracking-widest">{s.label}</div>
                            <div className="text-4xl font-black font-outfit text-brand-charcoal">{s.val}</div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};
