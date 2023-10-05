document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkmode-toggle");
    const body = document.body;
    const background = document.querySelector(".background");

    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            body.classList.add("dark-mode");
            background.style.background = "#242424";
        } else {
            body.classList.remove("dark-mode");
            background.style.background = "#fff";
        }
    });
});
