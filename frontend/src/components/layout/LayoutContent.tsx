import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight, 
  Menu, 
  X,
  ArrowRight,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo 1.png';
import { Button, Badge } from '../ui/Core';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-10 transition-transform duration-300 hover:scale-105">
            <img 
              src={logo} 
              alt="NEXYOVI" 
              className="h-8 w-auto brightness-0 opacity-90"
            />
          </Link>

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 relative group ${
                  location.pathname === link.path 
                    ? 'text-brand-blue' 
                    : 'text-brand-charcoal/50 hover:text-brand-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/contact">
              <Button size="sm" className="bg-brand-charcoal text-white h-10 px-6 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all hover:bg-brand-blue">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-charcoal"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
    <footer className="bg-brand-gray-light pt-24 pb-12">
      <div className="container-custom">
        
        {/* Top: Simple Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black font-outfit text-brand-charcoal">
               Build your next <br /> <span className="text-brand-blue">Project</span> with us.
            </h2>
            <p className="text-lg text-brand-charcoal/40 font-medium max-w-sm">
               Partner with Africa's leading technology experts in AI and secure software.
            </p>
          </div>
          
          <div className="flex flex-col justify-center space-y-6 lg:pl-20">
             <form className="relative flex items-center max-w-sm group">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-blue/30 transition-all shadow-sm"
               />
               <button 
                 type="button"
                 className="absolute right-2 h-10 px-6 rounded-xl bg-brand-charcoal text-white hover:bg-brand-blue transition-all"
               >
                 <ArrowRight size={16} />
               </button>
             </form>
          </div>
        </div>

        {/* Middle: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-t border-black/5 pt-16">
          
          <div className="space-y-8">
            <Link to="/">
               <img src={logo} alt="NEXYOVI" className="h-6 w-auto brightness-0 opacity-80" />
            </Link>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-brand-charcoal/30 hover:text-brand-blue transition-all">
                   <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
             <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/20">Services</h3>
             <ul className="space-y-3">
                {['AI Solutions', 'Cybersecurity', 'Cloud Systems', 'Software Dev'].map(item => (
                   <li key={item}>
                      <a href="/services" className="text-xs font-bold text-brand-charcoal/40 hover:text-brand-blue transition-all">{item}</a>
                   </li>
                ))}
             </ul>
          </div>

          <div className="space-y-6">
             <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/20">Company</h3>
             <ul className="space-y-3">
                {['About Us', 'Portfolio', 'Careers', 'Contact'].map(item => (
                   <li key={item}>
                      <a href={`/${item.toLowerCase().replace(' ', '')}`} className="text-xs font-bold text-brand-charcoal/40 hover:text-brand-blue transition-all">{item}</a>
                   </li>
                ))}
             </ul>
          </div>

          <div className="space-y-6">
             <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/20">Contact</h3>
             <div className="space-y-2 text-xs font-bold text-brand-charcoal/40">
                <p>Addis Ababa, Ethiopia</p>
                <p>sync@nexyovi.tech</p>
                <p>+251 911 123 456</p>
             </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-black/5">
           <p className="text-[10px] font-bold text-brand-charcoal/20">
             © {currentYear} NEXYOVI TECHNOLOGY GROUP. All rights reserved.
           </p>
           <div className="flex gap-6">
              {['Privacy', 'Terms', 'Security'].map(label => (
                <a key={label} href="#" className="text-[10px] font-bold text-brand-charcoal/20 hover:text-brand-blue">{label}</a>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
};
