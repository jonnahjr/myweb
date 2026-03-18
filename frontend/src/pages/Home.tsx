import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Bot, 
  Cpu, 
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Cloud,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge, GlassCard } from '../components/ui/Core';

// Asset Imports
import nvidiaLogo from '../assets/nvidia-28.png';
import microsoftLogo from '../assets/microsoft-19.png';
import awsLogo from '../assets/aws-25.png';
import ethioLogo from '../assets/ethio.jpg';
import globalLogo from '../assets/global.png';

const aiModelImg = '/C:/Users/jonas/.gemini/antigravity/brain/c9a01920-372d-4d0a-b109-86971d1bd884/abstract_3d_ai_model_1773859066466.png';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-brand-charcoal">
      
      {/* ============= HERO ============= */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-20">
        <div className="container-custom relative z-10 mx-auto max-w-6xl">
          <div className="space-y-8">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent tracking-widest font-bold px-4 py-1">
                 NEXYOVI TECHNOLOGY
              </Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight font-outfit"
            >
              Engineering <br />
              <span className="text-brand-blue">Intelligent</span> Systems.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-brand-charcoal/60 font-medium max-w-2xl leading-relaxed"
            >
              We build secure AI systems, enterprise platforms, and digital infrastructure for global businesses and government agencies.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/contact">
                <Button size="lg" className="h-14 px-10 bg-brand-charcoal text-white hover:bg-brand-blue rounded-full transition-all border-0 shadow-lg">
                   Start a Project <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="h-14 px-10 border-black/10 text-brand-charcoal hover:bg-brand-gray-light rounded-full transition-all">
                   Talk to an Architect
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 opacity-20 pointer-events-none hidden lg:block">
           <img src={aiModelImg} alt="3D Visual" className="w-full h-auto max-w-2xl ml-auto" />
        </div>
      </section>

      {/* ============= SERVICES ============= */}
      <section className="py-32 bg-brand-gray-light/30 border-y border-black/5">
        <div className="container-custom">
           <div className="mb-16 space-y-4">
              <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-transparent">What We Do</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-outfit text-brand-charcoal">Core Services.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "AI & Automation", icon: <Bot size={24} />, desc: "Custom AI solutions and autonomous business engines." },
                { title: "Cybersecurity", icon: <Shield size={24} />, desc: "Advanced security testing and defensive engineering." },
                { title: "Cloud Systems", icon: <Cloud size={24} />, desc: "Scalable cloud infrastructure and node networks." },
                { title: "Software Dev", icon: <Cpu size={24} />, desc: "Enterprise platforms built for high-load operations." }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-black/5 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 space-y-6 group">
                   <div className="w-12 h-12 rounded-xl bg-brand-gray-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {item.icon}
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-xl font-bold font-outfit text-brand-charcoal">{item.title}</h4>
                      <p className="text-brand-charcoal/40 text-sm font-medium leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ============= TRUSTED BY ============= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
           <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-charcoal/20">Global Partners & Clients</p>
           </div>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
              <img src={nvidiaLogo} alt="Nvidia" className="h-6 md:h-8 w-auto" />
              <img src={microsoftLogo} alt="Microsoft" className="h-6 md:h-8 w-auto" />
              <img src={awsLogo} alt="AWS" className="h-6 md:h-8 w-auto" />
              <img src={ethioLogo} alt="Ethio" className="h-10 md:h-12 w-auto" />
              <img src={globalLogo} alt="Global" className="h-6 md:h-8 w-auto" />
           </div>
        </div>
      </section>

      {/* ============= FEATURED AI ============= */}
      <section className="py-32 bg-brand-charcoal text-white rounded-[4rem] mx-6 mb-32 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue opacity-5 blur-[100px]" />
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <Badge variant="blue" className="bg-white/10 text-white border-white/20">AI Platform</Badge>
                  <h2 className="text-4xl md:text-6xl font-black font-outfit leading-tight">NEXYOVI <br /> AI Logic.</h2>
                  <p className="text-lg text-white/50 max-w-md">Our custom AI solutions help businesses automate customer service and internal operations with secure, private data.</p>
                  <ul className="space-y-4 pt-4">
                     {['Custom LLM development', 'AI Chat systems', 'Data automation', 'Security protocols'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                           <CheckCircle2 size={16} className="text-brand-blue" /> {item}
                        </li>
                     ))}
                  </ul>
                  <div className="pt-8">
                     <Link to="/contact">
                       <Button variant="cyan" size="lg" className="h-14 px-10 rounded-full font-black">Get AI Setup <ArrowUpRight className="ml-2" size={16} /></Button>
                     </Link>
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-square bg-white/5 rounded-[3rem] p-12 flex items-center justify-center border border-white/10">
                     <Bot size={120} className="text-brand-blue animate-pulse" />
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};
