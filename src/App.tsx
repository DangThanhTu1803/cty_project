import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { Topbar }  from './components/Topbar';
import { Menubar } from './components/Menubar';
import { Login } from './components/login'

function App() {
  return (
    <div className='bg'>
      <Login/>
      
    </div>
    
  );
}

export default App;
