const hamburger = document.querySelector(".hamburger")
const navPanel = document.querySelector(".nav-panel")
const nav = document.querySelector("nav")
const navLink = document.querySelectorAll(".nav-link")
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
        arrowHome.classList.add("appear")
    }
})
navLink.forEach(list => {
    list.addEventListener("click", () => {
    navPanel.classList.remove("show")
    hamburger.classList.remove("rotate")

    })
})

const categoryButton = document.querySelector(".category-hamburger")
const categoryPanel = document.querySelector(".category-panel")

categoryButton.addEventListener("click", () => {
    categoryPanel.classList.toggle("show-category-list")
    arrow.classList.toggle("rotate")
})

const closeButton = document.querySelectorAll(".close")
const orderNowButton = document.querySelectorAll(".order-now-button")
const foodpandaPopup = document.querySelector(".foodpanda-popup")
const reviewPopup = document.querySelector(".review-popup")
const reviewButton = document.querySelector(".review-button")

orderNowButton.forEach(button => {
    button.addEventListener("click", () => {
        foodpandaPopup.classList.add("show-popup")
    })
})
// orderNowButton.addEventListener("click", () => {
//     foodpandaPopup.classList.add("show-popup")
// })
reviewButton.addEventListener("click", () => {
    reviewPopup.classList.add("show-review")
})
closeButton.forEach(button => {
    button.addEventListener("click", () => {
        foodpandaPopup.classList.remove("show-popup")
        reviewPopup.classList.remove("show-review")
    })
})

const reviewTextarea = document.querySelector("textarea")
const username = document.querySelector("#username")
const reviewSubmitButton = document.querySelector(".review-submit-btn")
const form = document.querySelector("form")
const successText = document.querySelector(".review-success-container")

form.addEventListener("submit", (ev) => {
    const customerReview = reviewTextarea.value
    const usernameValue = username.value
    ev.preventDefault()
    if (customerReview === "" || customerReview == null) {
        console.log("no review")
    } else {
        form.reset()
        successText.classList.add("show-success")
        console.log(customerReview)
        localStorage.setItem("Review", customerReview)

    }
})




