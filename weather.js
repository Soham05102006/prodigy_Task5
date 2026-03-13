   const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Example URL - replace with your actual API base URL
   const apiKey = "2b3aa3e538457d45fe835b9e67270d28"; // Replace with your actual API key
   const searchBox = document.querySelector(".search input");
   const searchBtn = document.querySelector(".search button");
   const weatherIcon = document.querySelector(".weather-icon");

   async function checkWeather(city) {
       const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // Corrected template literal
       var data = await response.json();

       console.log(data);
       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°c`;
       document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
       document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;


       if(data.weather[0].main == "Haze"){
           weatherIcon.src= "https://img.icons8.com/?size=100&id=4H0_OmTw4YkP&format=png&color=000000";
       }
           if(data.weather[0].main == "Smoke"){
            weatherIcon.src= "https://img.icons8.com/?size=100&id=oA8XKuOEEjkQ&format=png&color=000000";
           }
           if(data.weather[0].main == "drizzle"){
            weatherIcon.src= "https://img.icons8.com/?size=100&id=VY9MLUH4ggfo&format=png&color=000000";
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src= "https://img.icons8.com/?size=100&id=bILLAxIx8ASv&format=png&color=000000";
        }
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src= "https://img.icons8.com/?size=100&id=1RZffALm9Wgo&format=png&color=000000";
        }
   }

   searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
   })

   