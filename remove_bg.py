import sys
from PIL import Image

def remove_background(input_path, output_path, tolerance=50):
    # Open the image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    for item in data:
        # Get the pixel values
        r, g, b, a = item
        
        # Calculate distance from pure white (255, 255, 255)
        # Using a simple Manhattan distance or thresholding
        if (255 - r) < tolerance and (255 - g) < tolerance and (255 - b) < tolerance:
            # Change near-white pixels to completely transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    # Update image data and save
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

if __name__ == "__main__":
    input_file = "public/logo.jpeg"
    output_file = "public/logo.png"
    remove_background(input_file, output_file, tolerance=80)
