const hamburger = document.querySelector(".hamburger")
const navPanel = document.querySelector(".nav-panel")


hamburger.addEventListener("click", () => {
    navPanel.classList.toggle("show")
    hamburger.classList.toggle("rotate")
})