import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {applyCurrentTheme} from "./utils/utils";


applyCurrentTheme()

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
