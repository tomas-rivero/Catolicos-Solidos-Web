import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from '../router'
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
)
