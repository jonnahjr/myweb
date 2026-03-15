import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Beaker, Pill, Building2, CheckCircle2, ArrowRight, Zap, Cpu, Shield, Database } from 'lucide-react';
import { GlassCard, Button, Badge } from '../components/ui/Core';

const productList = [
  {
    id: "emr",
    title: "NEXYOVI EMR Core",
    subtitle: "Absolute Patient Flow Control",
    icon: <Activity className="text-red-400" />,
    description: "A comprehensive clinical solution designed to digitize patient history, clinical notes, and treatment plans with real-time sync across departments. Built for sub-2ms data retrieval on multi-million patient records.",
    features: ["Global Patient Master Index", "Direct Clinical Decision Support", "Secure Multi-region Syncing", "Mobile Charting Interface"],
    metrics: "2.5M+ Patient Profiles Managed",
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    id: "lis",
    title: "NEXYOVI LIS Engine",
    subtitle: "Sub-atomic Sample Tracking",
    icon: <Beaker className="text-blue-400" />,
    description: "Advanced lab automation software for managing sample tracking, instrument integration, and regulatory reporting with precision. Eliminates 99.9% of manual transcription risks through direct instrument linking.",
    features: ["Barcode Mastery Tracking", "Direct Instrument API Sync", "Automated QC Validation", "Regional Lab Hub Control"],
    metrics: "0% Manual Transcription Error",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "pharmacy",
    title: "NEXYOVI Pharm Prime",
    subtitle: "High-integrity inventory",
    icon: <Pill className="text-emerald-400" />,
    description: "Intelligent inventory and prescription management software that integrates with medical record systems to prevent medication errors. Managed over 15M prescriptions annually with zero safety breaches.",
    features: ["Neural Drug Interaction Check", "AI Inventory Guarding", "Omnichannel Transaction POS", "Direct Supplier Automation"],
    metrics: "15M+ Prescriptions Processed",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "erp",
    title: "NEXYOVI ERP+ Infinity",
    subtitle: "Enterprise Business Operating System",
    icon: <Building2 className="text-purple-400" />,
    description: "A high-end enterprise business system built on Odoo to manage finance, HR, supply chain, and CRM in a unified high-concurrency dashboard. Optimized for conglomerates managing 50+ legal entities.",
    features: ["Consolidated Multi-Entity Finance", "AI-Powered HR Automation", "Supply Chain Intelligence Fabric", "Deep Business BI Engine"],
    metrics: "50+ Legal Entities Unified",
    color: "from-purple-500/20 to-pink-500/20"
  }
];

