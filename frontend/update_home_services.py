import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\Home.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Redesign Home Services Section
replacement = """            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { 
                   title: "AI Systems", 
                   status: "INTELLIGENCE",
                   desc: "Custom LLM development, neural architectural sync, and autonomous reasoning.",
                   icon: <Bot size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Security & Testing", 
                   status: "SHIELDED",
                   desc: "Advanced security testing, implementation, and sovereign data controlling.",
                   icon: <Shield size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Custom Software", 
                   status: "ENG_NODE",
                   desc: "Bespoke software and app development with full system customization.",
                   icon: <Code size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Installation", 
                   status: "INFRA_CORE",
                   desc: "Institutional systems installation, hardware sync, and operational control.",
                   icon: <Cpu size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Design & Web", 
                   status: "VISUAL",
                   desc: "Premium website design, UI/UX systems, and architectural visual design.",
                   icon: <Globe2 size={28} className="text-brand-blue" />
                 },
                 { 
                   title: "Strategy", 
                   status: "ADVISORY",
                   desc: "Strategic consulting, logic transformation, and institutional planning.",
                   icon: <Zap size={28} className="text-brand-blue" />
                 }
               ].map((s, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group relative overflow-hidden"
                    style={{ animationDelay: f"{i * 0.1}s" }}
                  >
                     <div className="absolute top-8 right-10 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                         <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest font-medium">{s.status}</span>
                     </div>
                     <div className="w-16 h-16 rounded-2xl bg-[#F3EFE6] border border-gray-100 flex items-center justify-center mb-10 group-hover:bg-brand-blue text-brand-blue group-hover:text-white transition-all duration-700 shadow-md">
                        {s.icon}
                     </div>
                      <h3 className="text-2xl font-bold mb-4 font-jakarta tracking-tighter uppercase text-[#1A2332]">{s.title}</h3>
                      <p className="text-base text-gray-500 font-bold leading-relaxed">{s.desc}</p>
                  </motion.div>
               ))}
            </div>"""

pattern = r'\s*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">.*?\.map\(\(s, i\) => \(.*?\)\s*\}\s*</div>'
new_content = re.sub(pattern, "\n" + replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Home services section.")
