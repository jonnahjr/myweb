import os
import re

# Deep dark color (Black)
DEEP_BLACK = "#000000"
PREVIOUS_DARK = "#1A2332"
CREAMY_BG = "#F3EFE6"

pages_dir = r"c:\Users\jonas\Desktop\my web\frontend\src\pages"

def convert_to_dark_black(content):
    # This specifically targets the background of the sections.
    # We want to replace bg-[#1A2332] with bg-[#000000] only in section tags or main containers.
    # However, global replacement in sections as previously done is more consistent.
    
    # Isolate sections
    parts = re.split(r'(<section[^>]*>)', content)
    
    new_parts = []
    for i in range(len(parts)):
        part = parts[i]
        tag = parts[i-1] if i > 0 else ""
        
        if tag.startswith('<section') and PREVIOUS_DARK in tag:
            # We already have a black section, just make it DARKER.
            # But the tag itself is at parts[i-1].
            # So the replacement needs to happen on parts[i-1].
            pass

    # Actually, it's easier to do it as a string replacement on the TAGS specifically.
    # But tags were processed in previous script.
    
    # Global replacement for bg-[PREVIOUS_DARK]
    content = content.replace(f'bg-[{PREVIOUS_DARK}]', f'bg-[{DEEP_BLACK}]')
    
    # Just in case some were written differently
    content = content.replace('bg-brand-charcoal', f'bg-[{DEEP_BLACK}]')
    
    return content

files = [f for f in os.listdir(pages_dir) if f.endswith('.tsx')]

for filename in files:
    path = os.path.join(pages_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = convert_to_dark_black(content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Background sections updated to TRUE DARK BLACK.")
