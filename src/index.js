import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line
import "swiper/css/bundle";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2eGY4gt-Qc_xiWH8zjFG6eH4gDkBlWj4",
  authDomain: "portofino-farias.firebaseapp.com",
  projectId: "portofino-farias",
  storageBucket: "portofino-farias.appspot.com",
  messagingSenderId: "960104398506",
  appId: "1:960104398506:web:88046cbd67177147439ad3"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
