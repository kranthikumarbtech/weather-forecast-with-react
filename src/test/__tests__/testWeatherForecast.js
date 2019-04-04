import React from "react";
import { shallow } from "enzyme";

import configureStore from "redux-mock-store";
const mockStore = configureStore();

import WeatherForecast from "../../components/WeatherForecast";
import Splashboard from "../../components/WeatherForecast/Splashboard";

import data from "./data/mockData.json";

describe("<WeatherForecast />", () => {
  it("should render a div with `.container-wrapper` class", () => {
    const wrapper = shallow(<WeatherForecast data={data.weatherStation.data} />);
    expect(wrapper.hasClass("container-wrapper")).toBe(true);
  });

  it("should contain a splash board", () => {
    const wrapper = shallow(<WeatherForecast data={data.weatherStation.data} />);
    expect(wrapper.find(Splashboard)).toHaveLength(1);
  });
});