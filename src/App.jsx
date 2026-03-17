
import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import ContactPage from "./components/Conatct";
import AboutPage from "./components/About";

const App = () => {
  return <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
    </Routes>
  </div>;
};

export default App;
