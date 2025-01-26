import React, { useEffect, useState } from 'react';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';

const App = () => {
  const [page, setPage] = useState(window.location.pathname === '/about' ? 'about' : 'contact');

  const navigate = (page) => {
    setPage(page);
    window.history.pushState({}, '', page === 'contact' ? '/' : '/about');
  };

  useEffect(() => {
    const handlePopState = () => {
      setPage(window.location.pathname === '/about' ? 'about' : 'contact');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (page) {

      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Contact />;
    }
  };

  return (
    <div className="container mx-auto">
      <Header />
      <Menu onNavigate={navigate} />
      <main className="p-4">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

