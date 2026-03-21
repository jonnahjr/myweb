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
    <div className="min-h-screen bg-[#F3EFE6] flex relative overflow-hidden text-[#1A2332]">
      
      {/* Side Background */}
      <div className="absolute inset-0 bg-brand-gray-bold/30 pointer-events-none" />

      {/* --- SIDEBAR --- */}
      <aside className="w-80 border-r border-gray-200 bg-gray-50 p-6 flex flex-col hidden lg:flex sticky top-0 h-screen z-50">
        <Link to="/" className="flex items-center space-x-6 mb-20 group">
          <div className="w-12 h-12 bg-brand-gray-light border border-gray-200 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-[#1A2332] transition-all duration-500">
            <Command size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold tracking-tight font-outfit text-[#1A2332]">NEXYOVI</p>
            <p className="text-xs font-bold text-[#1A2332]/20 uppercase tracking-wider mt-1 font-medium">COMMAND_CENTER_v9</p>
          </div>
        </Link>

        <nav className="space-y-4 flex-grow">
          <p className="text-sm font-bold text-brand-charcoal/30 uppercase tracking-wider mb-10 font-medium pl-4">System Protocols</p>
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
                ? 'bg-gray-50 border border-gray-200 shadow-md hover:shadow-xl transition-all text-[#1A2332]' 
                : 'text-gray-400 hover:text-[#1A2332] hover:bg-white/5'
              }`}
            >
              <span className={`${activeTab === item.name ? 'text-brand-blue' : 'text-[#1A2332]/20'} transition-colors`}>{item.icon}</span>
              <span className="text-sm font-bold uppercase tracking-[0.3em] font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-gray-200 space-y-8">
           <div className="p-8 bg-brand-gray-light border border-gray-200 rounded-3xl space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                 <p className="text-sm font-bold text-brand-blue uppercase tracking-widest">Protocol Stable</p>
              </div>
              <p className="text-sm text-brand-charcoal/20 font-bold uppercase tracking-[0.3em] font-medium">Sync_Stability: 99.99%</p>
           </div>
           <button className="flex items-center gap-4 px-6 py-4 text-brand-charcoal/30 hover:text-red-500 transition-all w-full font-bold text-sm uppercase tracking-wider">
              <LogOut size={16} /> Terminate_Session
           </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto relative z-10">
        <header className="h-28 border-b border-gray-200 flex items-center justify-between px-16 bg-gray-50/80 backdrop-blur-2xl sticky top-0 z-40">
           <div className="max-w-xl w-full hidden md:block">
              <div className="relative group">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-charcoal/10 group-focus-within:text-brand-blue transition-colors">
                    <Search size={18} />
                 </div>
                 <input 
                    type="text" 
                    placeholder="Search mission registry..." 
                    className="w-full bg-brand-gray-light border border-gray-200 rounded-full py-5 pl-20 pr-8 text-sm focus:bg-gray-50 focus:border-brand-blue/30 transition-all font-bold placeholder:text-brand-charcoal/10"
                 />
              </div>
           </div>

           <div className="flex items-center gap-8">
              <div className="hidden xl:flex items-center gap-6 px-8 py-4 bg-brand-gray-light border border-gray-200 rounded-2xl">
                 <div className="text-center border-r border-gray-200 pr-8">
                    <p className="text-[8px] font-bold text-brand-charcoal/20 uppercase tracking-widest mb-1">Latency</p>
                    <p className="text-xs font-bold text-brand-charcoal font-medium tracking-tighter">0.02 ms</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[8px] font-bold text-brand-charcoal/20 uppercase tracking-widest mb-1">Live Units</p>
                    <p className="text-xs font-bold text-brand-blue flex items-center gap-3 font-medium tracking-tighter">48 <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" /></p>
                 </div>
              </div>

              <button className="relative text-brand-charcoal/20 hover:text-brand-charcoal transition-colors p-3 bg-brand-gray-light rounded-xl border border-gray-200 shadow-sm">
                 <Bell size={22} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-brand-blue rounded-full"></span>
              </button>

              <div className="flex items-center gap-6 border-l border-gray-200 pl-8 cursor-pointer group">
                 <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-brand-charcoal leading-none group-hover:text-brand-blue transition-colors font-outfit uppercase">Admin_X01</p>
                    <p className="text-[8px] text-brand-charcoal/30 font-bold uppercase tracking-widest mt-1 font-medium">Clearance: L10</p>
                 </div>
                 <div className="w-12 h-12 rounded-2xl bg-brand-gray-light border border-gray-200 flex items-center justify-center text-brand-charcoal/20 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all shadow-sm">
                    <User size={20} />
                 </div>
              </div>
           </div>
        </header>

        <main className="p-8 lg:p-20 space-y-20">
           {/* Section Header */}
           <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue/5 text-brand-blue border-transparent"><Activity size={12} className="mr-2" /> Sector Status: Optimal</Badge>
                 <h1 className="text-5xl md:text-8xl font-bold tracking-tightest leading-[0.85] uppercase font-outfit text-[#1A2332]">{activeTab} <br /><span className="text-brand-blue italic">Console.</span></h1>
              </div>
              <div className="flex gap-4">
                 <Button className="h-14 px-8 bg-gray-50 text-[#1A2332] border-gray-200 rounded-xl text-sm uppercase font-bold tracking-widest hover:bg-white hover:shadow-md hover:shadow-xl transition-all transition-all">Protocol Logs</Button>
                 <Button className="h-14 px-8 bg-brand-blue hover:bg-brand-blue-dark text-[#1A2332] rounded-xl text-sm uppercase font-bold tracking-widest shadow-md hover:shadow-xl transition-all">Execute Sweep <Zap size={16} className="ml-2"/></Button>
              </div>
           </div>

           {/* Stats Bento Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="group p-8 bg-gray-50 border border-gray-100 rounded-[2.5rem] hover:shadow-floating transition-all duration-500 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 text-brand-blue/5 group-hover:text-brand-blue/10 scale-150 transition-all duration-700 pointer-events-none group-hover:rotate-12">
                      {stat.icon}
                   </div>
                   <div className="flex justify-between items-start mb-10 relative z-10">
                      <div className={`w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-[#1A2332] transition-all duration-500`}>
                         {stat.icon}
                      </div>
                      <span className="text-sm font-bold text-[#1A2332]/10 uppercase font-medium tracking-[0.3em]">LOG_0{i+1}</span>
                   </div>
                   <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 font-medium">{stat.label}</p>
                   <p className="text-4xl font-bold text-[#1A2332] tracking-tighter leading-none font-outfit">{stat.value}</p>
                </div>
              ))}
           </div>

           {/* Core Registry Layer */}
           <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 pt-8">
              <div className="xl:col-span-8 bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-floating">
                 <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-brand-gray-bold/20">
                    <h3 className="text-2xl font-bold tracking-tight flex items-center gap-4 font-outfit text-brand-charcoal">
                       <Terminal size={28} className="text-brand-blue" />
                       Signal_Sink registry.
                    </h3>
                    <button className="text-xs font-bold text-brand-blue uppercase tracking-wider flex items-center gap-2 hover:opacity-60 transition-all group">Full Logs <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/></button>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead className="bg-brand-gray-light text-xs font-bold text-brand-charcoal/30 uppercase tracking-wider font-medium border-b border-gray-200">
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
                                   <p className="font-bold text-brand-charcoal uppercase tracking-tight">{msg.name}</p>
                                   <p className="text-sm text-brand-charcoal/30 font-medium mt-1 group-hover:text-brand-blue transition-colors">{msg.email}</p>
                                </td>
                                <td className="px-10 py-8 text-brand-charcoal/40 uppercase text-sm font-bold tracking-widest">{msg.company}</td>
                                <td className="px-10 py-8">
                                   <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] ${msg.status === 'NEW' ? 'bg-brand-blue text-[#1A2332] shadow-sm' : 'bg-brand-gray-light text-brand-charcoal/30 border border-gray-200'}`}>
                                      {msg.status}
                                   </span>
                                </td>
                                <td className="px-10 py-8">
                                   <div className={`w-2.5 h-2.5 rounded-full ${msg.priority === 'HIGH' ? 'bg-red-500 shadow-sm' : 'bg-brand-blue/30 opacity-40'}`} />
                                </td>
                                <td className="px-10 py-8 text-right">
                                   <button className="text-brand-charcoal/20 hover:text-brand-blue p-2 hover:bg-gray-50 rounded-xl transition-all"><MoreVertical size={20} /></button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              {/* Status HUD Sidebar */}
              <div className="xl:col-span-4 bg-white text-[#1A2332] rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden group shadow-floating">
                 <div className="absolute top-0 right-0 p-8 text-brand-blue/5 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000">
                    <Monitor size={400} strokeWidth={0.5} />
                 </div>
                 
                 <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 bg-gray-50/5 border border-gray-200 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm">
                       <Cpu size={28} />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-3xl font-bold tracking-tight font-outfit text-[#1A2332]">HUD_Pulse.</h3>
                       <p className="text-[#1A2332]/20 text-sm font-bold uppercase tracking-[0.3em] leading-relaxed">Infrastructure telemetry.</p>
                    </div>
                 </div>

                 <div className="relative z-10 space-y-8 flex-grow">
                    {[
                      { name: 'Core Gateway', status: 'Optimal', load: 14, icon: <CheckCircle size={14} />, accent: 'bg-brand-blue shadow-lg shadow-blue-500/20' },
                      { name: 'DB Sync Node', status: 'Verifying', load: 42, icon: <Database size={14} />, accent: 'bg-brand-blue shadow-lg shadow-blue-500/20' },
                      { name: 'Security Tunnel', status: 'Active', load: 88, icon: <Shield size={14} />, accent: 'bg-red-500 shadow-sm' },
                    ].map((svc, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                               <span className="text-[#1A2332]/20">{svc.icon}</span>
                               <span className="text-sm font-bold uppercase tracking-[0.2em] font-medium">{svc.name}</span>
                            </div>
                            <span className="text-sm font-bold font-medium text-gray-400">{svc.load}%</span>
                         </div>
                         <div className="h-1 w-full bg-gray-50/5 rounded-full overflow-hidden border border-gray-100">
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

                 <div className="relative z-10 pt-8 border-t border-gray-100 text-center space-y-4">
                    <button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-[#1A2332] py-5 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20">Execute Sweep</button>
                    <p className="text-[8px] font-bold text-[#1A2332]/10 uppercase tracking-wider font-medium">STATUS: VALID_LOG_HUB</p>
                 </div>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
};
