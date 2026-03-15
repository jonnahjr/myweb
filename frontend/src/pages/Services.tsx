import { useEffect } from 'react';
import { 
  Code, Smartphone, Cloud, Shield, Cpu, Box, 
  ArrowUpRight, Terminal, ChevronRight,
  Database, Layers
} from 'lucide-react';
import { GlassCard, Button, Badge } from '../components/ui/Core';

const serviceList = [
  {
    icon: <Code />,
    title: "Web Engineering",
    description: "Multi-tenant architectures with high-performance React frameworks and secure Node.js backends.",
    features: ["Industrial UI/UX Core", "Next.js 15 Ready", "Zero-Latency API Designs"],
    tech: "React, Next.js, GraphQL",
    price: "From $15K Tier"
  },
  {
    icon: <Smartphone />,
    title: "Mobile Architecture",
    description: "Global Native experiences for high-trust user interactions and secure data synchronization.",
    features: ["iOS & Android Native", "Offline-Sync Protocol", "Biometric Authentication"],
    tech: "React Native, Swift, Kotlin",
    price: "From $25K Tier"
  },
  {
    icon: <Box />,
    title: "Odoo Prime ERP",
    description: "Deep customization of Odoo for supply chain and multi-entity financial auditing.",
    features: ["Bespoke Module Core", "Real-time Data Fabric", "AI Inventory Guard"],
    tech: "Python, PostgreSQL",
    price: "From $40K Tier"
  },
  {
    icon: <Shield />,
    title: "Health-Tech Infra",
    description: "Specialized EMR systems designed for sub-second record access and HIPAA-Grade security.",
    features: ["LIS Engine Integration", "EMR Patient Portals", "DICOM Image Sync"],
    tech: "Python, Mongo, Java",
    price: "From $50K Tier"
  },
  {
    icon: <Cloud />,
    title: "Hybrid Cloud Ops",
    description: "High-density cloud orchestration and automated CI/CD for zero-downtime deployments.",
    features: ["AWS/Azure Multi-Cloud", "Kubernetes Scaling", "Terraform Infra-as-Code"],
    tech: "AWS, Docker, K8s",
    price: "From $10K/mo Support"
  },
  {
    icon: <Cpu />,
    title: "AI Integration",
    description: "Deploying production-ready LLMs to automate complex decision-making workflows.",
    features: ["RAG Architecture", "OpenAI Custom Tunnels", "Predictive Forecasting"],
    tech: "PyTorch, OpenAI API",
    price: "Consultation Phase"
  }
];

export const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent text-slate-900 pt-48 pb-32">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-48">
          <div className="max-w-3xl">
            <Badge className="mb-10 !bg-nexyovi-primary/10 !text-nexyovi-primary !border-nexyovi-primary/20">Industrial Service Matrix</Badge>
            <h1 className="text-6xl md:text-[9.5rem] font-black leading-[0.85] tracking-tighter mb-10 text-slate-900">
               Next-Level <br />
               <span className="gradient-text">Aura</span>
            </h1>
            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Engineering the next generation of digital infrastructure. 
              Bridging vision and innovation from Miami to Addis Ababa.
            </p>
          </div>
          <div className="pb-4">
             <div className="glass-card !bg-white/60 !rounded-2xl p-12 border-black/5 max-w-sm shadow-xl shadow-black/5">
                <Terminal className="text-nexyovi-primary mb-8" size={32} />
                <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">System Briefing</h4>
                <p className="text-slate-500 text-xs font-bold mb-10 uppercase tracking-widest leading-relaxed">Response latency target: 12-24 hours for official RFI payloads.</p>
                <Button className="btn-primary w-full !rounded-lg py-5 tracking-[0.3em]">Start RFI Payload</Button>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <GlassCard key={index} className="!p-0 !rounded-2xl group flex flex-col h-full hover:border-nexyovi-primary/40 transition-all duration-700 border-black/5 shadow-xl shadow-black/5">
              <div className="p-12 flex-grow">
                 <div className="flex justify-between items-start mb-16">
                    <div className="w-14 h-14 bg-black/[0.02] rounded-xl flex items-center justify-center border border-black/[0.05] text-slate-400 group-hover:text-nexyovi-primary transition-colors">
                       {service.icon}
                    </div>
                    <span className="text-[10px] font-black font-mono text-slate-400">SRV-00{index + 1}</span>
                 </div>

                 <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter uppercase">{service.title}</h3>
                 <p className="text-slate-500 text-base leading-relaxed font-medium mb-12">
                   {service.description}
                 </p>
                 
                 <div className="space-y-4 pt-10 border-t border-black/5">
                   {service.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex items-center text-[10px] text-slate-400 gap-4 font-black uppercase tracking-widest">
                       <ChevronRight size={14} className="text-nexyovi-primary" />
                       {feature}
                     </div>
                   ))}
                 </div>
              </div>

              <div className="p-12 bg-black/[0.01] border-t border-black/[0.05] mt-auto">
                <div className="flex justify-between items-center mb-10">
                   <div>
                      <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black mb-1">Tech Matrix</p>
                      <p className="text-xs font-black text-nexyovi-primary uppercase tracking-tighter">{service.tech}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black mb-1">Entry Logic</p>
                      <p className="text-xs font-black text-slate-900 uppercase tracking-tighter">{service.price}</p>
                   </div>
                </div>
                <Button className="btn-outline w-full !rounded-lg !py-4 group">
                   Documentation <ArrowUpRight size={14} className="ml-2 group-hover:rotate-45 transition-transform" />
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Technical Infrastructure Protocol */}
        <div className="mt-48 relative p-16 md:p-32 bg-slate-50 border border-black/5 overflow-hidden group">
           <div className="absolute inset-0 bg-transparent overflow-hidden">
              <Database className="absolute -bottom-20 -left-20 text-black/5" size={400} />
              <Layers className="absolute -top-20 -right-20 text-black/5" size={400} />
           </div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl">
                 <Badge className="mb-10">Corporate Compliance Edge</Badge>
                 <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-none uppercase">Global High <br /> <span className="gradient-text">Operations SLA</span></h2>
                 <p className="text-xl text-slate-500 font-medium leading-relaxed mb-16">
                   Every NEXYOVI deployment is protected by a military-grade service level 
                   agreement including 24/7 technical surveillance and redundancy protocols.
                 </p>
                 <div className="flex flex-wrap gap-10">
                    <div className="flex items-center gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">99.99% Reliability Target</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Multi-region Hosting</span>
                    </div>
                 </div>
              </div>
              
              <div className="flex-shrink-0">
                 <div className="glass-card !p-12 !rounded-3xl border-black/5 shadow-2xl bg-white px-16 text-center">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 text-center">Protocol Status</h4>
                    <p className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">ENCRYPTED</p>
                    <p className="text-[9px] font-black text-nexyovi-primary uppercase tracking-[0.2em] mb-10 text-center">MISSION CRITICAL READY</p>
                    <Button className="btn-primary w-full !rounded-lg py-5 px-10">Initialize Connection</Button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
