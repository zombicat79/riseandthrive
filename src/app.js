const body = document.querySelector("body");
const header = document.querySelector(".header");
const content = document.querySelector("main");
const footer = document.querySelector(".footer");

const ctaButtons = Array.from(document.querySelectorAll(".cta-button"));
const appointmentButtons = Array.from(document.querySelectorAll(".appointment-btn"));
const popup = document.querySelector(".popup");
const popupClosers = document.querySelectorAll(".popup__xCloser");
const popupContent = document.querySelector(".popup__content");

// HEADER EVENT LISTENERS

// -- Rocket logo liftoff on page load --
document.addEventListener("DOMContentLoaded", () => {
    const headerLogo = document.querySelector(".header__logo--home");
    if (window.location.href.includes("/index.html")) {
        headerLogo.classList.add("liftoff");
        setTimeout(() => {
            headerLogo.classList.remove("liftoff");
            headerLogo.classList.add("liftoff--complete");
        }, 1500);
    } else {
        const headerLogo = document.querySelector(".header__logo");
        headerLogo.classList.add("liftoff--complete");
    }
});

// -- Language selection buttons pressing --
const langButtons = Array.from(document.querySelectorAll(".langSelector__btn .langSelector__icon"));
langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.add("btn-pressed");
        setTimeout(() => {
            btn.classList.remove("btn-pressed");
        }, 1500);
    });
});

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
        });
    });
});


// -- CTA BUTTONS PRESSING --
ctaButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.add("pressed");
        setTimeout(() => {
            btn.classList.remove("pressed");
        }, 1000)
    });
});

appointmentButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        setTimeout(() => {
            body.classList.add("scroll-block");
            [header, content, footer].forEach((section) => section.classList.add("scroll-block--dark"));
            popupContent.innerHTML = appointmentTemplate;
            popup.style.display = "block";
            popup.scrollIntoView({ block: "end", behavior: "smooth"});
            popup.classList.remove("popup--disappearing");
            popup.classList.add("popup--appearing");
        }, 750);
    })
})


// -- POPUP CLOSERS --
popupClosers.forEach((closer) => {
    closer.addEventListener("click", () => {
        closer.parentElement.classList.remove("popup--appearing");
        closer.parentElement.classList.add("popup--disappearing");
        [header, content, footer].forEach((section) => section.classList.remove("scroll-block--dark"));
        body.classList.remove("scroll-block");
    })
})


// HOME CONTENT EVENT LISTENERS

// -- Cristina dialog content --
const propositionItems = Array.from(document.querySelectorAll(".proposition__element"));

propositionItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        loadProposition(item.id);
    });

    item.addEventListener("click", () => {
        loadProposition(item.id);
    });
});


// -- SECTION UNFOLDING ON SCROLL --
const positionFirst = document.querySelector(".block-section--1").clientTop;
const positionSecond = document.querySelector(".block-section--2").getBoundingClientRect();
const positionThird = document.querySelector(".block-section--3").getBoundingClientRect();

