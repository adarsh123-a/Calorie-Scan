import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Component/HomePage';
import LoginPage from './Component/Login';
import ProductsPage from './Component/Product';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <Router>
      <Routes>
        {/* Redirect to Login if not authenticated */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />} 
        />
        <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/products" element={isAuthenticated ? <ProductsPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
