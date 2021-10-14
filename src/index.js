import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDIIvYXm5-p_8NlfsMoLwjhlxF2z5s4pkA",
  authDomain: "cart-ff4a5.firebaseapp.com",
  projectId: "cart-ff4a5",
  storageBucket: "cart-ff4a5.appspot.com",
  messagingSenderId: "949188649148",
  appId: "1:949188649148:web:ad225a5325c366c0b730b9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));
