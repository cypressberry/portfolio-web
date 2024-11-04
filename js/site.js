
js_content = """
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
"""

# Saving these files to provide to the user
import os

# Directory to save files
output_dir = '/mnt/data/veart_carrd_clone'
os.makedirs(output_dir, exist_ok=True)

# Write the files
with open(os.path.join(output_dir, "index.html"), "w") as html_file:
    html_file.write(html_content)

with open(os.path.join(output_dir, "styles.css"), "w") as css_file:
    css_file.write(css_content)

with open(os.path.join(output_dir, "script.js"), "w") as js_file:
    js_file.write(js_content)

output_dir