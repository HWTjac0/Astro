  const mouseCursor = document.querySelector(".circleCursor");
  const mouseCenter = document.querySelector(".cursorCenter");
  const imageContainer = document.querySelectorAll(".photoContainer > img");
  mouseCursor.style.display = "none";
  mouseCenter.style.display = "none";
  Array.prototype.forEach.call(imageContainer, (image) => {
    image.addEventListener("mouseenter", function () {
      mouseCursor.style.height = "60px";
      mouseCursor.style.width = "60px";
      document.body.style.cursor = "none";
    });
    image.addEventListener("mouseleave", function () {
      mouseCursor.style.height = "0px";
      mouseCursor.style.width = "0px";
      mouseCursor.style.display = "none";
      mouseCenter.style.display = "none";
      document.body.style.cursor = "default";
    });

    image.addEventListener("mousemove", (e) => {
      mouseCursor.setAttribute(
        "style",
        "top: " + (e.pageY - 30) + "px; left: " + (e.pageX - 30) + "px;"
      );
      mouseCenter.setAttribute(
        "style",
        "top: " + (e.pageY - 31) + "px; left: " + (e.pageX - 15) + "px;"
      );
    });
  });

