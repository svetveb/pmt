import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import NewsForm from './components/NewsForm';
import About from './pages/about';
import Contact from './pages/contact';

const App: React.FC = () => {
  const [page, setPage] = useState<string>('contact');

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/about') {
      setPage('about');
    } else {
      setPage('contact');
    }
  }, [window.location.pathname]);

  return (
    <Router>
      <div className="container mx-auto">
        <Header />
        <Menu setPage={setPage} />
        <main className="p-4">
          <h1 className="text-4xl font-bold text-center mb-8">Новости</h1>
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/create" element={<NewsForm mode="create" />} />
            <Route path="/edit/:id" element={<NewsForm mode="edit" />} />
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
