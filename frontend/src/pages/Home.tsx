import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  ChevronRight,
  Sparkles,
  Network,
  Camera,
  Layers,
  Code,
  Layout as LayoutIcon,
  ShieldCheck,
  Server,
  UserCheck,
  Quote,
  Star,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge, GlassCard } from '../components/ui/Core';
import nvidiaLogo from '../assets/nvidia-28.png';
import microsoftLogo from '../assets/microsoft-19.png';
import awsLogo from '../assets/aws-25.png';
import cbeLogo from '../assets/cbe.png';
import ethioLogo from '../assets/ethio.jpg';
import hpLogo from '../assets/hp-22.png';
import ibmLogo from '../assets/ibm-17.png';
import oracleLogo from '../assets/oracle-21.png';
import zemenLogo from '../assets/zemen-bank-logo.webp';
import insaLogo from '../assets/Insa-09.png';
import aauLogo from '../assets/aau-02.png';
import aastuLogo from '../assets/aastu-01.png';
import bduLogo from '../assets/bdu-05.png';
import hawasaLogo from '../assets/Hawasa-08.png';
import globalLogo from '../assets/global.png';
import finLogo from '../assets/fin.jpg';
import heroImage from '../assets/hero_office.png';
import workspaceImage from '../assets/workspace_hero.png';

// --- Specialized Internal Components ---

const MagneticWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, path }: { icon: any, title: string, desc: string, path: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="premium-card p-10 space-y-8 flex flex-col h-full bg-white/40 border-black/5"
  >
    <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
      <Icon size={32} />
    </div>
    <div className="space-y-4 flex-grow">
      <h3 className="text-3xl font-bold text-brand-charcoal">{title}</h3>
      <p className="text-lg text-brand-charcoal/40 font-medium leading-relaxed">{desc}</p>
    </div>
    <Link to={path} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-blue group/btn">
      Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
    </Link>
  </motion.div>
);

const teamMembers = [
  { name: "Abebe Kebede", role: "AI Engineer", icon: <Bot size={20} /> },
  { name: "Sara Tesfaye", role: "Frontend Developer", icon: <Code size={20} /> },
  { name: "Dawit Molla", role: "Backend Developer", icon: <Server size={20} /> },
  { name: "Helen Gebre", role: "Full Stack Developer", icon: <Layers size={20} /> },
  { name: "Yonas Alemu", role: "UI/UX Designer", icon: <LayoutIcon size={20} /> },
  { name: "Martha Girma", role: "Network Engineer", icon: <Network size={20} /> },
  { name: "Samuel Bekele", role: "Security Expert", icon: <ShieldCheck size={20} /> },
];

