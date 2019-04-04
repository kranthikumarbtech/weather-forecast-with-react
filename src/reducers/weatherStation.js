import { GET_DATA_SUCCESS, GET_DATA_REJECTED } from "../constants";

export default function reducer(state = {
  data: null,
  status: null
}, action) {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: "success"
      };
      break;
    }
    case GET_DATA_REJECTED: {
      return {
        ...state,
        status: "failed"
      };
      console.error(`Could not get a data from webservice. ${action.payload}.`) // eslint-disable-line
      break;
    }
    default:
      return state;
  }
}