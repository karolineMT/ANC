import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Home from "./pages/Home";
// import Cards from "./pages/Cards";
// import Signup from "./pages/Signup";
// import Register from "./pages/Register";
// import Contact from "./pages/Contact";
// import Reports from "./pages/Reports";
// import Demographics from "./components/demographics/Demographics";
import SignUp from "./registration/SignUp";
import Login from "./registration/Login";




function App() {
  return (
    <Router>
      <div className="App">
      
        <div className='grid-container'>
        
      
         
          <Routes>
          
          {/* <Route exact path="/" element={<Home />} />;
          <Route path="/Cards" element={< Cards/>} />;
          <Route path="/Signup" element={< Signup/>} />;
          <Route path="/Login" element={< Login/>} />;
          <Route path="/Register" element={< Register/>} />;
          <Route path="/Contact" element={< Contact/>} />;
          <Route path="/Reports" element={< Reports/>} />; */}
          {/* <Route path="/Cards" element={<Demographics />} />; */}
          
           <Route path="/" element={<Login />} />;
           <Route path="/register" element={<SignUp/>} />;
           <Route path="/home" element={<Home/>} />;




          </Routes>

        </div>
      </div>
    </Router>

  );
}

export default App;

