// MANAGES NOT ONLY BOOKING FORMS BUT ALSO SUBSCRIPTION FORMS AND RESOURCE FETCH FORMS

const form = document.querySelector("#booking-form form") || document.querySelector("#subscribe-form form");
let inputs = [];
if (form) {
    if (form.closest(".block-section").id === "booking-form") {
        inputs = Array.from(document.querySelectorAll("#booking-form .form__input"));
    } else {
        inputs = Array.from(document.querySelectorAll("#subscribe-form .form__input"));
    }
}
const selects = Array.from(document.querySelectorAll("#booking-form .form__select"));
const allInputFields = inputs.concat(selects);
const alertPanel = document.querySelector("#booking-form .form__alert") || document.querySelector("#subscribe-form .form__alert");
const alertMsg = document.querySelector("#booking-form .alert__msg") || document.querySelector("#subscribe-form .alert__msg");
const alertList = document.querySelector("#booking-form .alert__list") || document.querySelector("#subscribe-form .alert__list");
const proceedBtn = document.querySelector("#booking-form .cta-button--success") || document.querySelector("#subscribe-form .cta-button--success");
const clearanceBtn = document.querySelector("#booking-form .cta-button--alert");

const regularFormOBJ = {
    alertList: alertList,
    alertPanel: alertPanel,
    proceedBtn: proceedBtn,
    alertMsg: alertMsg
}


// Table booking buttons management

if (form) {
    const tableButtons = Array.from(document.querySelectorAll(".table-btn"));

    function prefillField(btnId) {
        const serviceSelect = document.getElementById("service");
        const sessionSelect = document.getElementById("session");
        
        btnId.includes("individual") ? serviceSelect.value = "1" : serviceSelect.value = "2";

        switch(btnId) {
            case "individual-intro":
                sessionSelect.value = "1";
                break;
            case "individual-single":
                sessionSelect.value = "2";
                break;
            case "individual-pack5":
                sessionSelect.value = "3";
                break;
            case "individual-pack10":
                sessionSelect.value = "4";
                break;
            case "corporate-intro":
                sessionSelect.value = "5";
                break;
            case "corporate-single":
                sessionSelect.value = "6";
                break;
            case "corporate-monthly":
                sessionSelect.value = "7";
                break;
        }
    }

    if (tableButtons) {
        tableButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                prefillField(btn.id);
                form.scrollIntoView({ block: "center", behavior: "smooth" });
            })
        })
    }
}


// * --- Form completion management --- *
// Optgroup variation depending on previous select

if (form) {
    const serviceSelector = document.getElementById("service");
    const individualSelection = document.getElementById("session-individual");
    const corporateSelection = document.getElementById("session-corporate");

    if (serviceSelector) {
        serviceSelector.addEventListener("change", (event) => {
            const value = event.target.value;
    
            if (value === "1") {
                corporateSelection.classList.add("select__group--hidden");
                corporateSelection.querySelector(".select__placeholder").selected = false;
                individualSelection.classList.remove("select__group--hidden");
                individualSelection.querySelector(".select__placeholder").selected = true;  
            }
    
            if (value === "2") {
                individualSelection.classList.add("select__group--hidden");
                individualSelection.querySelector(".select__placeholder").selected = false;
                corporateSelection.classList.remove("select__group--hidden");
                corporateSelection.querySelector(".select__placeholder").selected = true;
            }
        })
    }
}


// Clearance button management

if (form && clearanceBtn) {
    clearanceBtn.addEventListener("click", () => {
        alertPanel.classList.remove("form__alert--success", "form__alert--error");
        proceedBtn.disabled = true;
        proceedBtn.classList.add("disabled");
    
        inputs.forEach((input) => {
            input.value = "";
            input.classList.remove("form__input--highlighted");
        });
        selects.forEach((select) => {
            select.value = "0";
            select.classList.remove("form__select--highlighted");
        });
        alertPanel.classList.add("form__alert--inactive", "form__alert--error");
    });
}


