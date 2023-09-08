//http://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=b412e1b36101b065c92e320347fcefa4&units=metric
const cityInput = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector(".cities");
const msg = document.querySelector(".msg");

const apiKey = "b412e1b36101b065c92e320347fcefa4";

form.addEventListener("submit",addCity);

function addCity(event){
    event.preventDefault();
    let inputValue = cityInput.value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const {name, main, weather, sys } =data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg `;
        const li = document.createElement("li");
        li.classList.add("city");

        const markUp = `
        <h2 data-name=${name},${sys.country}}>
        <span class = "name">${name}</span>
        <span class = "country">${sys.country}</span>
        </h2>
        <div class = "city-temp">${Math.round(main.temp)}</div>
        <figure>
        <img src = ${icon} alt=${weather[0]["main"]}>
        <figurecaption class="dec">${weather[0]["description"]}</figurecaption>
       <figure>
        `;
        li.innerHTML = markUp;
        list.appendChild(li);

        msg.innerText ="";

    })
    .catch(()=>{
        msg.innerText = "Please enter the valid city";
    })

    cityInput.value = "";


}
