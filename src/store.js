import { createStore, applyMiddleware, compose } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk" // Redux Thunk is middleware for Redux that allows you to write action creators that return a function instead of an action.
import rootReducer from "./reducers"

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    createLogger()
  ]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )

export default store
