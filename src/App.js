import React, { useState } from 'react';
import './App.css';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import NavBar from './components/NavBar';
// export const ThemeContext = React.createContext()
// import * as firebase from "firebase/app";

// import "firebase/firestore";
// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");





function App() {

  // const firebaseConfig = {
  //   apiKey: "AIzaSyBDhiEDGb8ZEYb619j1oxdU0DKXQbR73z0",
  //   authDomain: "portfolio-3d226.firebaseapp.com",
  //   databaseURL: "https://portfolio-3d226.firebaseio.com",
  //   projectId: "portfolio-3d226",
  //   storageBucket: "portfolio-3d226.appspot.com",
  //   messagingSenderId: "568564967690",
  //   appId: "1:568564967690:web:5913b5abfbc3f07f4d72f3",
  //   measurementId: "G-XCL8EQJNXF"
  // };
  
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // }
  // var db = firebase.firestore();
  
  
  // const[theme,setTheme]=useState('blue')
  const[skills,setSkills]=useState(false)

  return (
    // <ThemeContext.Provider value={{ backgroundColor: theme }}>
    <div className="App">
      <Router>
        <NavBar  />
        <Main />
        <Footer/>
      </Router>
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
