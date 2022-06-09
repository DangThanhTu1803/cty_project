import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Topbar } from './components/Layout/Topbar';
import { Menubar } from './components/Layout/Menubar';
import { Login } from './components/Login/login'

function App() {
  return (
    <div className='back'>

      <div className='bg'>
        <Login />
      </div>
    </div>

  );
}

export default App;
