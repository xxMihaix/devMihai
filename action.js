

document.addEventListener('DOMContentLoaded', function(){
    const menu = document.getElementById('menu');
    
    menu.addEventListener('click', function(){
        const dropdown = document.getElementById('dropdown-container');
        const dropdownStyle = window.getComputedStyle(dropdown);
        if(dropdownStyle.top === "-150px"){
            dropdown.classList.add('active');
        }
        else{
            dropdown.classList.remove('active');
        }
    })
})


const container = document.getElementById('carousel');
let scrollTargetX = container.scrollLeft;
const scrollStep = 286;

function clampScroll(value){
  const maxScroll = container.scrollWidth - container.clientWidth;
  return Math.max(0, Math.min(value, maxScroll));
}

const btnRight = document.getElementById('rightBtn');
btnRight.addEventListener('click', () => {
  
  scrollTargetX += scrollStep;
  scrollTargetX = clampScroll(scrollTargetX);
  container.scrollTo({ left: scrollTargetX, behavior: 'smooth'});
}) 

const btnLeft = document.getElementById('leftBtn');
btnLeft.addEventListener('click', () => {
  
  scrollTargetX -= scrollStep;
  scrollTargetX = clampScroll(scrollTargetX);
  container.scrollTo({ left: scrollTargetX, behavior: 'smooth'});
})













/*
const container = document.getElementById("carousel");
let scrollTargetX = container.scrollLeft;
const SCROLL_STEP = 280; // 270 width + 10 gap

function clampScroll(value) {
  const maxScroll = container.scrollWidth - container.clientWidth;
  return Math.max(0, Math.min(value, maxScroll));
}

document.getElementById("rightBtn").addEventListener("click", () => {
  scrollTargetX += SCROLL_STEP;
  scrollTargetX = clampScroll(scrollTargetX);
  container.scrollTo({ left: scrollTargetX, behavior: "smooth" });
});

document.getElementById("leftBtn").addEventListener("click", () => {
  scrollTargetX -= SCROLL_STEP;
  scrollTargetX = clampScroll(scrollTargetX);
  container.scrollTo({ left: scrollTargetX, behavior: "smooth" });
});

*/
