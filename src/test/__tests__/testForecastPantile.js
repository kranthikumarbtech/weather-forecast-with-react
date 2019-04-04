import React from "react";
import { render } from "enzyme";

import configureStore from "redux-mock-store";
const mockStore = configureStore();

import data from "./data/mockData.json";
const { list } = data.weatherStation.data;

import ForecastPantile from "../../components/WeatherForecast/ForecastPantile";

describe("<ForecastPantile />", () => {
  it("should render a day-data-tiles container div", () => {
    const wrapper = render(<ForecastPantile store={mockStore()} forecasts={list}/>);
    expect(wrapper.hasClass("day-data-tiles")).toBe(true);
  });

  it("should render five forecast tiles", () => {
    const wrapper = render(<ForecastPantile store={mockStore()} forecasts={list}/>);
    expect(wrapper.children().length).toBe(5);
  });
});