import configureStore from "redux-mock-store";

import { GET_DATA_SUCCESS, GET_DATA_REJECTED } from "../../constants";

import thunk from "redux-thunk";
require("es6-promise").polyfill();
require("isomorphic-fetch");

import { getData } from "../../actions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it("should execute getData and return the required action type", () => {
  const store = mockStore({});
  return store.dispatch(getData("hyderabad"))
    .then(() => {
      const actions = store.getActions();

      // Expected action type from the action creator
      expect(actions[0].type).toEqual(GET_DATA_SUCCESS);
    });
});

it("should reject the request if no city is being passed", () => {
  const store = mockStore({});
  return store.dispatch(getData(null))
    .then(() => {
      const actions = store.getActions();

      // Expected action type from the action creator
      expect(actions[0].type).toEqual(GET_DATA_REJECTED);
    });
});