export const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-transparent text-slate-900 pt-48 pb-32 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-48 max-w-4xl mx-auto">
                    <Badge className="mb-10">NEXYOVI Proprietary Tech Stack</Badge>
                    <h1 className="text-6xl md:text-[8rem] font-black mb-10 leading-[0.9] tracking-tighter text-slate-950 uppercase">
                        The <span className="gradient-text">Absolute</span> Matrix
                    </h1>
                    <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Precision-engineered software platforms designed for high-concurrency, 
                        zero-latency enterprise workflows in Miami and Addis Ababa.
                    </p>
                </div>

                <div className="space-y-64 pb-32">
                  {productList.map((product, index) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 lg:gap-32 items-center`}
                    >
                      <div className="flex-1 space-y-12">
                        <div className="space-y-6">
                           <div className="flex items-center gap-6">
                              <div className="w-16 h-16 bg-white/40 rounded-[2rem] flex items-center justify-center border border-white/60 shadow-inner">
                                 {product.icon}
                              </div>
                              <div className="text-left">
                                 <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 mb-1">{product.subtitle}</p>
                                 <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">{product.title}</h2>
                              </div>
                           </div>
                           <p className="text-xl text-slate-500 leading-relaxed font-medium pt-8 max-w-xl">
                             {product.description}
                           </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-b border-black/5">
                          {product.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-4 group cursor-default">
                              <CheckCircle2 size={18} className="text-nexyovi-primary/60 group-hover:opacity-100 transition-opacity" />
                              <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                          <Button size="lg" className="w-full sm:w-auto px-12 py-5 text-lg">Provision Demo <ArrowRight className="ml-2" /></Button>
                          <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 py-5 text-lg">Specification PDF</Button>
                        </div>

                        <div className="flex items-center gap-6 pt-10">
                            <div className="h-10 w-[1px] bg-black/5"></div>
                            <div>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Global Metric</p>
                                <p className="text-sm font-black text-nexyovi-primary uppercase tracking-tighter">{product.metrics}</p>
                            </div>
                        </div>
                      </div>

                      <div className="flex-1 w-full group">
                        <GlassCard className={`!p-4 border-black/5 bg-gradient-to-br ${product.color} transition-all duration-1000 group-hover:scale-[1.02] shadow-2xl shadow-black/5`}>
                          <div className="w-full h-full bg-white/80 rounded-[2.5rem] flex items-center justify-center p-12 lg:p-20 relative overflow-hidden">
                             {/* Decorative Background for visual depth */}
                             <div className="absolute inset-0 opacity-10 blur-3xl -z-10">
                                <Shield className="absolute -top-10 -left-10 text-white" size={300} />
                             </div>
                             
                             <div className="w-full space-y-6 opacity-60 group-hover:opacity-100 transition-opacity duration-1000">
                                <div className="h-4 w-1/4 bg-black/5 rounded-full animate-pulse"></div>
                                <div className="h-12 w-3/4 bg-black/5 rounded-2xl animate-pulse" style={{ animationDelay: '200ms' }}></div>
                                <div className="grid grid-cols-3 gap-6 pt-8">
                                   <div className="h-40 bg-black/5 rounded-3xl" style={{ animationDelay: '400ms' }}></div>
                                   <div className="h-40 bg-black/5 rounded-3xl" style={{ animationDelay: '600ms' }}></div>
                                   <div className="h-40 bg-black/5 rounded-3xl" style={{ animationDelay: '800ms' }}></div>
                                </div>
                                <div className="h-20 w-full bg-black/5 rounded-3xl" style={{ animationDelay: '1000ms' }}></div>
                             </div>
                             
                             <div className="absolute inset-0 flex items-center justify-center p-10">
                                <div className="relative">
                                    <div className="absolute -inset-20 bg-nexyovi-primary opacity-10 filter blur-[80px] animate-pulse"></div>
                                    <Database size={140} strokeWidth={0.5} className="text-slate-900 relative z-10 drop-shadow-[0_0_50px_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                             </div>
                          </div>
                          <div className="absolute -bottom-6 -right-6 glass-card !p-8 shadow-2xl animate-float border-black/5 bg-white/80 !rounded-3xl">
                             <div className="flex items-center gap-6">
                                <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]"></div>
                                <div>
                                   <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest text-left">System integrity</p>
                                   <p className="text-sm text-slate-900 font-black uppercase tracking-tight">ENCRYPTED CONNECTED</p>
                                </div>
                             </div>
                          </div>
                        </GlassCard>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Integration Protocol */}
                <div className="mt-32 border-t border-black/5 pt-32">
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                      <div className="lg:col-span-2">
                         <h2 className="text-5xl font-black mb-10 tracking-tighter text-slate-950 uppercase">The API Protocol <br /> <span className="gradient-text">Absolute Interoperability</span></h2>
                         <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mb-16">
                           All Nexyovi products are built on a RESTful JSON fabric with OAuth2 secure handshakes,
                           allowing for seamless integration into your existing SAP, Oracle, or proprietary backends.
                         </p>
                         <div className="flex flex-wrap gap-12">
                            <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                               <Database className="text-nexyovi-primary" />
                               <span className="text-sm font-black uppercase tracking-widest">SQL Unified Sync</span>
                            </div>
                            <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                               <Zap className="text-nexyovi-primary" />
                               <span className="text-sm font-black uppercase tracking-widest">gRPC Protocols</span>
                            </div>
                            <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                               <Cpu className="text-nexyovi-primary" />
                               <span className="text-sm font-black uppercase tracking-widest">WebHooks Matrix</span>
                            </div>
                         </div>
                      </div>
                      <div className="flex items-center justify-center lg:justify-end">
                         <Button variant="outline" className="text-xl py-8 px-12 group">
                            Technical API Docs <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                         </Button>
                      </div>
                   </div>
                </div>
            </div>
        </div>
    );
};
