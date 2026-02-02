const searchInput = document.getElementById("search-input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        const desc = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(query) || desc.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});