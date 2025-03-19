import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Request from './components/Request';
import How from './components/How';
import Contact from './components/Contact';
import Pricing from './components/Pricing';





function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/How" element={<How />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;