# 🌦️ Weather Application

A modern and responsive **Weather Application** built using **HTML, CSS, and Vanilla JavaScript**, powered by a real-time **Weather API**.  
This project allows users to search for any city and instantly view current weather conditions such as temperature, humidity, and wind speed.

This project is part of the **web-development-mini-projects** repository, where each folder represents a standalone, real-world frontend project.

---

## 🚀 Project Overview

Weather information is something people check multiple times a day.

> *“I want to quickly know the current weather of any city without opening heavy apps.”*

This application solves that problem by fetching **live weather data** from an external API and presenting it in a clean, user-friendly UI.

---

## ✨ Features

- 🔍 Search weather by city name  
- 🌡️ Displays current temperature (°C)  
- 💧 Shows humidity percentage  
- 🌬️ Shows wind speed (km/h)  
- 🖼️ Dynamic weather icons based on conditions  
- ⚡ Real-time data using Weather API  
- 🎨 Clean and responsive UI  

---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling & responsive layout  
- **JavaScript (Vanilla)** – API handling & DOM updates  
- **Weather API** – Live weather data  

---

## 📂 Project Structure

```text
whether-application/
│
├── index.html        # Main HTML file
├── style.css         # UI styling
├── script.js         # Weather API logic
├── config.js         # API key configuration
└── images/
    ├── search.png
    ├── rain.png
    ├── clouds.png
    ├── clear.png
    ├── drizzle.png
    ├── mist.png
    ├── snow.png
    ├── wind.png
```

---

## ⚙️ How It Works

1. User enters a city name and clicks the search button.
2. JavaScript sends a request to the Weather API.
3. API returns real-time weather data.
4. UI updates dynamically with:
   - City name
   - Temperature
   - Humidity
   - Wind speed
   - Relevant weather icon
5. Weather section becomes visible once data is fetched.

This reflects how real-world frontend applications consume and display API data.

---

## ▶️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ShaikAbdulAzizGit/web-development-mini-projects.git
   ```

2. Navigate to the project folder:
   ```bash
   cd web-development-mini-projects/whether-application
   ```

3. Add your API key in `config.js`:
   ```js
   const CONFIG = {
       WEATHER_API_KEY: "YOUR_API_KEY_HERE"
   }
   ```

4. Open `index.html` in your browser.

---

## 📌 Real-World Use Cases

- Daily weather checking
- Travel planning
- API integration practice
- Frontend portfolio project
- Demonstrates async/await & fetch API

---

## 🔮 Possible Enhancements

- Show weekly weather forecast
- Add temperature unit toggle (°C / °F)
- Auto-detect user location
- Error UI for invalid cities
- Loading animations

---

## 🤝 Contribution

This project is intended for learning and portfolio use.  
Feel free to fork the repository and enhance features or UI.

---

## 📄 License

This project is open-source and free to use for learning and personal purposes.

---

### ⭐ If you find this project useful, consider starring the repository!
