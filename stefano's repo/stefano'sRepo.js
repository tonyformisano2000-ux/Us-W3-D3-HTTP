// creiamo una funzione che si lancerà all'avvio della pagina per recuperare i dati meteo

const weatherURL =
  "https://api.open-meteo.com/v1/forecast?latitude=39.2067&longitude=16.8923&daily=temperature_2m_min,temperature_2m_max&hourly=temperature_2m&current=rain&timezone=Europe%2FBerlin";

const getWeather = function () {
  fetch(weatherURL)
    .then((response) => {
      console.log("RESPONSE", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("risposta non corretta dal server", response.status);
      }
    })
    .then((data) => {
      console.log("DATI METEO", data);
      const minTemp = data.daily.temperature_2m_min[0];
      const maxTemp = data.daily.temperature_2m_max[0];
      const currentTemp = data.hourly.temperature_2m[0];
      console.log(minTemp);
      console.log(maxTemp);
      console.log(currentTemp);
      // manipolo il DOM
      document.getElementById("min").innerText = minTemp;
      document.getElementById("max").innerText = maxTemp;
      document.getElementById("current").innerText = currentTemp;
    })
    .catch((err) => {
      console.log("ERRORE NELLA FETCH", err);
    });
};

getWeather();
