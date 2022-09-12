let bizhaqimizda = document.querySelector(".bizhaqimizda")
let mahsulotlar = document.querySelector(".mahsulotlar")
let boglanish = document.querySelector(".boglanish")

let lang = document.querySelector(".select-lang");
let select = document.querySelector(".select");
let arrow = document.querySelector(".arrow"); 

bizhaqimizda.addEventListener("click", () => {
     window.location.reload()
     window.location.href = 'index.html#bizhaqimizda'
})


mahsulotlar.addEventListener("click", () => {
     window.location.reload()
     window.location.href = 'index.html#mahsulotlar'
})


boglanish.addEventListener("click", () => {
     window.location.reload()
     window.location.href = 'index.html#boglanish'
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

