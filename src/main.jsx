import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Error from './Components/Error/Error.jsx';
import Jobs from './Components/Jobs/Jobs.jsx';
import Apply from './Components/Apply/Apply.jsx';
import Helpus from './Components/Helpus/Helpus.jsx';
import StartApply from './Components/StartApply/StartApply.jsx';
import JobDetiles from './Components/JobDetiles/JobDetiles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/apply',
        element: <Apply></Apply>
      },
      {
        path: '/helpus',
        element: <Helpus></Helpus>
      },
      {
        path: '/startapply',
        element: <StartApply></StartApply>
      },
      {
        path: '/job/:id',
        element: <JobDetiles></JobDetiles>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
