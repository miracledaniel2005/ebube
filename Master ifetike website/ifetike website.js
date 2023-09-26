const barEl = document.querySelector(".fa-bars")
const closeEl = document.querySelector(".fa-close")
const navEl = document.querySelector("#all-ul")
let nestedEl = document.querySelector("#nested")
let nestEl = document.querySelector("#nested-in")
nestedEl.addEventListener("click", function() {
    nestEl.style.display = 'block'
})
barEl.addEventListener("click", function() {
    navEl.style.right = "0%"
})

closeEl.addEventListener("click", function() {
    navEl.style.right = "-200%"
})

let close = document.querySelector(".click")
let close2 = document.querySelector(".click2")
let close3 = document.querySelector(".click3")
let close4 = document.querySelector(".click4")
let close5 = document.querySelector(".click5")
let close6 = document.querySelector(".click6")
let close7 = document.querySelector(".click7")
let close8 = document.querySelector(".click8")
let close9 = document.querySelector(".click9")
let close10 = document.querySelector(".click10")
let close11 = document.querySelector(".click11")

close.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close2.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close3.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close4.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close5.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close6.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close7.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close8.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close9.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close10.addEventListener("click", function() {
    navEl.style.right = "-200%"
})
close11.addEventListener("click", function() {
    navEl.style.right = "-200%"
})

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight
      let elementTop = reveals[i].getBoundingClientRect().top
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active")
      } else {
        reveals[i].classList.remove("active")
      }
    }
  }
  
  window.addEventListener("scroll", reveal)