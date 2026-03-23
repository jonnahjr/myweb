import os
import glob
import re

pages_dir = r"c:\Users\jonas\Desktop\my web\frontend\src\pages"

def replace_attributes(content):
    # Fix the boxes styling
    content = content.replace("bg-white shadow-sm border border-gray-100 rounded-[2rem] animate-float", "bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1")
    content = content.replace("bg-white shadow-sm border border-gray-100 rounded-[2rem]", "bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1")
    content = content.replace("bg-white border border-gray-100 rounded-[4rem] shadow-md hover:shadow-xl transition-all hover:shadow-lg shadow-blue-500/20-purple", "bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1")
    content = content.replace("bg-gray-50 border border-gray-200 rounded-[3rem] shadow-md hover:shadow-xl", "bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1")
    content = content.replace("bg-gray-50 border border-gray-100 rounded-[4rem] shadow-md hover:shadow-xl", "bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1")
    content = content.replace("rounded-[2rem]", "rounded-2xl")
    content = content.replace("rounded-[3rem]", "rounded-2xl")
    content = content.replace("rounded-[4rem]", "rounded-2xl")
    content = content.replace("rounded-[4.5rem]", "rounded-2xl")
    content = content.replace("rounded-[5rem]", "rounded-3xl")
    content = content.replace("rounded-[1.5rem]", "rounded-xl")
    
    content = content.replace("p-16 ", "p-8 ")
    content = content.replace("p-12 lg:p-16", "p-8")
    content = content.replace("p-12 ", "p-8 ")
    content = content.replace("p-10 ", "p-6 ")
    
    # Fix the texts styling
    content = re.sub(r"uppercase tracking-tightest leading-none", "tracking-tight leading-tight", content)
    content = re.sub(r"uppercase tracking-tightest leading-\[.*?\]", "tracking-tight leading-tight", content)
    content = re.sub(r"uppercase tracking-tighter", "tracking-tight", content)
    content = re.sub(r"uppercase tracking-tighter leading-none", "tracking-tight leading-tight", content)
    content = re.sub(r"uppercase tracking-tightest", "tracking-tight", content)
    
    # Tone down extreme typography
    content = content.replace("font-black", "font-bold")
    content = content.replace("text-7xl md:text-9xl lg:text-[7.5rem]", "text-5xl md:text-6xl lg:text-7xl")
    content = content.replace("text-6xl md:text-8xl", "text-4xl md:text-5xl lg:text-6xl")
    content = content.replace("text-6xl md:text-7xl", "text-4xl md:text-5xl")
    content = content.replace("text-4xl md:text-5xl", "text-2xl md:text-3xl")
    content = content.replace("text-5xl md:text-7xl", "text-3xl md:text-4xl")
    
    # Fix the badges and small labels
    content = content.replace("text-[9px]", "text-xs")
    content = content.replace("text-[10px]", "text-sm")
    content = content.replace("text-[11px]", "text-sm")
    content = content.replace("tracking-[0.4em]", "tracking-wider")
    content = content.replace("tracking-[0.5em]", "tracking-wider")
    content = content.replace("tracking-[0.6em]", "tracking-wider")
    content = content.replace("tracking-widest font-mono", "font-medium")
    content = content.replace("font-mono font-black", "font-medium")
    content = content.replace("font-mono", "font-medium")
    
    # Fix text colors
    content = content.replace("text-[#1A2332]/60", "text-gray-500")
    content = content.replace("text-[#1A2332]/70", "text-gray-600")
    content = content.replace("text-[#1A2332]/40", "text-gray-400")
    content = content.replace("text-[#1A2332]/30", "text-gray-400")
    
    return content

for filepath in glob.glob(os.path.join(pages_dir, "*.tsx")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    new_content = replace_attributes(content)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
        
print("Transformation Complete")
