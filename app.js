// header scroll effect
window.addEventListener("scroll", () => {
  const top = document.querySelector(".top");
  const header = document.querySelector("header");
  if (window.pageYOffset != 0) {
    top.style.display = "block";
    header.classList.add("sticky");
  } else {
    top.style.display = "none";
    header.classList.remove("sticky");
  }
});

// products item change
let btn = document.querySelectorAll("#products .products-container .list .btn");
let items = document.querySelectorAll("#products .products-container .item");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    let j = 0;
    while (j < btn.length) {
      btn[j++].classList.remove("active");
    }

    btn[i].classList.add("active");

    if (btn[i].classList.contains("active")) {
      items.forEach((item) => {
        item.classList.remove("appear");
      });
      items[i].classList.add("appear");
    }
  });
}

// menu open and close
let menu_btn = document.querySelector("header .menu-btn");
let navbar = document.querySelector("header .navbar");
let close_btn = document.querySelector("header .navbar .close");

menu_btn.addEventListener("click", () => {
  navbar.classList.add("open");
});

close_btn.addEventListener("click", () => {
  navbar.classList.remove("open");
});
