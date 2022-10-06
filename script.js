// SLIDER MOVIE LISTS
const arrowsRight = document.querySelectorAll(".arrow-right");
const arrowsLeft = document.querySelectorAll(".arrow-left");
const movieLists = document.querySelectorAll(".movie-list");

let clickCounter = 0;

// right
arrowsRight.forEach((arrowRight, index) => {
  const numItems = movieLists[index].querySelectorAll("img").length;

  arrowRight.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 310);
    clickCounter++;
    if (numItems - (3 + clickCounter) + (3 - ratio) >= 0) {
      movieLists[index].style.transform = `translateX(${
        movieLists[index].computedStyleMap().get("transform")[0].x.value - 310
      }px)`;
    } else {
      movieLists[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// left
arrowsLeft.forEach((arrowLeft, index) => {
  const numItems = movieLists[index].querySelectorAll("img").length;

  arrowLeft.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 310);
    clickCounter++;
    if (numItems - (3 + clickCounter) + (3 - ratio) >= 0) {
      movieLists[index].style.transform = `translateX(${
        movieLists[index].computedStyleMap().get("transform")[0].x.value + 310
      }px)`;
    } else {
      movieLists[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// TOOGLE THEME DARK TO LIGHT
const toogleTheme = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
  ".container, .movie-list-container-title, .navbar-container, .menu-list, .menu-list-item-link, .sidebar, .sidebar-menu-icon, .arrow-left, footer,.footer-link, .arrow-right, .toogle-theme"
);

toogleTheme.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  toogleTheme.classList.toggle("active");
});

// ANIMATIONS
const observerContent = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("featured-content-animation");
    } else {
      entry.target.classList.remove("featured-content-animation");
    }
  });
});

const featuredContentEl = document.querySelectorAll(
  ".featured-content-1, .featured-content-2, .featured-content-3, .featured-content-4, .featured-content-5"
);
featuredContentEl.forEach((el) => observerContent.observe(el));

const observerTitle = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("movie-list-container-title-animation");
    } else {
      entry.target.classList.remove("movie-list-container-title-animation");
    }
  });
});

const listContainerTitleEl = document.querySelectorAll(
  ".movie-list-container-title"
);
listContainerTitleEl.forEach((el) => observerTitle.observe(el));
