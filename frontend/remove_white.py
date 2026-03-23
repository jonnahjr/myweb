import os
from PIL import Image

assets_path = r"c:\Users\jonas\Desktop\my web\frontend\src\assets"

target_files = [
    "aws-25.png",
    "hp-22.png",
    "ibm-17.png",
    "oracle-21.png",
    "ethio.jpg",
    "global.png",
    "cbe.png",
    "zemen-bank-logo.webp",
    "Insa-09.png",
    "aastu-01.png",
    "aau-02.png",
    "Hawasa-08.png"
]

for filename in target_files:
    filepath = os.path.join(assets_path, filename)
    if os.path.exists(filepath):
        print(f"Processing {filename}...")
        img = Image.open(filepath).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # item is (R, G, B, A)
            r, g, b, a = item
            # If the pixel is very close to white, make it transparent
            # Let's say #EEEEEE and above is considered "white"
            if r > 235 and g > 235 and b > 235:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Save over it, but as PNG to support transparency
        new_filename = os.path.splitext(filename)[0] + "_transparent.png"
        new_filepath = os.path.join(assets_path, new_filename)
        img.save(new_filepath, "PNG")
        print(f"Saved {new_filename}")
