import React from 'react'
import {render} from 'react-dom'
import App from './app'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer/'
import middlewares from './middleware/'

const store = createStore(
  reducer,
  {
    text: 'いい話だ'
  },
  applyMiddleware(...middlewares)
)

render(<App store={store} />, document.getElementById('app'))
