import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  Download,
  Send,
  Paperclip,
  Search,
  User,
  Shield,
} from 'lucide-react';

// ─── Mock Data ────────────────────────────────────────────────
const projects = [
  { id: 'PRJ-001', name: 'E-Commerce Platform Rebuild', status: 'In Progress', progress: 68, due: 'Apr 15 2026', team: 'Dev + Design', priority: 'High' },
  { id: 'PRJ-002', name: 'Security Audit & Pen Testing', status: 'Review', progress: 92, due: 'Mar 30 2026', team: 'Security', priority: 'Critical' },
  { id: 'PRJ-003', name: 'Mobile App - iOS & Android', status: 'Planning', progress: 15, due: 'Jun 1 2026', team: 'Dev + AI', priority: 'Medium' },
  { id: 'PRJ-004', name: 'AI Chatbot Integration', status: 'Completed', progress: 100, due: 'Mar 10 2026', team: 'AI', priority: 'High' },
];

const invoices = [
  { id: 'INV-2026-041', project: 'E-Commerce Platform Rebuild', amount: '$4,800', date: 'Mar 1 2026', due: 'Mar 31 2026', status: 'Pending' },
  { id: 'INV-2026-038', project: 'Security Audit & Pen Testing', amount: '$2,200', date: 'Feb 15 2026', due: 'Mar 15 2026', status: 'Paid' },
  { id: 'INV-2026-031', project: 'AI Chatbot Integration', amount: '$3,500', date: 'Feb 1 2026', due: 'Mar 1 2026', status: 'Paid' },
  { id: 'INV-2026-028', project: 'Mobile App', amount: '$1,200', date: 'Jan 20 2026', due: 'Feb 20 2026', status: 'Overdue' },
];

const messages = [
  { id: 1, from: 'Jonas K.', role: 'Project Lead', avatar: 'JK', msg: 'The security audit report is ready for your review. Please check the latest documents section.', time: '2h ago', unread: true },
  { id: 2, from: 'Sara S.', role: 'AI Research Lead', avatar: 'SS', msg: 'Chatbot integration is live on your staging environment. Let us know your feedback!', time: '1d ago', unread: true },
  { id: 3, from: 'Elias B.', role: 'Infrastructure', avatar: 'EB', msg: 'Server migration completed. Uptime confirmed at 99.9%.', time: '3d ago', unread: false },
];

const documents = [
  { name: 'Security Audit Report - Q1 2026.pdf', size: '2.4 MB', date: 'Mar 18 2026', type: 'pdf' },
  { name: 'AI Chatbot — Final Delivery Docs.zip', size: '8.1 MB', date: 'Mar 10 2026', type: 'zip' },
  { name: 'NDA & Project Agreement.pdf', size: '0.3 MB', date: 'Jan 5 2026', type: 'pdf' },
  { name: 'E-Commerce Wireframes v3.fig', size: '14.2 MB', date: 'Mar 14 2026', type: 'fig' },
];

// ─── Status helpers ───────────────────────────────────────────
const statusColor: Record<string, string> = {
  'In Progress': 'text-blue-400 bg-blue-400/10',
  'Review': 'text-amber-400 bg-amber-400/10',
  'Planning': 'text-purple-400 bg-purple-400/10',
  'Completed': 'text-emerald-400 bg-emerald-400/10',
  'Pending': 'text-amber-400 bg-amber-400/10',
  'Paid': 'text-emerald-400 bg-emerald-400/10',
  'Overdue': 'text-red-400 bg-red-400/10',
};

const priorityColor: Record<string, string> = {
  Critical: 'text-red-400',
  High: 'text-amber-400',
  Medium: 'text-blue-400',
};

