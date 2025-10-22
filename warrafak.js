
// ---------------------------
// Avatar generator
// ---------------------------
function avatarFor(name) {
  const encoded = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encoded}&background=ffd6e8&color=4a0e23&rounded=true&size=256`;
}

// ---------------------------
// Render students
// ---------------------------
const studentGrid = document.getElementById("studentGrid");

function renderStudents(list) {
  studentGrid.innerHTML = "";

  if (!list.length) {
    studentGrid.innerHTML = '<p class="empty">No students found.</p>';
    return;
  }

  list.forEach((fullName, idx) => {
    const student = studentslist[fullName]; // access the student object by name

    const card = document.createElement("article");
    card.className = "student-card";
    card.innerHTML = `
      <img class="student-img" src="${student.PFP || avatarFor(fullName)}" alt="${fullName}">
      <div class="student-body">
        <h3 class="student-name">${fullName}</h3>
        <p class="student-role">Student</p>
        <div class="student-actions">
          <button class="btn view-btn" data-idx="${idx}">View</button>
        </div>
      </div>
    `;

    studentGrid.appendChild(card);
  });
}


  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = Number(e.currentTarget.dataset.idx);
      openModal(list[idx]);
    });
  });


// ---------------------------
// Modal
// ---------------------------
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalClose = document.getElementById("modalClose");

function openModal(name) {
  modalImg.src = avatarFor(name);
  modalName.textContent = name;
  modalRole.textContent = "Role: Student";
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

// ---------------------------
// Search
// ---------------------------
document.getElementById("searchInput").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();
  const filtered = Object.keys(studentslist).filter(s => s.toLowerCase().includes(q));
  renderStudents(filtered);
});

// ---------------------------
// Theme toggle
// ---------------------------
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "💗";
});

// ---------------------------
// Hearts
// ---------------------------
const heartsContainer = document.querySelector(".hearts-container");
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 600);

// ---------------------------
// Initial render
// ---------------------------
renderStudents(Object.keys(studentslist));
