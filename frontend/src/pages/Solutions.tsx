import React, { useEffect } from 'react';
import { Activity, Shield, PieChart, Zap, Globe, ArrowRight, Server, Database } from 'lucide-react';
import { GlassCard, Button, Badge } from '../components/ui/Core';

const solutions = [
  {
    title: "Healthcare Digitalization",
    icon: <Activity className="text-red-400" />,
    description: "End-to-end software integration for modern medical facilities, optimizing patient flow and data accuracy with sub-second retrieval times.",
    points: ["EMR/EHR Integrated Workflows", "Pharmacy & LIS Connectivity", "Patient Data Security (HIPAA/GDPR)", "Real-time Clinical Dashboards"],
    stats: "20M+ Records Managed",
    color: "from-red-500/10"
  },
  {
    title: "Enterprise Automation",
    icon: <PieChart className="text-blue-400" />,
    description: "Streamlining corporate operations with high-performance EBS and Odoo ERP customizations that integrate with the legacy stack.",
    points: ["Automated Financial Auditing", "Supply Chain Intelligence", "HR & Payroll Synchronization", "Unified Multi-Entity Reporting"],
    stats: "35% Average Efficiency Gain",
    color: "from-blue-500/10"
  },
  {
    title: "Fintech Infrastructure",
    icon: <Shield className="text-purple-400" />,
    description: "Building secure, high-concurrency payment gateways and core banking modules for the next generation of digital finance.",
    points: ["Fraud Detection Systems", "Omnichannel Payment API", "Regulatory Compliance Engines", "Real-time Settlement Hubs"],
    stats: "$4B+ Transaction Volume",
    color: "from-purple-500/10"
  },
  {
    title: "Custom SaaS Engineering",
    icon: <Zap className="text-yellow-400" />,
    description: "Turning unique business models into scalable, cloud-native software platforms that dominate their respective markets.",
    points: ["Multi-tenant Architecture", "Scalable Microservices", "Advanced API Ecosystems", "Global Edge Deployment"],
    stats: "99.999% Global Uptime",
    color: "from-yellow-500/10"
  }
];

export const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent text-slate-900 pt-48 pb-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-32 max-w-4xl mx-auto">
           <Badge className="mb-10">Industry Vertical Mastery</Badge>
           <h1 className="text-7xl md:text-[9.5rem] font-black mb-10 leading-[0.8] tracking-tighter text-slate-950">
             Next-Level <br />
             <span className="gradient-text">Verticals</span>
           </h1>
           <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
             NEXYOVI provides deep domain expertise across critical industries, 
             delivering 'Next-Level Vision and Innovation' from Miami to Addis Ababa.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-48">
           {solutions.map((sol, i) => (
             <GlassCard key={i} className={`!p-0 border-black/5 overflow-hidden group bg-gradient-to-br ${sol.color} to-transparent shadow-xl shadow-black/5`}>
                <div className="p-10 md:p-16 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-20 relative z-10">
                        <div className="w-24 h-24 bg-white/40 rounded-[2.5rem] flex items-center justify-center border border-white/60 shadow-inner group-hover:bg-nexyovi-primary/10 transition-colors duration-700">
                           {React.cloneElement(sol.icon as React.ReactElement, { size: 40 })}
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-2 uppercase">Performance Marker</p>
                           <p className="text-sm font-black text-nexyovi-primary tracking-tighter uppercase">{sol.stats}</p>
                        </div>
                    </div>

                    <div className="flex-grow space-y-10 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">{sol.title}</h2>
                        <p className="text-slate-500 text-xl leading-relaxed font-medium">{sol.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-10 border-t border-black/5">
                           {sol.points.map((pt, idx) => (
                             <div key={idx} className="flex items-center gap-4 group/item">
                                <div className="w-2 h-2 rounded-full bg-nexyovi-primary/40 group-hover/item:bg-nexyovi-primary transition-colors"></div>
                                <span className="text-sm text-slate-400 font-black tracking-widest uppercase leading-none">{pt}</span>
                             </div>
                           ))}
                        </div>
                    </div>

                    <div className="mt-20 relative z-10 pt-10 border-t border-black/5">
                       <Button variant="primary" size="lg" className="w-full md:w-auto tracking-[0.2em] text-[10px] uppercase py-6 px-12">
                          Blueprint Analysis <ArrowRight size={16} className="ml-2" />
                       </Button>
                    </div>
                </div>
             </GlassCard>
           ))}
        </div>

        {/* Tactical Infrastructure Section */}
        <div className="relative p-16 md:p-32 rounded-[4rem] bg-slate-50 border border-black/5 overflow-hidden shadow-2xl shadow-black/5">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-nexyovi-primary/30 to-transparent"></div>
           <div className="absolute top-0 right-0 p-10 opacity-10"><Globe size={300} strokeWidth={0.5} /></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <Badge className="mb-10">Deployment Infrastructure</Badge>
                 <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight text-slate-900 uppercase">Zero-Point <br /> <span className="gradient-text">Global Deployment</span></h2>
                 <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-16">
                   Every NEXYOVI solution is containerized and deployed across a multi-region 
                   edge network, ensuring sub-10ms latency for your international workforce.
                 </p>
                 
                 <div className="flex flex-wrap gap-x-12 gap-y-8">
                    <div className="flex items-center gap-4">
                       <Server className="text-nexyovi-primary" />
                       <span className="text-xs uppercase font-black tracking-widest text-slate-950">Tier IV Data Centers</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <Database className="text-nexyovi-primary" />
                       <span className="text-xs uppercase font-black tracking-widest text-slate-950">Regional Sovereignty</span>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                 {[
                    { label: "Active Regions", val: "24+" },
                    { label: "Audit Pass Rate", val: "100%" },
                    { label: "Data Integrity", val: "99.999%" },
                    { label: "Response SLA", val: "<1hr" }
                 ].map((stat, idx) => (
                    <div key={idx} className="glass-card !p-10 border-black/5 text-center hover:border-nexyovi-primary/40 transition-colors shadow-lg shadow-black/5">
                       <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">{stat.val}</h3>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{stat.label}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
