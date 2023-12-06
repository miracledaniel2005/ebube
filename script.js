window.onscroll = () => {
    const header  = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    // menuBar.classList.remove("bx-x");
    // navContainer.classList.remove("active");
    // navDisplay.classList.remove("display");
    // navDisplay2.classList.remove("display");
}

const hover = document.querySelector(".hover"),
activate = document.querySelector(".activate1"),
hover2 = document.querySelector(".hover2"),
activate2 = document.querySelector(".activate2"),
displayLink1 = document.getElementById("display1"),
navDisplay = displayLink1.querySelector("ul"),
displayLink2 = document.getElementById("display2"),
navDisplay2 = displayLink2.querySelector("ul"),
menuBar = document.getElementById("menu-icon"),
navContainer = document.querySelector(".nav-container"),
iconBar1 = document.getElementById("icon1"),
iconBar2 = document.getElementById("icon2");

hover.onmouseenter = () => {
    activate.classList.add("activate");
}

hover.onmouseleave = () => {
    activate.classList.remove("activate");
}

hover2.onmouseenter = () => {
    activate2.classList.add("activate");
}

hover2.onmouseleave = () => {
    activate2.classList.remove("activate");
}

activate.addEventListener("click", () => {
    navDisplay.classList.toggle("display");
    iconBar1.classList.toggle("bx-chevron-up");
});

activate2.addEventListener("click", () => {
    navDisplay2.classList.toggle("display");
    iconBar2.classList.toggle("bx-chevron-up");
});

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("bx-x");
    navContainer.classList.toggle("active");
    navDisplay.classList.remove("display");
    navDisplay2.classList.remove("display");
    iconBar1.classList.remove("bx-chevron-up");
    iconBar2.classList.remove("bx-chevron-up");
});