

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


/*
const carousel = document.getElementById('carousel');
let isDragging = false;


function dragStart() {
    isDragging = true;
}

function dragging (e) {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}


carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging);
*/

const carousel = document.getElementById('carousel');
const leftArrow = document.querySelector('#wrapper i:first-child');
const rightArrow = document.querySelector('#wrapper i:last-child');

let isDown = false;
let startX;
let scrollLeft;
let isDragging = false;

// Drag pe carousel
carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  isDragging = false;
  carousel.classList.add('dragging');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mouseup', (e) => {
  isDown = false;
  carousel.classList.remove('dragging');
  if (isDragging) e.preventDefault();
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  if (Math.abs(walk) > 5) isDragging = true;
  carousel.scrollLeft = scrollLeft - walk;
});

// Scroll când apeși săgețile
leftArrow.addEventListener('click', () => {
  // Scroll la stânga cu lățimea unui card + gap
  const cardWidth = carousel.querySelector('.card').offsetWidth;
  const gap = 16; // din CSS gap-ul între carduri
  carousel.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  const cardWidth = carousel.querySelector('.card').offsetWidth;
  const gap = 16;
  carousel.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
});




























/*

const carousel = document.getElementById("carousel");

let isDragging = false;
let startX;
let scrollLeft;

const startDragging = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX || e.touches?.[0].pageX;
  scrollLeft = carousel.scrollLeft;
};

const stopDragging = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const drag = (e) => {
  if (!isDragging) return;
  const x = e.pageX || e.touches?.[0].pageX;
  const walk = (x - startX) * 1.5; // viteza de scroll
  carousel.scrollLeft = scrollLeft - walk;
};

// Mouse
carousel.addEventListener("mousedown", startDragging);
carousel.addEventListener("mouseleave", stopDragging);
carousel.addEventListener("mouseup", stopDragging);
carousel.addEventListener("mousemove", drag);

// Touch (pentru mobil)
carousel.addEventListener("touchstart", startDragging);
carousel.addEventListener("touchend", stopDragging);
carousel.addEventListener("touchmove", drag);

*/