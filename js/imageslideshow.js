// SLIDER VARS
var imageCurrentIndex = 0;
const imageSliderCards = document.getElementsByClassName("photosPage");
const imageSliderIndexes = document.getElementsByClassName("photosIndex");
// LIGHTBOX VARS
const images = [
  "imgs/thisweek/andromeda.webp",
  "imgs/thisweek/moon.webp",
  "imgs/thisweek/spacex.webp",
  "imgs/thisweek/nasa2.webp",
  "imgs/thisweek/comet.webp",
  "imgs/thisweek/nasa.webp"
];
const lightbox = document.querySelector(".lightBoxBackground");
const ligthboxImages = document.getElementById("lightBoxImages");
lightbox.style.display = "none";
const closeButton = document.querySelector(".closeRow .closeButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

var counter = 1;
// SLIDER FUNCTIONS
function showSlide(index) {
  Array.prototype.forEach.call(imageSliderCards, (card) => {
    card.style.display = "none";
  });
  Array.prototype.forEach.call(imageSliderIndexes, (sliderIndex) => {
    sliderIndex.classList.remove("activePageIndex");
  });
  imageSliderCards[index].style.display = "flex";
  imageSliderIndexes[index].classList.add("activePageIndex");
}
function currentIndex(n) {
  showSlide((imageCurrentIndex = n));
}

showSlide(imageCurrentIndex);

Array.prototype.forEach.call(imageSliderIndexes, (index) => {
  index.addEventListener("click", () => {
    currentIndex(Array.prototype.indexOf.call(imageSliderIndexes, index));
  });
});
// LIGHTBOX FUNCTION
function createImage(path, className, hasId, idName){
  const image = document.createElement("img");
  image.setAttribute("src", path);
  if(hasId){
    image.setAttribute("id", idName);
  }
  image.setAttribute("class", className);
  image.style.width = "60vw";
  image.style.height = "70vh";
  image.style.objectFit = "cover";
  ligthboxImages.appendChild(image);
}

createImage(images[5], "lightBoxImage" , true, "lastClone");
for(const path of images){
  createImage(path, "lightBoxImage", false, "");
}
createImage(images[0], "lightBoxImage", true, "firstClone");
ligthboxImages.style.transform = 'translateX(' + (-counter*100) + '%)';


Array.prototype.forEach.call(imageSliderCards, (card) => {
  card.addEventListener("click", () => {
    lightbox.style.display = "block";
    document.body.style.overflowY = "hidden";
  });
});

closeButton.addEventListener("click", () => {
  lightbox.style.display = "none";
  document.body.style.overflowY = "scroll";
});
// LightBox buttons handlers
nextButton.addEventListener("click", () =>{
  counter++;  
  ligthboxImages.style.transition = "transform 0.3s ease-out";
  ligthboxImages.style.transform = 'translateX(' + (-counter*100) + '%)';
  console.log(counter);
});

prevButton.addEventListener("click", () => {
  counter--;
  ligthboxImages.style.transition = "transform 0.3s ease-out";
  ligthboxImages.style.transform = 'translateX(' + (-counter*100) + '%)';
  console.log(counter);
});
// Slider loop 
ligthboxImages.addEventListener("transitionend", ()=>{
  const images = document.getElementsByClassName("lightBoxImage");
  if(images[counter].id === "lastClone" ){
    counter = 6;
    ligthboxImages.style.transition = "none";
    ligthboxImages.style.transform = 'translateX(-600%)';
    console.log(counter);
  }
  if(images[counter].id === "firstClone" ){
    counter = 1;
    ligthboxImages.style.transition = "none";
    ligthboxImages.style.transform = 'translateX(-100%)';
    console.log(counter);
  }
});
