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
          
<<<<<<< HEAD
           <Route exact path="/" element={<Home />} />;
          <Route path="/Cards" element={< Cards/>} />; 
=======
          {/* <Route exact path="/" element={<Home />} />;
          <Route path="/Cards" element={< Cards/>} />;
>>>>>>> a07f2dd32c8aa9ee064c2b1938650f163dff1703
          <Route path="/Signup" element={< Signup/>} />;
          <Route path="/Login" element={< Login/>} />;
          <Route path="/Register" element={< Register/>} />;
          <Route path="/Contact" element={< Contact/>} />;
<<<<<<< HEAD
          <Route path="/Reports" element={< Reports/>} />; 
          <Route path="/Cards" element={<Demographics />} />;
=======
          <Route path="/Reports" element={< Reports/>} />; */}
          {/* <Route path="/Cards" element={<Demographics />} />; */}
          
           <Route path="/" element={<Login />} />;
           <Route path="/register" element={<SignUp/>} />;
           <Route path="/home" element={<Home/>} />;


>>>>>>> a07f2dd32c8aa9ee064c2b1938650f163dff1703


          </Routes>

        </div>
      </div>
    </Router>

  );
}

export default App;

