import React from "react";
import { render, mount, shallow } from "enzyme";

import configureStore from "redux-mock-store";
const mockStore = configureStore();

import Splashboard from "../../components/WeatherForecast/Splashboard";
const STATUS = "success";

describe("<Splashboard />", () => {
  it("renders an `.container-header`", () => {
    const wrapper = render(<Splashboard store={mockStore({ weatherStation: {status: STATUS}})} />);
    expect(wrapper.hasClass("container-header")).toBe(true);
  });

  it("should contain a input field", () => {
    const wrapper = render(<Splashboard store={mockStore({ weatherStation: {status: STATUS}})} />);
    expect(wrapper.find(".location-input")).toHaveLength(1);
  });

  it("should contain a change city button", () => {
    const wrapper = render(<Splashboard store={mockStore({ weatherStation: {status: STATUS}})} />);
    expect(wrapper.find("#btn-go")).toHaveLength(1);
  });

  it("should contain app head-title", () => {
    const wrapper = mount(<Splashboard store={mockStore({ weatherStation: {status: STATUS}})} />);
    const headtitle = <h1 className="head-title">5-Day Weather Forecast</h1>;
    expect(wrapper.contains(headtitle)).toEqual(true);
  });

  it("should receive city prop", () => {
    const wrapper = shallow(<Splashboard city="hyderabad" store={mockStore({ weatherStation: {status: STATUS}})} />);
    expect(wrapper.prop("city")).toBeDefined();
  });
});