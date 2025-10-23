// cos.js

const sec2 = document.getElementById("works");
let currentPage = 1;
const perPage = 5;
let filteredList = Object.entries(studentslist); // initial full list

function showPage(list = filteredList) {
  sec2.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentItems = list.slice(start, end);

  currentItems.forEach(([name, files]) => {
    const div = document.createElement("div");
    div.className = "student-box";
    div.style.border = "1px solid #ccc";
    div.style.padding = "15px";
    div.style.marginBottom = "20px";
    div.style.borderRadius = "6px";
    div.style.backgroundColor = "#fdfdfd";

    // Add name
    const title = document.createElement("h3");
    title.textContent = name;
    div.appendChild(title);

    // Add file links
    function addFileLink(label, src) {
      if (!src) return;
      const fileDiv = document.createElement("div");
      fileDiv.style.border = "1px dashed #aaa";
      fileDiv.style.padding = "8px";
      fileDiv.style.margin = "5px 0";

      const link = document.createElement("a");
      link.href = src;
      link.textContent = label;
      link.target = "_blank";
      link.style.textDecoration = "none";
      link.style.color = "#ff69b4";

      fileDiv.appendChild(link);
      div.appendChild(fileDiv);
    }

    addFileLink("📘 Tagalog Poem", files.TagalogPoem);
    addFileLink("📗 English Poem", files.EnglishPoem);
    addFileLink("📙 Six-Word Story (English)", files.SixWordE);
    addFileLink("📕 Six-Word Story (Tagalog)", files.SixWordT);

    sec2.appendChild(div);
  });

  // Optional: disable prev/next if at bounds
  document.getElementById("orev").disabled = currentPage === 1;
  document.getElementById("next").disabled = currentPage >= Math.ceil(list.length / perPage);
}

// Pagination buttons
document.getElementById("orev").addEventListener("click", () => {
  if (currentPage > 1) currentPage--;
  showPage();
});

document.getElementById("next").addEventListener("click", () => {
  const totalPages = Math.ceil(filteredList.length / perPage);
  if (currentPage < totalPages) currentPage++;
  showPage();
});

// Search functionality
document.getElementById("searchInput").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();
  filteredList = Object.entries(studentslist).filter(([name]) =>
    name.toLowerCase().includes(q)
  );

  currentPage = 1;
  showPage();
});

// Initial render
showPage();
