import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
const API_KEY = "ed11ebee39120a94155cc49b825b1d1c&units=metric";

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [weather, setWeather] = useState(null);

  // Fetch city suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
        );
        // console.log(response.data);
        setSuggestions(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  // Fetch weather data
  useEffect(() => {
    if (!selectedCity) return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.lat}&lon=${selectedCity.lon}&units=metric&appid=${API_KEY}`
        );
        //console.log(response);

        setWeather(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, [selectedCity]);

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        m: "auto",
        borderRadius: 2,
        backgroundColor: "background.paper",
        boxShadow: 3,
        minHeight: "90vh",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "150%",
        width: "300px",
      }}
    >
      <div style={{ width: "300px", margin: "auto" }}>
        <h2 style={{ textAlign: "center" }}>🌤️ React Weather App</h2>
        <input
          type="text"
          placeholder="Enter city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: "94%", padding: "8px", justifyContent: "center" }}
        />
        {suggestions.length > 0 && (
          <ul
            style={{
              border: "1px solid #ccc",
              padding: 0,
              listStyle: "none",
            }}
          >
            {suggestions.map((city, index) => (
              <li
                key={index}
                style={{ padding: "8px", cursor: "pointer" }}
                onClick={() => {
                  setSelectedCity(city);
                  setSuggestions([]);
                  setQuery(`${city.name}, ${city.country}`);
                }}
              >
                {city.name}, {city.state ? city.state + ", " : ""}
                {city.country}
              </li>
            ))}
          </ul>
        )}

        {weather && (
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
              border: "1px solid #ccc",
              padding: "16px",
            }}
          >
            <h3>{weather.name}</h3>
            <p>{weather.weather[0].description}</p>
            <h2>{weather.main.temp}°C</h2>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </div>
        )}
      </div>
    </Paper>
  );
};

export default WeatherApp;
