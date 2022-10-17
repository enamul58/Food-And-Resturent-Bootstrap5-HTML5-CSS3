//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  let scrollValue = document.documentElement.scrollTop;
  console.log(scrollValue);
  if (scrollValue > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (value) {
  value.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      console.log(obj);
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }
  counter("count-1", 1, 1287, 3000);
  counter("count-2", 100, 2000, 2500);
  counter("count-3", 0, 1440, 3000);
  counter("count-4", 0, 1000, 3000);
});
