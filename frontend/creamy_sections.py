import os
import glob
import re

pages_dir = r"c:\Users\jonas\Desktop\my web\frontend\src\pages"

def replace_section_bg(content):
    # Fix the issue where sections have bg-white causing bg-white cards to be invisible
    # We will look for <section className="... bg-white ..."
    # Specifically, replace " bg-white " with " bg-[#F3EFE6] " 
    # But ONLY inside <section className="...">
    
    def dash_repl(match):
        inner_classes = match.group(1).replace("bg-white", "bg-[#F3EFE6]")
        inner_classes = inner_classes.replace("bg-gray-50", "bg-[#F3EFE6]")
        return f'<section className="{inner_classes}"'

    content = re.sub(r'<section className="([^"]*)"', dash_repl, content)
    
    # Also fix some specific standalone ones if any
    content = content.replace('bg-[#F3EFE6] relative overflow-hidden bg-[#F3EFE6]', 'bg-[#F3EFE6] relative overflow-hidden')
    return content

for filepath in glob.glob(os.path.join(pages_dir, "*.tsx")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    new_content = replace_section_bg(content)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
        
print("Creamy sections applied.")