const testimonials = [
  { text: "NEXYOVI transformed our digital infrastructure. Their AI integration is world-class.", author: "James Chen", role: "CTO, Global Tech" },
  { text: "The network installation was seamless and the support is exceptional. Highly recommend.", author: "Marie Dupont", role: "Operations Lead, EuroCorp" },
  { text: "Their cybersecurity testing identified critical vulnerabilities we didn't even know existed.", author: "Sarah Johnson", role: "Head of IT, SecureSolutions" },
];

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen overflow-hidden">
      
      {/* ============= ENHANCED HERO (GLASMORE) ============= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            className="w-full h-full object-cover brightness-[0.8] scale-110 blur-[2px]" 
            alt="Hero Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 via-transparent to-brand-cream" />
          <div className="absolute inset-0 radial-grid opacity-10" />
        </motion.div>

        {/* Animated Particles/Orbs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {[...Array(5)].map((_, i) => (
             <motion.div
               key={i}
               animate={{
                 x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                 y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                 scale: [1, 1.2, 1],
                 opacity: [0.3, 0.6, 0.3],
               }}
               transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[120px]"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
               }}
             />
           ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <Badge variant="blue">
                <Sparkles size={12} className="mr-2" /> Smart Technology v3.0
              </Badge>
            </motion.div>

            <div className="space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] tracking-tightest font-outfit text-white drop-shadow-2xl"
              >
                Building the Future <br />
                <span className="gradient-text">with Smart Tech.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-xl md:text-3xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto font-inter backdrop-blur-sm p-4 rounded-3xl"
              >
                Integrating advanced AI reasoning, secure networking, and digital excellence to redefine your operational matrix.
              </motion.p>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 1 }}
               className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8"
            >
              <MagneticWrapper>
                <Link to="/services">
                  <Button size="lg" className="px-16 py-8 text-xl shadow-glow">
                    Get Started <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </MagneticWrapper>
              
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-16 py-8 text-xl border-white/20 text-white hover:bg-white/10 backdrop-blur-md">
                   Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-brand-blue rounded-full" />
        </motion.div>
      </section>

      {/* ============= SERVICES PREVIEW (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
             <div className="space-y-6 max-w-2xl">
                <Badge variant="blue">Our Expertise</Badge>
                <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tighter text-brand-charcoal">
                   Smart <span className="gradient-text-blue">Solutions.</span>
                </h2>
                <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed">
                   From network architecture to AI-driven reasoning, we provide the technical foundation for the future.
                </p>
             </div>
             <Link to="/services">
                <Button variant="outline" className="px-12 py-5 uppercase tracking-widest text-[10px] font-black">View All Services</Button>
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             <ServiceCard 
                icon={Network} 
                title="IT & Network" 
                desc="Advanced network architecture and high-bandwidth installation for enterprise units."
                path="/services"
             />
             <ServiceCard 
                icon={Camera} 
                title="CCTV Systems" 
                desc="Military-grade surveillance solutions with AI tracking and cloud sync nodes."
                path="/services"
             />
             <ServiceCard 
                icon={Code} 
                title="Web & App Dev" 
                desc="Architecting high-performance digital products with neural logic and react flow."
                path="/services"
             />
          </div>
        </div>
      </section>

      {/* ============= COLLABORATIVE ECOSYSTEM (MINI UNIFIED SECTION) ============= */}
      <section className="py-12 bg-brand-cream-bold/30 border-y border-black/5 overflow-hidden relative">
        <div className="container-custom relative z-10 flex flex-col items-center mb-6">
          {/* Centered Section Header - Compact */}
          <div className="text-center max-w-2xl space-y-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-blue">Partner Ecosystem</p>
              <h2 className="text-3xl md:text-4xl font-black font-outfit uppercase tracking-tighter text-brand-charcoal">
                Global Partnerships, <span className="gradient-text">Local Impact.</span>
              </h2>
            </div>
            <p className="text-sm text-brand-charcoal/60 font-medium leading-relaxed max-w-xl mx-auto">
              Collaborating with international technology leaders and local innovators to build the digital foundation of Ethiopia.
            </p>
          </div>
        </div>

        {/* Continuous Horizontal Infinite Scroll - Mini Edge to Edge */}
        <div className="w-full relative overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap py-4">
            {[
              { name: "NVIDIA", logo: nvidiaLogo },
              { name: "Microsoft", logo: microsoftLogo },
              { name: "AWS", logo: awsLogo },
              { name: "IBM", logo: ibmLogo },
              { name: "Oracle", logo: oracleLogo },
              { name: "HP", logo: hpLogo },
              { name: "CBE", logo: cbeLogo },
              { name: "Ethio Telecom", logo: ethioLogo },
              { name: "Zemen Bank", logo: zemenLogo },
              { name: "INSA", logo: insaLogo },
              { name: "AAU", logo: aauLogo },
              { name: "AASTU", logo: aastuLogo },
              { name: "BDU", logo: bduLogo },
              { name: "Hawassa University", logo: hawasaLogo },
              { name: "Global", logo: globalLogo },
              { name: "FinTech", logo: finLogo },
              { name: "OpenAI", logo: null },
              { name: "Safaricom", logo: null }
            ].map((partner, i) => (
              <div key={i} className="inline-flex items-center gap-4 px-8 py-2 transition-all cursor-default group/card min-w-[200px] justify-center">
                <div className="w-20 h-12 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/card:scale-110">
                  {partner.logo ? (
                    <img src={partner.logo} className="w-full h-full object-contain" alt={partner.name} />
                  ) : (
                    <div className="flex flex-col items-center">
                       <Zap size={24} className="text-brand-blue/40" />
                       <span className="text-[10px] font-bold text-brand-charcoal/30">{partner.name}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {[
              { name: "NVIDIA", logo: nvidiaLogo },
              { name: "Microsoft", logo: microsoftLogo },
              { name: "AWS", logo: awsLogo },
              { name: "IBM", logo: ibmLogo },
              { name: "Oracle", logo: oracleLogo },
              { name: "HP", logo: hpLogo },
              { name: "CBE", logo: cbeLogo },
              { name: "Ethio Telecom", logo: ethioLogo },
              { name: "Zemen Bank", logo: zemenLogo },
              { name: "INSA", logo: insaLogo },
              { name: "AAU", logo: aauLogo },
              { name: "AASTU", logo: aastuLogo },
              { name: "BDU", logo: bduLogo },
              { name: "Hawassa University", logo: hawasaLogo },
              { name: "Global", logo: globalLogo },
              { name: "FinTech", logo: finLogo },
              { name: "OpenAI", logo: null },
              { name: "Safaricom", logo: null }
            ].map((partner, i) => (
              <div key={`dup-${i}`} className="inline-flex items-center gap-4 px-8 py-2 transition-all cursor-default group/card min-w-[200px] justify-center">
                <div className="w-20 h-12 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/card:scale-110">
                  {partner.logo ? (
                    <img src={partner.logo} className="w-full h-full object-contain" alt={partner.name} />
                  ) : (
                    <div className="flex flex-col items-center">
                       <Zap size={24} className="text-brand-blue/40" />
                       <span className="text-[10px] font-bold text-brand-charcoal/30">{partner.name}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= ABOUT PREVIEW (BOLD CREAM SECTION) ============= */}
      <section className="section-padding relative overflow-hidden bg-brand-cream-bold">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Badge variant="mint">Sovereign Logic</Badge>
                 <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase leading-[0.8] tracking-tightest text-brand-charcoal">
                    Architecting <br /> <span className="gradient-text-mint">The Meta.</span>
                 </h2>
                 <p className="text-xl text-brand-charcoal/40 font-medium leading-relaxed">
                    NEXYOVI is a global engineering unit focused on high-bandwidth digital sovereignty and autonomous architectural logic. We bridge the gap between global standards and regional needs.
                 </p>
                 <div className="pt-8">
                    <Link to="/about">
                       <Button size="lg" className="px-12">Meet the Unit <ChevronRight className="ml-2" /></Button>
                    </Link>
                 </div>
              </div>
              <div className="relative">
                 <GlassCard intensity="strong" className="aspect-square p-0 overflow-hidden border-black/5 shadow-floating bg-white/40">
                    <img src={workspaceImage} className="w-full h-full object-cover brightness-[0.9] hover:scale-105 transition-transform duration-1000" alt="Workspace" />
                    <div className="absolute inset-0 bg-brand-blue/5" />
                 </GlassCard>
                 <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-mint/10 blur-[100px] rounded-full" />
              </div>
           </div>
        </div>
      </section>

      {/* ============= TEAM SECTION (WHITE SECTION) ============= */}
      <section className="section-padding relative bg-white overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center space-y-8 mb-24">
            <Badge variant="purple">The Engineering Unit</Badge>
            <h2 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tighter text-brand-charcoal">
               Our <span className="gradient-text">Elite Agents.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {teamMembers.map((member, i) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="premium-card p-8 group hover:bg-black hover:text-white transition-all duration-700 bg-white/40 border-black/5"
                >
                   <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                      {member.icon}
                   </div>
                   <h4 className="text-2xl font-bold uppercase tracking-tight leading-none mb-1">{member.name}</h4>
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-charcoal/20 group-hover:text-white/40">{member.role}</p>
                   <div className="mt-8 pt-8 border-t border-black/5 group-hover:border-white/10 flex justify-between items-center">
                      <span className="text-[9px] font-black font-mono text-brand-blue">NODE_0{i+1}</span>
                      <UserCheck size={14} className="text-brand-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ============= TESTIMONIALS (BOLD CREAM SECTION) ============= */}
      <section className="section-padding bg-brand-cream-bold">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {testimonials.map((test, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-panel p-12 space-y-8 relative overflow-hidden bg-white/40 border-black/5 shadow-floating"
                >
                   <Quote className="text-brand-blue/20 absolute -top-4 -left-4" size={120} />
                   <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-brand-blue fill-brand-blue" />)}
                   </div>
                   <p className="text-xl font-medium leading-relaxed text-brand-charcoal/60 relative z-10 italic">
                      "{test.text}"
                   </p>
                   <div className="pt-8 border-t border-black/5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-black uppercase text-[10px]">
                         {test.author.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <div>
                         <h5 className="font-bold text-lg leading-none">{test.author}</h5>
                         <p className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/20 mt-1">{test.role}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= FINAL CTA (WHITE SECTION) ============= */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
           <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-12 md:p-32 text-center space-y-12 relative overflow-hidden border-black/5 bg-brand-cream-bold/30"
           >
              <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-10">
                <h2 className="text-5xl md:text-9xl font-black font-outfit leading-[0.8] tracking-tightest text-brand-charcoal">
                   Let's Build <br /> <span className="gradient-text">Your Future.</span>
                </h2>
                <div className="flex justify-center pt-8">
                   <MagneticWrapper>
                      <Link to="/contact">
                         <Button size="lg" className="px-20 py-8 text-xl">Establish Sync Protocol <ArrowRight className="ml-3" /></Button>
                      </Link>
                   </MagneticWrapper>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

    </div>
  );
};
