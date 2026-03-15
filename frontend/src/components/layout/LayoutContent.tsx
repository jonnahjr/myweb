import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, ArrowRight, ShieldCheck, Globe2, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Badge } from '../ui/Core';
import logo from '../../assets/logo 1.png';

const navLinks = [
  { name: 'Company', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Architecture', path: '/portfolio' },
  { name: 'R&D', path: '/blog' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'nav-glass py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-10 flex items-center justify-center"
            >
              <img 
                src={logo} 
                alt="NEXYOVI Logo" 
                className="h-full w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Industrial Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-10">
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        to={link.path}
                        className={`text-[11px] uppercase font-black tracking-[0.2em] transition-all hover:text-nexyovi-primary ${location.pathname === link.path || (link.path === '/' && location.pathname === '/') ? 'text-nexyovi-primary' : 'text-slate-950'}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            
            <div className="flex items-center pl-10 border-l border-black/[0.05]">
               <Button className="btn-primary !py-3 !px-8 text-[9px] !rounded-lg">
                  Initialize <ArrowRight size={12} className="ml-1" />
               </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/[0.03] border border-black/[0.05] text-slate-900">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Industrial Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(40px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white/80 z-50 p-10 flex flex-col justify-between overflow-y-auto border-l border-black/5"
          >
            <div className="flex flex-col gap-12 pt-20">
               <div className="flex justify-between items-center mb-10">
                  <span className="text-xs uppercase font-black text-slate-400 tracking-[0.5em]">OPERATIONS MENU</span>
                  <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/[0.03] border border-black/[0.05] text-slate-900">
                     <X size={24} />
                  </button>
               </div>
              {navLinks.map((link, i) => (
                <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                >
                    <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-black text-slate-900 hover:text-nexyovi-primary transition-all block uppercase tracking-tighter"
                    >
                        {link.name}
                    </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-8 pb-10">
               <Button onClick={() => setIsOpen(false)} variant="primary" size="lg" className="w-full !rounded-xl !py-6 text-base tracking-[0.2em] shadow-nexyovi-primary/10">Contact Engineering</Button>
               <div className="flex gap-4 justify-center">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-xl bg-black/[0.03] border border-black/[0.05] flex items-center justify-center text-slate-400 hover:text-nexyovi-primary transition-colors"><Icon size={20} /></a>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-white pt-16 pb-12 border-t border-slate-100 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,var(--color-nexyovi-accent)_0%,transparent_50%)] opacity-5 blur-[120px]"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <div className="h-10 flex items-center justify-center">
                 <img 
                    src={logo} 
                    alt="NEXYOVI Logo" 
                    className="h-full w-auto object-contain"
                 />
              </div>
            </Link>
            
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
              A master-class engineering force. Architecting high-concurrency systems 
              as the invisible foundation for global digital empires.
            </p>

            <div className="flex space-x-5">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-slate-50 border border-slate-100 hover:border-nexyovi-accent hover:bg-nexyovi-accent/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-nexyovi-accent transition-all duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 pt-6">
                <Badge className="!bg-emerald-500/5 !text-emerald-400 !border-emerald-500/10 !rounded-lg !px-3 !py-1 !text-[9px]">ISO 27001</Badge>
                <Badge className="!bg-blue-500/5 !text-blue-400 !border-blue-500/10 !rounded-lg !px-3 !py-1 !text-[9px]">SOC2 TYPE II</Badge>
                <Badge className="!bg-red-500/5 !text-red-400 !border-red-500/10 !rounded-lg !px-3 !py-1 !text-[9px]">HIPAA COMPLIANT</Badge>
            </div>
          </div>

          {/* Structured Navigation */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-slate-950 font-black uppercase text-[10px] tracking-[0.4em]">Core Verticals</h3>
            <ul className="space-y-3">
              {['Healthcare', 'Enterprise EBS', 'Fintech Hubs', 'Proprietary AI', 'Odoo Prime', 'Cloud Infra'].map((item) => (
                <li key={item}><Link to="/solutions" className="text-slate-500 hover:text-slate-900 transition-colors text-[11px] font-bold uppercase tracking-widest">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-slate-950 font-black uppercase text-[10px] tracking-[0.4em]">Corporate</h3>
            <ul className="space-y-3">
              {['Methodology', 'Technical R&D', 'Engineering Missions', 'Legal Framework', 'Investor Relations', 'Press Area'].map((item) => (
                <li key={item}><Link to="/about" className="text-slate-500 hover:text-slate-900 transition-colors text-[11px] font-bold uppercase tracking-widest">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Secure CTA */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-slate-950 font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-nexyovi-primary animate-pulse"></div>
               Mission Signals
            </h3>
            <p className="text-slate-500 text-[11px] font-bold leading-relaxed tracking-wider uppercase">Join the engineering network for infrastructure updates.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="ENGINEERING@ENTERPRISE.COM" 
                className="w-full bg-black/[0.01] border border-black/[0.05] rounded-xl px-6 py-4 text-[10px] font-black tracking-widest focus:outline-none focus:border-nexyovi-primary transition-all duration-500 text-slate-900 placeholder:text-slate-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-nexyovi-primary rounded-lg flex items-center justify-center text-white font-black hover:scale-105 transition-all">
                <ArrowRight size={14} />
              </button>
            </form>
            <div className="flex items-center gap-6 pt-6 border-t border-black/[0.02]">
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="text-slate-400" size={14} />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">E2EE</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Globe2 className="text-slate-400" size={14} />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GLOBAL</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Clock className="text-slate-400" size={14} />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">24/7/365</span>
                 </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col lg:flex-row justify-between items-center gap-6 opacity-60">
          <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-slate-400">© 2026 NEXYOVI TECH OPERATIONS GROUP / ALL PROTOCOLS RESERVED</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {['Privacy Protocol', 'Data Sovereignty', 'Encryption Standards'].map(l => (
                <a key={l} href="#" className="text-[9px] uppercase font-bold tracking-widest text-slate-500 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
