import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

import App from './App';
import { UserProvider } from './context/UserContext';
// import reportWebVitals from './reportWebVitals';
// const firebaseConfig = {
//   apiKey: "AIzaSyCSdDwo0eRCGVImt7AfPgMZDwYZpDje-hs",
//   authDomain: "portfolio-b0786.firebaseapp.com",
//   databaseURL: "https://portfolio-b0786-default-rtdb.firebaseio.com",
//   projectId: "portfolio-b0786",
//   storageBucket: "portfolio-b0786.appspot.com",
//   messagingSenderId: "540478190555",
//   appId: "1:540478190555:web:11dff9cd214693def42dfe",
//   measurementId: "G-9BYRD1QZQ0"
// };
// const firebaseApp = initializeApp(firebaseConfig);

// f.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <UserProvider>
      <App />
      </UserProvider>
  // </React.StrictMode>
);



// const auth = getAuth(firebaseApp);
// const database = getDatabase(firebaseApp);

// export { auth, database };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
