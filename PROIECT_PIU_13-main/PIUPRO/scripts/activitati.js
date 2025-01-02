
const reserveButtons = document.querySelectorAll(".reserve-button");

reserveButtons.forEach(button => {
    button.addEventListener("click", function () {
        
        const activityTitle = this.getAttribute("data-title");
        const activityPrice = this.getAttribute("data-price");

        document.getElementById("activity-title").textContent = activityTitle;
        document.getElementById("activity-price").textContent = activityPrice;

        document.getElementById("reservation-details").style.display = "block";
    });
});
