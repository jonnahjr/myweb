import os
import glob

pages_dir = r"c:\Users\jonas\Desktop\my web\frontend\src\pages"

replacements = {
    # Structural Colors
    "bg-brand-primary": "bg-[#F8FAFB]",
    "bg-brand-secondary": "bg-white",
    "bg-brand-surface": "bg-gray-50",
    "bg-brand-charcoal": "bg-white",
    
    # Text Colors
    "text-white": "text-[#1A2332]",
    "text-white/90": "text-[#1A2332]",
    "text-white/80": "text-gray-700",
    "text-white/70": "text-gray-600",
    "text-white/60": "text-gray-500",
    "text-white/40": "text-gray-500",
    "text-white/30": "text-gray-400",
    "text-white/20": "text-gray-400",
    "text-brand-gray-light": "text-[#1A2332]",
    "text-brand-gray-light/60": "text-gray-500",
    
    # Borders
    "border-white/5": "border-gray-100",
    "border-white/10": "border-gray-200",
    "border-white/20": "border-gray-200",
    "border-black/5": "border-gray-200",
    
    # Glass & Effects
    "glass-card": "bg-white shadow-sm border border-gray-100 rounded-[2rem]",
    "shadow-glow": "shadow-lg shadow-blue-500/20",
    "shadow-premium": "shadow-md hover:shadow-xl transition-all",
    "shadow-[0_0_10px_#3b82f6]": "shadow-none",
    "shadow-[0_0_10px_#8b5cf6]": "shadow-none",
    
    # Mesh/Grid Backgrounds (Remove dark ones)
    "tech-grid-blue opacity-10": "hidden",
    "tech-grid opacity-10": "hidden",
    "tech-grid-blue opacity-20": "hidden",
    "mesh-gradient opacity-20": "hidden",
    "mesh-gradient opacity-30": "hidden",
    "mesh-gradient opacity-40": "hidden",
    "mesh-gradient opacity-60": "hidden",
    "animate-mesh": "",
    "scanline": "hidden",
    "bg-brand-charcoal/40 backdrop-blur-xl": "bg-gray-100",
    
    # Specific buttons
    "bg-brand-blue text-white": "bg-[#1B4F8A] text-white",
    "hover:bg-brand-blue-dark text-white": "hover:bg-[#0d3564] text-white",
    
    # Badges
    "bg-brand-blue/10 text-brand-blue": "bg-blue-50 text-[#1B4F8A]",
    "bg-brand-purple/10 text-brand-purple": "bg-teal-50 text-teal-700",
    
    # Text Gradients
    "from-white via-white/80 to-brand-blue/20": "from-[#1B4F8A] to-[#00B4D8]",
    "from-brand-blue to-brand-purple": "from-[#1B4F8A] to-[#00B4D8]"
}

for filepath in glob.glob(os.path.join(pages_dir, "*.tsx")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    new_content = content
    for old_val, new_val in replacements.items():
        new_content = new_content.replace(old_val, new_val)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
        
print("Transformation Complete")
