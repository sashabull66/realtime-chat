import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyA-RvVzCMM7L_ArQZk8ygKuBJbgnNXA2lE",
    authDomain: "chat-realtime-e890d.firebaseapp.com",
    projectId: "chat-realtime-e890d",
    storageBucket: "chat-realtime-e890d.appspot.com",
    messagingSenderId: "135609669024",
    appId: "1:135609669024:web:9d428d862888549294c0c5",
    measurementId: "G-E3DYB0CCYH",
})
export const Context = createContext(null)
const auth = firebase.auth();
const firestore = firebase.firestore()



ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
    <App />
    </Context.Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
