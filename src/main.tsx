import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/reset.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

//? Rotas
import Home from './routes/Home.tsx'
import Projects from './routes/Projects.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/home',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
