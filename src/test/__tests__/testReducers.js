import React from "react";

import * as actions from "../../actions";
import reducer from "../../reducers";

import { GET_DATA_SUCCESS, GET_DATA_REJECTED } from "../../constants";

import mockData from "./data/mockData.json";

describe("data reducer", () => {
  
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({"weatherStation": {"data": null, "status": null}});
  });

  it("should handle GET_DATA_SUCCESS", () => {
    const startFetch = {
      type: GET_DATA_SUCCESS,
      payload: mockData.weatherStation.data
    };

    expect(reducer({}, startFetch)).toEqual(mockData);
  });

  it("should handle GET_DATA_REJECTED", () => {
    const startFetch = {
      type: GET_DATA_REJECTED,
      payload: {}
    };

    expect(reducer({}, startFetch)).toEqual({"weatherStation": {"data": null, "status": "failed"}});
  });
});

