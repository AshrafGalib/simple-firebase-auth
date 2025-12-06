import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
//import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router";
import { router } from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
