const sec2 = document.getElementById("works");
let currentPage = 1;
const perPage = 5;

function showPage(list = Object.entries(studentslist)) {
  sec2.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentItems = list.slice(start, end);

  currentItems.forEach(([name, files]) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "15px";
    div.style.marginBottom = "20px";
    div.style.borderRadius = "6px";
    div.style.backgroundColor = "#fdfdfd";

    const title = document.createElement("h3");
    title.textContent = name;
    div.appendChild(title);

    function addFileLink(label, src) {
      if (src) {
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
    }

    addFileLink("📘 Tagalog Poem", files.TagalogPoem);
    addFileLink("📗 English Poem", files.EnglishPoem);
    addFileLink("📙 Six-Woord Filash-fiction (English)", files.SixWordE);
    addFileLink("📕 Six-Word Flash-Fiction (Tagalog)", files.SixWordT);

    sec2.appendChild(div);
  });
}

// Pagination buttons
document.getElementById("orev").addEventListener("click", () => {
  if (currentPage > 1) currentPage--;
  showPage();
});

document.getElementById("next").addEventListener("click", () => {
  const totalPages = Math.ceil(Object.keys(studentslist).length / perPage);
  if (currentPage < totalPages) currentPage++;
  showPage();
});

showPage();

// 🔍 SEARCH FIX
document.getElementById("searchInput").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();
  const filtered = Object.entries(studentslist).filter(([name]) =>
    name.toLowerCase().includes(q)
  );

  currentPage = 1; // reset to first page
  showPage(filtered.length ? filtered : Object.entries(studentslist));
});

