import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'

import promise from 'redux-promise'
// multi: serve para dentro de uma 
// ActionCreate retornar um array com varsis Actions
import multi from 'redux-multi'

import thunk from 'redux-thunk'
import reducers from "./main/reducers/reducers"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk,multi,promise)(createStore)(reducers,devTools)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("app")
)