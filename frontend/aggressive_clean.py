import os
import re

pages_dir = r"c:\Users\jonas\Desktop\my web\frontend\src\pages"

def aggressive_clean(content):
    # Fix nested slash patterns of any depth
    for _ in range(5):
        content = content.replace('bg-white/5/5', 'bg-white/5')
        content = content.replace('border-white/10/10', 'border-white/10')
        content = content.replace('border-white/20/20', 'border-white/20')
        content = content.replace('shadow-none/none', 'shadow-none')
        content = content.replace('text-white/white', 'text-white')
        
    return content

files = [f for f in os.listdir(pages_dir) if f.endswith('.tsx')]

for filename in files:
    path = os.path.join(pages_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = aggressive_clean(content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Aggressive cleanup complete.")
