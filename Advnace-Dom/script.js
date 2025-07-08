"use strict";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////////////
// SCROLLING SMOOTH-----

btnScrollTo.addEventListener("click", function (e) {
  const s1coord = section1.getBoundingClientRect();

  console.log(s1coord);
  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(
  //   s1coord.left + window.pageXOffset,
  //   s1coord.top + window.pageYOffset
  // );

  window.scrollTo({
    left: s1coord.left + window.pageXOffset,
    top: s1coord.top + window.pageYOffset,
    behavior: "smooth",
  });

  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////////////////
// NAVIGATIONS -----

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////////
// TAB COMPONENTS -----

const tabs = document.querySelectorAll(".operations__tab");
const tabsConatiner = document.querySelector(".operations__tab-container");
const tabsContain = document.querySelectorAll(".operations__content");

tabsConatiner.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContain.forEach((c) => c.classList.remove("operations__content--active"));

  clicked.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////////////////////////////////////////////
// MENU FADE ANIMATIONS -----

const nav = document.querySelector(".nav");

const handler = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = e.target.closest(".nav").querySelectorAll(".nav__link");
    const logo = e.target.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener("mouseover", function (e) {
//   handler(e, 0.5);
// });
nav.addEventListener("mouseover", handler.bind(0.5));
nav.addEventListener("mouseout", handler.bind(1));

///////////////////////////////////////////////////
// STICKY NAVIGATIONS -----

const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

window.addEventListener("scroll", function () {
  // console.log(scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});

///////////////////////////////////////////////////
// THE INTERSECTIONS OBSERVER API -----

const header = document.querySelector(".header");

const stickyNav = function (entries) {
  const [entry] = entries; // Get the first and only entry
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // viewport
  threshold: 0, // trigger when header is 0% visible
  rootMargin: "-90px", // 90px before header hits top
});

headerObserver.observe(header);

///////////////////////////////////////////////////
// REVEAL SECTIONS -----

const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, //viewport
  threshold: 0.15,
});

allSection.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

///////////////////////////////////////////////////
// LAZY LOADING IMAGES -----

const imgTargets = document.querySelectorAll("img[data-src]");
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});

imgTargets.forEach((img) => imageObserver.observe(img));

///////////////////////////////////////////////////
// SLIDER -----

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

// slider.style.transform = "scale(0.5)";
// slider.style.overflow = "visible";

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
  //-100% 0% 100% 200%--
};

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;

  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "ArrowRight") nextSlide();
  e.key === "ArrowLeft" && prevSlide();
});

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "create elemnt through js <button class='btn btn-close-cookie'> got it !</button>";

// header.prepend(message);

// header.append(message);
// header.append(message.cloneNode(true));

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// const logo = document.querySelector(".nav__logo");
// console.log(logo.dataset.versionNumber);

// const h1 = document.querySelector("h1");

// const alert1 = function () {
//   alert("welcome my webpage");
// };

// h1.addEventListener("mouseenter", alert1);

// setTimeout(() => h1.removeEventListener("mouseenter", alert1), 3000);

// // going downward: child
// console.log(h1.childNodes);
// console.log(h1.children);

// // going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // going sideways: siblings
// console.log(h1.previousSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach((el) => {
//   // if (el !== h1) el.style.transform = "scale(0.5)";
// });

// event delegation ---
// Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of multiple child elements.

const list = document.querySelector(".nav__links");

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__link")) {
    console.log("click");
  }
});
