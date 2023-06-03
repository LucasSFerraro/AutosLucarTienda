import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBc62DFxkQMtcEYZRULMMQUY8_Q6XdviWo",
  authDomain: "coderhouse-ecommerce-ferraro.firebaseapp.com",
  projectId: "coderhouse-ecommerce-ferraro",
  storageBucket: "coderhouse-ecommerce-ferraro.appspot.com",
  messagingSenderId: "298385286699",
  appId: "1:298385286699:web:8243ef68c924b97a036c6e"
}
initializeApp (firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


