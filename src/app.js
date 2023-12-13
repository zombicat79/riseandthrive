const body = document.querySelector("body");
const header = document.querySelector(".header");
const content = document.querySelector("main");
const footer = document.querySelector(".footer");

const ctaButtons = Array.from(document.querySelectorAll(".cta-button"));
const contactButtons = Array.from(document.querySelectorAll(".contact-btn"));
const appointmentButtons = Array.from(document.querySelectorAll(".appointment-btn"));
const individualPricingButtons = Array.from(document.querySelectorAll(".individual-pricing-btn"));
const corporatePricingButtons = Array.from(document.querySelectorAll(".corporate-pricing-btn"));
const studentOfferButtons = Array.from(document.querySelectorAll(".student-offer-btn"));
const workModelButtons = Array.from(document.querySelectorAll(".work-model-btn"));
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
function addBtnFunctionality(btn) {
    btn.addEventListener("click", () => {
        btn.classList.add("pressed");
        setTimeout(() => {
            btn.classList.remove("pressed");
            if (btn.dataset.link) window.location.href = btn.dataset.link;
        }, 1000)
    });
}

function addLiteralFunctionality(item) {
    item.addEventListener("click", () => {
        const parentContent = item.closest(".popup__content");
        parentContent.classList.remove("popup__content--appearing");
        parentContent.classList.add("popup__content--disappearing");
        setTimeout(() => {
            if (item.id === "student-offer") {
                fillPopup(studentOfferTemplate);
                const newCtaButtons = Array.from(parentContent.querySelectorAll(".cta-button"));
                newCtaButtons.forEach((btn) => addBtnFunctionality(btn));
                popup.scrollTo(0, 0);
            }
            parentContent.classList.remove("popup__content--disappearing");
            parentContent.classList.add("popup__content--appearing");
        }, 1000)
    })
}

if (ctaButtons) {
    ctaButtons.forEach((btn) => {
        addBtnFunctionality(btn);
    });
}

if (contactButtons) {
    contactButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.add("nav__link--active");
            setTimeout(() => {
                fillPopup(contactTemplate);
                initiatePopup();
                btn.classList.remove("nav__link--active");
            }, 750);
        })
    });
}

if (appointmentButtons) {
    appointmentButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            setTimeout(() => {
                fillPopup(appointmentTemplate);
                initiatePopup();
            }, 750);
        })
    })
}

if (individualPricingButtons) {
    individualPricingButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            setTimeout(() => {
                fillPopup(individualPricingTemplate);
                initiatePopup();
            }, 750);
        })
    })
}

if (corporatePricingButtons) {
    corporatePricingButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            setTimeout(() => {
                fillPopup(corporatePricingTemplate);
                initiatePopup();
            }, 750);
        })
    })
}

if (studentOfferButtons) {
    studentOfferButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            setTimeout(() => {
                fillPopup(studentOfferTemplate);
                initiatePopup();
            }, 750);
        })
    })
}

if (workModelButtons) {
    workModelButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            setTimeout(() => {
                fillPopup(workModelTemplate);
                initiatePopup();
            }, 750);
        })
    })
}


