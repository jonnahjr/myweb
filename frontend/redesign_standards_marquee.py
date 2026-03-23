import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Redesign Global Standards Section with Marquee
replacement = """      {/* ============= GLOBAL STANDARDS & REGISTRY VALIDATION ============= */}
      <section className="py-24 bg-[#F3EFE6] border-y border-gray-100 overflow-hidden">
        <div className="container-custom relative z-10 mb-20 text-center lg:text-left">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div className="space-y-6">
                 <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue border-0 tracking-[0.3em] font-bold uppercase text-[10px] font-medium px-5 py-1.5 rounded-full">REGISTRY_VALIDATION</Badge>
                 <h2 className="text-4xl md:text-6xl font-bold font-jakarta tracking-tightest leading-[0.9] text-[#1A2332]">Mission <br /> <span className="text-brand-blue italic">Compliant.</span></h2>
              </div>
              <p className="text-xl text-gray-500 font-bold leading-tight max-w-xl lg:pb-2">
                 Our builds are validated by international regulatory bodies and sovereign cloud infrastructure standardizers across global deployment clusters.
              </p>
           </div>
        </div>

        {/* Infinite Horizontal Certification Slider */}
        <div className="relative flex overflow-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[
              { title: "ISO 27001+", org: "DATA_SECURITY" },
              { title: "SOC 2 TYPE II", org: "TRUST_OPS" },
              { title: "NVIDIA Elite", org: "AI_PARTNER" },
              { title: "AWS GovCloud", org: "SECURE_HOST" },
              { title: "GDPR Certified", org: "PRIVACY_SYNC" },
              { title: "PCI DSS", org: "CAPITAL_SEC" },
              { title: "HIPAA Node", org: "BIO_LOGIC" },
              { title: "GCP Certified", org: "GLOBAL_NODE" },
              { title: "Microsoft MPN", org: "SYSTEM_CLOUD" },
              { title: "NIST 800-53", org: "FEDERAL_OPS" },
              { title: "FedRAMP Node", org: "GOV_SYNC" },
              { title: "Cisco Shield", org: "NET_LOGIC" }
            ].concat([ // Duplicate for infinite effect
              { title: "ISO 27001+", org: "DATA_SECURITY" },
              { title: "SOC 2 TYPE II", org: "TRUST_OPS" },
              { title: "NVIDIA Elite", org: "AI_PARTNER" },
              { title: "AWS GovCloud", org: "SECURE_HOST" },
              { title: "GDPR Certified", org: "PRIVACY_SYNC" },
              { title: "PCI DSS", org: "CAPITAL_SEC" },
              { title: "HIPAA Node", org: "BIO_LOGIC" },
              { title: "GCP Certified", org: "GLOBAL_NODE" },
              { title: "Microsoft MPN", org: "SYSTEM_CLOUD" },
              { title: "NIST 800-53", org: "FEDERAL_OPS" },
              { title: "FedRAMP Node", org: "GOV_SYNC" },
              { title: "Cisco Shield", org: "NET_LOGIC" }
            ]).map((c, i) => (
               <div key={i} className="inline-flex items-center gap-6 p-8 bg-white border border-gray-100 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-700 min-w-[300px]">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-blue shadow-sm">
                     <CheckCircle2 size={24} />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-[#1A2332] uppercase mb-1">{c.title}</h4>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-medium">{c.org}</p>
                  </div>
               </div>
            ))}
          </motion.div>
        </div>
      </section>"""

pattern = r'\s*<section className="py-40 bg\[#F3EFE6\]">.*?</section>'
new_content = re.sub(pattern, "\n" + replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Redesigned Global Standards with infinite marquee and expanded licenses.")
