const doodl = [
  "CamScanner 10-20-25 14.24_2.jpg",
  "CamScanner 10-20-25 14.27_1.jpg",
  "CamScanner 10-20-25 14.28_1.jpg",
  "CamScanner 10-20-25 15.27_1.jpg",
  "CamScanner 10-20-25 15.28_1.jpg",
  "CamScanner 10-20-25 15.28(1)_1.jpg",
  "CamScanner 10-20-25 15.25(1)_1.jpg",
  "CamScanner 10-20-25 15.25(2)_1.jpg",
  "CamScanner 10-20-25 15.26_1.jpg",
  "CamScanner 10-20-25 15.22_1.jpg",
  "CamScanner 10-20-25 15.23_1.jpg",
  "CamScanner 10-20-25 15.23(1)_1.jpg",
  "CamScanner 10-20-25 15.24_1.jpg",
  "CamScanner 10-20-25 15.24(1)_1.jpg",
  "CamScanner 10-20-25 15.25_1.jpg",
  "CamScanner 10-20-25 14.29_1.jpg",
  "CamScanner 10-20-25 14.30_1.jpg",
  "CamScanner 10-20-25 14.31_1.jpg",
  "CamScanner 10-20-25 15.30_1.jpg",
  "CamScanner 10-20-25 15.31_1.jpg",
  "CamScanner 10-20-25 14.33_1.jpg",
  "CamScanner 10-20-25 14.33(1)_1.jpg",
  "CamScanner 10-20-25 14.34_1.jpg",
  "CamScanner 10-20-25 15.21_1.jpg",
  "CamScanner 10-20-25 15.21(1)_1.jpg",
  "CamScanner 10-20-25 15.21(2)_1.jpg",
  "CamScanner 10-20-2514.34(1)_1.jpg",
  "CamScanner 10-20-25 14.35_1.jpg",
  "CamScanner 10-20-25 15.20_1.jpg"
];

const sec2 = document.getElementById("works");
let currentPage = 1;
const perPage = 5;

function showPage() {
  sec2.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentItems = doodl.slice(start, end); // use doodl array here

  currentItems.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.style.border = "1px solid #ccc";
    img.style.padding = "15px";
    img.style.marginBottom = "20px"; // fixed typo
    img.style.borderRadius = "6px";
    sec2.appendChild(img);
  });
}

// Pagination buttons
document.getElementById("orev").addEventListener("click", () => {
  if (currentPage > 1) currentPage--;
  showPage();
});

document.getElementById("next").addEventListener("click", () => {
  const totalPages = Math.ceil(doodl.length / perPage); // use doodl length
  if (currentPage < totalPages) currentPage++;
  showPage();
});

// Initial load
showPage();
