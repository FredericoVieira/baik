import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './App'
import muiTheme from './theme/muiTheme'

import './styles/app.scss'

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
)