// -- POPUP LAUNCHERS --
function initiatePopup() {
    body.classList.add("scroll-block");
    [header, content, footer].forEach((section) => section.classList.add("scroll-block--dark"));
    popup.style.display = "block";
    popup.scrollIntoView({ block: "end", behavior: "smooth"});
    popup.scrollTo(0, 0);
    popup.classList.remove("popup--disappearing");
    popup.classList.add("popup--appearing");

    const popupForm = document.querySelector("#popup-form");
    
    /* Popup booking form manager */
    if (popupForm) {
        const popupInputs = Array.from(document.querySelectorAll("#popup-form .form__input"));
        const popupSelects = Array.from(document.querySelectorAll("#popup-form .form__select"));
        const allPopupFields = popupInputs.concat(popupSelects);
        const serviceInput = document.querySelector("#popup-form #service");
        const hiddenInput = document.querySelector("#popup-form #session");
        const popupAlertPanel = document.querySelector("#popup-form .form__alert");
        const popupAlertMsg = document.querySelector("#popup-form .alert__msg");
        const popupAlertList = document.querySelector("#popup-form .alert__list");
        const popupProceedBtn = document.querySelector("#popup-form .cta-button--success");
        const popupCloser = document.querySelector(".popup .xCloser");

        const firstFormInput = document.querySelector(".popup form #name");
        firstFormInput.focus();

        const popupFormOBJ = {
            alertList: popupAlertList,
            alertPanel: popupAlertPanel,
            proceedBtn: popupProceedBtn,
            alertMsg: popupAlertMsg
        }

        allPopupFields.forEach((input) => {
            input.addEventListener("change", () => {       
                validateForm("popup", popupFormOBJ);
            });
        });

        serviceInput.addEventListener("change", (event) => {
            const value = event.target.value;
    
            if (value === "1") {
                hiddenInput.value = "1";
            }
    
            if (value === "2") {
                hiddenInput.value = "5";
            }
        })

        popupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(popupForm);
            const serializedData = Object.fromEntries(data);
            popupAlertPanel.classList.remove("form__alert--success", "form__alert--error");
        
            fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(serializedData)
            })
            .then((response) => {
                if (response.ok && (response.status >= 200 && response.status < 300)) {
                    popupAlertMsg.innerHTML = "Your booking with <span class='bold-regular-text'>Rise and Thrive</span> has been successfully processed. We will contact you shortly.";
                    popupAlertList.innerHTML = "";
                    popupAlertPanel.classList.add("form__alert--success");
                    popupProceedBtn.disabled = true;
                    popupProceedBtn.classList.remove("pulsing");
                    popupProceedBtn.classList.add("disabled");
                    setTimeout(() => {
                        closePopup(popupCloser);
                    }, 3000);
                }
            })
            .catch(() => {
                popupAlertMsg.innerHTML = "Your booking could not be processed at this moment. Please try again in a few minutes or contact us directly at <a class='bold-regular-text' href='mailto:#'>riseandthrive@whatever.com</a>";
                popupAlertList.innerHTML = "";
                popupAlertPanel.classList.add("form__alert--error");
                throw new Error("Server unavailable!")
            })
            popupAlertPanel.classList.remove("form__alert--inactive");
        })
    }
    /* End of popup booking form manager */

    const popupInnerBtns = Array.from(document.querySelectorAll(".popup .cta-button"));
    if (popupInnerBtns) {
        popupInnerBtns.forEach((btn) => {
            addBtnFunctionality(btn);
        })
    }

    const clickableLiterals = Array.from(document.querySelectorAll(".popup__ad--clickable"));
    if (clickableLiterals) {
        clickableLiterals.forEach((item) => {
            addLiteralFunctionality(item);
        })
    }
}

function fillPopup(filling) {
    popupContent.innerHTML = filling;
}


// -- POPUP CLOSERS --
function closePopup(closer) {
    closer.parentElement.classList.remove("popup--appearing");
    closer.parentElement.classList.add("popup--disappearing");
    [header, content, footer].forEach((section) => section.classList.remove("scroll-block--dark"));
    body.classList.remove("scroll-block");
}

if (popupClosers) {
    popupClosers.forEach((closer) => {
        closer.addEventListener("click", () => {
            closePopup(closer);
        })
    })
}


// -- ACCORDION ELEMENTS --
const unfoldingContainers = Array.from(document.querySelectorAll(".unfolding-content"));
const shrinkIcons = Array.from(document.querySelectorAll(".body__shrink"));

if (unfoldingContainers) {
    unfoldingContainers.forEach((container) => {
        container.addEventListener("click", () => {
            container.dataset.status = "expanded";
        })
    })
}

if (shrinkIcons) {
    shrinkIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            icon.classList.add("clicked");
            setTimeout(() => {
                icon.classList.remove("clicked");
                icon.closest(".unfolding-content").dataset.status = "contracted";
            }, 500)
        })
    })
}


// HOME CONTENT EVENT LISTENERS

// -- Value proposition unfolding texts --
const propositionItems = Array.from(document.querySelectorAll(".proposition__element"));

if (propositionItems) {
    propositionItems.forEach((item) => {
        item.addEventListener("click", () => {
            propositionItems.forEach((el) => {
                if (el !== item) {
                    el.dataset.status = "contracted";
                }
            })

            item.dataset.status === "contracted" ? item.dataset.status = "expanded" : item.dataset.status = "contracted";
        });
    });
}

// -- Home sliders initialization --
document.addEventListener("DOMContentLoaded", () => {
    const featureSlider = document.getElementById("feature-carousel");

    if (featureSlider) {
        $("#feature-carousel").slick({
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500
          });
    }
})


// -- SECTION UNFOLDING ON SCROLL --
/* const positionFirst = document.querySelector(".block-section--1").clientTop;
const positionSecond = document.querySelector(".block-section--2").getBoundingClientRect();
const positionThird = document.querySelector(".block-section--3").getBoundingClientRect(); */


// -- COMMON PAGE LOAD EVENT LISTENERS --
document.addEventListener("DOMContentLoaded", () => {
    
    // -- Topmost scroll on page load --
    content.scrollIntoView({ block: "start", behavior: "smooth"});

    // -- Automatic updating of current year to be shown in the footer --
    const yearPlaceholder = document.getElementById("current-year");

    const currentDate = new Date().getFullYear();
    yearPlaceholder.innerHTML = currentDate;
})
