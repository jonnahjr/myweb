import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Redesign Executive Unit Section
replacement = """      {/* ============= EXECUTIVE UNIT ============= */}
      <section className="py-24 bg-[#000000] relative overflow-hidden">
        <div className="container-custom relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
              <div className="space-y-4">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[10px] font-medium px-5 py-1.5 rounded-full">EXECUTIVE_UNIT</Badge>
                 <h2 className="text-4xl md:text-5xl font-bold font-jakarta tracking-tightest leading-[0.9] text-white uppercase">Command <br /> Council.</h2>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "CEO", role: "Chief Executive Node", group: "Strategic Operations" },
                { name: "CTO", role: "Chief Technology Architect", group: "System Logic" },
                { name: "Head of AI", role: "Research Lead", group: "Reasoning Hub" },
                { name: "Head of SEC", role: "Security Director", group: "Shield Unit" }
              ].map((member, i) => (
                <motion.div 
                  key={member.name} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="space-y-6 p-6 bg-white/5 border border-white/5 hover:border-brand-blue/30 rounded-3xl transition-all duration-500 group text-center"
                >
                   <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center relative overflow-hidden group-hover:shadow-brand-blue/20 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <User size={40} className="text-white/10 group-hover:text-brand-blue transition-colors duration-700" />
                   </div>
                   
                   <div className="space-y-2">
                      <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] font-medium opacity-70">{member.role}</div>
                      <h4 className="text-xl font-bold font-jakarta text-white tracking-tight">{member.name}</h4>
                      <div className="w-8 h-px bg-white/10 mx-auto mt-4 group-hover:w-16 transition-all duration-700" />
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pt-2 font-medium">{member.group}</p>
                   </div>
                </motion.div>
              ))}
            </div>
         </div>
       </section>"""

pattern = r'\s*<section className="py-40 bg-brand-gray-bold/20 border-y border-gray-200 bg\[#000000\]">.*?</section>'
new_content = re.sub(pattern, "\n" + replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Redesigned Executive Unit section.")