// Form data validation

function validateName(formType) {
    let nameInput;
    if (formType === "regular") {
        nameInput = document.querySelector("#booking-form #name") || document.querySelector("#subscribe-form #name");
    } else {
        nameInput = document.querySelector("#popup-form #name");
    }
    const controlRegex = /^[A-Za-z]{2,}(\s[A-Za-z]{2,})?(\s[A-Za-z]{2,})?$/;

    if (controlRegex.test(nameInput.value) === false) {
        return false;
    }
    return true;
}

function validateEmail(formType) {
    let emailInput;
    if (formType === "regular") {
        emailInput = document.querySelector("#booking-form #email") || document.querySelector("#subscribe-form #email");
    } else {
        emailInput = document.querySelector("#popup-form #email");
    }
    const normalizedValue = emailInput.value.toLowerCase();
    const controlRegex = /^([a-z\d]|[_\-\.](?=[a-z\d]))+@[a-z\d\-]+(\.[a-z]{2,}){1,2}$/;

    if (controlRegex.test(normalizedValue) === false) {
        return false;
    }
    return true;
}

function validateService(formType) {
    let serviceInput;
    if (formType === "regular") {
        serviceInput = document.querySelector("#booking-form #service") || document.querySelector("#subscribe-form #service");
    } else {
        serviceInput = document.querySelector("#popup-form #service");
    }

    if (serviceInput.value === "0") {
        return false;
    }
    return true;
}

function validatePhone(formType) {
    let phoneInput;
    if (formType === "regular") {
        phoneInput = document.querySelector("#booking-form #phone") || document.querySelector("#subscribe-form #phone");
    } else {
        phoneInput = document.querySelector("#popup-form #phone");
    }
    const controlRegex = /^\+?\d{2,}((\s\d{2,})+)?$/;
    
    if (controlRegex.test(phoneInput.value) === false) {
        return false;
    }
    return true;
}

function checkFormStatus(formType) {
    const formStatus = {
        name: validateName(formType),
        email: validateEmail(formType),
        service: validateService(formType),
        phone: validatePhone(formType)
    }

    return formStatus;
}

function validateForm(formType, targetOBJ) {
    let okToProceed = true;
    const formStatus = checkFormStatus(formType);
    const wrongFields = [];

    targetOBJ.alertList.innerHTML = "";
    targetOBJ.alertPanel.classList.remove("form__alert--success", "form__alert--error");
    
    let selectorModifier = "";
    if (form) {
        if (form.closest(".block-section").id === "booking-form") {
            selectorModifier = formType === "regular" ? "#booking-form" : "#popup-form";
        } else {
            selectorModifier = formType === "regular" ? "#subscribe-form" : "#popup-form";
        }
    } else {
        selectorModifier = formType === "regular" ? "#subscribe-form" : "#popup-form";
    }
    for (const input in formStatus) {
        if (formStatus[input] === false) {
            if (document.querySelector(`${selectorModifier} #${input}`).classList.contains("form__input")) {
                document.querySelector(`${selectorModifier} #${input}`).classList.add("form__input--highlighted");
            } else {
                document.querySelector(`${selectorModifier} #${input}`).classList.add("form__select--highlighted");
            }
            okToProceed = false;
            wrongFields.push(input);
        } else {
            document.querySelector(`${selectorModifier} #${input}`).classList.remove("form__input--highlighted", "form__select--highlighted");
        }
    }

    if (okToProceed) {
        targetOBJ.alertPanel.classList.add("form__alert--inactive");
        targetOBJ.proceedBtn.disabled = false;
        targetOBJ.proceedBtn.classList.remove("disabled");
        targetOBJ.proceedBtn.classList.add("pulsing");
    } else {
        targetOBJ.proceedBtn.disabled = true;
        targetOBJ.proceedBtn.classList.remove("pulsing");
        targetOBJ.proceedBtn.classList.add("disabled");

        targetOBJ.alertMsg.innerHTML = "The following fields need correction in order to proceed:";
        wrongFields.forEach((field) => {
            const newListItem = document.createElement("li");
            switch(field) {
                case "name":
                    newListItem.innerHTML = "<span class='bold-regular-text'>Name:</span> You must enter your name and/or surname. Do not type numbers, accent marks nor symbols.";
                    break;
                case "email":
                    newListItem.innerHTML = "<span class='bold-regular-text'>Email:</span> You must enter a valid email.";
                    break;
                case "service":
                    newListItem.innerHTML = "<span class='bold-regular-text'>Type of service:</span> You must choose one option.";
                    break;
                case "phone":
                    newListItem.innerHTML = "<span class='bold-regular-text'>Phone number:</span> You must enter your phone number. Only numeric characters allowed. You may use separation blocks or the plus (+) symbol to signal international dialing codes";
                    break;
            }
            targetOBJ.alertList.appendChild(newListItem);
        })
        targetOBJ.alertPanel.classList.add("form__alert--error");
        targetOBJ.alertPanel.classList.remove("form__alert--inactive");
    }
}

