function reserveTransport() {
    var locationFrom = document.getElementById('location-from').value;
    var locationTo = document.getElementById('location-to').value;
    var departureDate = document.getElementById('departure-date').value;
    var returnDate = document.getElementById('return-date').value;

    if (locationFrom && locationTo && departureDate && returnDate) {
        var travelDetailsDiv = document.getElementById('travelDetails');
        travelDetailsDiv.innerHTML = `
            <h3>Detalii de Călătorie:</h3>
            <p>Loc de plecare: ${locationFrom}</p>
            <p>Destinație: ${locationTo}</p>
            <p>Data plecării: ${departureDate}</p>
            <p>Data întoarcerii: ${returnDate}</p>
        `;
    } else {
        alert('Te rog completează toate câmpurile!');
    }
}
