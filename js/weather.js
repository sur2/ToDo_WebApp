const weather = document.querySelector(".js-weather")

const API_KEY = 'a548e8b5013f743811410526c487a687';
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    })
    .then((json)=> {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${place} ${temperature}℃`

    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError() {
    console.log("can't access geo location.");
}

function handleGeoSucces(postion) {
    const latitude = postion.coords.latitude;   
    const longitude = postion.coords.longitude;
    const coordsObject = {
        latitude,
        longitude
    }  
    saveCoords(coordsObject); 
    getWeather(latitude, longitude)
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
 }

function init() {
    loadCoords();
}

init();