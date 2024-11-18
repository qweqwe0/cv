import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import WorkDetail from './components/WorkDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/work/:id" element={<WorkDetail/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

