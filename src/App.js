import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GlobalLayout from './layouts/GlobalLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';



function App() {

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT


  const router = createBrowserRouter([
    {
      path : '/',
      element : <GlobalLayout />,
      children : [
        {
          index : true,
          element : <HomePage />
        },
        {
          path : 'login',
          index : true, 
          element : <LoginPage />
        }, 
        {
          path : 'registration',

          index : true,
          element : <RegistrationPage />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router} />

      </header>
    </div>
  );
}

export default App;
