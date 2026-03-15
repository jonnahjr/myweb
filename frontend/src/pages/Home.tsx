import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Cpu, Shield, Globe, Terminal, 
  Code, Workflow, Zap, 
  Database, Layout, Activity, Box, Search
} from 'lucide-react';
import { Button, Badge } from '../components/ui/Core';

import workspaceHero from '../assets/workspace_hero.png';
import logo from '../assets/logo 1.png';

const ModernHero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
            {/* Background Image Container */}
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10"></div>
                <motion.img 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={workspaceHero} 
                    alt="Nexyovi Creative Workspace"
                    className="w-full h-full object-cover grayscale-[0.2] brightness-105"
                />
                
                {/* Floating UI Accents */}
                <div className="absolute top-1/4 right-1/4 z-20">
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="p-4 bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl shadow-xl flex items-center gap-4"
                    >
                        <div className="w-10 h-10 bg-nexyovi-accent/10 rounded-lg flex items-center justify-center text-nexyovi-accent">
                            <Zap size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Node Status</p>
                            <p className="text-xs font-bold text-slate-900">Active Optimizing</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container-custom relative z-20">
                <div className="lg:w-1/2 pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-6 mb-12">
                            <img src={logo} alt="NEXYOVI" className="h-10 w-auto" />
                            <div className="w-[1px] h-6 bg-slate-200"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Innovation Lab</span>
                        </div>

                        <h1 className="text-6xl md:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-slate-950 mb-10">
                            High-Tech <br />
                            Professionalism <br />
                            <span className="text-nexyovi-accent">Redefined.</span>
                        </h1>

                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
                            NEXYOVI is a master-class engineering force. We architect high-concurrency 
                            infrastructure that acts as the invisible foundation for global digital empires.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Button variant="primary" className="!rounded-full !px-10 !py-4 shadow-xl shadow-nexyovi-accent/5 group">
                                Initialize Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                            <Button variant="outline" className="!rounded-full !px-10 !py-4">
                                View Portfolio
                            </Button>
                        </div>

                        {/* Subtle Detail */}
                        <div className="mt-20 pt-10 border-t border-slate-100 flex items-center gap-8">
                             <div className="flex -space-x-3">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Dev" />
                                    </div>
                                ))}
                             </div>
                             <p className="text-sm text-slate-400 font-medium tracking-tight">
                                Joined by <span className="text-slate-900 font-bold">2,400+</span> global stakeholders
                             </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Ethiopian Pattern Grid Overlay */}
            <div className="absolute inset-0 ethiopian-pattern-subtle pointer-events-none -z-10"></div>
        </section>
    );
};

