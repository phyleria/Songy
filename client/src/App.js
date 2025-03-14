import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/information" element={<div>Information Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/quote" element={<div>Quote Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;