const form = document.querySelector("#booking-form form");
const inputs = Array.from(document.querySelectorAll(".form__input"));
const selects = Array.from(document.querySelectorAll(".form__select"));
const allInputFields = inputs.concat(selects);
const alertPanel = document.querySelector("#booking-form .form__alert");
const alertMsg = document.querySelector("#booking-form .alert__msg");
const alertList = document.querySelector("#booking-form .alert__list");
const proceedBtn = document.querySelector("#booking-form .cta-button--success");
const clearanceBtn = document.querySelector("#booking-form .cta-button--alert");

// Table booking buttons management

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

tableButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        prefillField(btn.id);
        form.scrollIntoView({ block: "center", behavior: "smooth" });
    })
})


// * --- Form completion management --- *
// Optgroup variation depending on previous select

const serviceSelector = document.getElementById("service");
const individualSelection = document.getElementById("session-individual");
const corporateSelection = document.getElementById("session-corporate");

service.addEventListener("change", (event) => {
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


// Clearance button management

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


// Form data validation

function validateName() {
    const nameInput = document.getElementById("name");
    const controlRegex = /^[A-Za-z]{2,}(\s[A-Za-z]{2,})?(\s[A-Za-z]{2,})?$/;

    if (controlRegex.test(nameInput.value) === false) {
        return false;
    }
    return true;
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const normalizedValue = emailInput.value.toLowerCase();
    const controlRegex = /^([a-z\d]|[_\-\.](?=[a-z\d]))+@[a-z\d\-]+(\.[a-z]{2,}){1,2}$/;

    if (controlRegex.test(normalizedValue) === false) {
        return false;
    }
    return true;
}

function validateService() {
    const serviceInput = document.getElementById("service");

    if (serviceInput.value === "0") {
        return false;
    }
    return true;
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const controlRegex = /^\+?\d{2,}((\s\d{2,})+)?$/;
    
    if (controlRegex.test(phoneInput.value) === false) {
        return false;
    }
    return true;
}

function checkFormStatus() {
    const formStatus = {
        name: validateName(),
        email: validateEmail(),
        service: validateService(),
        phone: validatePhone()
    }

    return formStatus;
}

function validateForm() {
    let okToProceed = true;
    const formStatus = checkFormStatus();
    const wrongFields = [];

    alertList.innerHTML = "";
    alertPanel.classList.remove("form__alert--success", "form__alert--error");
    
    for (const input in formStatus) {
        if (formStatus[input] === false) {
            if (document.getElementById(input).classList.contains("form__input")) {
                document.getElementById(input).classList.add("form__input--highlighted");
            } else {
                document.getElementById(input).classList.add("form__select--highlighted");
            }
            okToProceed = false;
            wrongFields.push(input);
        } else {
            document.getElementById(input).classList.remove("form__input--highlighted", "form__select--highlighted");
        }
    }

    if (okToProceed) {
        alertPanel.classList.add("form__alert--inactive");
        proceedBtn.disabled = false;
        proceedBtn.classList.remove("disabled");
        proceedBtn.classList.add("pulsing");
    } else {
        proceedBtn.disabled = true;
        proceedBtn.classList.remove("pulsing");
        proceedBtn.classList.add("disabled");

        alertMsg.innerHTML = "The following fields need correction in order to proceed:";
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
            alertList.appendChild(newListItem);
        })
        alertPanel.classList.add("form__alert--error");
        alertPanel.classList.remove("form__alert--inactive");
    }
}

allInputFields.forEach((input) => {
    input.addEventListener("change", () => {       
        validateForm();
    });
});


// Form submit management

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const serializedData = Object.fromEntries(data);
    if (serializedData.goals === "") {
        delete serializedData.goals;
    }
    alertPanel.classList.remove("form__alert--success", "form__alert--error");

    fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(serializedData)
    })
    .then((response) => {
        if (response.ok && (response.status >= 200 && response.status < 300)) {
            alertMsg.innerHTML = "Your booking with <span class='bold-regular-text'>Rise and Thrive</span> has been successfully processed. We will contact you shortly.";
            alertList.innerHTML = "";
            alertPanel.classList.add("form__alert--success");
        }
    })
    .catch(() => {
        alertMsg.innerHTML = "Your booking could not be processed at this moment. Please try again in a few minutes or contact us directly at <a class='bold-regular-text' href='mailto:#'>riseandthrive@whatever.com</a>";
        alertList.innerHTML = "";
        alertPanel.classList.add("form__alert--error");
        throw new Error("Server unavailable!")
    })
    alertPanel.classList.remove("form__alert--inactive");
})