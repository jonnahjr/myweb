import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { GlassCard } from '../components/ui/Core';

const projectCategories = ["All", "Healthcare", "Fintech", "E-commerce", "Enterprise"];

const projectList = [
  {
    title: "Global Health Portal",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Python", "AWS"],
    description: "A secure, multi-country health monitoring system for NGOs tracking medical supplies."
  },
  {
    title: "Nexus Pay",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&q=80&w=800",
    tech: ["Node.js", "Docker", "Stripe"],
    description: "Cloud-native payment gateway supporting high-concurrency transactions for African markets."
  },
  {
    title: "MedSync LIS",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1579154273821-0a55e6cba07c?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "PostgreSQL", "MQTT"],
    description: "Real-time laboratory information system with direct medical instrument integration."
  },
  {
    title: "ShopFlow ERP",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    tech: ["Odoo", "Shopify API", "Redis"],
    description: "Integrated inventory and order management system for luxury retail chains."
  },
  {
    title: "SteelManage EBS",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=800",
    tech: ["Express", "MongoDB", "Redux"],
    description: "Resource planning and production tracking system for heavy manufacturing plants."
  },
  {
    title: "ArchiBuild",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800",
    tech: ["Three.js", "Firebase", "WebRTC"],
    description: "3D architectural visualization and collaboration platform for remote engineering teams."
  }
];

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projectList 
    : projectList.filter(p => p.category === activeTab);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter uppercase">Built to <span className="gradient-text">Impact</span></h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Explore our track record of high-performance software systems delivered to 
            clients across 5 continents, engineered from our hubs in Miami and Addis Ababa.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${
                activeTab === cat 
                ? 'bg-nexyovi-primary border-nexyovi-primary text-white shadow-[0_0_20px_rgba(0,136,204,0.3)] scale-105' 
                : 'glass-morphic border-black/5 text-slate-500 hover:border-nexyovi-primary/40 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="p-0 overflow-hidden group h-full flex flex-col !rounded-3xl border-black/5 hover:border-nexyovi-primary/20 shadow-xl shadow-black/5">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transition-all"></div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-xs font-black text-nexyovi-primary uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-nexyovi-primary transition-colors tracking-tighter uppercase">{project.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed font-medium">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                       {project.tech.map((t) => (
                         <span key={t} className="text-[10px] px-2 py-1 bg-black/[0.03] rounded-md text-slate-500 font-mono">
                           {t}
                         </span>
                       ))}
                    </div>

                    <div className="flex items-center gap-6 pt-6 border-t border-black/5 mt-auto">
                       <a href="#" className="flex items-center gap-2 text-xs text-slate-900 hover:text-nexyovi-primary transition-colors font-black uppercase tracking-widest">
                         Case Study <ExternalLink size={14} />
                       </a>
                       <a href="#" className="flex items-center gap-2 text-xs text-slate-400 hover:text-nexyovi-primary transition-colors font-black uppercase tracking-widest">
                         Explore <Globe size={14} />
                       </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
