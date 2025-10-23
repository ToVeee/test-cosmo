  const galleryTrack = document.getElementById("gallery-track");

  // Generate <img> elements automatically
  function populateGallery(imgArray) {
    galleryTrack.innerHTML = ""; // clear any existing images

    // Duplicate images for seamless scroll
    const fullArray = [...imgArray, ...imgArray];

    fullArray.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Project ${index + 1}`;
      galleryTrack.appendChild(img);
    });
  }

  populateGallery(images);
</script>

<style>
  .scroll-gallery {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 10px 0;
    background-color: #111; /* dark background */
  }

  .scroll-gallery-track img {
    display: inline-block;
    width: 200px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .scroll-gallery-track img:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  }

  /* Optional: hide scrollbar in Webkit browsers */
  .scroll-gallery::-webkit-scrollbar {
    display: none;
  }
</style>
✅ Features:

Dark background and nicely spaced images.

Hover effect with slight scale and shadow.

Automatic generation from an array.

Inline CSS in the same HTML file.

If you want, I can also add next/prev buttons like your previous pagination so it scrolls exactly 5 images at a time but still uses this automatic generation.

Do you want me to add that?







You said:
turn the style into attribute4s for img variable


ChatGPT said:
Ah, you want to apply the CSS directly as inline style attributes on each <img> instead of using a <style> block or class. That’s totally doable. Here’s your updated code:

html
Copy code
<section class="scroll-gallery" id="gallery">
  <div class="scroll-gallery-track" id="gallery-track">
    <!-- Images will be added here automatically -->
  </div>
</section>

<script>
  // Array of PNGs
  const images = [
    "images/sample1.png",
    "images/sample2.png",
    "images/sample3.png",
    "images/sample4.png"
    // add more as needed
  ];

  const galleryTrack = document.getElementById("gallery-track");

  function populateGallery(imgArray) {
    galleryTrack.innerHTML = ""; // clear any existing images

    // Duplicate for seamless scroll
    const fullArray = [...imgArray, ...imgArray];

    fullArray.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Project ${index + 1}`;

      // Inline styles
      img.style.display = "inline-block";
      img.style.width = "200px";
      img.style.height = "150px";
      img.style.objectFit = "cover";
      img.style.marginRight = "10px";
      img.style.borderRadius = "8px";
      img.style.cursor = "pointer";
      img.style.transition = "transform 0.3s, box-shadow 0.3s";

      // Hover effect using JS
      img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
        img.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
      });
      img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
        img.style.boxShadow = "none";
      });

      galleryTrack.appendChild(img);
    });

    // Gallery container style as inline
    galleryTrack.parentElement.style.width = "100%";
    galleryTrack.parentElement.style.overflowX = "auto";
    galleryTrack.parentElement.style.overflowY = "hidden";
    galleryTrack.parentElement.style.whiteSpace = "nowrap";
    galleryTrack.parentElement.style.padding = "10px 0";
    galleryTrack.parentElement.style.backgroundColor = "#111";
  }

  populateGallery(images);
</script>
