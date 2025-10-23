let currentPage = 1;
const perPage = 5;

const sec2 = document.getElementById("sec2");
const audio = new Audio("pop.mp3");

function play() {
  audio.play();
}

function showPage() {
  sec2.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const items = doodl.slice(start, end);

  items.forEach((file) => {
    const box = document.createElement("div");
    box.className = "image-box";

    const img = document.createElement("img");
    img.src = file;

    box.appendChild(img);
    box.addEventListener("click", play); // play audio when box clicked
    sec2.appendChild(box);
  });
}

// Pagination
document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage();
  }
});

document.getElementById("next").addEventListener("click", () => {
  const maxPage = Math.ceil(doodl.length / perPage);
  if (currentPage < maxPage) {
    currentPage++;
    showPage();
  }
});

// Initial load
showPage();

