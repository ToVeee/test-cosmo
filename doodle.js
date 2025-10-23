  const galleryTrack = document.getElementById("gallery-track");

  // Generate <img> elements automatically
  function populateGallery(doodl) {
    galleryTrack.innerHTML = ""; // clear any existing images

    // Duplicate images for seamless scroll
    const fullArray = [...doodl, ...doodl];

    fullArray.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Project ${index + 1}`;
      galleryTrack.appendChild(img);
    });
  }

  populateGallery(images);
