import React from 'react';
import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
