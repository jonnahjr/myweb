import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add MetricCounter component before About component
counter_component = """
const MetricCounter = ({ value, label, unit }: { value: number | string, label: string, unit: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (typeof value === 'string' && value.includes('.')) {
      return latest.toFixed(1);
    }
    return Math.round(latest);
  });

  useEffect(() => {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return (
    <div className="flex flex-col items-center lg:items-start lg:px-12 first:pl-0 last:pr-0 border-gray-200/50 lg:border-r last:border-0 relative group">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] font-medium">{label}</span>
      </div>
      <div className="flex items-baseline gap-2 group-hover:translate-x-1 transition-transform duration-500">
        <motion.div className="text-5xl lg:text-7xl font-bold font-jakarta text-[#1A2332] tracking-tightest leading-none">
          {rounded}
        </motion.div>
        <div className="text-xs font-bold text-brand-blue uppercase tracking-widest">{unit}</div>
      </div>
    </div>
  );
};
"""

content = content.replace("export const About = () => {", counter_component + "\nexport const About = () => {")

# Redesign stats Section again with MetricCounter
replacement = """      <section className="py-20 bg-[#F3EFE6] relative overflow-hidden">
        {/* Animated Background Illustration */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#1B4F8A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <motion.div 
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-brand-blue/20 to-transparent blur-[120px] rounded-full" 
          />
        </div>

        <div className="container-custom relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 items-center">
              {[
                { label: 'Countries Covered', val: 2, unit: 'Nations' },
                { label: 'System Uptime', val: 99.9, unit: 'Percent' },
                { label: 'Active Projects', val: 17, unit: 'Missions' },
                { label: 'Security Audits', val: 1.2, unit: 'Completed' }
              ].map((stat, i) => (
                 <MetricCounter key={i} value={stat.val} label={stat.label} unit={stat.unit} />
              ))}
           </div>
        </div>
      </section>"""

pattern = r'\s*<section className="py-16 bg\[#F3EFE6\].*?</section>'
new_content = re.sub(pattern, "\n      " + replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Added animation and illustration to stats section.")
