import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
import About from './pages/about/About';
import Header from "./components/header/Header";
import Error from "./pages/page_error/Page_error";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
