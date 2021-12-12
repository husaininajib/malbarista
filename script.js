const hamburger = document.querySelector(".hamburger")
const navPanel = document.querySelector(".nav-panel")
const nav = document.querySelector("nav")
const categoryButton = document.querySelector(".category-hamburger")
const categoryPanel = document.querySelector(".category-panel")
const arrow = document.querySelector(".arrow")
const arrowHome = document.querySelector(".arrow-to-home")
const header = document.querySelector("header")
const closeButton = document.querySelectorAll(".close")
const orderNowButton = document.querySelector(".order-now-button")
const foodpandaPopup = document.querySelector(".foodpanda-popup")
const reviewPopup = document.querySelector(".review-popup")
const reviewButton = document.querySelector(".review-button")


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


orderNowButton.addEventListener("click", () => {
    foodpandaPopup.classList.add("show-popup")
})
reviewButton.addEventListener("click", () => {
    reviewPopup.classList.add("show-review")
})
closeButton.forEach(button => {
    button.addEventListener("click", () => {
        foodpandaPopup.classList.remove("show-popup")
        reviewPopup.classList.remove("show-review")
    })
})

