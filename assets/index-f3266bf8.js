(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function i(a){return await(await fetch(a)).json()}function s(a){const r=document.querySelector("form");document.querySelector(".card").remove();const n=`
  <article class="card">
  <div class="weather-icon-container">
    <img id="weather-icon " src=${a.weatherIcon} alt="" />
  </div>
  <div class="weather-data-container">
    <h2 class="main-temp">${(a.weatherData.main.temp-257.15).toFixed(2)}°C</h2>
    <p class="weather-main">${a.weatherData.weather[0].main}</p>
    <p class="date">${new Date}</p>
  </div>
</article >
  `;r.innerHTML+=n}const l=document.querySelector("form");async function d(a){a.preventDefault();const r=document.getElementById("search").value;if(r==="")return;const n=`http://api.openweathermap.org/data/2.5/weather?q=${r}&appid=69fee1bc80096fbb98a22448d13f3b4a`,e=await i(n),t=`https://openweathermap.org/img/wn/${e.weather[0].icon}.png`;s({weatherData:e,weatherIcon:t})}l.addEventListener("submit",d);
