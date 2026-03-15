import { useState } from 'react';
import { 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Settings, 
  Users, 
  Box, 
  LogOut, 
  Search, 
  Bell, 
  MoreVertical,
  CheckCircle,
  Clock
} from 'lucide-react';
import { GlassCard, Button } from '../components/ui/Core';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { label: 'Total Messages', value: '124', icon: <MessageSquare size={20} />, color: 'text-nexyovi-primary' },
    { label: 'Active Projects', value: '12', icon: <Box size={20} />, color: 'text-nexyovi-secondary' },
    { label: 'Blog Posts', value: '45', icon: <FileText size={20} />, color: 'text-nexyovi-accent' },
    { label: 'Portal Users', value: '89', icon: <Users size={20} />, color: 'text-blue-400' },
  ];

  const recentMessages = [
    { name: 'Alice Cooper', company: 'Global Health', email: 'alice@gh.org', date: '2 hours ago', status: 'new' },
    { name: 'Bob Smith', company: 'Nexus Fin', email: 'bob@nexus.fin', date: '5 hours ago', status: 'read' },
    { name: 'Charlie Day', company: 'Dayman Inc', email: 'charlie@day.com', date: 'Yesterday', status: 'replied' },
  ];

  return (
    <div className="min-h-screen bg-nexyovi-darker flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 bg-nexyovi-dark p-6 flex flex-col hidden md:flex">
        <Link to="/" className="flex items-center space-x-2 mb-12">
            <div className="w-8 h-8 bg-gradient-to-br from-nexyovi-primary to-nexyovi-secondary rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold gradient-text tracking-wider">ADMIN</span>
        </Link>

        <nav className="space-y-2 flex-grow">
          {[
            { name: 'Overview', icon: <BarChart3 size={18} /> },
            { name: 'Messages', icon: <MessageSquare size={18} /> },
            { name: 'Blog', icon: <FileText size={18} /> },
            { name: 'Products', icon: <Box size={18} /> },
            { name: 'Settings', icon: <Settings size={18} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.name 
                ? 'bg-nexyovi-primary text-nexyovi-dark font-bold' 
                : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-400 mt-auto transition-colors">
          <LogOut size={18} />
          <span className="text-sm font-bold">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-nexyovi-dark/50 backdrop-blur-md sticky top-0 z-20">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Search data..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-4 text-sm focus:outline-none focus:border-nexyovi-primary text-white"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-white">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-nexyovi-accent rounded-full border-2 border-nexyovi-dark"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-white leading-none">Admin User</p>
                <p className="text-[10px] text-nexyovi-primary font-bold uppercase tracking-widest mt-1">Superuser</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nexyovi-primary to-nexyovi-secondary"></div>
            </div>
          </div>
        </header>

        {/* Console / Dashboard */}
        <main className="p-8">
           <div className="mb-10">
              <h1 className="text-3xl font-bold text-white mb-2">{activeTab} Console</h1>
              <p className="text-gray-500 text-sm">Real-time infrastructure management and telemetry.</p>
           </div>

           {/* Stats Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, i) => (
                <GlassCard key={i} className="p-6 border-opacity-5">
                   <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 bg-white/5 rounded-lg ${stat.color}`}>
                         {stat.icon}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full">+12%</span>
                   </div>
                   <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                   <p className="text-3xl font-bold text-white">{stat.value}</p>
                </GlassCard>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <GlassCard className="lg:col-span-2 p-0 overflow-hidden">
                 <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white">Recent Contact Signals</h3>
                    <Button variant="ghost" size="sm" className="text-xs text-nexyovi-primary">View All</Button>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead className="bg-white/5 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
                          <tr>
                             <th className="px-6 py-4">Sender</th>
                             <th className="px-6 py-4">Company</th>
                             <th className="px-6 py-4">Date</th>
                             <th className="px-6 py-4">Status</th>
                             <th className="px-6 py-4"></th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5">
                          {recentMessages.map((msg, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                               <td className="px-6 py-4">
                                  <p className="text-sm font-bold text-white">{msg.name}</p>
                                  <p className="text-xs text-gray-500">{msg.email}</p>
                               </td>
                               <td className="px-6 py-4 text-sm text-gray-300">{msg.company}</td>
                               <td className="px-6 py-4 text-xs text-gray-500">{msg.date}</td>
                               <td className="px-6 py-4">
                                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                                    msg.status === 'new' ? 'bg-blue-400/10 text-blue-400' : 
                                    msg.status === 'read' ? 'bg-purple-400/10 text-purple-400' : 'bg-emerald-400/10 text-emerald-400'
                                  }`}>
                                     {msg.status}
                                  </span>
                               </td>
                               <td className="px-6 py-4 text-right">
                                  <button className="text-gray-500 hover:text-white"><MoreVertical size={16} /></button>
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </GlassCard>

              {/* Infrastructure Status */}
              <GlassCard className="p-6">
                 <h3 className="text-lg font-bold text-white mb-6">Service Telemetry</h3>
                 <div className="space-y-6">
                    {[
                      { name: 'Core API', status: 'Optimal', icon: <CheckCircle className="text-emerald-400" />, load: '14%' },
                      { name: 'DB Cluster', status: 'Synced', icon: <CheckCircle className="text-emerald-400" />, load: '22%' },
                      { name: 'Auth Node', status: 'Healthy', icon: <CheckCircle className="text-emerald-400" />, load: '8%' },
                      { name: 'Backup Rnd', status: 'Processing', icon: <Clock className="text-yellow-400" />, load: '98%' },
                    ].map((svc, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                          {svc.icon}
                          <div>
                            <p className="text-sm font-bold text-white">{svc.name}</p>
                            <p className="text-[10px] text-gray-500 uppercase font-bold">{svc.status}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Load</p>
                          <p className={`text-sm font-bold ${i === 3 ? 'text-yellow-400' : 'text-gray-300'}`}>{svc.load}</p>
                        </div>
                      </div>
                    ))}
                 </div>
                 <Button className="w-full mt-8" variant="outline">Run Diagnostics</Button>
              </GlassCard>
           </div>
        </main>
      </div>
    </div>
  );
};
