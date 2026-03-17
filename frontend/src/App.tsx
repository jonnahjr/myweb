import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { Products } from './pages/Products';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Portal } from './pages/Portal';
import { AdminDashboard } from './pages/AdminDashboard';
import logo from './assets/logo 1.png';

// --- Loading Component ---
const Preloader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-brand-cream flex flex-col items-center justify-center space-y-8"
    >
      <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
      <div className="relative">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <img src={logo} alt="NEXYOVI" className="h-20 w-auto brightness-0 drop-shadow-[0_0_10px_rgba(0,102,255,0.2)]" />
        </motion.div>
        <div className="absolute -inset-10 bg-brand-blue/10 blur-[80px] rounded-full animate-pulse" />
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <div className="w-48 h-[1px] bg-black/5 relative overflow-hidden">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-brand-blue to-transparent"
          />
        </div>
        <span className="text-[10px] font-black tracking-[0.5em] text-brand-charcoal/30 uppercase animate-pulse">Initializing_Sovereign_Protocol</span>
      </div>
    </motion.div>
  );
};

// --- Custom Cursor ---
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-blue/30 pointer-events-none z-[10000] hidden md:block"
    >
      <div className="absolute inset-0 rounded-full bg-brand-blue/5 blur-sm" />
    </motion.div>
  );
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- Page Transition Wrapper ---
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading internal logic
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <div className="relative">
          <CustomCursor />
          <ScrollToTop />
          <Layout>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/products" element={<Products />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portal" element={<Portal />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </PageTransition>
          </Layout>
        </div>
      )}
    </Router>
  );
}
