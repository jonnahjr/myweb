import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace padding
content = content.replace('py-40 relative overflow-hidden bg-[#000000]', 'py-20 relative overflow-hidden bg-[#000000]')

# Redesign Registry Logic Section
replacement = """            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
               <div className="space-y-4">
                  <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[10px] font-medium px-5 py-1.5 rounded-full">REGISTRY_LOGIC</Badge>
                  <h2 className="text-3xl md:text-5xl font-bold font-jakarta tracking-tightest leading-[0.9] text-white uppercase">Operational <br /> Framework.</h2>
               </div>
               <p className="text-lg text-gray-400 font-bold max-w-sm leading-tight italic opacity-70">The engineering protocols that define our institutional success.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { title: 'SYNCHRONY', sub: 'ALIGNMENT_NODE', desc: 'Ensuring absolute structural alignment with your organizational logic.' },
                 { title: 'MASTERY', sub: 'EXPERT_DEPLOYMENT', desc: 'Deploying elite engineering units to solve complex computational challenges.' },
                 { title: 'SOVEREIGNTY', sub: 'SECURE_GOVERNANCE', desc: 'Building systems that ensure absolute data independence and security.' }
               ].map((p, i) => (
                 <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="space-y-6 p-6 bg-white/5 border border-white/5 hover:border-brand-blue/30 rounded-2xl transition-all duration-500 group"
                 >
                    <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] font-medium opacity-50 group-hover:opacity-100 transition-opacity">{p.sub}</div>
                    <h4 className="text-2xl md:text-3xl font-bold font-jakarta tracking-tight text-white uppercase">{p.title}</h4>
                    <p className="text-sm text-gray-500 font-bold leading-relaxed">{p.desc}</p>
                 </motion.div>
               ))}
            </div>"""

pattern = r'\s*<div className="mb-24 flex[^>]*>.*?\.map\(\(p, i\) => \(.*?\)\s*\}\s*</div>'
new_content = re.sub(pattern, "\n" + replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Redesigned Operational Framework section.")
