import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ShieldCheck, Fingerprint } from 'lucide-react';
import { GlassCard, Button } from '../components/ui/Core';
import { Link } from 'react-router-dom';
import logo from '../assets/logo 1.png';

export const Portal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nexyovi-primary/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-md w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-10"
        >
           <Link to="/" className="inline-flex items-center mb-8">
              <div className="h-32 flex items-center justify-center">
                 <img 
                    src={logo} 
                    alt="NEXYOVI Logo" 
                    className="h-full w-auto object-contain"
                 />
              </div>
           </Link>
           <h1 className="text-3xl font-bold text-white mb-2">Secure Access</h1>
           <p className="text-gray-500 text-sm">Enter the portal for your project infrastructure</p>
        </motion.div>

        <GlassCard className="p-8 md:p-10">
           <form className="space-y-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Infrastructure ID (Email)</label>
                 <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input 
                      type="email" 
                      className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-nexyovi-primary transition-all text-white text-sm"
                      placeholder="admin@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Access Key</label>
                    <a href="#" className="text-[10px] text-nexyovi-primary font-bold uppercase hover:underline">Reset Key</a>
                 </div>
                 <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input 
                      type="password" 
                      className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-nexyovi-primary transition-all text-white text-sm"
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                 </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                 <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-nexyovi-primary focus:ring-nexyovi-primary" />
                 <span className="text-xs text-gray-400 font-medium">Remember terminal session</span>
              </div>

              <Button className="w-full py-4 font-bold flex items-center justify-center gap-2">
                 Establish Connection <Fingerprint size={18} />
              </Button>
           </form>

           <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <div className="flex items-center justify-center gap-4 text-gray-500">
                 <div className="flex items-center gap-1.5 grayscale opacity-50">
                    <ShieldCheck size={14} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">ISO 27001</span>
                 </div>
                 <div className="w-[1px] h-3 bg-white/10"></div>
                 <div className="flex items-center gap-1.5 grayscale opacity-50">
                    <Lock size={14} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">SSL Encrypted</span>
                 </div>
              </div>
           </div>
        </GlassCard>

        <p className="mt-8 text-center text-xs text-gray-600">
           New Partner? <a href="#" className="text-nexyovi-primary font-bold hover:underline">Apply for Infrastructure Access</a>
        </p>
      </div>
    </div>
  );
};
