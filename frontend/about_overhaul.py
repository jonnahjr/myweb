import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Redesign Hero Section to be more "Real" and smaller height
hero_replacement = """      {/* ============= COMPACT INSTITUTIONAL HERO ============= */}
      <section className="relative min-h-[50vh] flex items-center px-6 overflow-hidden bg-[#F3EFE6] border-b border-gray-100">
        <div className="container-custom relative z-10 w-full py-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[9px] font-medium px-4 py-1.5 rounded-full">
                    <Globe2 size={12} className="mr-2 animate-pulse" /> GLOBAL_NODE_SUMMARY
                 </Badge>
                 <h1 style={{ y: yHero, opacity: opacityHero }} className="text-4xl md:text-6xl lg:text-7xl font-bold font-jakarta tracking-tightest leading-none text-[#1A2332] uppercase">
                    The <span className="italic text-brand-blue">Logic</span> <br /> Behind Success.
                 </h1>
                 <p style={{ y: yHero, opacity: opacityHero }} className="text-lg text-gray-500 font-bold max-w-md leading-snug">
                    NEXYOVI is a structural engineering unit specializing in high-synchrony AI systems and global digital governance.
                 </p>
              </div>
              <motion.div 
                style={{ y: yImage }}
                className="relative hidden lg:flex items-center justify-center"
              >
                 <div className="w-[400px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-gray-200">
                    <img src={heroImg} alt="Architecture" className="w-full h-full object-cover scale-110" />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>"""

# 2. Redesign Mission/Vision to be more "Real" (Business values over jargon)
mission_replacement = """      {/* ============= MISSION & CORE LOGIC ============= */}
      <section className="py-20 bg-[#000000] relative overflow-hidden">
        <div className="container-custom relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {[
                { 
                  title: 'Our Mission', 
                  desc: 'To engineer high-integrity digital foundations that allow global enterprises to scale securely in the AI era.',
                  label: 'CORE_OBJECTIVE'
                },
                { 
                  title: 'The Vision', 
                  desc: 'Building a world where digital infrastructure is as reliable as physical foundations through absolute structural synchrony.',
                  label: 'FUTURE_PROTOCOL'
                }
              ].map((item, i) => (
                <motion.div key={i} className="space-y-6">
                   <div className="flex items-center gap-4 text-[9px] font-bold text-brand-blue tracking-[0.4em] uppercase opacity-60">
                      <div className="w-1 h-1 rounded-full bg-brand-blue" /> {item.label}
                   </div>
                   <h3 className="text-3xl font-bold font-jakarta text-white uppercase tracking-tight">{item.title}</h3>
                   <p className="text-lg text-gray-400 font-bold leading-relaxed max-w-md italic">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>"""

# 3. Update Leadership with "Real Staffs"
leadership_replacement = """      {/* ============= LEADERSHIP NODES ============= */}
      <section className="py-20 bg-[#F3EFE6] border-y border-gray-100">
        <div className="container-custom">
           <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="space-y-4">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[9px] font-medium px-5 py-1.5 rounded-full">INSTITUTIONAL_LEADERSHIP</Badge>
                 <h2 className="text-4xl font-bold font-jakarta text-[#1A2332] tracking-tightest leading-none uppercase">Architectural <br /> <span className="text-brand-blue italic">Guardians.</span></h2>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Jonas Kassahun', role: 'Chief Executive Node', detail: 'Founder & Lead Systems Architect.' },
                { name: 'Nardos Tekle', role: 'Security Ops Director', detail: 'Global Asset Governance & Cloud Shield.' },
                { name: 'Elias Bekele', role: 'Head of Infrastructure', detail: 'Low-Latency Network & Cluster Logistics.' },
                { name: 'Sara Solomon', role: 'Chief of AI Research', detail: 'Neural Synchrony & Reasoning Protocols.' }
              ].map((leader, i) => (
                 <motion.div key={i} className="space-y-6 text-center lg:text-left">
                    <div className="w-20 h-20 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-sm relative overflow-hidden group">
                       <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <User size={32} className="text-brand-blue/20 group-hover:text-brand-blue transition-colors" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[9px] font-bold text-brand-blue uppercase tracking-widest">{leader.role}</p>
                       <h4 className="text-xl font-bold font-jakarta text-[#1A2332] tracking-tight">{leader.name}</h4>
                       <p className="text-[10px] text-gray-400 font-bold leading-tight uppercase tracking-wide pt-2 border-t border-gray-100 mt-2">{leader.detail}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>"""

# Apply Hero
content = re.sub(r'\{/\* ============= INSTITUTIONAL HERO ============= \*/\}.*?\{/\* ============= MISSION & VISION ============= \*/\}', hero_replacement + "\n\n      {/* ============= MISSION & VISION ============= */}", content, flags=re.DOTALL)

# Apply Mission
content = re.sub(r'\{/\* ============= MISSION & VISION ============= \*/\}.*?\{/\* ============= LEADERSHIP NODES ============= \*/\}', mission_replacement + "\n\n      {/* ============= LEADERSHIP NODES ============= */}", content, flags=re.DOTALL)

# Apply Leadership
content = re.sub(r'\{/\* ============= LEADERSHIP NODES ============= \*/\}.*?\{/\* ============= CORE LOGIC \(Process\) ============= \*/\}', leadership_replacement + "\n\n      {/* ============= CORE LOGIC (Process) ============= */}", content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Major overhaul of About.tsx: Redesigned Hero, Mission, and Leadership sections to be 'Real' and more compact.")
