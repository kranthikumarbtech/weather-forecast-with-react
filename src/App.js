import React, { Component } from "react"
import { connect } from "react-redux"
import { getData } from "./actions"
import WeatherForecast from "./components/WeatherForecast"

@connect(store => {  
  return {
    forecast: store.weatherStation.data
  }
})
export default class App extends Component {

  // Fetches data by using geolocation. If the user blocks, or if the browser does not support the API, 
  // fallsback to default location of Hyderabad
  componentDidMount() {  
    const detectLocation = new Promise((resolve,reject) => { // The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position.coords)
        }, (error) => {
          if(error.code === error.PERMISSION_DENIED) {
            console.error("Error detecting location.")
          }
        })
      }
    })

    detectLocation.then((location) => {
      this.props.dispatch(getData(location))
    }).catch(() => {
      this.props.dispatch(getData("hyderabad"))
    })
  }

  render() {
    const { forecast } = this.props

    return (
      forecast === null ? (
        <div class="loading">
          <div class="ball"></div>
          Loading...
        </div>
      ) : (
        <div>
          <WeatherForecast data={forecast} />
          <div className="fork">
            <a href="https://github.com/KranthiKumarS/weather-forecast-with-react" target="_blank">SourceCode on Github</a>
          </div> 
        </div>
      )
    )
  }
}
