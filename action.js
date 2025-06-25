

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
const scrollStep = 288; /*286 */

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

//  Buttons

const buttons = document.querySelectorAll('.nv-btn');

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    const target = button.dataset.target;
    const targetElement = document.getElementById(target);

    if(targetElement){
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset -100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth'});
    }

  })
})

/////////////////////////////////////////

document.getElementById('btnn1').addEventListener('click', function() {
  window.location.href = 'https://en.wikipedia.org/wiki/HTML';
})

document.getElementById('btnn2').addEventListener('click', function() {
  window.location.href = 'https://en.wikipedia.org/wiki/CSS';
})

document.getElementById('btnn3').addEventListener('click', function() {
  window.location.href = 'https://en.wikipedia.org/wiki/JavaScript';
})

document.getElementById('btnn4').addEventListener('click', function() {
  window.location.href = 'https://en.wikipedia.org/wiki/PHP';
})

document.getElementById('btnn5').addEventListener('click', function() {
  window.location.href = 'https://en.wikipedia.org/wiki/MySQL';
})

/////////////////////////////////////////

document.getElementById('ePlantsSite').addEventListener('click', function(){
  window.location.href = 'https://eplants.mihaii.com/';
})

document.getElementById('ProfinexSite').addEventListener('click', function(){
  window.location.href = 'https://profinex.mihaii.com/';
})

////////////////////////////////////////


const left0 = document.getElementById('left0');
const right0 = document.getElementById('right0');
const display1 = document.getElementById('ePlantsImg');

const imagess = [
  'ProjectsJpg/ePlants/ePlants1.jpg',
  'ProjectsJpg/ePlants/ePlants2.jpg',
  'ProjectsJpg/ePlants/ePlants3.jpg',
  'ProjectsJpg/ePlants/ePlants4.jpg'
];

let curentIndex0 = 0;
display1.src = imagess[curentIndex0];

right0.addEventListener('click', function() {
  display1.style.opacity = '0';

  setTimeout(() => {
    curentIndex0 = (curentIndex0 + 1 + imagess.length) % imagess.length;

    display1.src = imagess[curentIndex0];

    display1.style.opacity = '1';
  }, 300);
})

left0.addEventListener('click', function() {
  display1.style.opacity = '0';

  setTimeout(() => {
    curentIndex0 = (curentIndex0 - 1 + imagess.length) % imagess.length;

    display1.src = imagess[curentIndex0];

    display1.style.opacity = '1';
  }, 300);
})

////////////////////////////////////////


const left = document.getElementById('left');
const right = document.getElementById('right');
const display2 = document.getElementById('ProfinexImg');

const images = [
  'ProjectsJpg/Profinex/Profinex1.jpg',
  'ProjectsJpg/Profinex/Profinex2.jpg',
  'ProjectsJpg/Profinex/Profinex3.jpg',
  'ProjectsJpg/Profinex/Profinex4.jpg'
];

let curentIndex = 0;
display2.src = images[curentIndex];

right.addEventListener('click', function() {
  display2.style.opacity = '0';

  setTimeout(() => {
    curentIndex = (curentIndex + 1 + images.length) % images.length;

    display2.src = images[curentIndex];

    display2.style.opacity = '1';
  }, 300);
})

left.addEventListener('click', function() {
  display2.style.opacity = '0';

  setTimeout(() => {
    curentIndex = (curentIndex - 1 + images.length) % images.length;

    display2.src = images[curentIndex];

    display2.style.opacity = '1';
  }, 300);
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
