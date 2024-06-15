import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import Homepage from "./Components/Homepage";
import Aboutme from "./Components/Aboutme";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
function App() {
  return (
    <div className="homepage_section m-auto p-4 w-full h-full">
      <div className="homepage_content_section flex flex-col justify-between w-full h-full border rounded-lg p-4">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
