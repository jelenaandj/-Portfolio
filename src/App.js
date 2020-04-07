import React from 'react';
import './App.css';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar';


function App() {

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
