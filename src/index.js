import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { theme } from './config/theme'
import { Provider } from 'react-redux'
import store from './state/store'
const root = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <App />
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(root, document.getElementById('root'))
