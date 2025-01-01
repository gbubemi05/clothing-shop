// Script for navigation bar
"use strict";
const mobileNav = document.querySelector(".nav-bar");
const mobileOpen = document.querySelector(".bi-list");
const mobileClose = document.querySelector(".bi-x-lg");
const overLay = document.querySelector(".overlay");
mobileOpen.addEventListener("click", function () {
  mobileNav.classList.add("active");
  overLay.classList.add("active");
});
mobileClose.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overLay.classList.remove("active");
});

const obj = {
  Name: "gbubemi",
  workingDays: {
    fri: {
      open: 11,
      close: 11,
    },
  },
};
const { fri } = workingDays;
console.log(open, close);
