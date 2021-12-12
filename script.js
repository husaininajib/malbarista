const hamburger = document.querySelector(".hamburger")
const navPanel = document.querySelector(".nav-panel")
const nav = document.querySelector("nav")
const categoryButton = document.querySelector(".category-hamburger")
const categoryPanel = document.querySelector(".category-panel")
const arrow = document.querySelector(".arrow")
const arrowHome = document.querySelector(".arrow-to-home")
const header = document.querySelector("header")


hamburger.addEventListener("click", () => {
    navPanel.classList.toggle("show")
    hamburger.classList.toggle("rotate")
})
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset
    const headerOffsetTop = header.offsetTop
    const headerHeight = header.clientHeight
    if (scrollHeight === 0) {
        nav.classList.remove("insert-border")
        arrowHome.classList.remove("appear")
        
    } else {
        nav.classList.add("insert-border")
    }
    if (scrollHeight > headerHeight) {
        console.log("yes")
        arrowHome.classList.add("appear")
    }
})
categoryButton.addEventListener("click", () => {
    categoryPanel.classList.toggle("show-category-list")
    arrow.classList.toggle("rotate")
})
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset
    // const sectionOffset = 
})

const section = document.querySelectorAll("section")

