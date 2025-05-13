import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2025 E-Store. Todos os direitos reservados.</p>
        <ul className="footer__links">
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
          <li><a href="/privacy">Privacidade</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;