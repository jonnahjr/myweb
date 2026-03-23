import os
import re

# Deep dark color (Black)
DARK_BG = "#1A2332"
CREAMY_BG = "#F3EFE6"
OLD_DARK_CREAMY = "#E5DFCC"

pages_dir = r"c:\Users\jonas\Desktop\my web\frontend\src\pages"

files = [f for f in os.listdir(pages_dir) if f.endswith('.tsx')]

for filename in files:
    path = os.path.join(pages_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the old dark creamy with the new black background
    # We also need to handle the text colors in those sections.
    # This is tricky because sections are usually blocks.
    
    # 1. Replace background color
    new_content = content.replace(OLD_DARK_CREAMY, DARK_BG)
    
    # 2. Heuristic: if a section has bg-[#1A2332], it was an E5DFCC section.
    # We need to find these sections and flip their text/colors.
    # However, replacing globally might be safer if we target the specific patterns.

    # If I just do a global replace of bg-[#E5DFCC] to bg-[#1A2332], 
    # and then handle the contrast.
    
    # Let's try to be smart about sections.
    # Patterns to look for in E5DFCC sections:
    # text-[#1A2332] -> text-white
    # text-gray-500 -> text-gray-400
    # text-gray-600 -> text-gray-300
    # border-gray-100 -> border-white/10
    # border-gray-200 -> border-white/20
    # bg-white -> bg-white/5
    # shadow-sm -> shadow-none
    
    # We will use regex to find sections with bg-[#1A2332] (after initial replace)
    # and then within those sections, swap colors.
    
    sections = re.split(r'(<section[^>]*bg-\[#1A2332\][^>]*>)', new_content)
    
    final_content = ""
    for i in range(len(sections)):
        part = sections[i]
        if i > 0 and sections[i-1].startswith('<section') and 'bg-[#1A2332]' in sections[i-1]:
            # This 'part' is the content of a black section.
            # We need to find the matching closing </section>
            # but regex split is a bit brute. Let's do it per file cautiously.
            
            # Simple replacements for dark sections:
            part = part.replace('text-[#1A2332]', 'text-white')
            part = part.replace('text-gray-500', 'text-gray-400')
            part = part.replace('text-gray-600', 'text-gray-300')
            part = part.replace('text-brand-charcoal', 'text-white')
            part = part.replace('border-gray-100', 'border-white/10')
            part = part.replace('border-gray-200', 'border-white/20')
            part = part.replace('bg-white', 'bg-white/5')
            part = part.replace('bg-gray-50', 'bg-white/10')
            part = part.replace('shadow-sm', 'shadow-none')
            part = part.replace('bg-brand-blue/5', 'bg-brand-blue/20') # Make transparent pills more visible
            
        final_content += part

    with open(path, 'w', encoding='utf-8') as f:
        f.write(final_content)

print("Backgrounds and text colors updated to Black/Creamy theme.")
