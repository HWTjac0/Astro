import {createPlanets} from "./solarsystem.js";
import {sliderSlideShow} from "./sliderslideshow.js";

const navContent = document.getElementsByClassName("navItem");
const transitionDiv = document.getElementById("transition");
const transitionTitle = document.querySelector("#transition h1");

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
  tl.to("#transition h1",{
    duration: 0.4,
    translateY: -40,
    transformOrigin: "bottom",
    opacity: 1,
  });
  tl.to("#transition h1",{
    duration: 0.4,
    translateY: -80,
    transformOrigin: "top",
    opacity: 0,
    delay: 0.5
  });
  tl.to("#transition", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom",
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
  sync: true,
  views: [
    {
      namespace: "home",
      afterEnter(){
        window.onscroll = () => {
          const arrow = document.getElementById("direction");
          if (
            document.body.scrollTop > window.innerHeight/8 ||
            document.documentElement.scrollTop > window.innerHeight/8
          ) {
            arrow.style.opacity = "0";
          } else {
            arrow.style.opacity = "1";
          }
        };
        createPlanets();
        sliderSlideShow();
      }
    },
    {
      namespace: "about",
      afterEnter(){
  /*
        imageSlideShow();
        imageCursor();
        */
      }
    },
    {
      namespace: "articles",
      afterEnter(){
       /*
        imageSlideShow();
        imageCursor();
        */
      }
    },
    {
      namespace: "contact",
      afterEnter(){
        /*
        imageSlideShow();
        imageCursor();
        */
      }
    },
  ],
  transitions: [
    {
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(500);
            done();
        }
    }
  ]
});
