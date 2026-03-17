import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, ArrowRight, Users, Image, Cpu, Command, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard, Button, Badge } from '../components/ui/Core';
import c2 from '../assets/c2.jpg';
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

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen overflow-hidden">
      
      {/* ============= COMPANY HERO (FULL-WIDTH IMMERSIVE) ============= */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Static Professional Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={c2} 
            className="w-full h-full object-cover brightness-[0.7] blur-[1px]" 
            alt="Strategic Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 via-transparent to-brand-cream/80" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container-custom relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Center Content */}
            <div className="lg:col-span-12 max-w-4xl space-y-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="blue"><Command size={12} className="mr-2" /> Global Solutions</Badge>
              </motion.div>

              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl xl:text-8xl font-semibold leading-tight tracking-tight font-outfit text-white/90"
                >
                  Building Smart <br />
                  <span className="text-white/90">Technology for the Future</span>
                </motion.h1>
                
                <div className="space-y-8">
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white/80 font-semibold leading-relaxed max-w-2xl font-inter"
                  >
                    NEXYOVI is a modern technology company specializing in AI, networking, cybersecurity, and digital solutions designed to power businesses and individuals.
                  </motion.p>

                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-white/70 font-normal leading-relaxed max-w-2xl font-inter border-l-2 border-brand-blue pl-6"
                  >
                    We combine innovation, design, and engineering to deliver reliable and intelligent tech solutions across multiple industries.
                  </motion.p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6 flex flex-wrap gap-6"
              >
                <Link to="/services">
                  <Button size="lg" className="px-10 bg-white text-brand-charcoal hover:bg-brand-blue hover:text-white border-0 font-semibold">
                     🚀 Get Started
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="px-10 border-white/20 text-white hover:bg-white/10 backdrop-blur-md font-semibold">
                     📞 Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ============= CORE INFRASTRUCTURE & ECOSYSTEM ============= */}
      <section className="py-24 bg-white overflow-hidden border-y border-black/5 relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        
        <div className="container-custom relative z-10">
          {/* Detailed Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Infrastructure", val: "Enterprise Ready", desc: "Global-scale cloud delivery nodes with automated redundancy.", icon: <Globe size={24}/> },
              { label: "Security", val: "Advanced Encryption", desc: "Military-grade AES-256 protocols and zero-trust architecture.", icon: <Shield size={24}/> },
              { label: "AI Engine", val: "Next-Gen Intelligence", desc: "Neural processing units optimized for real-time autonomous reasoning.", icon: <Cpu size={24}/> },
              { label: "Availability", val: "99.9% S.L.A", desc: "Continuous uptime monitoring and sub-millisecond failover.", icon: <Activity size={24}/> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-black/10 flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue">{stat.label}</p>
                  <h3 className="text-xl font-semibold text-brand-charcoal">{stat.val}</h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed font-medium">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= COLLABORATIVE ECOSYSTEM (MINI UNIFIED SECTION) ============= */}
      <section className="py-12 bg-brand-cream-bold/25 border-y border-black/5 overflow-hidden relative">
        <div className="container-custom relative z-10 flex flex-col items-center mb-6">
          {/* Centered Section Header - Compact */}
          <div className="text-center max-w-2xl space-y-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-blue">Partner Ecosystem</p>
              <h2 className="text-3xl md:text-4xl font-semibold font-outfit tracking-tight text-brand-charcoal/90">
                Global Partnerships, Local Impact.
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
      </section>      {/* ============= GLOBAL OPERATIONS (WHITE) ============= */}
      <section className="py-24 bg-white border-b border-black/5 overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mb-16">
            <Badge variant="blue" className="mb-6">Network Nodes</Badge>
            <h2 className="text-4xl md:text-5xl font-semibold font-outfit tracking-tight text-brand-charcoal/90 mb-6">
              Global Operations
            </h2>
            <p className="text-lg text-brand-charcoal/60 font-medium leading-relaxed">
              Our centers represent the operational backbone of NEXYOVI, supporting our clients across regional hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LOC 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white border border-black/10 hover:border-brand-blue/30 transition-all group shadow-sm"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold">
                  01
                </div>
                <div className="text-[10px] font-black tracking-widest text-brand-blue uppercase">LOC 01</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black font-outfit text-brand-charcoal tracking-tighter uppercase italic">
                  Addis Ababa
                </h3>
                <div className="space-y-2">
                   <div className="flex items-center gap-3 text-brand-charcoal/40 font-bold text-xs uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                      Regional Headquarters
                   </div>
                   <div className="flex items-center gap-3 text-brand-charcoal/40 font-bold text-xs uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-brand-blue/40" />
                      Research & Development Center
                   </div>
                </div>
              </div>
            </motion.div>

            {/* LOC 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-3xl bg-white border border-black/10 hover:border-brand-blue/30 transition-all group shadow-sm"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-xl bg-brand-charcoal text-white flex items-center justify-center font-bold">
                  02
                </div>
                <div className="text-[10px] font-black tracking-widest text-brand-charcoal/30 uppercase">LOC 02</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black font-outfit text-brand-charcoal tracking-tighter uppercase italic">
                  Global Hubs
                </h3>
                <div className="space-y-2">
                   <div className="flex items-center gap-3 text-brand-charcoal/40 font-bold text-xs uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-brand-charcoal/40" />
                      International Presence
                   </div>
                   <div className="flex items-center gap-3 text-brand-charcoal/40 font-bold text-xs uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-brand-charcoal/20" />
                      Strategic Infrastructure
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ============= WHO WE ARE SECTION (WHITE) ============= */}
      <section className="section-padding relative bg-white overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/20 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            {/* Left: Content */}
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="blue"><Users size={12} className="mr-2" /> Corporate Identity</Badge>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-semibold font-outfit tracking-tight text-brand-charcoal/90"
                >
                  Who We Are
                </motion.h2>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <p className="text-xl md:text-2xl text-brand-charcoal/80 font-normal leading-relaxed">
                    NEXYOVI is a next-generation technology company focused on delivering advanced digital and infrastructure solutions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div className="p-8 rounded-3xl bg-brand-cream/30 border border-black/5 hover:border-brand-blue/20 transition-colors">
                      <Zap className="text-brand-blue mb-6" size={32} />
                      <h4 className="text-xl font-semibold mb-3">Elite Talent</h4>
                      <p className="text-sm text-brand-charcoal/40 leading-relaxed font-medium">Our team is made up of skilled engineers, developers, and designers passionate about engineering excellence.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-brand-cream/30 border border-black/5 hover:border-brand-mint/20 transition-colors">
                      <Shield className="text-brand-mint mb-6" size={32} />
                      <h4 className="text-xl font-semibold mb-3">Global Security</h4>
                      <p className="text-sm text-brand-charcoal/40 leading-relaxed font-medium">We build efficient, secure, and modern systems that power national-scale digital transformations.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Immersive Image Holder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8"
            >
              <div className="absolute inset-0 bg-brand-blue/5 rounded-[4rem] blur-3xl opacity-50" />
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-black/5 shadow-2xl group">
                <div className="absolute inset-0 bg-brand-charcoal flex items-center justify-center">
                  <div className="text-center space-y-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mx-auto mb-6">
                      <Image size={40} className="text-white/30" />
                    </div>
                    <p className="text-[10px] font-semibold tracking-wider text-white uppercase">Corporate Asset</p>
                    <p className="text-xs font-medium text-white/40">Visual Representation</p>
                  </div>
                </div>
                
                {/* Visual Overlays */}
                <div className="absolute top-8 left-8">
                  <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white text-[10px]">Secure View</Badge>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] font-semibold text-brand-blue uppercase tracking-wider">Engineering</p>
                      <p className="text-lg font-semibold text-white">System Core</p>
                    </div>
                    <div className="w-12 h-1 overflow-hidden rounded-full bg-white/10">
                      <div className="w-[60%] h-full bg-brand-blue animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============= TECHNICAL PILLARS (CREAM) ============= */}
      <section className="section-padding relative bg-brand-cream overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Mission Pillar */}
            <motion.div className="lg:col-span-8 bento-item group bg-white shadow-premium">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="space-y-10">
                    <h2 className="text-4xl lg:text-5xl font-semibold font-outfit tracking-tight text-brand-charcoal/90">
                      Our Mission
                    </h2>
                    <p className="text-lg text-brand-charcoal/60 font-medium leading-relaxed">
                      We are committed to revolutionizing how businesses interact with technology at scale. NEXYOVI specializes in high-performance infrastructure and intelligent security solutions.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-blue/5 blur-3xl rounded-full" />
                    <GlassCard intensity="strong" className="bg-brand-cream/10 border-black/5 aspect-square flex flex-center items-center justify-center">
                       <Cpu size={80} className="text-brand-blue animate-float" />
                    </GlassCard>
                  </div>
               </div>
            </motion.div>

            {/* AI Pillar */}
            <motion.div className="lg:col-span-4 bento-item group bg-brand-charcoal text-white">
               <div className="space-y-8 h-full flex flex-col justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue shadow-sm">
                    <Cpu size={24}/>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold mb-4">Intelligent AI</h3>
                    <p className="text-lg text-white/40 font-medium leading-relaxed">Integrating advanced AI reasoning to solve complex multidimensional business challenges.</p>
                  </div>
               </div>
            </motion.div>

            {/* Security Pillar */}
            <motion.div className="lg:col-span-4 bento-item group bg-white shadow-premium">
                <div className="space-y-8 h-full flex flex-col justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-brand-mint/5 border border-brand-mint/10 flex items-center justify-center text-brand-mint shadow-sm">
                    <Shield size={24}/>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold mb-4">Secure Networks</h3>
                    <p className="text-lg text-brand-charcoal/40 font-medium leading-relaxed">Building bulletproof network infrastructures for absolute reliability and zero-trust security.</p>
                  </div>
               </div>
            </motion.div>

            {/* Design Pillar */}
            <motion.div className="lg:col-span-8 bento-item group bg-brand-blue text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full relative z-10">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold">Standard Engineering</h3>
                    <p className="text-lg text-white/80 font-medium leading-relaxed">Combining refined aesthetics with rigorous engineering standards for an exceptional user experience.</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                      <Globe className="text-white/20" size={100} strokeWidth={0.5}/>
                    </div>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============= GLOBAL OPERATIONS (CHARCOAL) ============= */}
      <section className="section-padding relative overflow-hidden bg-brand-charcoal text-white">
        {/* Modern Map Grid Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container-custom relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-16">
                 <div className="space-y-6">
                   <h2 className="text-5xl md:text-6xl font-semibold font-outfit tracking-tight text-white/90">
                      Global Operations
                    </h2>
                    <p className="text-lg text-white/60 font-medium max-w-lg">Our centers represent the operational backbone of NEXYOVI, supporting our clients across regional hubs.</p>
                 </div>

                 <div className="space-y-8">
                    {[
                      { city: "Addis Ababa", role: "Research & Development Center", coords: "Regional Headquarters" },
                      { city: "Global Hubs", role: "Strategic Infrastructure", coords: "International Presence" }
                    ].map((loc, i) => (
                      <div key={i} className="flex items-center gap-8 group p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-default">
                         <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-xs font-bold text-white/20 group-hover:text-brand-blue group-hover:border-brand-blue/40 transition-all bg-white/5">
                            LOC 0{i+1}
                         </div>
                         <div className="space-y-1 flex-1">
                            <div className="flex justify-between items-center mr-4">
                              <h4 className="text-xl font-normal text-white/90 transition-colors">{loc.city}</h4>
                              <span className="text-[11px] font-normal text-white/50">{loc.coords}</span>
                            </div>
                            <p className="text-sm text-white/40 font-normal">{loc.role}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-square scale-110">
                 <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] rounded-full animate-pulse" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-10 pointer-events-none">
                    <Globe size={1000} strokeWidth={0.2} className="text-brand-blue animate-slow-spin" />
                 </div>
                 
                 <GlassCard intensity="strong" className="h-full flex items-center justify-center border-white/10 relative overflow-hidden group bg-white/5 backdrop-blur-3xl rounded-[4rem]">
                    <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <Activity size={120} strokeWidth={1} className="text-brand-blue animate-float relative z-10" />
                    <div className="absolute bottom-12 text-center w-full">
                       <p className="text-[12px] font-semibold tracking-widest text-brand-blue uppercase">System Performance</p>
                       <div className="flex justify-center gap-1 mt-4">
                        {[1,2,3,4,5].map(b => <div key={b} className="w-1 h-3 bg-brand-blue/20 rounded-full animate-bounce" style={{ animationDelay: `${b*100}ms` }} />)}
                       </div>
                    </div>
                 </GlassCard>
              </div>
           </div>
        </div>
      </section>

      {/* ============= FINAL CTA (WHITE) ============= */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
           <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-12 md:p-24 text-center space-y-10 border-black/5 bg-brand-cream-bold/30"
           >
              <h2 className="text-5xl md:text-6xl font-semibold font-outfit tracking-tight text-brand-charcoal/90">
                 Building the Future
              </h2>
              <p className="text-xl md:text-2xl text-brand-charcoal/40 font-medium leading-relaxed max-w-2xl mx-auto">
                 Ready to transform your business with intelligent technology?
              </p>
              <div className="pt-8">
                 <Link to="/contact">
                    <Button size="lg" className="px-16 font-semibold">Get In Touch <ArrowRight className="ml-3" /></Button>
                 </Link>
              </div>
           </motion.div>
        </div>
      </section>

    </div>
  );
};
