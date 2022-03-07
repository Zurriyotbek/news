import React from "react";
// import alanBtn from "@alan-ai/alan-sdk-web";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
