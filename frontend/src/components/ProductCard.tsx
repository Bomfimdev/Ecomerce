import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/features/cart/cartSlice';
import './ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price, imageUrl, quantity: 1 }));
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-card__image" />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">R$ {price.toFixed(2)}</p>
      <button className="product-card__button" onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;