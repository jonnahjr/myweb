import { motion } from 'framer-motion';
import { Users, Rocket, Coffee, Zap, Globe, Heart, Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { GlassCard, Button } from '../components/ui/Core';

const jobs = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / SF",
    type: "Full-time",
    tags: ["PyTorch", "Rust", "LLMs"]
  },
  {
    title: "Lead Solutions Architect",
    department: "Enterprise",
    location: "Stockholm",
    type: "Full-time",
    tags: ["AWS", "Odoo", "ERP"]
  },
  {
    title: "Full-Stack Developer",
    department: "Product",
    location: "Global Remote",
    type: "Contract",
    tags: ["React", "Go", "Kubernetes"]
  },
  {
    title: "Cybersecurity Analyst",
    department: "Infrastructure",
    location: "New York",
    type: "Full-time",
    tags: ["Zero Trust", "NIST", "Cloud"]
  }
];

export const Careers = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
           <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the <span className="gradient-text">Frontier</span></h1>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Nexyovi is a team of explorers, engineers, and visionaries building 
             the next generation of software. Ready to leave your mark?
           </p>
        </div>

        {/* Culture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {[
             { icon: <Globe className="text-nexyovi-primary" />, title: "Remote-First", desc: "Work from anywhere in the world. We value output and creativity over office hours." },
             { icon: <Zap className="text-nexyovi-secondary" />, title: "Hyper-Growth", desc: "Fast-track your career in a high-density talent environment focused on rapid innovation." },
             { icon: <Users className="text-nexyovi-accent" />, title: "Diverse Logic", desc: "Collaborate with minds from cross-disciplinary backgrounds and global perspectives." }
           ].map((item, i) => (
             <GlassCard key={i} className="text-center">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                   {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
             </GlassCard>
           ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 md:p-20 mb-32">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                 <h2 className="text-3xl font-bold mb-8">Why Nexyovi?</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: <Briefcase size={20} />, text: "Competitive Equity & Shares" },
                      { icon: <Heart size={20} />, text: "Premium Health Coverage" },
                      { icon: <Rocket size={20} />, text: "Learning & Growth Stipend" },
                      { icon: <Coffee size={20} />, text: "Flexible Paid Time Off" }
                    ].map((b, i) => (
                      <div key={i} className="flex items-center gap-4 text-gray-300 font-medium">
                         <div className="w-10 h-10 bg-nexyovi-primary/10 rounded-xl flex items-center justify-center text-nexyovi-primary">
                            {b.icon}
                         </div>
                         {b.text}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex-1 w-full glass-card p-10 bg-gradient-to-br from-nexyovi-primary/5 to-transparent">
                  <p className="text-gray-400 italic mb-6 leading-relaxed">
                    "At NEXYOVI, we aren't just writing code. We're building the 'Next-Level Vision and Innovation' 
                    that global enterprises in Miami and Addis Ababa rely on every single second. 
                    The mission is clear: redefine what's possible."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-nexyovi-primary/20 border border-nexyovi-primary/20 flex items-center justify-center font-black text-nexyovi-primary text-xs">YB</div>
                     <div>
                        <p className="text-white font-bold">Yonas Bogale</p>
                        <p className="text-xs text-nexyovi-primary font-bold uppercase">Founder & Visionary Lead</p>
                     </div>
                  </div>
              </div>
           </div>
        </div>

        {/* Open Roles */}
        <div>
           <h2 className="text-3xl font-bold mb-12">Open Missions</h2>
           <div className="space-y-4">
              {jobs.map((job, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                  className="glass-card p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 cursor-pointer border-opacity-5"
                >
                   <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-500 font-bold uppercase tracking-wider">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                         <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                         <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      </div>
                   </div>
                   
                   <div className="flex flex-wrap gap-2 md:justify-end flex-1 max-w-xs">
                      {job.tags.map(t => (
                        <span key={t} className="text-[10px] px-2 py-1 bg-nexyovi-primary/5 border border-nexyovi-primary/20 rounded text-nexyovi-primary font-mono">{t}</span>
                      ))}
                   </div>
                   
                   <Button variant="ghost" className="text-nexyovi-primary font-bold uppercase text-xs tracking-widest gap-2 flex items-center">
                      Apply Now <ArrowRight size={14} />
                   </Button>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
