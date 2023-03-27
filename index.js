// var UserChoice = prompt("What's your city");
//             if (UserChoice === "Lagos") {
//               alert(`It is currently 29°C (66°F) in Lagos with a humidity of 90%`);
//             } else if (UserChoice === "Ilorin") {
//               alert(`It is currently 49°C (36°F) in Ilorin with a humidity of 50%`);
//             } else if (UserChoice === "Abuja") {
//               alert(`It is currently 19°C (69°F) in Abuja with a humidity of 20%`);
//             } else {
//               alert(
//                 `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
//               );
//             }

setInterval(() => {
  let Time = new Date();

  function formatDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let now = new Date().getTime();
    let currentDay = days[date.getDay()];
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

    let formattedDate = `${currentDay}, ${hours}:${minutes}`;

    return formattedDate;
  }
  let li = document.querySelector("#time");
  li.innerHTML = formatDate(Time);
}, 1000);

// //Now we need to determine the constant of one of the id functions. Because no html function can be used directly in JavaScript.
// var inputval = document.querySelector("#city");
// var btn = document.querySelector("#button-addon2");
// var city = document.querySelector("#country");
// var descrip = document.querySelector("#sky");
// var temp = document.querySelector("#temp");

// apik = "3045dd712ffe6e702e3245525ac7fa38";

// //kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

// function convertion(val) {
//   return (val - 273).toFixed(2);
// }
// //Now we have to collect all the information with the help of fetch method

// btn.addEventListener("click", function () {
//   //This is the api link from where all the information will be collected

//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//       inputval.value +
//       "&appid=" +
//       apik
//   )
//     .then((res) => res.json())

//     //.then(data => console.log(data))

//     .then((data) => {
//       //Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.

//       var nameval = data["name"];
//       var descrip = data["weather"]["0"]["description"];
//       var tempature = data["main"]["temp"];
//       //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
//       country.innerHTML = `${nameval}`;
//       temp.innerHTML = `${convertion(tempature)} °C`;
//       sky.innerHTML = `${descrip}`;
//     })

//     //Now the condition must be added that what if you do not input anything in the input box.
//     .catch((err) => alert("You entered Wrong city name"));
// });
// //If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be seen.

function displayWeatherCondition(response) {
  document.querySelector("#country").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#sky").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 19;
}

// let dateElement = document.querySelector("#time");
// let currentTime = new Date();
// dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Nigeria");
