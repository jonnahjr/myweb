import os
import glob

src_dir = r"c:\Users\jonas\Desktop\my web\frontend\src"

def replace_in_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace the light bluish-white with a darker creamy white
    new_content = content.replace("bg-[#F8FAFB]", "bg-[#F3EFE6]")
    new_content = new_content.replace("to-[#F8FAFB]", "to-[#F3EFE6]")
    new_content = new_content.replace("from-[#F8FAFB]", "from-[#F3EFE6]")
    
    if content != new_content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)

# Walk through all directories
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts") or file.endswith(".css"):
            replace_in_file(os.path.join(root, file))

print("Creamy background applied.")
