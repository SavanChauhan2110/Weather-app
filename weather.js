const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const key = "ddb5c0f6d141b2a7950d1c022f9ea3b7";
let city_name = document.querySelector(".city p");
let searchBtn = document.querySelector(".searchbar i");
let text = document.querySelector(".searchbar input");
let humid = document.querySelector(".show_humid");
let speed = document.querySelector(".show_speed");
let changeImg = document.querySelector(".weather-img img");
let img_text = document.querySelector(".weather-img p");
let temp = document.querySelector(".temp h2");
let error = document.querySelector("#error-text");
let Container2 =document.querySelector(".container2");

const getweatherData = async () => {
    console.log("Fetching your data.....")
    let search_text = text.value;
    let response = await fetch(URL + `&q=${search_text}` + `&appid=${key}`);
    if (response.status == 404) {
        error.innerText = "city not found";
        Container2.classList.add("hide");

        
    } else {
        let data = await response.json();
        console.log(data);
        city_name.innerText = data.name;
        temp.innerText = Math.round(data.main.temp) + "°";
        speed.innerText = Math.round(data.wind.speed) + " km/h";
        humid.innerText = data.main.humidity + "%";
        Container2.classList.remove("hide");
        error.innerText = "";

        if(data.weather[0].main == "Clouds"){
            changeImg.src = "./images/clouds.png";
            img_text.innerText = "Clouds";
        }
        else if(data.weather[0].main == "Drizzle"){
            changeImg.src = "./images/drizzle.png";
            img_text.innerText = "Drizzle";
        }
        else if(data.weather[0].main == "Mist"){
            changeImg.src = "./images/mist.png";
            img_text.innerText = "Mist";
        }
        else if(data.weather[0].main == "Rain"){
            changeImg.src = "./images/rain.png";
            img_text.innerText = "Rain";
        }
        else if(data.weather[0].main == "Clear"){
            changeImg.src = "./images/clear.png";
            img_text.innerText = "Clear";
        }
        else if(data.weather[0].main == "Haze"){
            changeImg.src = "./images/haze.png";
            img_text.innerText = "Haze";
        }
    };
};

searchBtn.addEventListener("click", getweatherData);

