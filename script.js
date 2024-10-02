document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "e2b1e9cfd0188b86453f2041b711d62b"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log(response); // Log the response for debugging
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const result = `
                <h2>Weather in ${data.name}</h2>
                <p>${weatherDescription}</p>
                <p>Temperature: ${temperature} °C</p>
            `;
            document.getElementById("weatherResult").innerHTML = result;
        })
        .catch(error => {
            console.error(error); // Log the error to the console for debugging
            document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
        });
});