if (form) {
    allInputFields.forEach((input) => {
        input.addEventListener("change", () => {       
            validateForm("regular", regularFormOBJ);
        });
    });
}


// Form submit management

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const serializedData = Object.fromEntries(data);
        if (serializedData.goals === "") {
            delete serializedData.goals;
        }
        alertPanel.classList.remove("form__alert--success", "form__alert--error");

        if (form.closest(".block-section").id === "booking-form") {
            fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(serializedData)
            })
            .then((serverResponse) => {
                manageServerResponse(serverResponse);
            })
            .catch(() => {
                manageServerError();
            })
        } else {
            delete serializedData.service;
            delete serializedData.phone;

            fetch(`http://localhost:3000/subscribe/${serializedData.email}/`, { method: "GET" })
            .then((serverResponse) => {
                if (serverResponse.status === 404) {
                    fetch("http://localhost:3000/subscribe/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(serializedData)
                    })
                    .then((serverResponse) => {
                        manageServerResponse(serverResponse);
                    })
                } else {
                    alertMsg.innerHTML = "The email you entered is already subscribed.";
                    alertList.innerHTML = "";
                    alertPanel.classList.add("form__alert--error");
                }
            })
            .catch(() => {
                manageServerError();
            })
        }
        alertPanel.classList.remove("form__alert--inactive");
    })

    function manageServerResponse(response) {
        if (response.ok && (response.status >= 200 && response.status < 300)) {
            if (form.closest(".block-section").id === "booking-form") {
                alertMsg.innerHTML = "Your booking with <span class='bold-regular-text'>Rise and Thrive</span> has been successfully processed. We will contact you shortly.";
            } else {
                alertMsg.innerHTML = "Your subscription to <span class='bold-regular-text'>Rise and Thrive</span> has been successfully processed. We will keep in touch with you."
            }
            alertList.innerHTML = "";
            alertPanel.classList.add("form__alert--success");
            proceedBtn.disabled = true;
            proceedBtn.classList.remove("pulsing");
            proceedBtn.classList.add("disabled");
        }
    }

    function manageServerError() {
        if (form.closest(".block-section").id === "booking-form") {
            alertMsg.innerHTML = "Your booking could not be processed at this moment. Please try again in a few minutes or contact us directly at <a class='bold-regular-text' href='mailto:#'>riseandthrive@whatever.com</a>";
        } else {
            alertMsg.innerHTML = "Your subscription could not be processed at this moment. Please try again in a few minutes or contact us directly at <a class='bold-regular-text' href='mailto:#'>riseandthrive@whatever.com</a>";
        }
        alertList.innerHTML = "";
        alertPanel.classList.add("form__alert--error");
        throw new Error("Server unavailable!")
    }
}