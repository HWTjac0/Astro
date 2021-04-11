const navContent = document.querySelectorAll(".navList li a ");
var subPageTitle;

Array.prototype.navContent.forEach.call((element) => {
  element.addEventListener("click", () => {
    subPageTitle = element.textContent;
  });
});

function pageTransition() {
  var tl = gsap.timeline();

  tl.to("#transition", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });

  tl.to("#transition", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}
barba.init({
  transitions: [
    {
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1500);
            done();
        },
    },
  ],
});
