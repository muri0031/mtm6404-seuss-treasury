import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Quotes } from './routes/Quotes'
import { Home } from './routes/Home'
import { Description } from './routes/Description'
import { Books } from './routes/Books'



const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <Home/>
    }, 
    {
      path: 'books',
      element: <Books/>
    },
    {
      path: 'quotes',
      element: <Quotes/>
    },
    {
      path: 'description/:id',
      element: <Description/>
    }
  ]
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>
)
