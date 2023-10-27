import React, { useEffect, useState } from 'react';
import './App.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './Components/Singup';
import Login from './Components/Login';

function App() {
  
  const [isMobileView, setIsMobileView] = useState(false);

  const checkIsMobileView = () => {
    const breakpoint = 768;

    if (window.innerWidth < breakpoint) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    checkIsMobileView();
    window.addEventListener("resize", checkIsMobileView);
    return () => {
      window.removeEventListener("resize", checkIsMobileView);
    };
  }, []);

  return (
    <Router>
    <div className="App bg-blue-300">
      <Routes>
        <Route exact path="/" element={<Signup isMobileView={isMobileView}/>} />
        <Route exact path="/login" element={<Login isMobileView={isMobileView}/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
