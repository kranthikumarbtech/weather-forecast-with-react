import React, { Component } from "react"
import { connect } from "react-redux"
import { getData } from "../../actions"

@connect((store) => {
  return {
    status: store.weatherStation.status
  }
})
export default class Splashboard extends Component {

  _updateCity = () => {
    const city = this.__cityInput.value
    city.length !== 0 ? this.props.dispatch(getData(city)) : null
  }

  _onkeyPress = e => {
    e.key === "Enter" ? this._updateCity() : null
  }

  render() {

    const { city, status } = this.props
    const wrapperClass = (status === "failed") ? "container-header invalid-city" : "container-header"

    return (
      <div className={wrapperClass}>
        <section className="search-controls">
          <div className="search-container">
            <input
              type="text"
              className="location-input"
              id="city-name"
              ref={input => {
                this.__cityInput = input
                return this.__cityInput
              }}
              onKeyPress={this._onkeyPress}
              placeholder={city}
            />
            <input
              type="button"
              value="Go"
              className="search"
              onClick={this._updateCity}
              id="btn-go"
            />
            
          </div>
        </section>
        <span className="error">Please enter a valid city name!!</span>
        <header>
          <h1 className="head-title">5-Day Weather Forecast !!!</h1>
          <h2 className="head-sub-title">{city} </h2>
        </header>
      </div>
    )
  }
}
