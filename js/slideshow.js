function showSlide(n) {
  if (currentIndex > cards) {
    currentIndex = 1;
  }
  Array.prototype.forEach.call(cards, (card) => {
    card.style.display = "none";
  });
  Array.prototype.forEach.call(indexes, (sliderIndex) => {
    sliderIndex.classList.remove(activeIndex);
  });
  cards[n].style.display = "flex";
  indexes[n].classList.add(activeIndex);
}
function showCurrentIndex(n) {
  showSlide((currentIndex = n));
}
