import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{createBrowserRouter,RouterProvider}from"react-router-dom";
import Owner from './Component/Owner.jsx';
import Navbar from './Component/Navbar.jsx';
import Home from './Component/Home.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/owner",
    element: <Owner/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
)
