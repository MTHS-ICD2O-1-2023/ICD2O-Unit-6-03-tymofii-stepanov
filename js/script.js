// Copyright (c) 2024 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Jun 2024
// This file contains the JS functions for index.html

"use strict"


async function getWeather() {

  try {
    const apiKey = 'fe1d80e1e103cff8c6afd190cad23fa5'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=${apiKey}&units=metric`
    const resultJSON = await fetch(url)
    const jsonData = await resultJSON.json()

    const temperature = jsonData.main.temp
    const weatherDescription = jsonData.weather[0].description
    const iconCode = jsonData.weather[0].icon

    const weatherIconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`

    document.getElementById('weather-result').innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${weatherDescription}</p>`
    document.getElementById('weather-icon').innerHTML = `<img src="${weatherIconUrl}" alt="Weather icon">`
  } catch (error) {
    console.error(error)
    document.getElementById('weather-result').innerHTML = '<p>Failed to retrieve weather data. Please try again later.</p>'
  }
}
