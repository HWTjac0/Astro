var sliderCurrentIndex = 0;
const sliderCards = document.getElementsByClassName("sliderItem");
const sliderIndexes = document.getElementsByClassName("sliderIndex");

const arr = Array.prototype;

function showSlide(index) {
  if (sliderCurrentIndex > sliderCards) {
    sliderCurrentIndex = 1;
  }
  arr.forEach.call(sliderCards, (card) => {
    card.style.display = "none";
  });
  arr.forEach.call(sliderIndexes, (sliderIndex) => {
    sliderIndex.classList.remove("activeIndex");
  });
  sliderCards[index].style.display = "flex";
  sliderIndexes[index].classList.add("activeIndex");
}
function currentIndex(n) {
  showSlide((sliderCurrentIndex = n));
}

showSlide(sliderCurrentIndex);

arr.forEach.call(sliderIndexes, (index) => {
  index.addEventListener("click", () => {
    currentIndex(arr.indexOf.call(sliderIndexes, index));
  });
});
