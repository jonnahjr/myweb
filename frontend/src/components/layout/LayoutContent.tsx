import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  MessageSquare as Discord
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo 1.png';
import { Button } from '../ui/Core';

const navLinks = [
  { name: 'Company', path: '/company' },
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
        ? 'py-3 bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-premium' 
        : 'py-4 bg-black border-b border-white/5'
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
              className={`h-16 md:h-24 w-auto p-1 transition-all duration-500 brightness-0 invert opacity-100 drop-shadow-md contrast-200`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs font-black uppercase tracking-widest transition-all duration-300 relative group ${
                  location.pathname === link.path 
                    ? 'text-brand-blue' 
                    : 'text-brand-gray-light/60 hover:text-brand-gray-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/contact">
              <Button size="sm" className="h-11 px-8 rounded-full text-[10px] font-black uppercase tracking-widest transition-all bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:shadow-glow border-0">
                Contact Us
              </Button>
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
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
            className="lg:hidden absolute top-full left-0 w-full bg-brand-primary border-b border-white/10 shadow-xl"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-base font-bold uppercase tracking-wider text-white hover:text-brand-blue"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10">
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
    <footer className="bg-brand-primary text-white relative overflow-hidden border-t border-white/5 pt-24 font-jakarta">
      {/* Background AMSH DNA */}
      <div className="absolute inset-0 bg-brand-primary animate-mesh mesh-gradient opacity-40 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-blue opacity-10 pointer-events-none" />
      <div className="scanline" />

      {/* Main Command Registry */}
      <div className="container-custom relative z-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand & Mission Statement (3/12) */}
          <div className="lg:col-span-3 space-y-10">
            <Link to="/" className="group flex flex-col gap-10 -mt-16">
               <div className="h-28 flex items-center justify-start transition-all duration-700">
                  <img src={logo} alt="NEXYOV" className="h-full w-auto object-contain transition-transform duration-700 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105" />
               </div>
            </Link>

            <p className="text-lg text-white/70 font-black leading-[1.1] tracking-tighter uppercase max-w-[280px]">
              Specialized technology unit established for global AI logic and secure data sovereignty.
            </p>
            
            <div className="flex items-center gap-4 pt-6">
               {[
                 { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                 { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                 { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
                 { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
                 { icon: <Discord size={18} />, href: "#", label: "Discord" }
               ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-brand-blue hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-500"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
               ))}
            </div>
          </div>

          {/* Protocols Registry (2/12) */}
          <div className="lg:col-span-2 space-y-10">
            <h3 className="text-[11px] font-black uppercase tracking-[0.6em] font-mono text-brand-blue pb-4 border-b border-white/5">Protocols</h3>
            <ul className="space-y-4">
              {[
                { name: 'Company Unit', path: '/company' },
                { name: 'Service Matrix', path: '/services' },
                { name: 'Mission Logs', path: '/portfolio' },
                { name: 'Career Sync', path: '/careers' },
                { name: 'Support Hub', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/40 hover:text-brand-blue transition-all flex items-center gap-3 group text-[11px] font-black uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-brand-blue transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Registry (2/12) */}
          <div className="lg:col-span-2 space-y-10">
            <h3 className="text-[11px] font-black uppercase tracking-[0.6em] font-mono text-brand-blue pb-4 border-b border-white/5">Resources</h3>
            <ul className="space-y-4">
              {[
                { name: 'Logic Manuals', path: '/blog' },
                { name: 'Whitepapers', path: '/solutions' },
                { name: 'API Registry', path: '/services' },
                { name: 'Tech_Nodes', path: '/portfolio' },
                { name: 'Network Status', path: '/portal' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/40 hover:text-brand-blue transition-all flex items-center gap-3 group text-[11px] font-black uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-brand-blue transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Contact Nodes (3/12) */}
          <div className="lg:col-span-3 space-y-8">
             <h3 className="text-[11px] font-black uppercase tracking-[0.6em] font-mono text-white pb-4 border-b border-white/10">Registry_Points</h3>
             <div className="space-y-6">
               {[
                 { icon: "✉️", label: "SYNC_REGISTRY", val: "sync@nexyovi.tech", link: "mailto:sync@nexyovi.tech" },
                 { icon: "📍", label: "HQ_NODE", val: "Innovation Tower, Floor 16, Addis Ababa", link: "https://maps.google.com" },
                 { icon: "📞", label: "MISSION_LINE", val: "+251 911 123 456", link: "tel:+251911123456" },
                 { icon: "🕐", label: "OPS_WINDOW", val: "24/7 Digital Operations", link: "/contact" }
               ].map((c, i) => (
                  <a 
                    key={i} 
                    href={c.link} 
                    target={c.link.startsWith('http') ? "_blank" : undefined}
                    rel={c.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group transition-all hover:translate-x-1"
                  >
                     <span className="text-xl grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">{c.icon}</span>
                     <div>
                        <p className="text-[9px] font-black text-brand-blue uppercase tracking-widest font-mono leading-none pb-1">{c.label}</p>
                        <p className="text-[11px] font-black text-white/80 group-hover:text-white uppercase tracking-tight leading-tight transition-colors">{c.val}</p>
                     </div>
                  </a>
               ))}
             </div>
          </div>

          {/* External Institutional Nodes (2/12) */}
          <div className="lg:col-span-2 space-y-10">
            <h3 className="text-[11px] font-black uppercase tracking-[0.6em] font-mono text-white pb-4 border-b border-white/10">External</h3>
            <ul className="space-y-6">
              {[
                { label: 'Min. of Tech', href: 'https://www.mint.gov.et' },
                { label: 'AI Institute', href: 'https://www.eaid.gov.et' },
                { label: 'Security Auth', href: 'https://www.insa.gov.et' },
                { label: 'Cloud Consor', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-blue transition-all flex items-center gap-3 group text-[10px] font-black uppercase tracking-[0.2em]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-brand-blue transition-all" />
                    {link.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Institutional Legal Bar */}
      <div className="border-t border-white/5 py-8 bg-black/40 relative z-10">
        <div className="container-custom">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
             
             <div className="flex flex-col sm:flex-row items-center gap-6 text-center lg:text-left">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse shadow-glow-blue" />
                   <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 font-mono">
                      © {currentYear} NEXYOV_UNIT // GLOBAL_STABILITY_PROTOCOLS
                   </p>
                </div>
                <div className="h-4 w-px bg-white/10 hidden sm:block" />
                <p className="text-[9px] font-black text-brand-blue uppercase tracking-widest font-mono">
                   Secure_Handoff // ETH_CLUSTER_01
                </p>
             </div>
  
             <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="flex flex-wrap justify-center gap-8">
                   <Link to="/privacy" className="group flex items-center gap-2">
                      <span className="text-[9px] font-black text-white/30 group-hover:text-brand-blue transition-colors uppercase tracking-[0.3em] font-mono">Privacy_Registry</span>
                   </Link>
                   <Link to="/terms" className="group flex items-center gap-2">
                      <span className="text-[9px] font-black text-white/30 group-hover:text-brand-blue transition-colors uppercase tracking-[0.3em] font-mono">Mission_Terms</span>
                   </Link>
                   <Link to="/admin" className="group flex items-center gap-2">
                      <span className="text-[9px] font-black text-white/30 group-hover:text-brand-blue transition-colors uppercase tracking-[0.3em] font-mono">Admin_Node</span>
                   </Link>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full">
                   <div className="text-[9px] font-black text-brand-blue uppercase tracking-[0.3em] font-mono">Build_Sync</div>
                   <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                   <div className="text-[9px] font-black text-white/60 uppercase tracking-[0.4em] font-mono">JB_CORE_ENG</div>
                </div>
             </div>
  
           </div>
        </div>
      </div>
  
      {/* Massive Technical Backdrop Watermark */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-[0.05] pointer-events-none select-none overflow-hidden leading-none">
         <h2 className="text-[18vw] font-black font-jakarta uppercase tracking-tighter text-white/50 blur-none">NEXYOVI</h2>
      </div>
    </footer>
  );
};
