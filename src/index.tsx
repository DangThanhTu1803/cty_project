import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ForgetPW } from './components/forgetpw';
import { Step2 } from './components/forgetpw2';
import { Dashboard } from './components/dashboard';
import { Devices } from './components/devices';
import { Info } from './components/info';
import { Adddevice } from './components/AddDevice/adddevice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/quen-mat-khau' element={<ForgetPW />}/>
        <Route path='/quen-mat-khau-2' element={<Step2 />}/>
        <Route path='/devices' element={<Devices />}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/devices/add-device' element={<Adddevice/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
