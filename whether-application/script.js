
async function searchWhether(city_name) {
    const api_key=CONFIG.WEATHER_API_KEY
    const api_url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_name}`
    const response = await fetch(api_url)
    if (!response.ok) {
        alert("Invalid city name Please try again !...")
    }
    else {
        let data = await response.json()
        // console.log(data)


        document.querySelector(".city").innerHTML = data.location.name
        document.querySelector(".temp").innerHTML = data.current.temp_c + "°c";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";
        let condition = data.current.condition.text
        switch (condition) {
            case "Partly cloudy":
                document.querySelector(".whether>img").src = "images/clouds.png"
                break;
            case "Clear":
                document.querySelector(".whether>img").src = "images/clear.png"
                break;
            case "Clouds":
                document.querySelector(".whether>img").src = "images/clouds.png"
                break;
            case "Drizzle":
                document.querySelector(".whether>img").src = "images/drizzle.png"
                break;
            case "Mist":
                document.querySelector(".whether>img").src = "images/mist.png"
                break;
            case "Rain":
                document.querySelector(".whether>img").src = "images/rain.png"
                break;
            case "Snow":
                document.querySelector(".whether>img").src = "images/snow.png"
                break;
            case "Wind":
                document.querySelector(".whether>img").src = "images/wind.png"
                break;
        }
        document.querySelector(".whether").style.display = "block"
    }



}
let search_box = document.querySelector(".search input")
let search_btn = document.querySelector(".search button")
search_btn.addEventListener("click", () => {
    searchWhether(search_box.value)
})

