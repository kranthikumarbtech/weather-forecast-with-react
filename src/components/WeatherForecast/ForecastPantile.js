import React, { Component } from "react"
import HourlyInfo from "./HourlyInfo"

export default class ForecastPantile extends Component {

  // Filters by date and returns an Object containing a list of 5-day forecast.
  groupByDays = data => {
    return (data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0,10)
      list[forecastDate] = list[forecastDate] || []
      list[forecastDate].push(item)

      return list
    }, {}))
  }

  // To returns week of the day
  getDayInfo = data => {
    const daysOfWeek = [
      "sunday", 
      "monday", 
      "tuesday", 
      "wednesday", 
      "thursday", 
      "friday", 
      "saturday"
    ]
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()]
  }

  // Fetches the icon using the icon code available in the forecast data.
  getIcon = data => `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`

  // Gets a Minimum, Maximum and Avg Humidity temperatures of the day. // Stateless component return only view.
  getInfo = (data, min=[], max=[], humidity=[]) => {
    data.map(item => {
      max.push(item.main.temp_max)
      min.push(item.main.temp_min)
      humidity.push(item.main.humidity)
    })

    const minMax = {
      min: Math.round(Math.min(...min)),
      max: Math.round(Math.max(...max)),
    }

    // Gets a day's average humdity
    const avgHumdity = Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length) //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

    return (
      <div className="weather-info">
        <div className="min-max">
          <strong>{`${minMax.max}°C`}</strong> / {`${minMax.min}°C`}
        </div>
        <div className="more-info">
          {`Avg. Humidity: ${avgHumdity}%`}
        </div>
      </div>
    )
  }

  // Toggles accordion to display hourly wise weather information
  showMoreInfo = (index) => {
    const elm = this.refs[`div-${index}`]
    const expandedElment = document.querySelector(".expanded")

    elm.classList.add("expanded")
    expandedElment !== null && expandedElment.classList.remove("expanded")
  }

  render() {

    const { forecasts } = this.props
    const tiles = Object.values(this.groupByDays(forecasts))

    // Make ensures that we are showing only 5-days of forecast.
    const forecastPantile = tiles.length > 5 ? tiles.slice(0, 5) : tiles

    return (
      <div className="day-data-tiles">
        {forecastPantile.map((item, i) => (
          <div
            className={`day-data-tile tile-${i}`}
            key={i}
            ref={`div-${i}`}
            onClick={() => {this.showMoreInfo(i)}}
          >
            <div className="primary-info">
              <div className="icon">
                <img src={this.getIcon(item)} />
                {this.getDayInfo(item)}
              </div>
              {this.getInfo(item)}
            </div>
            <div className="detailed-info" key={i}>
              <HourlyInfo data={item} />
            </div>
          </div>
        ))}
      </div>
    )
  }
}
