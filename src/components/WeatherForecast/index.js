import React, { Component } from "react"
import { connect } from "react-redux"

import ForecastPantile from "./ForecastPantile"
import Splashboard from "./Splashboard"

const WeatherForecast = ({ data }) => {

    const { city, list } = data
    const { name } = city
  
    return (
      <div className="container-wrapper">
        <Splashboard city={name} />
        <ForecastPantile forecasts={list} />
      </div>
    )
}

export default WeatherForecast