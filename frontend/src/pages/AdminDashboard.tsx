import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  LogOut, 
  Search, 
  Bell, 
  MoreVertical,
  Terminal,
  Database,
  ShieldAlert,
  Activity,
  Cpu,
  User,
  Zap,
  ChevronRight,
  Command,
  Rocket,
  ShieldCheck,
  Server,
  Network,
  LayoutDashboard,
  HardDrive
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Core';

const StatusNode = ({ label, value, icon, color }: { label: string, value: string, icon: any, color: string }) => (
  <motion.div 
    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
    className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl group transition-all duration-500 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 text-white/[0.02] group-hover:text-white/[0.05] transition-all duration-700 pointer-events-none scale-150 rotate-12">
      {icon}
    </div>
    <div className="flex items-center justify-between mb-8">
       <div className={`w-12 h-12 rounded-2xl bg-${color}/10 border border-${color}/20 flex items-center justify-center text-${color} shadow-glow-${color} transition-all duration-500 group-hover:bg-${color} group-hover:text-white`}>
          {icon}
       </div>
       <div className="flex items-center gap-1 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
          <div className={`w-1.5 h-1.5 rounded-full bg-${color} animate-pulse`} />
          <span className="text-[9px] font-black text-white/40 uppercase tracking-widest font-mono">LIVE_SYNC</span>
       </div>
    </div>
    <div className="space-y-1">
       <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">{label}</p>
       <p className="text-3xl font-black text-white tracking-tightest leading-none font-jakarta">{value}</p>
    </div>
    {/* Scanline Effect */}
    <motion.div 
       animate={{ top: ["-100%", "200%"] }}
       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
       className="absolute left-0 w-full h-[1px] bg-white/5 z-0 pointer-events-none"
    />
  </motion.div>
);

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20} /> },
    { name: 'Mission_Logs', icon: <MessageSquare size={20} /> },
    { name: 'Core_Logic', icon: <Cpu size={20} /> },
    { name: 'Grid_Security', icon: <ShieldCheck size={20} /> },
    { name: 'Account_Settings', icon: <User size={20} /> },
    { name: 'Cloud_Nodes', icon: <Server size={20} /> },
    { name: 'Registry', icon: <Database size={20} /> },
  ];

  const missions = [
    { id: 'MS-801', title: 'National Identity Sync', node: 'Addis_Cluster', status: 'SYNCHRONIZING', load: 88, priority: 'HIGH' },
    { id: 'MS-802', title: 'AI Reasoning Matrix', node: 'Global_Relay', status: 'OPTIMAL', load: 14, priority: 'MEDIUM' },
    { id: 'MS-803', title: 'Security Perimeter V4', node: 'Sovereign_Shield', status: 'DEPLOING', load: 45, priority: 'URGENT' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Account_Settings':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
            <div className="xl:col-span-8 space-y-10">
               <div className="bg-[#0D1117]/80 border border-white/5 rounded-[3rem] p-12 backdrop-blur-2xl">
                  <h3 className="text-3xl font-black tracking-tightest uppercase mb-12">Liaison_Identity.</h3>
                  
                  <div className="space-y-12">
                     {/* Picture Change */}
                     <div className="flex flex-col md:flex-row items-center gap-10 pb-10 border-b border-white/5">
                        <div className="relative group">
                           <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-brand-blue to-brand-purple p-[1px]">
                              <div className="w-full h-full bg-[#0A0D12] rounded-[inherit] flex items-center justify-center">
                                 <User size={48} className="text-white/20" />
                              </div>
                           </div>
                           <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-brand-blue text-white rounded-xl flex items-center justify-center border-4 border-[#0A0D12] hover:scale-110 transition-transform shadow-glow-blue">
                              <Zap size={16} />
                           </button>
                        </div>
                        <div className="space-y-3 text-center md:text-left">
                           <p className="text-lg font-black tracking-tightest uppercase">Protocol_Avatar</p>
                           <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono leading-relaxed max-w-[300px]">Update your holographic identity node for global synchronization registry.</p>
                           <button className="text-[9px] font-black text-brand-blue uppercase tracking-widest pt-2 hover:opacity-100 opacity-60 transition-opacity">CHG_AVATAR_STREAM</button>
                        </div>
                     </div>

                     {/* Profile Form */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono pl-2">Full_Liaison_Name</label>
                           <input type="text" defaultValue="Admin_X01" className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-5 px-8 text-sm font-bold focus:outline-none focus:border-brand-blue/30 transition-all text-white/90" />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono pl-2">Registry_Email</label>
                           <input type="email" defaultValue="admin@nexyovi.tech" className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-5 px-8 text-sm font-bold focus:outline-none focus:border-brand-blue/30 transition-all text-white/90" />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono pl-2">Unit_Organization</label>
                           <input type="text" defaultValue="NEXYOVI_CORE" className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-5 px-8 text-sm font-bold focus:outline-none focus:border-brand-blue/30 transition-all text-white/90" />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono pl-2">Sync_Frequency</label>
                           <select className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-5 px-8 text-sm font-bold focus:outline-none focus:border-brand-blue/30 transition-all text-white/90 appearance-none">
                              <option>Real-Time_Pulse</option>
                              <option>Hourly_Burst</option>
                              <option>Daily_Batch</option>
                           </select>
                        </div>
                     </div>

                     <div className="pt-6">
                        <button className="h-16 px-12 bg-brand-blue text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.5em] shadow-glow-blue hover:scale-105 transition-all">Update_Identity</button>
                     </div>
                  </div>
               </div>

               {/* Integrations Section */}
               <div className="bg-[#0D1117]/80 border border-white/5 rounded-[3rem] p-12 backdrop-blur-2xl">
                  <h3 className="text-3xl font-black tracking-tightest uppercase mb-12">Quantum_Integrations.</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                        { name: 'GitHub_Relay', status: 'SYNCHRONIZED', icon: <Database size={20} /> },
                        { name: 'Slack_Node', status: 'IDLE', icon: <MessageSquare size={20} /> },
                        { name: 'Discord_Stream', status: 'SYNCHRONIZED', icon: <Activity size={20} /> },
                     ].map((int, i) => (
                        <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-brand-blue/30 transition-all group">
                           <div className="flex items-center gap-6">
                              <div className="w-12 h-12 bg-white/[0.03] rounded-xl flex items-center justify-center text-white/40 group-hover:text-brand-blue transition-colors">
                                 {int.icon}
                              </div>
                              <div>
                                 <p className="text-[11px] font-black text-white uppercase tracking-widest">{int.name}</p>
                                 <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] font-mono mt-1">{int.status}</p>
                              </div>
                           </div>
                           <button className={`text-[9px] font-black uppercase tracking-widest ${int.status === 'SYNCHRONIZED' ? 'text-red-500/50 hover:text-red-500' : 'text-brand-blue'}`}>
                              {int.status === 'SYNCHRONIZED' ? 'DISCONNECT' : 'SYNCHRONIZE'}
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="xl:col-span-4 space-y-10">
               <div className="bg-[#0D1117]/80 border border-white/5 rounded-[3rem] p-12 backdrop-blur-2xl space-y-10">
                  <h3 className="text-2xl font-black tracking-tightest uppercase mb-6">Security_Handshake.</h3>
                  
                  <div className="space-y-8">
                     <div className="space-y-4">
                        <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono pl-2">Current_Protocol_Key</p>
                        <input type="password" value="********" readOnly className="w-full bg-white/[0.01] border border-white/5 rounded-xl py-4 px-6 text-sm font-mono text-white/20" />
                     </div>
                     <button className="w-full py-5 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] font-black text-brand-blue uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all">Change_Access_Key</button>
                     
                     <div className="pt-6 border-t border-white/5 space-y-6">
                        <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">Advanced_Auth</p>
                        <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                           <span className="text-[11px] font-black text-white uppercase tracking-widest">2FA_Bio_Sync</span>
                           <div className="w-10 h-5 bg-brand-blue/20 flex items-center px-1 rounded-full relative cursor-pointer">
                              <div className="w-3 h-3 bg-brand-blue rounded-full absolute right-1 shadow-glow-blue" />
                           </div>
                        </div>
                        <p className="text-[9px] text-white/20 font-mono leading-relaxed">Multi-factor grid verification enabled via sovereign data node cluster.</p>
                     </div>
                  </div>
               </div>

               {/* Notifications Settings */}
               <div className="bg-[#0D1117]/80 border border-white/5 rounded-[3rem] p-12 backdrop-blur-2xl space-y-10">
                  <h3 className="text-2xl font-black tracking-tightest uppercase mb-6">Alert_Routing.</h3>
                  <div className="space-y-6">
                     {[
                        { label: 'Critical_Failures', color: 'red-500' },
                        { label: 'Mission_Sync', color: 'brand-blue' },
                        { label: 'Cloud_Status', color: 'emerald-500' },
                     ].map((alert, i) => (
                        <div key={i} className="flex items-center justify-between">
                           <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] font-mono">{alert.label}</span>
                           <div className="w-12 h-6 bg-white/[0.03] border border-white/5 rounded-full relative cursor-pointer hover:bg-white/[0.06]">
                              <div className={`w-4 h-4 bg-${alert.color} rounded-full absolute top-1 right-1 shadow-glow-${alert.color === 'brand-blue' ? 'blue' : alert.color}`} />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        );
      default:
        return (
          <>
             {/* Metrics Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                  { label: 'Signal_Inbound', value: '1,240', icon: <MessageSquare size={24} />, color: 'brand-blue' },
                  { label: 'Active_Mission', value: '17', icon: <Rocket size={24} />, color: 'brand-blue' },
                  { label: 'R&D_Output', value: '84', icon: <FileText size={24} />, color: 'emerald-500' },
                  { label: 'Cloud_Capacity', value: '92%', icon: <HardDrive size={24} />, color: 'brand-blue' },
                ].map((stat, i) => (
                  <StatusNode key={i} {...stat} color={stat.color} />
                ))}
             </div>

             {/* Core HUD Layer */}
             <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                
                {/* Mission Table Registry */}
                <div className="xl:col-span-8 group">
                   <div className="bg-[#0D1117]/80 border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-2xl shadow-premium relative group-hover:border-white/10 transition-colors">
                      <div className="p-10 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                         <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl flex items-center justify-center text-brand-blue shadow-glow-blue">
                               <Terminal size={28} />
                            </div>
                            <div className="space-y-1">
                               <h3 className="text-3xl font-black tracking-tight uppercase">Mission_Logs</h3>
                               <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">SECURE_SYNC_STREAM_X01</p>
                            </div>
                         </div>
                         <button className="text-[10px] font-black text-brand-blue uppercase tracking-widest hover:opacity-60 transition-all flex items-center gap-3">
                            Full Logs <ChevronRight size={16} />
                         </button>
                      </div>

                      <div className="overflow-x-auto">
                         <table className="w-full text-left">
                            <thead className="bg-white/[0.02] text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono border-b border-white/5">
                               <tr>
                                  <th className="px-10 py-8">MISSION_ID</th>
                                  <th className="px-10 py-8">TITLE / NODE_CLUSTER</th>
                                  <th className="px-10 py-8">LOAD</th>
                                  <th className="px-10 py-8">PRIORITY</th>
                                  <th className="px-10 py-8 text-right">ACTION</th>
                               </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.03]">
                               {missions.map((m, idx) => (
                                  <tr key={idx} className="hover:bg-white/[0.02] transition-all group/row cursor-default">
                                     <td className="px-10 py-10">
                                        <span className="text-[11px] font-black font-mono text-brand-blue bg-brand-blue/10 px-4 py-2 rounded-lg border border-brand-blue/20 tracking-widest">
                                           {m.id}
                                        </span>
                                     </td>
                                     <td className="px-10 py-10">
                                        <p className="text-base font-black text-white uppercase tracking-tight group-hover/row:text-brand-blue transition-colors">
                                           {m.title}
                                        </p>
                                        <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] font-mono mt-2">
                                           REGION: {m.node}
                                        </p>
                                     </td>
                                     <td className="px-10 py-10">
                                        <div className="flex items-center gap-4">
                                           <div className="flex-grow h-[3px] w-24 bg-white/5 rounded-full overflow-hidden">
                                              <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${m.load}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1 }}
                                                className="h-full bg-brand-blue shadow-glow-blue" 
                                              />
                                           </div>
                                           <span className="text-[11px] font-black font-mono text-white/40">{m.load}%</span>
                                        </div>
                                     </td>
                                     <td className="px-10 py-10">
                                        <div className={`flex items-center gap-3 px-4 py-1.5 rounded-full border ${m.priority === 'URGENT' ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue'} w-fit`}>
                                           <div className={`w-1.5 h-1.5 rounded-full ${m.priority === 'URGENT' ? 'bg-red-500 animate-ping' : 'bg-brand-blue'} `} />
                                           <span className="text-[9px] font-black uppercase tracking-widest font-mono">{m.priority}</span>
                                        </div>
                                     </td>
                                     <td className="px-10 py-10 text-right">
                                        <button className="w-12 h-12 rounded-xl bg-white/[0.03] text-white/20 hover:text-white hover:bg-white/[0.05] transition-all flex items-center justify-center border border-white/5">
                                           <MoreVertical size={20} />
                                        </button>
                                     </td>
                                  </tr>
                               ))}
                            </tbody>
                         </table>
                      </div>
                   </div>
                </div>

                {/* Real-time Telemetry Shield */}
                <div className="xl:col-span-4 space-y-10">
                   <div className="bg-[#0D1117]/80 border border-white/5 rounded-[3rem] p-12 backdrop-blur-2xl relative overflow-hidden group shadow-premium">
                      {/* Pulsing Radar Ring */}
                      <motion.div 
                         animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.05, 0.02] }}
                         transition={{ duration: 4, repeat: Infinity }}
                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square border-2 border-brand-blue rounded-full pointer-events-none" 
                      />
                      
                      <div className="relative z-10 space-y-12">
                         <div className="flex items-center justify-between">
                            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                               <ShieldCheck size={32} />
                            </div>
                            <div className="text-right">
                               <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] font-mono mb-1">Grid_Uptime</p>
                               <p className="text-2xl font-black text-white tracking-widest font-mono">99.9%</p>
                            </div>
                         </div>

                         <div className="space-y-10">
                            <h3 className="text-4xl font-black tracking-tightest leading-none uppercase">Grid_Vitals.</h3>
                            <div className="space-y-8">
                               {[
                                 { label: 'Security Firewall', val: 'ENABLED', status: 'optimal', icon: <ShieldAlert size={14} /> },
                                 { label: 'Cloud Distribution', val: 'BALANCED', status: 'optimal', icon: <Network size={14} /> },
                                 { label: 'Neural Process', val: 'LIVE_REASONING', status: 'optimal', icon: <Cpu size={14} /> }
                               ].map((item, i) => (
                                  <div key={i} className="flex flex-col gap-3 group/item">
                                     <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                           <span className="text-brand-blue group-hover/item:scale-110 transition-transform">{item.icon}</span>
                                           <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] font-mono">{item.label}</span>
                                        </div>
                                        <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest font-mono">{item.val}</span>
                                     </div>
                                     <div className="h-[2px] w-full bg-white/[0.03] rounded-full overflow-hidden">
                                        <motion.div 
                                          initial={{ width: 0 }}
                                          animate={{ width: "100%" }}
                                          transition={{ duration: 2, delay: i * 0.2 }}
                                          className="h-full bg-emerald-500/30" 
                                        />
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </div>

                         <button className="w-full py-6 bg-brand-blue text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.5em] shadow-glow-blue hover:scale-105 transition-all group/btn">
                            Execute Grid Sweep <Zap size={16} className="inline ml-2 group-hover:animate-pulse" />
                         </button>
                      </div>
                   </div>

                   {/* System Alert Node */}
                   <div className="bg-gradient-to-br from-brand-blue to-brand-purple p-[1px] rounded-[3rem] shadow-premium group">
                      <div className="bg-[#0D1117] h-full rounded-[inherit] p-10 flex items-center justify-between overflow-hidden relative">
                         <div className="relative z-10 space-y-2">
                            <p className="text-[9px] font-black text-brand-blue uppercase tracking-widest font-mono">Command_Protocol</p>
                            <h4 className="text-2xl font-black text-white uppercase tracking-tight">Access_Portal.</h4>
                         </div>
                         <button className="relative z-10 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                            <ChevronRight size={32} />
                         </button>
                         {/* Background Glimmer */}
                         <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl rounded-full" />
                      </div>
                   </div>
                </div>
             </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0D12] text-white font-jakarta flex selection:bg-brand-blue/30 overflow-hidden">
      
      {/* Background Cinematic Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
         <div className="absolute inset-0 tech-grid-blue opacity-20" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-brand-blue/10 blur-[180px] rounded-full animate-pulse-slow" />
         <div className="scanline opacity-10" />
      </div>

      {/* --- COMMAND SIDEBAR --- */}
      <aside className="w-80 border-r border-white/5 bg-[#0D1117]/80 backdrop-blur-3xl hidden lg:flex flex-col sticky top-0 h-screen z-50 overflow-hidden group/sidebar">
        
        {/* Holographic Header */}
        <div className="p-10 pb-16">
           <Link to="/" className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-brand-blue/10 border border-brand-blue/20 rounded-[1.25rem] flex items-center justify-center text-brand-blue shadow-glow-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-700">
                 <Command size={28} className="group-hover:rotate-180 transition-transform duration-1000" />
              </div>
              <div className="space-y-1">
                 <h2 className="text-2xl font-black tracking-tightest leading-none group-hover:text-brand-blue transition-colors">NEXYOVI</h2>
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-white/5 text-[8px] font-black uppercase tracking-[0.4em] py-1 px-3">CMD_CORE_v10</Badge>
              </div>
           </Link>
        </div>

        {/* Navigation Registry */}
        <nav className="flex-grow px-6 space-y-3">
           <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em] mb-10 pl-4 font-mono">Mission_Protocols</p>
           {navItems.map((item) => (
             <button
               key={item.name}
               onClick={() => setActiveTab(item.name)}
               className={`w-full flex items-center gap-6 px-6 py-4.5 rounded-[1.5rem] transition-all duration-500 relative group/btn overflow-hidden ${
                 activeTab === item.name 
                 ? 'bg-brand-blue text-white shadow-glow-blue border border-white/10' 
                 : 'text-white/30 hover:text-white hover:bg-white/[0.02]'
               }`}
             >
               <span className={`${activeTab === item.name ? 'text-white' : 'text-brand-blue'} transition-colors relative z-10`}>{item.icon}</span>
               <span className="text-[11px] font-black uppercase tracking-[0.3em] font-mono relative z-10">{item.name}</span>
               
               {activeTab === item.name && (
                 <motion.div layoutId="nav-bg" className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-[length:200%_100%] animate-shimmer opacity-100 z-0" />
               )}
             </button>
           ))}
        </nav>

        {/* System Vitals Foot */}
        <div className="p-8 mt-auto border-t border-white/5 bg-black/20 space-y-8">
           <div className="space-y-4">
              <div className="flex items-center justify-between">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">Sync_Stability</span>
                 <span className="text-[10px] font-black text-emerald-500 font-mono">99.99%</span>
              </div>
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="w-1/2 h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" 
                 />
              </div>
           </div>
           
           <button className="w-full flex items-center justify-center gap-4 py-5 bg-white/[0.03] border border-white/5 rounded-[1.5rem] text-[10px] font-black text-white/30 hover:text-red-500 hover:border-red-500/30 transition-all uppercase tracking-widest group">
              <LogOut size={16} className="group-hover:-translate-x-2 transition-transform" /> TERMINATE_HANDSHAKE
           </button>
        </div>
      </aside>

      {/* --- OPERATIONS STAGE --- */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto relative z-10">
        
        {/* HUD HEADER */}
        <header className="h-28 border-b border-white/5 flex items-center justify-between px-16 bg-[#0A0D12]/60 backdrop-blur-3xl sticky top-0 z-40">
           <div className="max-w-xl w-full hidden md:block">
              <div className="relative group/search">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/search:text-brand-blue transition-colors">
                    <Search size={22} strokeWidth={3} />
                 </div>
                 <input 
                    type="text" 
                    placeholder="Search mission registry..." 
                    className="w-full bg-white/[0.02] border border-white/5 rounded-[1.25rem] py-5 pl-20 pr-8 text-sm focus:bg-white/[0.04] focus:border-brand-blue/30 focus:outline-none transition-all font-bold placeholder:text-white/10 uppercase tracking-widest"
                 />
              </div>
           </div>

           <div className="flex items-center gap-10">
              {/* Telemetry Hub */}
              <div className="hidden xl:flex items-center gap-10 px-10 py-4.5 bg-white/[0.02] border border-white/5 rounded-[1.5rem]">
                 <div className="text-center border-r border-white/5 pr-10">
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-1 font-mono">Pulse_Rate</p>
                    <p className="text-sm font-black text-white tracking-widest font-mono">0.02ms</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-1 font-mono">Active_Nodes</p>
                    <div className="flex items-center justify-center gap-3">
                       <p className="text-sm font-black text-brand-blue tracking-widest font-mono">48</p>
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse shadow-glow-blue" />
                    </div>
                 </div>
              </div>

              <div className="flex items-center gap-6">
                 <button className="relative w-14 h-14 flex items-center justify-center bg-white/[0.03] border border-white/5 rounded-2xl text-white/20 hover:text-brand-blue hover:border-brand-blue/30 transition-all group">
                    <Bell size={24} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-brand-blue rounded-full shadow-glow-blue animate-ping" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-brand-blue rounded-full shadow-glow-blue" />
                 </button>

                 <div className="flex items-center gap-6 pl-8 border-l border-white/5 group cursor-pointer" onClick={() => setActiveTab('Account_Settings')}>
                    <div className="text-right hidden sm:block">
                       <p className="text-sm font-black text-white group-hover:text-brand-blue transition-colors uppercase tracking-tightest">Admin_X01</p>
                       <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] font-mono mt-1">LVL_10_CLEARANCE</p>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple p-[1px] group-hover:p-1 transition-all duration-700">
                       <div className="w-full h-full bg-[#0A0D12] rounded-[inherit] flex items-center justify-center text-white">
                          <User size={24} />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </header>

        {/* MAIN OPERATIONS DECK */}
        <main className="p-8 lg:p-20 space-y-24">
           
           {/* Scene Header */}
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16">
              <div className="space-y-10 group">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-white/5 tracking-[0.5em] font-black uppercase text-[10px] px-8 py-3 rounded-full flex items-center w-fit backdrop-blur-md">
                    <Activity size={14} className="mr-3 animate-pulse" /> SYSTEM_DECK_STATUS: OPTIMAL
                 </Badge>
                 <motion.h1 
                   initial={{ opacity: 0, x: -50 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="text-[6rem] md:text-[10rem] font-black tracking-tightest leading-[0.8] uppercase font-jakarta text-white"
                 >
                    {activeTab.replace('_', ' ')} <br />
                    <span className="text-brand-blue italic drop-shadow-blue">Console.</span>
                 </motion.h1>
              </div>
              <div className="flex gap-6 pb-6">
                 <button className="h-20 px-12 bg-white/[0.03] border border-white/10 text-white/50 rounded-3xl text-xs font-black uppercase tracking-[0.3em] hover:bg-white/[0.05] hover:text-white transition-all overflow-hidden group/btn relative">
                    <span className="relative z-10 flex items-center gap-4">Mission Registry <ChevronRight size={18} /></span>
                    <motion.div className="absolute inset-0 bg-white/5 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700" />
                 </button>
                 <button className="h-20 px-12 bg-brand-blue text-white rounded-3xl text-xs font-black uppercase tracking-[0.3em] shadow-glow-blue hover:scale-105 transition-all flex items-center gap-4 group/btn">
                    Protocol Handoff <Zap size={18} className="group-hover:animate-pulse" />
                 </button>
              </div>
           </div>

           {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
