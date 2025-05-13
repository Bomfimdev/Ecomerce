import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: 'Camiseta Básica', price: 49.90, imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Calça Jeans', price: 99.90, imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Tênis Casual', price: 149.90, imageUrl: 'https://via.placeholder.com/300x200' },
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;