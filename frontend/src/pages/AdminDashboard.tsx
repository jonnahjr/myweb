import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  Box, 
  LogOut, 
  Search, 
  Bell, 
  MoreVertical,
  CheckCircle,
  Terminal,
  Globe,
  Database,
  Shield,
  Activity,
  Cpu,
  User,
  Zap,
  Monitor,
  ChevronRight,
  Command,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Core';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Signal Logs', value: '1,240', icon: <MessageSquare size={20} />, accent: 'text-brand-blue' },
    { label: 'Active Missions', value: '12', icon: <Rocket size={20} />, accent: 'text-brand-mint' },
    { label: 'R&D Artifacts', value: '45', icon: <FileText size={20} />, accent: 'text-brand-blue' },
    { label: 'Portal Nodes', value: '89', icon: <User size={20} />, accent: 'text-white' },
  ];

  const recentMessages = [
    { name: 'Alice Cooper', company: 'National Grid', email: 'alice@gov.node', date: '2 hours ago', status: 'NEW', priority: 'HIGH' },
    { name: 'Bob Smith', company: 'Nexus Fin', email: 'bob@nexus.fin', date: '5 hours ago', status: 'SYNCED', priority: 'MED' },
    { name: 'Charlie Day', company: 'Dayman_Ops', email: 'charlie@node.a1', date: 'Yesterday', status: 'PROCESSED', priority: 'LOW' },
  ];

  return (
    <div className="min-h-screen bg-brand-cream flex relative overflow-hidden font-inter text-brand-charcoal">
      
      {/* Background Decor */}
      <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
      <div className="absolute inset-0 radial-grid opacity-5 pointer-events-none" />

      {/* --- SIDEBAR --- */}
      <aside className="w-80 border-r border-black/[0.04] bg-brand-cream-bold p-10 flex flex-col hidden lg:flex sticky top-0 h-screen z-50">
        <Link to="/" className="flex items-center space-x-6 mb-20 group">
          <div className="w-12 h-12 bg-white/70 border border-black/5 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm transition-all">
            <Command size={24} />
          </div>
          <div>
            <p className="text-2xl font-black uppercase tracking-tightest font-outfit text-brand-charcoal">NEXYOVI</p>
            <p className="text-[9px] font-black text-brand-charcoal/20 uppercase tracking-[0.5em] mt-1 font-mono">COMMAND_CENTER_v9</p>
          </div>
        </Link>

        <nav className="space-y-4 flex-grow">
          <p className="text-[10px] font-black text-brand-charcoal/20 uppercase tracking-[0.6em] mb-10 font-mono pl-4">System Protocols</p>
          {[
            { name: 'Overview', icon: <Activity size={20} /> },
            { name: 'Communications', icon: <MessageSquare size={20} /> },
            { name: 'Intelligence', icon: <FileText size={20} /> },
            { name: 'Products', icon: <Box size={20} /> },
            { name: 'Security', icon: <Shield size={20} /> },
            { name: 'Cloud Ops', icon: <Globe size={20} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-6 px-6 py-4 rounded-2xl transition-all duration-300 relative ${
                activeTab === item.name 
                ? 'bg-white/70 border border-black/5 shadow-sm text-brand-charcoal' 
                : 'text-brand-charcoal/30 hover:text-brand-charcoal hover:bg-black/[0.02]'
              }`}
            >
              <span className={`${activeTab === item.name ? 'text-brand-blue' : 'text-brand-charcoal/20'} transition-colors`}>{item.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] font-mono">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-black/[0.04] space-y-8">
           <div className="p-8 bg-white/40 border border-black/[0.06] rounded-3xl space-y-4 transition-all hover:bg-white/60">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
                 <p className="text-[10px] font-black text-brand-mint uppercase tracking-widest">Protocol Stable</p>
              </div>
              <p className="text-[10px] text-brand-charcoal/20 font-black uppercase tracking-[0.3em] font-mono">Sync_Stability: 99.99%</p>
           </div>
           <button className="flex items-center gap-4 px-6 py-4 text-brand-charcoal/20 hover:text-red-500 transition-all w-full font-black text-[10px] uppercase tracking-[0.5em]">
              <LogOut size={16} /> Terminate_Session
           </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        <header className="h-28 border-b border-black/[0.04] flex items-center justify-between px-16 bg-brand-cream/50 backdrop-blur-3xl sticky top-0 z-40">
           <div className="max-w-xl w-full hidden md:block">
              <div className="relative group">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-charcoal/10 group-focus-within:text-brand-blue transition-colors">
                    <Search size={20} />
                 </div>
                 <input 
                    type="text" 
                    placeholder="Search mission registry..." 
                    className="w-full bg-black/[0.02] border border-black/[0.08] rounded-full py-5 pl-20 pr-8 text-sm focus:outline-none focus:border-brand-blue/30 transition-all font-bold placeholder:text-brand-charcoal/5"
                 />
              </div>
           </div>

           <div className="flex items-center gap-10">
              <div className="hidden xl:flex items-center gap-12 px-8 py-4 bg-white/70 border border-black/[0.06] rounded-2xl shadow-sm">
                 <div className="text-center border-r border-black/[0.06] pr-10">
                    <p className="text-[8px] font-black text-brand-charcoal/20 uppercase tracking-widest mb-1">Latency</p>
                    <p className="text-xs font-black text-brand-charcoal font-mono">0.02 ms</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[8px] font-black text-brand-charcoal/20 uppercase tracking-widest mb-1">Live Units</p>
                    <p className="text-xs font-black text-brand-mint flex items-center gap-3 font-mono">48 <div className="w-1.5 h-1.5 rounded-full bg-brand-mint animate-pulse" /></p>
                 </div>
              </div>

              <button className="relative text-brand-charcoal/20 hover:text-brand-charcoal transition-colors p-3 bg-white/70 rounded-xl border border-black/[0.06] shadow-sm">
                 <Bell size={24} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-brand-blue rounded-full shadow-sm"></span>
              </button>

              <div className="flex items-center gap-6 border-l border-black/[0.04] pl-10 cursor-pointer group">
                 <div className="text-right hidden sm:block">
                    <p className="text-sm font-black text-brand-charcoal leading-none group-hover:text-brand-blue transition-colors font-outfit uppercase">Admin_X01</p>
                    <p className="text-[8px] text-brand-charcoal/20 font-black uppercase tracking-widest mt-1 opacity-60 font-mono">Clearance: L10</p>
                 </div>
                 <div className="w-14 h-14 rounded-2xl bg-white/70 border border-black/[0.06] flex items-center justify-center text-brand-charcoal/20 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all shadow-sm">
                    <User size={24} />
                 </div>
              </div>
           </div>
        </header>

        <main className="p-16 lg:p-24 space-y-24 bg-brand-cream/50">
           {/* Section Header */}
           <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
              <div className="space-y-8">
                 <Badge variant="blue"><Activity size={12} className="mr-2" /> Sector Status: Optimal</Badge>
                 <h1 className="text-7xl md:text-9xl font-black tracking-tightest leading-[0.8] uppercase font-outfit text-brand-charcoal">{activeTab} <br /><span className="gradient-text">Console.</span></h1>
              </div>
              <div className="flex gap-6">
                 <button className="btn-secondary py-5 !px-10 text-[10px] uppercase font-black tracking-widest">Access Protocol Logs</button>
                 <button className="btn-primary py-5 !px-10 text-[10px] uppercase font-black tracking-widest shadow-sm">Execute Sweep <Zap size={16} className="ml-2"/></button>
              </div>
           </div>

           {/* Stats Bento Grid */}
           <div className="bento-grid">
              {stats.map((stat, i) => (
                <div key={i} className="lg:col-span-3 bento-item group p-10 bg-white/70 border border-black/5 hover:bg-white transition-all shadow-sm">
                   <div className="absolute top-0 right-0 p-10 opacity-5 scale-150 rotate-12 transition-transform duration-700 group-hover:scale-[1.8] pointer-events-none group-hover:text-brand-blue">
                      {stat.icon}
                   </div>
                   <div className="flex justify-between items-start mb-12 relative z-10">
                      <div className={`w-16 h-16 bg-white/40 border border-black/[0.08] rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:text-brand-blue`}>
                         {stat.icon}
                      </div>
                      <span className="text-[8px] font-black text-brand-charcoal/10 uppercase tracking-widest font-mono">ARCHIVE_LOG_0{i+1}</span>
                   </div>
                   <p className="text-[10px] font-black text-brand-charcoal/20 uppercase tracking-[0.5em] mb-3 font-mono">{stat.label}</p>
                   <p className="text-5xl font-black text-brand-charcoal tracking-tighter leading-none font-outfit">{stat.value}</p>
                </div>
              ))}
           </div>

           {/* Core Registry Layer */}
           <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
              <div className="xl:col-span-8 premium-card p-0 overflow-hidden flex flex-col border-black/5 bg-white/80 shadow-floating">
                 <div className="p-12 border-b border-black/[0.04] flex justify-between items-center bg-white/40">
                    <h3 className="text-3xl font-black uppercase tracking-tightest flex items-center gap-6 font-outfit text-brand-charcoal">
                       <Terminal size={32} className="text-brand-blue" />
                       Signal_Sink registry.
                    </h3>
                    <button className="text-[9px] font-black text-brand-blue uppercase tracking-[0.4em] flex items-center gap-3 hover:opacity-60 transition-all group">View Comprehensive Logs <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/></button>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead className="bg-black/[0.02] text-[9px] font-black text-brand-charcoal/20 uppercase tracking-[0.4em] font-mono border-b border-black/[0.04]">
                          <tr>
                             <th className="px-12 py-8">Liaison</th>
                             <th className="px-12 py-8">Entity Cluster</th>
                             <th className="px-12 py-8">Node_Status</th>
                             <th className="px-12 py-8">Pulse</th>
                             <th className="px-12 py-8 text-right">Actions</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-black/[0.04] text-sm font-medium">
                          {recentMessages.map((msg, i) => (
                             <tr key={i} className="hover:bg-black/[0.01] transition-colors group">
                                <td className="px-12 py-10">
                                   <p className="font-black text-brand-charcoal uppercase tracking-tight">{msg.name}</p>
                                   <p className="text-[10px] text-brand-charcoal/20 font-mono mt-1 group-hover:text-brand-blue transition-colors">{msg.email}</p>
                                </td>
                                <td className="px-12 py-10 text-brand-charcoal/40 uppercase text-xs font-black tracking-widest">{msg.company}</td>
                                <td className="px-12 py-10">
                                   <span className={`px-5 py-2 rounded-xl text-[9px] font-black tracking-[0.3em] ${msg.status === 'NEW' ? 'bg-brand-mint/10 text-brand-mint border border-brand-mint/20' : 'bg-black/[0.04] text-brand-charcoal/30 border border-black/[0.08]'}`}>
                                      {msg.status}
                                   </span>
                                </td>
                                <td className="px-12 py-10">
                                   <div className={`w-2.5 h-2.5 rounded-full ${msg.priority === 'HIGH' ? 'bg-red-500 animate-pulse shadow-sm' : 'bg-brand-blue/30 opacity-40'}`} />
                                </td>
                                <td className="px-12 py-10 text-right">
                                   <button className="text-brand-charcoal/20 hover:text-brand-charcoal p-3 bg-black/[0.02] rounded-xl hover:bg-black/[0.06] transition-all"><MoreVertical size={20} /></button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              {/* Status HUD Sidebar */}
              <div className="xl:col-span-4 bento-item bg-brand-cream-bold text-brand-charcoal hover:bg-brand-cream-bold border-black/10 flex flex-col gap-12 relative overflow-hidden group shadow-floating">
                 <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                    <Monitor size={400} strokeWidth={0.5} className="text-brand-blue" />
                 </div>
                 
                 <div className="relative z-10 space-y-8">
                    <div className="w-16 h-16 bg-white/70 border border-black/10 rounded-2xl flex items-center justify-center text-brand-mint shadow-sm">
                       <Cpu size={32} />
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-4xl font-black uppercase tracking-tightest font-outfit text-brand-charcoal">HUD_Pulse.</h3>
                       <p className="text-brand-charcoal/20 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">Infrastructure connectivity and logic telemetry.</p>
                    </div>
                 </div>

                 <div className="relative z-10 space-y-10 flex-grow">
                    {[
                      { name: 'Core API Gateway', status: 'Optimal', load: 14, icon: <CheckCircle size={16} />, accent: 'bg-brand-mint shadow-sm' },
                      { name: 'DB Cluster Sync', status: 'Verifying', load: 42, icon: <Database size={16} />, accent: 'bg-brand-blue shadow-sm' },
                      { name: 'Cloud CDN Mesh', status: 'Encrypted', load: 8, icon: <Globe size={16} />, accent: 'bg-brand-mint shadow-sm' },
                      { name: 'Security Tunnel 07', status: 'Active', load: 88, icon: <Shield size={16} />, accent: 'bg-red-500 shadow-sm' },
                    ].map((svc, i) => (
                      <div key={i} className="space-y-4">
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                               <span className="text-brand-charcoal/20 group-hover:text-brand-mint transition-colors duration-500">{svc.icon}</span>
                               <span className="text-[10px] font-black uppercase tracking-[0.3em] font-mono">{svc.name}</span>
                            </div>
                            <span className="text-[10px] font-black font-mono text-brand-charcoal/30">{svc.load}%</span>
                         </div>
                         <div className="h-1.5 w-full bg-black/[0.04] rounded-full overflow-hidden border border-black/5">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${svc.load}%` }}
                                transition={{ duration: 1.5, delay: i * 0.1 }}
                                className={`h-full ${svc.accent}`}
                            />
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="relative z-10 pt-10 border-t border-black/5 text-center space-y-6">
                    <button className="w-full btn-primary py-6 text-[10px] font-black uppercase tracking-[0.6em] shadow-sm">Execute Critical Registry Sweep <Zap size={16} className="ml-3" /></button>
                    <p className="text-[9px] font-black text-brand-charcoal/10 uppercase tracking-[0.8em] font-mono">Last_Sweep_Status: VALID</p>
                 </div>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
};
