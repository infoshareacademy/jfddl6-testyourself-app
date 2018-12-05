import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import Auth from './Auth/Auth'

import './index.css'


ReactDOM.render(
    <MuiThemeProvider>
        <Auth>
            <App />
        </Auth>
    </MuiThemeProvider>,
    document.getElementById('root')
)