const nav = [
  { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={18} /> },
  { id: 'projects', label: 'Projects', icon: <FolderKanban size={18} /> },
  { id: 'invoices', label: 'Invoices', icon: <FileText size={18} /> },
  { id: 'messages', label: 'Messages', icon: <MessageSquare size={18} />, badge: 2 },
  { id: 'documents', label: 'Documents', icon: <Paperclip size={18} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
];

export const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [newMsg, setNewMsg] = useState('');
  const [chatMessages, setChatMessages] = useState(messages);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setChatMessages(prev => [...prev, {
      id: Date.now(), from: 'You', role: 'Client', avatar: 'ME',
      msg: newMsg.trim(), time: 'Just now', unread: false
    }]);
    setNewMsg('');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-jakarta flex">

      {/* ── Sidebar ───────────────────────────────── */}
      <aside className="w-64 shrink-0 bg-[#111111] border-r border-white/5 flex flex-col h-screen sticky top-0">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">NEXYOVI</div>
              <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Client Portal</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-brand-blue text-white'
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                {item.label}
              </div>
              {item.badge && (
                <span className="text-[9px] font-bold bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="px-4 py-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
            <div className="w-8 h-8 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-blue text-xs font-bold">CL</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-white truncate">Client User</div>
              <div className="text-[9px] text-white/30 uppercase tracking-widest">Verified</div>
            </div>
            <button onClick={() => window.location.href = '/portal'} className="text-white/20 hover:text-red-400 transition-colors">
              <LogOut size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main Area ─────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-auto">

        {/* Top Bar */}
        <header className="sticky top-0 z-20 bg-[#0A0A0A]/80 backdrop-blur border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-white capitalize tracking-tight">{activeTab}</h1>
            <p className="text-[10px] text-white/30 uppercase tracking-widest">NEXYOVI · Client Portal</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
              <input type="text" placeholder="Search..." className="bg-white/5 border border-white/5 rounded-xl pl-9 pr-4 py-2 text-xs font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/40 w-48" />
            </div>
            <button className="relative p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <Bell size={16} className="text-white/50" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center">
              <User size={14} className="text-brand-blue" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">
          <AnimatePresence mode="wait">

            {/* ── OVERVIEW ─────────────────────────── */}
            {activeTab === 'overview' && (
              <motion.div key="overview" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Active Projects', val: '3', icon: <FolderKanban size={18} />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                    { label: 'Pending Invoices', val: '$4,800', icon: <FileText size={18} />, color: 'text-amber-400', bg: 'bg-amber-400/10' },
                    { label: 'Messages', val: '2 Unread', icon: <MessageSquare size={18} />, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                    { label: 'Avg. Progress', val: '69%', icon: <TrendingUp size={18} />, color: 'text-purple-400', bg: 'bg-purple-400/10' },
                  ].map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                      className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-white/10 transition-all">
                      <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center ${s.color} mb-4`}>{s.icon}</div>
                      <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Projects */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-white">Recent Projects</h3>
                    <button onClick={() => setActiveTab('projects')} className="text-[10px] font-bold text-brand-blue hover:text-blue-300 uppercase tracking-widest flex items-center gap-1">
                      View All <ChevronRight size={12} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {projects.slice(0, 3).map((p, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex-1 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white">{p.name}</span>
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${statusColor[p.status]}`}>{p.status}</span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-1.5">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${p.progress}%` }} transition={{ duration: 1, delay: i * 0.1 }}
                              className="h-1.5 rounded-full bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8]" />
                          </div>
                          <div className="flex justify-between text-[9px] font-bold text-white/30 uppercase tracking-widest">
                            <span>{p.progress}% complete</span>
                            <span>Due {p.due}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Messages */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-white">Recent Messages</h3>
                    <button onClick={() => setActiveTab('messages')} className="text-[10px] font-bold text-brand-blue hover:text-blue-300 uppercase tracking-widest flex items-center gap-1">
                      View All <ChevronRight size={12} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {messages.slice(0, 2).map((m, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-xl hover:bg-white/5 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-[10px] font-bold text-brand-blue shrink-0">{m.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-xs font-bold text-white">{m.from}</span>
                            <span className="text-[9px] text-white/30">{m.time}</span>
                          </div>
                          <p className="text-xs text-white/50 truncate">{m.msg}</p>
                        </div>
                        {m.unread && <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0 mt-1.5" />}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── PROJECTS ─────────────────────────── */}
            {activeTab === 'projects' && (
              <motion.div key="projects" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                {projects.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-white/10 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{p.id}</span>
                          <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${priorityColor[p.priority]} bg-white/5`}>{p.priority}</span>
                        </div>
                        <h3 className="text-base font-bold text-white">{p.name}</h3>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          <span>Team: {p.team}</span>
                          <span>Due: {p.due}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${statusColor[p.status]} shrink-0`}>{p.status}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest">
                        <span>Progress</span>
                        <span>{p.progress}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${p.progress}%` }} transition={{ duration: 1.2, delay: i * 0.1 }}
                          className={`h-2 rounded-full ${p.progress === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8]'}`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ── INVOICES ─────────────────────────── */}
            {activeTab === 'invoices' && (
              <motion.div key="invoices" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Total Billed', val: '$11,700', icon: <FileText size={16} />, color: 'text-white' },
                    { label: 'Paid', val: '$5,700', icon: <CheckCircle2 size={16} />, color: 'text-emerald-400' },
                    { label: 'Outstanding', val: '$6,000', icon: <AlertCircle size={16} />, color: 'text-amber-400' },
                  ].map((s, i) => (
                    <div key={i} className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl">
                      <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-3 ${s.color} opacity-50`}>{s.icon}{s.label}</div>
                      <div className={`text-2xl font-bold ${s.color}`}>{s.val}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-5 text-[9px] font-bold uppercase tracking-widest text-white/30 px-6 py-3 border-b border-white/5">
                    <span>Invoice</span><span>Project</span><span>Amount</span><span>Due</span><span>Status</span>
                  </div>
                  {invoices.map((inv, i) => (
                    <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                      className="grid grid-cols-5 items-center px-6 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors text-sm">
                      <span className="font-bold text-white/60 text-xs">{inv.id}</span>
                      <span className="font-bold text-white text-xs truncate pr-4">{inv.project}</span>
                      <span className="font-bold text-white">{inv.amount}</span>
                      <span className="text-xs text-white/40 font-bold">{inv.due}</span>
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-bold uppercase px-2.5 py-1 rounded-full ${statusColor[inv.status]}`}>{inv.status}</span>
                        <button className="text-white/20 hover:text-brand-blue transition-colors"><Download size={14} /></button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── MESSAGES ─────────────────────────── */}
            {activeTab === 'messages' && (
              <motion.div key="messages" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="bg-white/[0.03] border border-white/5 rounded-2xl flex flex-col" style={{ height: 'calc(100vh - 180px)' }}>
                <div className="p-4 border-b border-white/5 flex items-center gap-3">
                  <MessageSquare size={16} className="text-brand-blue" />
                  <span className="font-bold text-white text-sm">Project Messages</span>
                  <span className="ml-auto text-[9px] font-bold text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-full">2 Unread</span>
                </div>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {chatMessages.map((m, i) => (
                    <motion.div key={m.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                      className={`flex gap-3 ${m.from === 'You' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${m.from === 'You' ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/10 text-white'}`}>
                        {m.avatar}
                      </div>
                      <div className={`max-w-sm space-y-1 ${m.from === 'You' ? 'items-end' : ''} flex flex-col`}>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-white/30 uppercase tracking-widest">
                          <span>{m.from}</span><span>·</span><span>{m.role}</span><span>·</span><span>{m.time}</span>
                        </div>
                        <div className={`px-4 py-3 rounded-2xl text-sm font-bold leading-snug ${m.from === 'You' ? 'bg-brand-blue text-white rounded-tr-sm' : 'bg-white/5 text-white/80 rounded-tl-sm'}`}>
                          {m.msg}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-4 border-t border-white/5 flex gap-3">
                  <input value={newMsg} onChange={(e) => setNewMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/40 transition-all" />
                  <motion.button onClick={sendMessage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <Send size={16} />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* ── DOCUMENTS ────────────────────────── */}
            {activeTab === 'documents' && (
              <motion.div key="documents" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3">
                {documents.map((doc, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/[0.05] transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-[10px] font-bold text-brand-blue uppercase">
                      {doc.type}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-white truncate">{doc.name}</div>
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-0.5">{doc.size} · {doc.date}</div>
                    </div>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 bg-white/5 group-hover:bg-brand-blue/20 rounded-xl flex items-center justify-center text-white/30 group-hover:text-brand-blue transition-all">
                      <Download size={15} />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ── SETTINGS ─────────────────────────── */}
            {activeTab === 'settings' && (
              <motion.div key="settings" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6 max-w-lg">
                <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-5">
                  <h3 className="font-bold text-white">Account Details</h3>
                  {[
                    { label: 'Full Name', val: 'Client User', type: 'text' },
                    { label: 'Email Address', val: 'client@example.com', type: 'email' },
                    { label: 'Company', val: 'Your Company Ltd.', type: 'text' },
                  ].map((field, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{field.label}</label>
                      <input type={field.type} defaultValue={field.val}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-brand-blue/50 transition-all" />
                    </div>
                  ))}
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full h-11 bg-gradient-to-r from-[#1B4F8A] to-[#00B4D8] text-white rounded-xl text-sm font-bold uppercase tracking-widest">
                    Save Changes
                  </motion.button>
                </div>
                <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-4">
                  <h3 className="font-bold text-white">Security</h3>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">New Password</label>
                    <input type="password" placeholder="••••••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-all" />
                  </div>
                  <button className="text-xs font-bold text-red-400/60 hover:text-red-400 uppercase tracking-widest transition-colors">
                    Deactivate Account
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};
