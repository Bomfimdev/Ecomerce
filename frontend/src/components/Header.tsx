import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>E-Store</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Produtos</a></li>
          <li><a href="/cart">Carrinho</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;