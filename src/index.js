import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import Auth from './Auth/Auth'
import { store } from './state/store'

import './index.css'


ReactDOM.render(
    <Provider
        store={store}
    >
        <MuiThemeProvider>
            <Auth>
                <App />
            </Auth>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)
