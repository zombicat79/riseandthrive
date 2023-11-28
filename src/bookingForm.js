const tableButtons = Array.from(document.querySelectorAll(".table-btn"));

tableButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.getElementById("booking-form").scrollIntoView({ block: "center", behavior: "smooth" });
    })
})