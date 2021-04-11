const navContent = document.getElementsByClassName("navItem");
const transitionDiv = document.getElementById("transition");
const transitionTitle = document.querySelector("#transition h1");
var subPageTitle;

Array.prototype.forEach.call(navContent, element => {
    element.addEventListener("click", () => {
        transitionTitle.innerHTML = element.innerHTML;
    });
});
function pageTransition() {
  let tl = gsap.timeline();

  tl.to("#transition", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "top",
    stagger: 0.2,
  });
  tl.to("#transition", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom",
    stagger: 0.1,
    delay: 1,
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
            console.log( data.next.namespace);
            pageTransition();
            await delay(500);
            done();
        }
    }
  ]
});
