import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />

          {/* error page */}
          <Route path="*" element={<PageNotFound/>} />

          {/* authonticaton routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
