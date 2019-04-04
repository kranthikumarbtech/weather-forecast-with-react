import { GET_DATA_SUCCESS, GET_DATA_REJECTED, API_KEY, API_URL } from "../constants"

import axios from "axios" // This is a Promise based HTTP client use to asynchronous HTTP request to REST endpoints and perform CRUD operations. 

export const getData = (region) => (dispatch) => {
  const { latitude, longitude } = region || {}

  const getCity = `${API_URL}/data/2.5/forecast?q=${region}&units=metric&appid=${API_KEY}`
  const getCoords = `${API_URL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`

  let location = typeof(region) === "object" ? getCoords : getCity

  return axios.get(location)
    .then((response) => {
      dispatch({type: GET_DATA_SUCCESS, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: GET_DATA_REJECTED, payload: err}) // Error handling
    })
}