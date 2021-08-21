const api = {
    key: 'dd36f67920995ada839c058b93d53b83',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', setQuery );

function setQuery(event){
    if(event.keyCode == 13){
        console.log(searchBox.value);
        getResult(searchBox.value);
    }
}

function getResult(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayresult);
}

function displayresult(weather){
    console.log(weather);

    let city = document.querySelector('.location .city');
    city.innerHTML =  `${weather.name} , ${weather.sys.country} `;

    const now = new Date(),
    data = document.querySelector('.location .date');
    data.innerHTML = dateBUilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} <span>°C</span> `;

    let weatherEiI = document.querySelector('.weather');
    weatherEiI.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;

    setTimeout(() => {
    console.clear();
    }, 4000);
}



function dateBUilder(s) {
    let months = ['January',
    'February',
    'March',
    'Aprel',
    'May',
    'June', 
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];

    let days = ['Sunday',
    'Monday',
    'Tuesday',
    'wednesday',
    'Thursday',
    'Friday',
    'Satuday' ];


    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`;

}