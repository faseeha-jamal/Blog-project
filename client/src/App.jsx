import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import  Router  from "./router/Router";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/home' element={HomePage}/>
        <Route path='/' element={LandingPage}/>
        </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
