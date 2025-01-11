const activities = [
    {
        title: "Călărie",
        image: "../assets/calarie.jpeg",
        description: "Descoperă frumusețea naturii călărind prin peisaje spectaculoase!",
        price: "100 RON/oră"
    },
    {
        title: "Scufundări",
        image: "../assets/scufundari.jpg",
        description: "Explorează lumea subacvatică și bucură-te de o experiență unică!",
        price: "300 RON/sesiune"
    },
    {
        title: "Drumeții",
        image: "../assets/drumetii.jpeg",
        description: "Aventură pe munte alături de ghizi experimentați.",
        price: "50 RON/persoană"
    },
    {
        title: "Parapantă",
        image: "../assets/parate.jpg",
        description: "Zbor cu parapanta pentru iubitorii de senzații tari!",
        price: "400 RON/zbor"
    },
    {
        title: "Plimbare cu Balonul cu Aer Cald",
        image: "../assets/balon.jpeg",
        description: "Bucură-te de o priveliște panoramică de neuitat, plutind deasupra peisajelor superbe!",
        price: "500 RON/zbor"
    },
    {
        title: "Zbor cu Elicopterul",
        image: "../assets/elicopter.png",
        description: "Admiră priveliștile spectaculoase din aer, într-un zbor privat cu elicopterul!",
        price: "1500 RON/zbor"
    },
    {
        title: "Rafting",
        image: "../assets/rafting.jpeg",
        description: "Experimentați adrenalina unui traseu de rafting pe ape repezi!",
        price: "250 RON/persoană"
    },
    {
        title: "Escape Room Tematic",
        image: "../assets/escape_room.jpg",
        description: "Rezolvă mistere captivante într-o cursă contra cronometru!",
        price: "120 RON/persoană"
    },
    {
        title: "Calatorie cu Bicileta",
        image: "../assets/bicicleta.png",
        description: "Descoperă frumusețea naturii călărind prin peisaje spectaculoase!",
        price: "70 RON/oră"
    },
    {
        title: "Vizita la muzeu",
        image: "../assets/muzeu.png",
        description: "Descoperă istoria și cultura locală într-o vizită la muzeu!",
        price: "20 RON/persoană"
    },
];

const activitiesContainer = document.getElementById('activities-container');

// Inițializează lista de favorite din localStorage
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Funcție pentru a salva lista de favorite în localStorage
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Funcție pentru a afișa activitățile
function displayActivities(filteredActivities) {
    activitiesContainer.innerHTML = '';
    let rowContent = '';
    filteredActivities.forEach((activity, index) => {
        const activityCard = `
            <div class="activity-card">
                <h2>${activity.title}</h2>
                <img src="${activity.image}" alt="${activity.title}" class="activity-image">
                <p class="description">${activity.description}</p>
                <p class="price">Preț: ${activity.price}</p>
                <div class="button-group">
                    <button class="favorite-button" onclick="addToFavorites(${index})">Adaugă la Favorite</button>
                    <button class="reserve-button" onclick="redirectToPayment(${index})">Rezervare</button>
                </div>
            </div>
        `;
        rowContent += activityCard;
        if ((index + 1) % 3 === 0 || index === filteredActivities.length - 1) {
            activitiesContainer.innerHTML += `<div class="activity-row">${rowContent}</div>`;
            rowContent = '';
        }
    });
}

// Afișează toate activitățile inițial
displayActivities(activities);

// Funcție pentru a adăuga o activitate la favorite
function addToFavorites(index) {
    const selectedActivity = activities[index];
    if (!favorites.find(activity => activity.title === selectedActivity.title)) {
        favorites.push(selectedActivity);
        saveFavorites();
        alert(`Activitatea "${selectedActivity.title}" a fost adăugată la favorite.`);
    } else {
        alert(`Activitatea "${selectedActivity.title}" este deja în lista de favorite.`);
    }
}

// Funcție pentru a redirecționa către pagina de plată
function redirectToPayment(activityIndex) {
    const selectedActivity = activities[activityIndex];
    const paymentUrl = `payment.html?title=${encodeURIComponent(selectedActivity.title)}&price=${encodeURIComponent(selectedActivity.price)}`;
    window.location.href = paymentUrl;
}

// Funcție pentru a căuta activități după titlu
function searchActivities(searchTerm) {
    const filteredActivities = activities.filter(activity => 
        activity.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayActivities(filteredActivities);
}

// Adaugă un eveniment de input pentru bara de căutare
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    searchActivities(searchTerm);
});
