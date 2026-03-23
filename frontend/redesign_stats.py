import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace padding
content = content.replace('py-24 border-b border-white/10 bg-[#F3EFE6]', 'py-16 bg-[#F3EFE6] relative overflow-hidden')

# Redesign stats Section
replacement = """      <section className="py-16 bg-[#F3EFE6] relative overflow-hidden">
        <div className="container-custom relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 items-center">
              {[
                { label: 'GLOBAL_NODES', val: '24', unit: 'LOGIC_UNITS' },
                { label: 'SLA_UPTIME', val: '99.9', unit: 'STABILITY_%' },
                { label: 'ACTIVE_LOGIC', val: '140', unit: 'PROTOCL_+' },
                { label: 'SEC_AUDITS', val: '1.2', unit: 'THREAT_K' }
              ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center lg:items-start lg:px-12 first:pl-0 last:pr-0 border-gray-200/50 lg:border-r last:border-0">
                    <div className="flex items-center gap-3 mb-4">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                       <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] font-medium">{stat.label}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                       <div className="text-5xl lg:text-7xl font-bold font-jakarta text-[#1A2332] tracking-tightest leading-none">{stat.val}</div>
                       <div className="text-xs font-bold text-brand-blue uppercase tracking-widest">{stat.unit}</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>"""

pattern = r'\s*<section className="py-16 bg\[#F3EFE6\].*?</section>'
# Since I just replaced the py-24 part above, I'll search for the current one
new_content = re.sub(pattern, "\n      " + replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Redesigned Core Stats Registry section.")
