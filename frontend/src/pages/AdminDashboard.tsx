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
import { Badge, Button } from '../components/ui/Core';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Signal Logs', value: '1,240', icon: <MessageSquare size={20} />, accent: 'text-brand-blue' },
    { label: 'Active Missions', value: '12', icon: <Rocket size={20} />, accent: 'text-brand-blue' },
    { label: 'R&D Artifacts', value: '45', icon: <FileText size={20} />, accent: 'text-brand-blue' },
    { label: 'Portal Nodes', value: '89', icon: <User size={20} />, accent: 'text-brand-charcoal' },
  ];

  const recentMessages = [
    { name: 'Alice Cooper', company: 'National Grid', email: 'alice@gov.node', date: '2 hours ago', status: 'NEW', priority: 'HIGH' },
    { name: 'Bob Smith', company: 'Nexus Fin', email: 'bob@nexus.fin', date: '5 hours ago', status: 'SYNCED', priority: 'MED' },
    { name: 'Charlie Day', company: 'Dayman_Ops', email: 'charlie@node.a1', date: 'Yesterday', status: 'PROCESSED', priority: 'LOW' },
  ];

  return (
    <div className="min-h-screen bg-white flex relative overflow-hidden text-brand-charcoal">
      
      {/* Side Background */}
      <div className="absolute inset-0 bg-brand-gray-bold/30 pointer-events-none" />

      {/* --- SIDEBAR --- */}
      <aside className="w-80 border-r border-black/5 bg-white p-10 flex flex-col hidden lg:flex sticky top-0 h-screen z-50">
        <Link to="/" className="flex items-center space-x-6 mb-20 group">
          <div className="w-12 h-12 bg-brand-gray-light border border-black/5 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
            <Command size={24} />
          </div>
          <div>
            <p className="text-2xl font-black uppercase tracking-tightest font-outfit text-brand-charcoal">NEXYOVI</p>
            <p className="text-[9px] font-black text-brand-charcoal/20 uppercase tracking-[0.4em] mt-1 font-mono">COMMAND_CENTER_v9</p>
          </div>
        </Link>

        <nav className="space-y-4 flex-grow">
          <p className="text-[10px] font-black text-brand-charcoal/30 uppercase tracking-[0.5em] mb-10 font-mono pl-4">System Protocols</p>
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
                ? 'bg-brand-gray-light border border-black/5 shadow-premium text-brand-charcoal' 
                : 'text-brand-charcoal/40 hover:text-brand-charcoal hover:bg-brand-gray-light/50'
              }`}
            >
              <span className={`${activeTab === item.name ? 'text-brand-blue' : 'text-brand-charcoal/20'} transition-colors`}>{item.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] font-mono">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-black/5 space-y-8">
           <div className="p-8 bg-brand-gray-light border border-black/5 rounded-3xl space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                 <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Protocol Stable</p>
              </div>
              <p className="text-[10px] text-brand-charcoal/20 font-black uppercase tracking-[0.3em] font-mono">Sync_Stability: 99.99%</p>
           </div>
           <button className="flex items-center gap-4 px-6 py-4 text-brand-charcoal/30 hover:text-red-500 transition-all w-full font-black text-[10px] uppercase tracking-[0.5em]">
              <LogOut size={16} /> Terminate_Session
           </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto relative z-10">
        <header className="h-28 border-b border-black/5 flex items-center justify-between px-16 bg-white/80 backdrop-blur-2xl sticky top-0 z-40">
           <div className="max-w-xl w-full hidden md:block">
              <div className="relative group">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-charcoal/10 group-focus-within:text-brand-blue transition-colors">
                    <Search size={18} />
                 </div>
                 <input 
                    type="text" 
                    placeholder="Search mission registry..." 
                    className="w-full bg-brand-gray-light border border-black/5 rounded-full py-5 pl-20 pr-8 text-sm focus:bg-white focus:border-brand-blue/30 transition-all font-bold placeholder:text-brand-charcoal/10"
                 />
              </div>
           </div>

           <div className="flex items-center gap-8">
              <div className="hidden xl:flex items-center gap-10 px-8 py-4 bg-brand-gray-light border border-black/5 rounded-2xl">
                 <div className="text-center border-r border-black/5 pr-8">
                    <p className="text-[8px] font-black text-brand-charcoal/20 uppercase tracking-widest mb-1">Latency</p>
                    <p className="text-xs font-black text-brand-charcoal font-mono tracking-tighter">0.02 ms</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[8px] font-black text-brand-charcoal/20 uppercase tracking-widest mb-1">Live Units</p>
                    <p className="text-xs font-black text-brand-blue flex items-center gap-3 font-mono tracking-tighter">48 <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" /></p>
                 </div>
              </div>

              <button className="relative text-brand-charcoal/20 hover:text-brand-charcoal transition-colors p-3 bg-brand-gray-light rounded-xl border border-black/5 shadow-sm">
                 <Bell size={22} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-brand-blue rounded-full"></span>
              </button>

              <div className="flex items-center gap-6 border-l border-black/5 pl-8 cursor-pointer group">
                 <div className="text-right hidden sm:block">
                    <p className="text-sm font-black text-brand-charcoal leading-none group-hover:text-brand-blue transition-colors font-outfit uppercase">Admin_X01</p>
                    <p className="text-[8px] text-brand-charcoal/30 font-black uppercase tracking-widest mt-1 font-mono">Clearance: L10</p>
                 </div>
                 <div className="w-12 h-12 rounded-2xl bg-brand-gray-light border border-black/5 flex items-center justify-center text-brand-charcoal/20 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all shadow-sm">
                    <User size={20} />
                 </div>
              </div>
           </div>
        </header>

        <main className="p-12 lg:p-20 space-y-20">
           {/* Section Header */}
           <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent"><Activity size={12} className="mr-2" /> Sector Status: Optimal</Badge>
                 <h1 className="text-5xl md:text-8xl font-black tracking-tightest leading-[0.85] uppercase font-outfit text-brand-charcoal">{activeTab} <br /><span className="text-brand-blue italic">Console.</span></h1>
              </div>
              <div className="flex gap-4">
                 <Button className="h-14 px-8 bg-brand-gray-light text-brand-charcoal border-black/5 rounded-xl text-[10px] uppercase font-black tracking-widest hover:bg-white hover:shadow-premium transition-all">Protocol Logs</Button>
                 <Button className="h-14 px-8 bg-brand-charcoal hover:bg-brand-blue text-white rounded-xl text-[10px] uppercase font-black tracking-widest shadow-premium">Execute Sweep <Zap size={16} className="ml-2"/></Button>
              </div>
           </div>

           {/* Stats Bento Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="group p-8 bg-white border border-black/5 rounded-[2.5rem] hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 text-brand-blue/5 group-hover:text-brand-blue/10 scale-150 transition-all duration-700 pointer-events-none group-hover:rotate-12">
                      {stat.icon}
                   </div>
                   <div className="flex justify-between items-start mb-10 relative z-10">
                      <div className={`w-14 h-14 bg-brand-gray-light border border-black/5 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-500`}>
                         {stat.icon}
                      </div>
                      <span className="text-[10px] font-black text-brand-charcoal/10 uppercase tracking-widest font-mono tracking-[0.3em]">LOG_0{i+1}</span>
                   </div>
                   <p className="text-[10px] font-black text-brand-charcoal/30 uppercase tracking-[0.4em] mb-2 font-mono">{stat.label}</p>
                   <p className="text-4xl font-black text-brand-charcoal tracking-tighter leading-none font-outfit">{stat.value}</p>
                </div>
              ))}
           </div>

           {/* Core Registry Layer */}
           <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-8">
              <div className="xl:col-span-8 bg-white border border-black/5 rounded-[3rem] overflow-hidden flex flex-col shadow-floating">
                 <div className="p-10 border-b border-black/5 flex justify-between items-center bg-brand-gray-bold/20">
                    <h3 className="text-2xl font-black uppercase tracking-tightest flex items-center gap-4 font-outfit text-brand-charcoal">
                       <Terminal size={28} className="text-brand-blue" />
                       Signal_Sink registry.
                    </h3>
                    <button className="text-[9px] font-black text-brand-blue uppercase tracking-[0.4em] flex items-center gap-2 hover:opacity-60 transition-all group">Full Logs <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/></button>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead className="bg-brand-gray-light text-[9px] font-black text-brand-charcoal/30 uppercase tracking-[0.4em] font-mono border-b border-black/5">
                          <tr>
                             <th className="px-10 py-6">Liaison</th>
                             <th className="px-10 py-6">Entity Cluster</th>
                             <th className="px-10 py-6">Node_Status</th>
                             <th className="px-10 py-6">Priority</th>
                             <th className="px-10 py-6 text-right">Actions</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-black/5 text-sm">
                          {recentMessages.map((msg, i) => (
                             <tr key={i} className="hover:bg-brand-gray-light/30 transition-colors group">
                                <td className="px-10 py-8">
                                   <p className="font-black text-brand-charcoal uppercase tracking-tight">{msg.name}</p>
                                   <p className="text-[10px] text-brand-charcoal/30 font-mono mt-1 group-hover:text-brand-blue transition-colors">{msg.email}</p>
                                </td>
                                <td className="px-10 py-8 text-brand-charcoal/40 uppercase text-[10px] font-black tracking-widest">{msg.company}</td>
                                <td className="px-10 py-8">
                                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black tracking-[0.2em] ${msg.status === 'NEW' ? 'bg-brand-blue text-white shadow-sm' : 'bg-brand-gray-light text-brand-charcoal/30 border border-black/5'}`}>
                                      {msg.status}
                                   </span>
                                </td>
                                <td className="px-10 py-8">
                                   <div className={`w-2.5 h-2.5 rounded-full ${msg.priority === 'HIGH' ? 'bg-red-500 shadow-sm' : 'bg-brand-blue/30 opacity-40'}`} />
                                </td>
                                <td className="px-10 py-8 text-right">
                                   <button className="text-brand-charcoal/20 hover:text-brand-blue p-2 hover:bg-white rounded-xl transition-all"><MoreVertical size={20} /></button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              {/* Status HUD Sidebar */}
              <div className="xl:col-span-4 bg-brand-charcoal text-white rounded-[3rem] p-12 flex flex-col gap-10 relative overflow-hidden group shadow-floating">
                 <div className="absolute top-0 right-0 p-12 text-brand-blue/5 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000">
                    <Monitor size={400} strokeWidth={0.5} />
                 </div>
                 
                 <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm">
                       <Cpu size={28} />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-3xl font-black uppercase tracking-tightest font-outfit text-white">HUD_Pulse.</h3>
                       <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">Infrastructure telemetry.</p>
                    </div>
                 </div>

                 <div className="relative z-10 space-y-8 flex-grow">
                    {[
                      { name: 'Core Gateway', status: 'Optimal', load: 14, icon: <CheckCircle size={14} />, accent: 'bg-brand-blue shadow-glow' },
                      { name: 'DB Sync Node', status: 'Verifying', load: 42, icon: <Database size={14} />, accent: 'bg-brand-blue shadow-glow' },
                      { name: 'Security Tunnel', status: 'Active', load: 88, icon: <Shield size={14} />, accent: 'bg-red-500 shadow-sm' },
                    ].map((svc, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                               <span className="text-white/20">{svc.icon}</span>
                               <span className="text-[10px] font-black uppercase tracking-[0.2em] font-mono">{svc.name}</span>
                            </div>
                            <span className="text-[10px] font-black font-mono text-white/30">{svc.load}%</span>
                         </div>
                         <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
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

                 <div className="relative z-10 pt-8 border-t border-white/5 text-center space-y-4">
                    <button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] transition-all shadow-glow">Execute Sweep</button>
                    <p className="text-[8px] font-black text-white/10 uppercase tracking-[0.6em] font-mono">STATUS: VALID_LOG_HUB</p>
                 </div>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
};
