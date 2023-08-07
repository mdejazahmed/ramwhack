let menuIcon = document.getElementById("menuIcon");
let closeIcon = document.getElementById("closeIcon");
let mobileNav = document.querySelector("#mobileNav");
let serviceBtn = document.getElementById("mobileServiceBtn");
let mobileFloatDiv = document.getElementById("mobileFlotService");
let heroImg = document.querySelectorAll(".lgHeroImg");
let serviceIcon = document.querySelector(".mobileNavbarServiceIcon");
let goTopBtn = document.querySelector(".goTopBtn");

let url = window.location.href;
if (!url.includes("index.html")) {
  serviceIcon.style.display = "none";
}

let img1 =
  screen.width <= 786
    ? "assets/images/mobileHero1.png"
    : "assets/images/hero1.png";
let img2 =
  screen.width <= 786
    ? "assets/images/mobileHero2.png"
    : "assets/images/hero2.png";
let img3 =
  screen.width <= 786
    ? "assets/images/mobileHero3.png"
    : "assets/images/hero3.png";



menuIcon.addEventListener("click", () => {
  mobileNav.classList.add("navOpen");
});
closeIcon.addEventListener("click", () => {
  mobileNav.classList.remove("navOpen");
  mobileFloatDiv.style.display = "none";
});

serviceBtn.addEventListener("click", () => {

  mobileFloatDiv.style.display = "flex";
});
 // when the user scroll from tom 100px then show hide button
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goTopBtn.classList.add("goTopOpen");
  } else if (
    document.body.scrollTop === 0 ||
    document.documentElement.scrollTop === 0
  ) {
    goTopBtn.classList.remove("goTopOpen");
  }
}
  // When the user scrolls document, run the function
  window.onscroll = function () {
    scrollFunction();
  };
 

// function for when click top btn
goTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
if (url.includes("index.html")) {
  if(screen.width <=786 ){
    heroImg[0].src = img1;
    heroImg[1].src = img2;
    heroImg[2].src = img3;
  }
 
}