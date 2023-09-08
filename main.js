//http://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=9317e33e00f077375a64f8383bfa3e20&units=metric
const cityInput = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector(".cities");
const msg = document.querySelector(".msg");

const apiKey = "9317e33e00f077375a64f8383bfa3e20";
form.addEventListener("submit",addCity);

function addCity(event){
    event.preventDefault();
    let inputValue = cityInput.value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`


}
