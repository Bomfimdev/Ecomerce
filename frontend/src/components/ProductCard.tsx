import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-card__image" />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">R$ {price.toFixed(2)}</p>
      <button className="product-card__button">Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;