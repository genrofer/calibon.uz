let bizhaqimizda = document.querySelector(".bizhaqimizda")
let mahsulotlar = document.querySelector(".mahsulotlar")
let boglanish = document.querySelector(".boglanish")
let home = document.querySelector(".home")

let lang = document.querySelector(".select-lang");
let select = document.querySelector(".select");
let arrow = document.querySelector(".arrow"); 

bizhaqimizda.addEventListener("click", () => {
     home.classList.remove("menu_active")
})


mahsulotlar.addEventListener("click", () => {
     home.classList.remove("menu_active")
})


boglanish.addEventListener("click", () => {
     home.classList.remove("menu_active")
})


if (localStorage.getItem('language') === null) {
     localStorage.setItem('language', JSON.stringify("uz"));
}

function selectFunction() {
     if (lang.value === "uz") {
          window.location.href = "index.html";
     } else if (lang.value === "ru") {
          window.location.href = "index-ru.html";
     } else if (lang.value === "en") {
          window.location.href = "index-en.html";
     } 
}

