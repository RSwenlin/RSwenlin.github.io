const date = new Date();
document.querySelector("#theyear").innerHTML = date.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

const cityid = "5585000";
const APPID = "36e656b2905c89b5bb9203c9be1b4077";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temperature = document.querySelector("#temp");
    temperature.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector("#current");
    currently.textContent = jsObject.main.feels_like.toFixed(0);
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;
    const windspeed = document.querySelector("#wind");
    windspeed.textContent = jsObject.wind.speed.toFixed(0);
    // const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  });

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const town = towns.filter((x) => x.name == "Fish Haven");

    town.forEach((x) => {
      let card = document.createElement("section");

      let p = document.createElement("p");

      p.innerHTML = `Upcoming Events <br> <br> ${x.events}`;

      card.append(p);

      document.querySelector("div.eventcards").append(card);
    });
  });
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);

//     let day = 0;
//     const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     // filter the list array for the five day forecasts
//     const fiveDayForecast = jsObject.list.filter((forecast) => forecast.dt_txt);
//     fiveDayForecast.forEach((x) => {
//       let d = new Date(x.dt_txt);
//       document.querySelector(`dayofweek${day + 1}`).textContent =
//         dayofWeek[d.getDay()];
//       document.querySelector(`forecast${day + 1}`).textContent = x.main.temp;
//       day++;
//     });
//   });
