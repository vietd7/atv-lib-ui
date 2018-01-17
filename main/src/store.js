import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
// import middlewareRoot from './middlewares'


export default createStore(
  rootReducer
  // initialState,
  // middlewareRoot
  // middleware
)
