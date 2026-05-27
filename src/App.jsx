import React from "react";
import { Route, Routes } from "react-router";

import Header from "./components/Header";
import HomePage from "./pages/Home";
import AboutPage from "./components/About";
import ContactPage from "./components/Conatct";

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route exact path="/portfolio" element={<HomePage/>} />
        <Route exact path="/portfolio/about" element={<AboutPage/>} />
        <Route exact path="/portfolio/contact" element={<ContactPage/>} />
      </Routes>
    </>
  );
}

export default App;
