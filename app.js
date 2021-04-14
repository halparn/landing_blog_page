//some declarations which needed
const menuElements = document.querySelectorAll(".item");
const drawer = document.querySelector("#drawer");
const navBar = document.querySelector(".nav-burger");
const closeButton = document.querySelector(".fa-times");
const body = document.querySelector("body");
const scrollBtn = document.getElementById("scroll-up");
const accordion = document.querySelectorAll(".accordion");
const accrContent = document.querySelectorAll("#accr");

// custom menu link accesing and setting into mobile navbar
menuElements.forEach((elem) => {
  const custoMenuElem = elem.firstElementChild.cloneNode(true);
  drawer.append(custoMenuElem);
});

// mobil navbar conditions to opening closing
const navBarOpenClose = (event) => {
  const target = event.target;
  const conditionEl = event.target.closest("div") || undefined;
  if (conditionEl === navBar || target === drawer) {
    drawer.classList.add("open");
  } else {
    drawer.classList.remove("open");
  }
};

// fixed button for the all the page scrool up
function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const scrollCondition = () => {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.classList.add("shown");
  } else {
    scrollBtn.classList.remove("shown");
  }
};

// accordion

accordion.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    const accordionElements = event.target.nextElementSibling;
    accordionFunc(elem, accordionElements, accordion);
  });
});

function accordionFunc(elem, accordionElements, accordion) {
  if (screen.width < 500) {
    accordion.forEach((accr) => {
      if (!(elem === accr)) {
        accr.classList.remove("active");
        accr.nextElementSibling.classList.remove("aktiv");
      }
    });
    elem.classList.toggle("active");
    accordionElements.classList.toggle("aktiv");
    accordionElements.scrollIntoView({ behavior: "smooth" });

  } else return;
}

body.onscroll = scrollCondition;

body.addEventListener("click", navBarOpenClose);
