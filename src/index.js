import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import axios from 'axios'

import App from './App'
import store from './store'

axios.defaults.baseURL = 'https://5d024bd79ce12c0014e0f50b.mockapi.io/api'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)