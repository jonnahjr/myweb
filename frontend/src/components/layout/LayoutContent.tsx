import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Menu, 
  X,
  ShieldCheck,
  Lock,
  Globe
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo 1.png';
import { Button } from '../ui/Core';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Products', path: '/products' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Careers', path: '/careers' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-premium' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          <Link 
            to="/" 
            className="flex items-center group relative z-[60] transition-all duration-500 hover:scale-110 -mt-2"
          >
            <img 
              src={logo} 
              alt="NEXYOVI" 
              className={`h-16 md:h-24 w-auto p-1 transition-all duration-500 ${
                scrolled ? 'brightness-0 opacity-100' : 'brightness-0 invert opacity-100'
              } drop-shadow-md contrast-150`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs font-black uppercase tracking-widest transition-all duration-300 relative group ${
                  location.pathname === link.path 
                    ? scrolled ? 'text-brand-blue' : 'text-brand-yellow'
                    : scrolled ? 'text-brand-charcoal/60 hover:text-brand-charcoal' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/contact">
              <Button size="sm" className={`h-11 px-8 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                scrolled 
                  ? 'bg-brand-charcoal text-white hover:bg-brand-blue' 
                  : 'bg-white text-brand-charcoal hover:bg-brand-yellow'
              }`}>
                Contact Us
              </Button>
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-charcoal"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 shadow-xl"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-base font-bold uppercase tracking-wider text-brand-charcoal"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-black/5">
                 <Link to="/contact">
                   <Button className="w-full h-12 bg-brand-blue text-white rounded-xl font-bold">Get Started</Button>
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 relative overflow-hidden font-outfit">
      
      {/* Hyper-Modern Glow Architecture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-blue/[0.08] blur-[160px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Step 1: Horizontal Mega Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-20">
           
           <div className="max-w-md space-y-8">
              <img src={logo} alt="NEXYOVI" className="h-40 w-auto brightness-0 invert opacity-100 transition-all drop-shadow-lg -translate-x-16 hover:drop-shadow-glow" />
              <div className="space-y-6 -mt-4">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Coordination Hub</h3>
                 <p className="text-2xl font-black tracking-tight leading-tight">
                    Addis Ababa, <br /> Ethiopia
                 </p>
                 <p className="text-sm font-bold text-white/30 truncate uppercase tracking-widest leading-relaxed">
                   Innovation Tower // Floor 16
                 </p>
              </div>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 flex-1">
              
              <div className="space-y-8">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-blue">Protocols</h4>
                 <ul className="space-y-4">
                    {['AI Logic & LLMs', 'Security Audit', 'Infrastructure', 'Software Dev', 'Data Insights'].map(item => (
                       <li key={item}>
                          <Link to="/services" className="text-sm font-bold text-white/40 hover:text-white transition-all underline decoration-brand-blue/0 hover:underline hover:decoration-brand-blue decoration-2 underline-offset-8">
                             {item}
                          </Link>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="space-y-8">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-blue">Inventory</h4>
                 <ul className="space-y-4">
                    {['Core Registry', 'Mission Log', 'Unit Profile', 'Human Capital', 'Handshake'].map(item => (
                       <li key={item}>
                          <Link to="/portfolio" className="text-sm font-bold text-white/40 hover:text-white transition-all underline decoration-white/0 hover:underline hover:decoration-white decoration-2 underline-offset-8">
                             {item}
                          </Link>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="space-y-12">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-blue">Tech_Nodes</h4>
                 <div className="space-y-10">
                    {[
                      { label: 'SOVEREIGN_AI', val: 'V4_LOGIC' },
                      { label: 'SHIELD_LAYER', val: 'ACTIVE' },
                      { label: 'NODE_LATENCY', val: '0.4 MS' }
                    ].map(n => (
                       <div key={n.label} className="group relative">
                          <div className="absolute -inset-x-8 -inset-y-4 bg-brand-blue/0 group-hover:bg-brand-blue/[0.03] rounded-3xl transition-all" />
                          <div className="relative space-y-2">
                             <div className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-brand-blue animate-pulse" />
                                <span className="text-[10px] font-black tracking-[0.2em] text-white/20 uppercase">{n.label}</span>
                             </div>
                             <span className="text-4xl font-black font-outfit text-white tracking-tighter leading-none group-hover:text-brand-blue transition-colors">{n.val}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-10">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-blue">Contact</h4>
                 <div className="space-y-12">
                    <div className="space-y-4 font-bold">
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase tracking-widest text-brand-blue/50">Mission_Core</span>
                          <p className="text-sm text-brand-blue tracking-tighter">sync@nexyovi.tech</p>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/10">Support_Node</span>
                          <p className="text-sm text-white/60 tracking-tighter">support@nexyovi.tech</p>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/10">Media_Sync</span>
                          <p className="text-sm text-white/60 tracking-tighter">press@nexyovi.tech</p>
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <p className="text-xl font-black text-white">+251 911 123 456</p>
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Operational_Line // 24/7</p>
                    </div>
                    <div className="flex gap-4">
                       {[Twitter, Linkedin, Github].map((Icon, i) => (
                          <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-brand-blue transition-all">
                             <Icon size={18} />
                          </a>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Step 2: Full-Width Registry Border */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-12">
              <div className="flex gap-4">
                 <ShieldCheck size={20} className="text-white/10" />
                 <Lock size={20} className="text-white/10" />
                 <Globe size={20} className="text-white/10" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
                 © {currentYear} NEXYOVI TECHNOLOGY GROUP // ENGINEERING_DRIVEN
              </p>
           </div>
           
           <div className="flex gap-8">
              {['Security', 'Privacy Registry', 'Mission Terms'].map(l => (
                 <a key={l} href="#" className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-brand-blue transition-colors">{l}</a>
              ))}
           </div>
        </div>
      </div>

      {/* Subtle Branding Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
         <h1 className="text-[12vw] font-black font-outfit uppercase tracking-wider leading-none text-white whitespace-nowrap">
            NEXYOVI
         </h1>
      </div>
    </footer>
  );
};
