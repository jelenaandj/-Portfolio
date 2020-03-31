import React, { useState } from 'react';
import './App.css';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import NavBar from './components/NavBar';
// export const ThemeContext = React.createContext()






function App() {

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
