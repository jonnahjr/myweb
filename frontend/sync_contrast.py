import os
import re

# Colors
DARK_BG = "#1A2332"
CREAMY_BG = "#F3EFE6"

pages_dir = r"c:\Users\jonas\Desktop\my web\frontend\src\pages"

def clean_content(content):
    # Fix repeated slash patterns
    content = content.replace('bg-white/5/5', 'bg-white/5')
    content = content.replace('border-white/10/10', 'border-white/10')
    content = content.replace('border-white/20/20', 'border-white/20')
    content = content.replace('shadow-none/none', 'shadow-none')
    
    # Isolate sections
    parts = re.split(r'(<section[^>]*>)', content)
    
    new_parts = []
    for i in range(len(parts)):
        part = parts[i]
        tag = parts[i-1] if i > 0 else ""
        
        if tag.startswith('<section') and DARK_BG in tag:
            # DARK SECTION: ensure light text and dark elements
            part = part.replace('text-[#1A2332]', 'text-white')
            part = part.replace('text-gray-500', 'text-gray-400')
            part = part.replace('text-gray-600', 'text-gray-300')
            part = part.replace('border-gray-100', 'border-white/10')
            part = part.replace('border-gray-200', 'border-white/20')
            part = part.replace('bg-white', 'bg-white/5')
            part = part.replace('bg-gray-50', 'bg-white/10')
            part = part.replace('shadow-sm', 'shadow-none')
            # Some buttons/cards might have bg-white already flipped
            # Ensure no double flips if happened naturally
            
        elif tag.startswith('<section') and CREAMY_BG in tag:
            # CREAMY SECTION: ensure dark text and light elements (RESTORE ORIGINALS)
            part = part.replace('text-white', 'text-[#1A2332]')
            part = part.replace('text-gray-300', 'text-gray-600')
            part = part.replace('text-gray-400', 'text-gray-500')
            part = part.replace('border-white/10', 'border-gray-100')
            part = part.replace('border-white/20', 'border-gray-200')
            part = part.replace('bg-white/5', 'bg-white')
            part = part.replace('bg-white/10', 'bg-gray-50')
            part = part.replace('shadow-none', 'shadow-sm')
            
        new_parts.append(part)
        
    return "".join(new_parts)

files = [f for f in os.listdir(pages_dir) if f.endswith('.tsx')]

for filename in files:
    path = os.path.join(pages_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = clean_content(content)
    
    # One more global replacement for the app background
    # Ensure there are no leftover OLD_DARK_CREAMY
    new_content = new_content.replace("#E5DFCC", DARK_BG)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Restoration and Contrast synchronization complete.")
