import os
import glob
import re

pages_dir = r"c:\Users\jonas\Desktop\my web\frontend\src\pages"

def alternate_sections(content):
    # Search for all <section className="...">
    # Toggle background between bg-[#F3EFE6] and bg-[#E5DFCC]
    pattern = r'<section\s+className="([^"]*)"'
    
    sections = re.split(pattern, content)
    
    new_content = sections[0]
    is_dark = False
    
    for i in range(1, len(sections), 2):
        class_name = sections[i]
        tail = sections[i+1]
        
        # Remove any existing background colors that indicate section
        class_name = class_name.replace("bg-[#F3EFE6]", "").replace("bg-[#E5DFCC]", "").replace("bg-white", "").replace("bg-[#F8FAFB]", "").replace("bg-gray-50", "")
        # Remove multiple spaces
        class_name = " ".join(class_name.split())
        
        if is_dark:
            class_name += " bg-[#E5DFCC]"
        else:
            class_name += " bg-[#F3EFE6]"
            
        new_content += f'<section className="{class_name}"' + tail
        
        is_dark = not is_dark

    # Fix double backgrounds introduced
    new_content = new_content.replace('bg-[#E5DFCC] relative overflow-hidden bg-[#E5DFCC]', 'bg-[#E5DFCC] relative overflow-hidden')
    new_content = new_content.replace('bg-[#F3EFE6] relative overflow-hidden bg-[#F3EFE6]', 'bg-[#F3EFE6] relative overflow-hidden')
    
    return new_content

for filepath in glob.glob(os.path.join(pages_dir, "*.tsx")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    new_content = alternate_sections(content)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
        
print("Alternating sections applied.")