const PartnerMarquee = () => {
    const partners = [
        { name: "Global Tech Corp", region: "International" },
        { name: "EthioTelecom", region: "Local" },
        { name: "Miami Dev Hub", region: "International" },
        { name: "Addis Fintech", region: "Local" },
        { name: "Secure Systems Inc", region: "International" },
        { name: "CBE Ethiopia", region: "Local" },
        { name: "Global Cloud Ops", region: "International" },
        { name: "Zemen Bank", region: "Local" },
    ];

    // Double the array for seamless infinite scroll
    const scrollItems = [...partners, ...partners];

    return (
        <div className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
            <div className="container-custom mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 text-center">Trusted by Global & Local Entities</p>
            </div>
            
            <div className="flex overflow-hidden">
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-16 items-center"
                >
                    {scrollItems.map((partner, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-nexyovi-accent transition-colors">
                                <Globe size={20} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{partner.name}</span>
                                <span className="text-[8px] font-black text-nexyovi-accent uppercase tracking-widest">{partner.region}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Gradient Mask for Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
    );
};

const ServiceGrid = () => {
    const services = [
        { icon: <Cpu />, title: "AI Integration", desc: "Automating complex processes with autonomous decision intelligence." },
        { icon: <Shield />, title: "Cyber Defense", desc: "Military-grade protection for mission-critical digital data layers." },
        { icon: <Globe />, title: "Edge Scaling", desc: "Architecting multi-region systems for infinite global growth." },
        { icon: <Code />, title: "Core Software", desc: "Clean, efficient, and robust systems built to international standards." },
        { icon: <Database />, title: "Data Storage", desc: "High-performance, secure data lakes for massive concurrancy." },
        { icon: <Layout />, title: "UX Architecture", desc: "Intuitive, professional interfaces designed for global users." }
    ];

    return (
        <section className="section-spacing bg-white relative">
            <div className="container-custom">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <Badge className="mb-6 !bg-slate-50 border-slate-100 text-slate-400">Featured Specializations</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-none mb-8">
                        Our <span className="text-nexyovi-accent">Value</span> Propositions
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        NEXYOVI engineers high-performance digital solutions, integrating advanced AI 
                        and robust cybersecurity measures for professional scalability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-10 glass-card bg-white border-slate-100 group transition-all duration-500"
                        >
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-nexyovi-accent group-hover:bg-nexyovi-accent/5 border border-slate-100 transition-all duration-500 mb-8">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter transition-colors group-hover:text-nexyovi-accent">{s.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed mb-8">{s.desc}</p>
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-nexyovi-accent transition-colors">
                                Explore Protocol <ArrowRight size={14} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HighTechStats = () => {
    return (
        <section className="py-32 relative overflow-hidden border-y border-black/[0.03] bg-white">
            <div className="container-custom">
                <div className="glass-panel !rounded-[4rem] p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative overflow-hidden group border-black/5">
                    {[
                        { label: 'Latency Protocol', val: '2.0', unit: 'MS', icon: <Zap /> },
                        { label: 'Global Infrastructure', val: '24', unit: 'NODES', icon: <Globe /> },
                        { label: 'Uptime Reliability', val: '99.99', unit: '%', icon: <Activity /> },
                        { label: 'Security Assets', val: '2.4', unit: 'BLN+', icon: <Shield /> }
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group/stat">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-nexyovi-primary mb-8 border border-black/[0.05] group-hover/stat:scale-110 transition-transform duration-500">
                                {s.icon}
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                                    <h3 className="text-6xl font-black text-slate-900 tracking-tighter">{s.val}</h3>
                                    <span className="text-xs font-black text-nexyovi-accent">{s.unit}</span>
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] pt-4">{s.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatementSection = () => {
    return (
        <section className="section-spacing bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 ethiopian-pattern-subtle !opacity-[0.05] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_mid,var(--color-nexyovi-accent)_0%,transparent_50%)] opacity-10"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 items-start">
                    <div className="lg:w-1/2">
                        <Badge className="mb-10 !bg-white/5 border-white/10 !text-white/60">Corporate Manifest</Badge>
                        <h2 className="text-5xl md:text-[6rem] font-bold text-white tracking-tighter leading-[0.9] mb-12 italic">
                            Invisible <br />
                            <span className="not-italic text-nexyovi-accent">Power.</span>
                        </h2>
                        <div className="flex items-center gap-8 group">
                            <div className="w-20 h-20 rounded-full border border-white/10 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Yonas" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Yonas Bogale</h4>
                                <p className="text-sm text-white/40 uppercase tracking-widest font-black">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-12">
                        <p className="text-3xl md:text-4xl text-white font-medium leading-[1.3] tracking-tight">
                            "The next generation of technology should be an <span className="text-nexyovi-accent">invisible force</span>—seamlessly integrated into everyday life, empowering users, and inspiring creativity."
                        </p>
                        <p className="text-xl text-white/50 leading-relaxed font-medium">
                            NEXYOVI is a modern technology powerhouse committed to advancing the frontiers of software innovation. 
                            Our team combines technical expertise with visionary thinking to ensure that every solution we deliver 
                            is not only functional but also secure and transformative.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SuccessProtocol = () => {
    const protocol = [
        { icon: <Search />, label: "Strategy", val: "Audit legacy bottlenecks & goals." },
        { icon: <Workflow />, label: "Architect", val: "Design high-concurrency blueprints." },
        { icon: <Terminal />, label: "Forge", val: "Develop under ISO security standards." },
        { icon: <Box />, label: "Scale", val: "Global edge activation and sync." }
    ];

    return (
        <section className="section-spacing bg-white relative">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                    <div className="max-w-xl">
                        <Badge className="mb-6">Operational Methodology</Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight uppercase">The Success <span className="text-nexyovi-accent">Protocol</span></h2>
                    </div>
                    <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                        Standardized technical workflows for intercontinental infrastructure deployment.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
                    {protocol.map((p, i) => (
                        <div key={i} className="group p-12 border border-slate-100 hover:bg-slate-50 transition-all duration-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-slate-950 group-hover:opacity-[0.05] transition-opacity">
                                <span className="text-8xl font-black italic">0{i+1}</span>
                            </div>
                            <div className="text-slate-300 group-hover:text-nexyovi-accent transition-colors mb-8">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-[0.3em]">{p.label}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{p.val}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden bg-white">
            <ModernHero />
            <PartnerMarquee />
            <ServiceGrid />
            <HighTechStats />
            <StatementSection />
            <SuccessProtocol />
            
            {/* Final Professional CTA */}
            <section className="section-spacing bg-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-4xl mx-auto p-20 glass-card bg-slate-50 border-slate-100 !rounded-[3rem] relative overflow-hidden">
                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 ethiopian-pattern-subtle !opacity-[0.02] pointer-events-none"></div>
                        
                        <Badge className="mb-10">System Initialization</Badge>
                        <h2 className="text-6xl md:text-[7rem] font-bold text-slate-950 tracking-tighter leading-[0.9] mb-12">
                            Secure Your <br />
                            <span className="text-nexyovi-accent">Global Hub.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button variant="primary" className="!rounded-full !px-12 !py-5 shadow-2xl">
                                Start Consultation
                            </Button>
                            <Button variant="outline" className="!rounded-full !px-12 !py-5">
                                Exploration Lab
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
