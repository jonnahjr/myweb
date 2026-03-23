import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacement = """        {/* ============= MISSION & VISION MATRIX ============= */}
        <section className="py-60 relative overflow-hidden bg-[#000000]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container-custom relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
               {[
                 { 
                   title: 'Mission', 
                   desc: 'To build intelligent, secure, and scalable digital systems that power the future economy.',
                   icon: '<Target size={40} />',
                   label: 'OPERATIONAL_MISSION'
                 },
                 { 
                   title: 'Vision', 
                   desc: 'To become a global leader in AI-driven infrastructure and secure digital transformation.',
                   icon: '<Zap size={40} />',
                   label: 'STRATEGIC_VISION'
                 }
                ].map((item, i) => (
                   <motion.div 
                     key={i}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-12 group"
                   >
                      <div className="space-y-10">
                         <div className="flex items-center gap-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(0,180,216,0.5)]" />
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] font-medium">{item.label}</span>
                         </div>
                         
                         <div className="space-y-12">
                            <div className="flex items-baseline gap-6">
                               <h3 className="text-7xl md:text-8xl font-bold font-jakarta text-white tracking-tightest uppercase">{item.title}</h3>
                               <div className="text-brand-blue opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                                  {item.icon === '<Target size={40} />' ? <Target size={40} /> : <Zap size={40} />}
                               </div>
                            </div>
                            <p className="text-3xl md:text-4xl text-gray-400 font-bold leading-[1.2] tracking-normal max-w-xl group-hover:text-white transition-colors duration-700">
                               {item.desc}
                            </p>
                         </div>
                      </div>
                      
                      <div className="w-full h-px bg-white/5 relative overflow-hidden mt-12">
                         <motion.div 
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '100%' }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"
                         />
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        </section>"""

# Using a simpler regex to match the section block
# We match from the comment to the closing section tag.
pattern = r'\s*\{/\* ============= MISSION & VISION MATRIX ============= \*/\}\s*<section[^>]*>.*?</section>'
new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Redesigned Mission & Vision section.")
