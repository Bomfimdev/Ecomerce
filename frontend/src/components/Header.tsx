import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>E-Store</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
              Carrinho
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout" className={({ isActive }) => (isActive ? 'active' : '')}>
              Checkout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;