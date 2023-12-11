// Table booking buttons management

const tableButtons = Array.from(document.querySelectorAll(".table-btn"));

tableButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.getElementById("booking-form").scrollIntoView({ block: "center", behavior: "smooth" });
    })
})


// Form completion management

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


// Form submit management

const form = document.querySelector("#booking-form form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event)
    const data = new FormData(form);
    for (let entry of data) {
        console.log(entry);
    }

    const dataTest = {
        name: "Polla",
        email: "pollabig@gmail.com",
        service: 1,
        session: 1,
        phone: "867878874",
        goals: "whatever maximus"
    }

    fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataTest)
    })
    .then((response) => {
        return response.text();
    })
    .then((data) => console.log(data))
})