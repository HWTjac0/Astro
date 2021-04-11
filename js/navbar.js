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
