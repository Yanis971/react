import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './router/mainrouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MainRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
