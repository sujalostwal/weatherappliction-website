const apiKey = "7abb7323bdf0061085d0aec6936e69ed";

document.getElementById("btn").addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("output").innerHTML = "❌ City not found";
                return;
            }

            document.getElementById("output").innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temp: ${data.main.temp} °C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(() => {
            document.getElementById("output").innerHTML = "❌ Network error";
        });
}
