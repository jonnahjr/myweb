import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight, 
  Menu, 
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo 1.png';

const navLinks = [
  { name: 'Company', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Products', path: '/products' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Academy', path: '/blog' },
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-white/40 backdrop-blur-2xl border-b border-white/20 shadow-glass' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-10">
            <img 
              src={logo} 
              alt="NEXYOVI" 
              className="h-14 w-auto brightness-0"
            />
          </Link>

          {/* Center Links - Simple & Standard */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 relative group ${
                  location.pathname === link.path 
                    ? 'text-brand-blue' 
                    : 'text-brand-charcoal/60 hover:text-brand-charcoal'
                }`}
              >
                {link.name}
                <motion.div 
                  initial={false}
                  animate={{ 
                    scaleX: location.pathname === link.path ? 1 : 0,
                    opacity: location.pathname === link.path ? 1 : 0
                  }}
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-blue origin-left"
                />
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-charcoal text-white h-10 px-6 rounded-lg text-[10px] font-semibold uppercase tracking-[0.15em] flex items-center gap-2 shadow-sm hover:bg-black transition-all"
              >
                Get Started <ArrowUpRight size={12} className="text-brand-blue" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-charcoal"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 shadow-premium p-8 space-y-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm font-black uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-brand-blue' : 'text-brand-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link to="/contact">
              <button className="w-full bg-brand-charcoal text-white py-6 rounded-xl text-[10px] uppercase font-semibold tracking-[0.2em] flex items-center justify-center gap-4">
                  Get Started <ArrowUpRight size={16} className="text-brand-blue" />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-cream relative border-t border-black/[0.05] pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-blue/[0.02] blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Vision */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div className="space-y-6">
              <Link to="/" className="inline-block group">
                 <img src={logo} alt="NEXYOVI" className="h-16 w-auto brightness-0 opacity-80 group-hover:opacity-100 transition-all duration-500" />
              </Link>
              <p className="text-xl text-brand-charcoal/60 font-medium leading-relaxed max-w-lg">
                Building intelligent infrastructure and secure digital solutions to power the next generation of global innovation.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-white border border-black/[0.04] flex items-center justify-center text-brand-charcoal/30 hover:text-brand-blue hover:border-brand-blue/20 hover:shadow-premium transition-all duration-300"
                >
                   <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="space-y-8">
               <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-charcoal/40">Company</h3>
               <ul className="space-y-4">
                  {[
                    { name: 'About Us', path: '/about' },
                    { name: 'Services', path: '/services' },
                    { name: 'Solutions', path: '/solutions' },
                    { name: 'Careers', path: '/careers' }
                  ].map(item => (
                    <li key={item.name}>
                       <Link to={item.path} className="text-sm font-medium text-brand-charcoal/60 hover:text-brand-blue transition-colors">
                          {item.name}
                       </Link>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="space-y-8">
               <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-charcoal/40">Resources</h3>
               <ul className="space-y-4">
                  {[
                    { name: 'Portfolio', path: '/portfolio' },
                    { name: 'Case Studies', path: '/portfolio' },
                    { name: 'Insights', path: '/blog' },
                    { name: 'Documentation', path: '/about' }
                  ].map(item => (
                    <li key={item.name}>
                       <Link to={item.path} className="text-sm font-medium text-brand-charcoal/60 hover:text-brand-blue transition-colors">
                          {item.name}
                       </Link>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="space-y-8">
               <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-charcoal/40">Newsletter</h3>
               <div className="space-y-4">
                  <p className="text-sm text-brand-charcoal/60 font-medium leading-relaxed">Subscribe to receive our latest perspective on technology and innovation.</p>
                  <form className="relative flex items-center">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-white border border-black/[0.05] rounded-xl px-4 py-3 text-sm font-medium text-brand-charcoal placeholder:text-brand-charcoal/20 focus:outline-none focus:border-brand-blue/30 transition-all pr-12"
                    />
                    <button className="absolute right-1.5 p-2 rounded-lg bg-brand-charcoal text-white hover:bg-black transition-all">
                       <ArrowUpRight size={16} className="text-brand-blue" />
                    </button>
                  </form>
               </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-black/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-sm font-medium text-brand-charcoal/40">
                © {currentYear} NEXYOVI Technology Group. All rights reserved.
              </p>
              <div className="h-4 w-[1px] bg-black/5 hidden md:block" />
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-brand-mint">Systems Operational</span>
              </div>
           </div>

           <div className="flex gap-8">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Settings'
              ].map((label, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="text-[11px] font-bold uppercase tracking-wider text-brand-charcoal/30 hover:text-brand-blue transition-colors"
                >
                   {label}
                </a>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
};
