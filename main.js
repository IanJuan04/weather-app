import "./style.css";
import fetchData from "./src/helpers/fetchData";
import displayData from "./src/helpers/displayData";

const form = document.querySelector("form");

async function main(e) {
  e.preventDefault();

  const location = document.getElementById("search").value;

  if (location === "") return;

  const apiKey = "69fee1bc80096fbb98a22448d13f3b4a";
  const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const weatherData = await fetchData(weatherApiUrl);
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  displayData({ weatherData, weatherIcon });
}

form.addEventListener("submit", main);
