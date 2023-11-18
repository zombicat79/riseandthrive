const body = document.querySelector("body");
const header = document.querySelector(".header");

// HEADER EVENT LISTENERS

// -- Rocket logo liftoff on page load --
document.addEventListener("DOMContentLoaded", () => {
    const headerLogo = document.querySelector(".header__logo");
    //if (window.location.href === "/index.html") {
        headerLogo.classList.add("liftoff");
        setTimeout(() => {
            headerLogo.classList.remove("liftoff");
            headerLogo.classList.add("liftoff--complete");
        }, 1500);
    //}
})

// -- Language selection buttons pressing --
const langButtons = Array.from(document.querySelectorAll(".langSelector__btn .langSelector__icon"));
langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.add("btn-pressed");
        setTimeout(() => {
            btn.classList.remove("btn-pressed");
        }, 1500);
    })
})

// -- Mobile header menu management --
const mobileIcons = Array.from(document.querySelectorAll(".header__mobileManager svg"));
mobileIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        header.dataset.status === "expanded" ? header.dataset.status = "contracted" : header.dataset.status = "expanded";
        header.dataset.status === "expanded" ? body.classList.add("scroll-block") : body.classList.remove("scroll-block");

        mobileIcons.forEach((el) => {
            if (el.dataset.status === "active") {
                el.classList.remove("scale-up");
                el.classList.add("scale-down");
                setTimeout(() => {
                    el.dataset.status = "inactive";
                }, 500);
            } else {
                el.classList.remove("scale-down");
                el.classList.add("scale-up");
                setTimeout(() => {
                    el.dataset.status = "active";
                }, 500);
            }
        })
    })
})