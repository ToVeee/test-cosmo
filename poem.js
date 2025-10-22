const poemsContainer = document.getElementById("poemsContainer");

// Function to create a box for each student's poem
function createPoemBox(studentName, poemHTML) {
  const box = document.createElement("div");
  box.className = "poem-box";
  box.style.border = "1px solid #ccc";
  box.style.padding = "15px";
  box.style.marginBottom = "20px";
  box.style.borderRadius = "8px";
  box.style.backgroundColor = "#fdfdfd";

  const heading = document.createElement("h3");
  heading.textContent = studentName;
  box.appendChild(heading);

  const poemDiv = document.createElement("div");
  poemDiv.innerHTML = poemHTML; // keeps spans & hyperlinks active
  box.appendChild(poemDiv);

  poemsContainer.appendChild(box);
}

// Loop through all students
Object.entries(studentslist).forEach(([name, student]) => {
  if (student.poem) {
    createPoemBox(name, student.poem);
  }
});
