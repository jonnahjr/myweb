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

    # Step 1: Replace OLD_DARK_CREAMY with DARK_BG
    content = content.replace(OLD_DARK_CREAMY, DARK_BG)
    
    # Step 2: Split by ANY section tag to isolate contents
    # We use a pattern that captures the whole section tag
    parts = re.split(r'(<section[^>]*>)', content)
    
    new_parts = []
    for i in range(len(parts)):
        part = parts[i]
        # Check if the previous part was a section tag with the dark background
        if i > 0 and parts[i-1].startswith('<section') and DARK_BG in parts[i-1]:
            # This is the content inside a dark section.
            # Convert dark text and borders to light variants.
            part = part.replace('text-[#1A2332]', 'text-white')
            part = part.replace('text-gray-500', 'text-gray-400')
            part = part.replace('text-gray-600', 'text-gray-300')
            part = part.replace('text-brand-charcoal', 'text-white')
            part = part.replace('border-gray-100', 'border-white/10')
            part = part.replace('border-gray-200', 'border-white/20')
            part = part.replace('bg-white', 'bg-white/5')
            part = part.replace('bg-gray-50', 'bg-white/10')
            part = part.replace('shadow-sm', 'shadow-none')
            part = part.replace('bg-brand-blue/5', 'bg-brand-blue/20')
        elif i > 0 and parts[i-1].startswith('<section') and CREAMY_BG in parts[i-1]:
            # This is a creamy section. Ensure text is DARK.
            # This handles cases where text-white might have leaked or been globally changed.
            part = part.replace('text-white', 'text-[#1A2332]')
            part = part.replace('text-gray-300', 'text-gray-600')
            part = part.replace('text-gray-400', 'text-gray-500')
            
        new_parts.append(part)

    with open(path, 'w', encoding='utf-8') as f:
        f.write("".join(new_parts))

print("Fixed contrast for Black/Creamy theme across all pages.")
