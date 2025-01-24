
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from 'react-router';
import React from 'react';
import Main from './layout/Main';
import Home from './pages/home/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)