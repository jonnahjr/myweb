import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Redesign Global Standards Section
replacement = """      {/* ============= GLOBAL STANDARDS ============= */}
      <section className="py-20 bg-[#F3EFE6] border-y border-gray-100">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[10px] font-medium px-5 py-1.5 rounded-full">REGISTRY_VALIDATION</Badge>
                 <h2 className="text-3xl md:text-5xl font-bold font-jakarta tracking-tightest leading-none text-[#1A2332]">Mission <br /> <span className="text-brand-blue italic">Compliant.</span></h2>
                 <p className="text-lg text-gray-500 font-bold leading-tight max-w-md">
                    Our builds are validated by international regulatory bodies and sovereign cloud infrastructure standardizers.
                 </p>
                 <div className="flex flex-wrap gap-6">
                    {[
                      { icon: <Shield size={18} />, val: 'ISO 27001+' },
                      { icon: <CheckCircle2 size={18} />, val: 'SOC 2 TYPE II' },
                      { icon: <Cpu size={18} />, val: 'AWS GOVCLOUD' }
                    ].map((v, i) => (
                       <div key={i} className="flex items-center gap-3 text-brand-blue font-bold font-medium text-[10px] tracking-widest uppercase">
                          {v.icon}
                          {v.val}
                       </div>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { title: "NVIDIA Elite", org: "AI_PARTNER" },
                   { title: "Microsoft MPN", org: "SYSTEM_CLOUD" },
                   { title: "AWS GovCloud", org: "SECURE_HOST" },
                   { title: "GCP Certified", org: "GLOBAL_NODE" }
                 ].map((c, i) => (
                    <div key={i} className="p-4 bg-white border border-gray-100 rounded-2xl flex items-center gap-4 group hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
                       <div className="w-10 h-10 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                          <CheckCircle2 size={18} />
                       </div>
                       <div>
                          <h4 className="text-sm font-bold text-[#1A2332] uppercase leading-none mb-1">{c.title}</h4>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 font-medium">{c.org}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>"""

pattern = r'\s*<section className="py-40 bg\[#F3EFE6\]">.*?</section>'
new_content = re.sub(pattern, "\n" + replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Redesigned Global Standards section.")
