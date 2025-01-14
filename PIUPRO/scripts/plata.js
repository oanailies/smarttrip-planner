
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const service = document.getElementById("service").value;
    const cardName = document.getElementById("card-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expirationDate = document.getElementById("expiration-date").value;
    const cvv = document.getElementById("cvv").value;

    if (service && cardName && cardNumber.length === 19 && expirationDate.length === 5 && cvv.length === 3) {
        document.getElementById("payment-success").style.display = "block";
        setTimeout(() => {
            document.getElementById("payment-success").style.display = "none";
            document.getElementById("payment-form").reset();
        }, 3000);
    } else {
        alert("Toate câmpurile sunt obligatorii și trebuie completate corect.");
    }
});
