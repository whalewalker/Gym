let images = [
  "/asset/images/home1.png",
  "/asset/images/home2.png",
  "/asset/images/home3.jpg",
  "/asset/images/home4.jpg",
  "/asset/images/home5.png",
];

let title = [
    "Fitness Equipment", 
    "Fitness Training",
    "Massage Services and Equipment", 
    "Sports Shop", 
    "StandFit.ng"
];
let content = [
  "One-Stop Shop for all Sports, Fitness, Gym Equipment and Accessories.",
  "Personalized One-on-One Workout... supportive fitness and equipment training.",
  "...touching the body, healing the mind, calming the spirit...and there was a massage on the eight day.",
  "One-stop Shop for all Sports, Fitness and Gym Equipment and Accessories.",
  "Be Active! Be Healthy!! Be Happy!!!",
];
const slide = document.querySelector(".slide");
const next = document.querySelector(".left");
const prev = document.querySelector(".right");
const pagination = document.querySelectorAll(".paginate");
const textTitle = document.querySelector(".title");
const textContent = document.querySelector(".content");


let currentImage = 0;
const MAX_LENGTH = 5;

function showImage(index) {
  slide.src = images[index];
}

function showContent(index){
    textContent.textContent = title[index];
    textTitle.innerHTML = content[index];
}

next.addEventListener("click", () => {
  currentImage++;
  if (currentImage === images.length - 1) {
    currentImage = 0;
  }
  showImage(currentImage);
  showContent(currentImage);
});

prev.addEventListener("click", () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
  showContent(currentImage);
});

window.addEventListener("DOMContentLoaded", () => {
  let randomNumber = Math.floor(Math.random() * MAX_LENGTH);
  showImage(randomNumber);
  showContent(randomNumber);
});

pagination.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("active");
    showImage(event.target.dataset.id);
    showContent(event.target.dataset.id);
  });
});
