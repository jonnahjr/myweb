import re

path = r"c:\Users\jonas\Desktop\my web\frontend\src\pages\About.tsx"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix MetricCounter lint and add smooth reveal animation to everything
content = content.replace('{rounded}', '{rounded as any}')

# Add Scroll Parallax to Hero
parallax_code = """  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
"""
content = content.replace("export const About = () => {", "export const About = () => {\n" + parallax_code)

# Apply Parallax to Hero Header and Image
content = content.replace('<motion.h1 ', '<motion.h1 style={{ y: yHero, opacity: opacityHero }} ')
content = content.replace('<motion.p', '<motion.p style={{ y: yHero, opacity: opacityHero }}')
content = content.replace('className="w-full h-full object-cover object-center animate-float" />', 'className="w-full h-full object-cover object-center scale-110" style={{ y: useTransform(scrollY, [0, 1000], [0, 200]) }} />')

# Add Floating Background Particles in different sections
particles = """
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -1000],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute bottom-0 w-px h-24 bg-gradient-to-t from-brand-blue to-transparent"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
"""
content = content.replace('<div className="min-h-screen bg-[#F3EFE6] text-[#1A2332] font-jakarta pt-24">', '<div className="min-h-screen bg-[#F3EFE6] text-[#1A2332] font-jakarta pt-24">\n' + particles)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Added scroll parallax and background particles to About page.")
