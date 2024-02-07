import React, { useState } from 'react';
import './App.css'; 
import Nav from './com/Nav'
import Login from './com/Login'
import Signup from './com/Signup'
import Teams from './com/Teams'
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  
  const [user, setUser] = useState(null);

  const handleSignIn = (signedInUser) => {
    setUser(signedInUser);
  };
  return (
   <>
 
 
   <Nav user={user}/>
  
   <Routes>
   
   <Route path="Login" element={<Login onSignIn={handleSignIn} />} />
        <Route path="Signup" element={<Signup onSignIn={handleSignIn} />} />
        <Route path="Teams" element={<Teams />} />
   </Routes>
   </>
  );
}

export default App;
