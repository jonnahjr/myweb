import { motion } from 'framer-motion';
import { User, Clock, ArrowRight, Search } from 'lucide-react';
import { GlassCard, Button } from '../components/ui/Core';

const blogPosts = [
  {
    title: "The Future of AI in Enterprise Infrastructure",
    excerpt: "How generative models are transforming the way we think about scalable business systems and automation.",
    category: "AI & ML",
    author: "Elena Vance",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Transitioning to Web3: A Guide for CTOs",
    excerpt: "Demystifying decentralization and identifying where blockchain technology adds real value to the corporate stack.",
    category: "Blockchain",
    author: "Marcus Thorne",
    date: "March 05, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Optimizing Kubernetes for Healthcare Compliance",
    excerpt: "Deep dive into secure container orchestration for HIPAA and GDPR regulated environments.",
    category: "Cloud",
    author: "Sarah Jenkins",
    date: "Feb 28, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800"
  }
];

export const Blog = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter uppercase">Engineering <span className="gradient-text">Insights</span></h1>
            <p className="text-slate-500 text-lg font-medium">
              Explore the latest thinking on software architecture, AI integration, 
              and digital transformation from the NEXYOVI R&D team in Miami and Addis Ababa.
            </p>
          </div>
          
          <div className="w-full md:w-96">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/60 border border-black/5 rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:border-nexyovi-primary transition-all text-sm text-slate-900 placeholder:text-slate-400 backdrop-blur-md"
              />
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <GlassCard className="p-0 overflow-hidden flex flex-col lg:flex-row border-black/5 shadow-2xl shadow-black/5">
            <div className="lg:w-1/2 aspect-video lg:aspect-auto">
               <img 
                 src="https://images.unsplash.com/photo-1451187530220-41a5f1395067?auto=format&fit=crop&q=80&w=1200" 
                 alt="Featured post" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
               <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-nexyovi-primary/10 text-nexyovi-primary rounded-full text-[10px] font-black uppercase tracking-widest">Featured Insight</span>
                  <span className="text-slate-400 text-xs flex items-center gap-1 font-bold uppercase"><Clock size={12} /> 10 min read</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 hover:text-nexyovi-primary transition-colors cursor-pointer tracking-tighter uppercase">
                  Architecting Zero-Trust Systems for Modern Global Enterprises
               </h2>
               <p className="text-slate-500 mb-10 leading-relaxed text-lg font-medium">
                  As the perimeter disappears, how should CTOs evaluate their internal 
                  security posture? We explore the implementation of identity-aware 
                  proxies and micro-segmentation at scale.
               </p>
               <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-50 border border-black/5 flex items-center justify-center">
                        <User size={20} className="text-slate-300" />
                     </div>
                     <div>
                        <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">David Chen</p>
                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Security Principal</p>
                     </div>
                  </div>
                  <Button variant="ghost" className="text-nexyovi-primary group p-0 font-black uppercase tracking-widest text-[10px]">
                     Read Article <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Button>
               </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Categories */}
         <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
            {["All Posts", "AI & Machine Learning", "Cloud Infrastructure", "Cybersecurity", "Fintech", "Health-Tech"].map((cat) => (
              <button key={cat} className="whitespace-nowrap px-6 py-2 rounded-full border border-black/5 bg-white/40 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-nexyovi-primary hover:border-nexyovi-primary/40 transition-all backdrop-blur-md">
                 {cat}
              </button>
            ))}
         </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <GlassCard key={i} className="p-0 overflow-hidden group flex flex-col h-full border-black/5 shadow-xl shadow-black/5">
                 <div className="aspect-video overflow-hidden">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={post.title} />
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                       <span className="text-nexyovi-secondary text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                       <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-nexyovi-secondary transition-colors line-clamp-2 tracking-tighter uppercase">
                       {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                       {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                       <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                          <User size={14} className="text-slate-300" />
                       </div>
                       <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{post.author}</p>
                    </div>
                 </div>
              </GlassCard>
            ))}
        </div>
      </div>
    </div>
  );
};
