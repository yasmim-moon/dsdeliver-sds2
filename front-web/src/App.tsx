
import './App.css';
import React from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Orders/Routes';


function App() {
  return (
    <>
     
      <Routes />
      <ToastContainer/>


    </>
  );
}

export default App;
