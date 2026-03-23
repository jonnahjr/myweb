import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { Products } from './pages/Products';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Portal } from './pages/Portal';
import { AdminDashboard } from './pages/AdminDashboard';
import { ClientDashboard } from './pages/ClientDashboard';
import logo from './assets/logo 1.png';

// --- Loading Component ---
const Preloader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[9999] bg-brand-primary flex flex-col items-center justify-center space-y-16 overflow-hidden"
    >
      {/* 3D Background Pulse */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-brand-blue/10 blur-[180px] rounded-full animate-pulse-slow" />
         <div className="absolute inset-0 tech-grid opacity-10" />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-12">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img src={logo} alt="NEXYOVI" className="h-24 w-auto invert brightness-0 opacity-90" />
          <div className="absolute -inset-10 bg-brand-blue/20 blur-[100px] rounded-full animate-pulse" />
        </motion.div>
        
        <div className="flex flex-col items-center gap-8">
          <div className="w-80 h-[1.5px] bg-white/5 relative overflow-hidden rounded-full">
            <motion.div 
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-brand-purple to-transparent shadow-[0_0_15px_rgba(139,92,246,0.6)]"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <motion.span 
               animate={{ opacity: [0.4, 1, 0.4] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="text-[11px] font-black tracking-[0.8em] text-brand-blue uppercase font-mono"
            >
               Initializing_Sovereign_Protocol
            </motion.span>
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">NODE_SYNC_v2.0.4_STABLE</span>
          </div>
        </div>
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
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <div className="relative bg-[#F3EFE6]">
          <CustomCursor />
          <ScrollToTop />
          <Layout>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/products" element={<Products />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portal" element={<Portal />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/client-dashboard" element={<ClientDashboard />} />
              </Routes>
            </PageTransition>
          </Layout>
        </div>
      )}
    </Router>
  );
}
