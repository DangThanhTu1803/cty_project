import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ForgetPW } from './components/Login/forgetpw';
import { Step2 } from './components/Login/forgetpw2';
import { Dashboard } from './components/Dashboard/dashboard';
import { Devices } from './components/Devices/devices';
import { Info } from './components/InfoUser/info';
import { Adddevice } from './components/Devices/AddDevice/adddevice';
import { DetailsDevice } from './components/Devices/DetailDevice/DetailsDevice';
import { UpdateDevice } from './components/Devices/UpdateDevice/UpdateDevice';
import { ListService } from './components/Service/ListService';
import { AddService } from './components/Service/AddService/AddService';
import { DetailService } from './components/Service/DetailService/DetailService';

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
        <Route path='/devices/details' element={<DetailsDevice/>}/>
        <Route path='/devices/updates' element={<UpdateDevice/>}/>
        <Route path='/services' element={<ListService/>}/>
        <Route path='/services/add-service' element={<AddService/>}/>
        <Route path='/services/details' element={<DetailService/>}/>

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
