import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import SearchPage from './components/SearchPage/SearchPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Profile from './components/Profile/Profile';
import DetailsPage from './components/DetailsPage/DetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  const navigate = useNavigate();
  return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/search" element={<SearchPage/>} />
          <Route path="/app/profile" element={<Profile/>} />
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
          <Route path="/app/login" element={<LoginPage/>} />
          <Route path="/app/register" element={<RegisterPage />}
           />
        </Routes>
        </>
  );
}
export default App;