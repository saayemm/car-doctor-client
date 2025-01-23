
import './index.css'

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from 'react-router';
import React from 'react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)