import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ResultsPage from './components/ResultsPage';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css';

function App() {
  const navStyle = {
    backgroundColor: 'Black',
    padding: '10px',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 20px', 
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white', 
    textDecoration: 'none', 
  };

  const logoImageStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  const navLinkStyle = {
    color: 'white', 
    marginLeft: '20px', 
    textDecoration: 'none',
  };

  return (
    <div>
      <Router>
        <div style={navStyle}>
          <div style={containerStyle}>
            <Link to="/" style={logoStyle}>
              <img
                src="https://images.vexels.com/media/users/3/141185/isolated/preview/b2c7de1951d5d57e9305c96ca875e170-bolsas-de-compra.png"
                alt="Logo"
                style={logoImageStyle}
              />
              {/* <h1>Bazar</h1> */}
            </Link>
            <nav>
              <Link to="/" style={navLinkStyle}>Inicio</Link>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/items/:q" element={<ResultsPage />} />
          <Route path="/item/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
