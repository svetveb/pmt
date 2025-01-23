import React, { useState } from 'react';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('about')}>О компании</button>
        <button onClick={() => setCurrentPage('contact')}>Контакты</button>
      </nav>
      <div>{renderPage()}</div>
    </div>
  );
};

export default App;


