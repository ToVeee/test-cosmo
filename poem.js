
    const poemsContainer = document.getElementById("poemsContainer");

    // Create a box for each student's poem
    function createPoemBox(studentName, poemHTML) {
      const box = document.createElement("div");
      box.className = "poem-box";

      const heading = document.createElement("h3");
      heading.textContent = studentName;
      box.appendChild(heading);

      const poemDiv = document.createElement("div");
      poemDiv.innerHTML = poemHTML; // preserves HTML like spans & links
      box.appendChild(poemDiv);

      poemsContainer.appendChild(box);
    }

    // Loop through all students
    Object.entries(studentslist).forEach(([name, student]) => {
      // Check for multiple possible poem attributes
      const poemKeys = ['poem'];
      poemKeys.forEach(key => {
        if (student[key]) {
          createPoemBox(name, student[key]);
        }
      });
    });
