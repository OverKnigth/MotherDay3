document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById("card");
    const heart = document.querySelector(".heart");
    const text = document.querySelector(".text");

    heart.addEventListener("click", function() {
        toggleCardVisibility();
    });

    text.addEventListener("click", function() {
        toggleCardVisibility();
    });

    card.addEventListener("click", function() {
        toggleCardVisibility();
    });

    function toggleCardVisibility() {
        if (card.style.visibility === "visible") {
            card.style.visibility = "hidden";
        } else {
            card.style.visibility = "visible";
        }
    }
});
