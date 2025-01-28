import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

const App: React.FC = () => {
  const [page, setPage] = useState<string>(window.location.pathname === '/about' ? 'about' : 'contact');

  return (
    <Router>
      <div className="container mx-auto">
        <Header />
        <Menu setPage={setPage} />
        <main className="p-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

