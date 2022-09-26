const btnShowMe = document.getElementById("contact-me");

btnShowMe.addEventListener("click", (e) => {
    document.querySelectorAll(".hidden-contact-info").forEach((item) => {
        item.classList.toggle("showing-contact-info");
        console.log("button click successfully read");
        window.scrollTo(0, document.body.scrollHeight);
    });
});
