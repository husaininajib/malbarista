const hamburger = document.querySelector(".hamburger")
const navPanel = document.querySelector(".nav-panel")
const nav = document.querySelector("nav")
const categoryButton = document.querySelector(".category-hamburger")
const categoryPanel = document.querySelector(".category-panel")
const arrow = document.querySelector(".arrow")


hamburger.addEventListener("click", () => {
    navPanel.classList.toggle("show")
    hamburger.classList.toggle("rotate")
})
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset
    if (scrollHeight === 0) {
        nav.classList.remove("insert-border")
        
    } else {
        nav.classList.add("insert-border")
    }
})
categoryButton.addEventListener("click", () => {
    categoryPanel.classList.toggle("show-category-list")
    arrow.classList.toggle("rotate")
})