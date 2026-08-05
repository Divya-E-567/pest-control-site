from PIL import Image
from pathlib import Path

root = Path(__file__).resolve().parent.parent / 'public' / 'images'
source_map = {
    'pestcontrolkochi-logo.webp': 'eco-pest-india-logo.jpeg',
    'general-pest-control-kochi.webp': 'pest-control-kochi-expert.jpeg',
    'termite-treatment-kochi.webp': 'anti-termite-treatment-kochi.jpeg',
    'cockroach-control-kochi.webp': 'cockroach-control-gel-kochi.jpeg',
    'bed-bug-treatment-kochi.webp': 'bed-bug-steam-treatment-kochi.jpeg',
    'rodent-control-kochi.webp': 'rodent-rat-trap-kochi.jpeg',
    'ant-control-kochi.webp': 'ant-pest-control-kochi.jpeg',
    'bee-control-kochi.webp': '24.jpeg',
    'mosquito-control-kochi.webp': 'mosquito-fogging-spraying-kochi.jpeg',
    'snake-control-kochi.webp': 'snake-repellent-control-kochi.jpeg',
}

for out_name, in_name in source_map.items():
    src = root / in_name
    dst = root / out_name
    if not src.exists():
        print(f'SKIP missing {src}')
        continue
    if dst.exists():
        print(f'EXISTS {dst}')
        continue
    with Image.open(src) as img:
        img = img.convert('RGB')
        img.save(dst, 'WEBP', quality=82, optimize=True)
    print(f'CREATED {dst}')
