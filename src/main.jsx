import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './Components/Login.jsx';
import Dash from './Components/Dash.jsx';
import TopBlogs from './Components/TopBlogs.jsx';
const router = createBrowserRouter([
  {
    path: "/nav",
    element: <App />,
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/admin", 
    element: <Dash />,
  },
  {
    path: "/top", 
    element: <TopBlogs />,
  },

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
