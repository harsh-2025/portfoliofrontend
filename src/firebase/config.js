import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCSdDwo0eRCGVImt7AfPgMZDwYZpDje-hs",
    authDomain: "portfolio-b0786.firebaseapp.com",
    databaseURL: "https://portfolio-b0786-default-rtdb.firebaseio.com",
    projectId: "portfolio-b0786",
    storageBucket: "portfolio-b0786.appspot.com",
    messagingSenderId: "540478190555",
    appId: "1:540478190555:web:11dff9cd214693def42dfe",
    measurementId: "G-9BYRD1QZQ0"
};
  
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;