import os

# Path to your images folder
folder_path = "houses-images"

# Prefix for the new filenames
prefix = "saxman-consulting-real-estate-house"

# Get all files (filter common image formats if needed)
files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]

# Sort files to maintain order
files.sort()

# Rename files
for index, filename in enumerate(files, start=1):
    old_path = os.path.join(folder_path, filename)
    
    # Get file extension
    extension = os.path.splitext(filename)[1]
    
    new_name = f"{prefix}-{index}{extension}"
    new_path = os.path.join(folder_path, new_name)
    
    os.rename(old_path, new_path)
    print(f"Renamed: {filename} -> {new_name}")