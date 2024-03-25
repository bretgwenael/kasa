import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
import About from './pages/about/About';
import Header from "./components/header/Header";
import Error from "./pages/page_error/Page_error";
import Footer from "./components/footer/Footer";
import Housing_resume from "./pages/housing_resume/Housing_resume";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing_resume/:id" element={<Housing_resume />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
