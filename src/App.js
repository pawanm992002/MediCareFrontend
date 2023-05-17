import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Docter from './components/docter/Doctor';
import Patient from './components/patient/Patient';
import Covid from './components/covid/Covid';
import About from './components/About';
import Services from './components/Services/Services';
import ErrorPage from './components/ErrorPage';


import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/covid' element={<Covid />} />
      <Route path='/services' element={<Services />} />
      <Route path='/docter' element={<Docter />} />
      <Route path='/patient' element={<Patient />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </>);
}

export default App;
