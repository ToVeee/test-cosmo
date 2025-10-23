
let currentPage = 1;
const perPage = 5;

function showPage(){
  sec2.innerHTML ="";

  const entri = Object.entries(doodl);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  let items = entri.slice(start, end);
  
  items.forEach(([name, file]) => {
    const imgs = document.createElement("img");                
    imgs.src = file;
    imgs.style.width = "120px";  
    imgs.style.height = "auto";
    sec2.appendChild(imgs);

    
    }); 

  document.getElementById("prev").addEventListener("click", () => {
    if(currentPage != 1) currentPage--;
    showPage();
  });
}
  document.getElementById("next").addEventListener("click", () => {
    currentPage++;
    showPage();
  });

  showPage();

  const audio= new Audio("pop.mp3");
   function play(){
   audio.play();

   }
