import React from 'react'
import {render} from 'react-dom'
import App from './app'
import {createStore} from 'redux'
import reducer from './reducer/'

const store = createStore(
  reducer,
  {
    text: 'いい話だ'
  }
)

render(<App store={store} />, document.getElementById('app'))
