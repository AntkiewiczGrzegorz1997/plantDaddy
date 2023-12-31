import './App.css';
import AddPlantForm from './components/AddPlantForm';
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Logout from './components/Logout';
import { Route, Routes, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';

function App() {
  const initialIsAuthenticated =
    localStorage.getItem('isAuthenticated') === 'true';
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialIsAuthenticated
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);
  return (
    <Routes>
      <Route
        path='/profile/*'
        element={
          isAuthenticated ? (
            <div className='App'>
              <ProfilePage />
            </div>
          ) : (
            <Navigate to='/login' replace />
          )
        }
      />

      <Route
        path='/profile/addnewplant'
        element={
          isAuthenticated ? <AddPlantForm /> : <Navigate to='/login' replace />
        }
      />
      <Route
        path='/signup'
        element={<Registration setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        path='/login'
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path='/' element={<HomePage />} />
      <Route
        path='/logout'
        element={<Logout setIsAuthenticated={setIsAuthenticated} />}
      />
    </Routes>
  );
}

export default App;
