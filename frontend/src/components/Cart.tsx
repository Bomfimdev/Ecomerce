import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeItem, updateQuantity, clearCart } from '../store/features/cart/cartSlice';
import './Cart.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="cart__items">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="cart__item">
              <h3>{item.name}</h3>
              <p>Preço: R$ {item.price.toFixed(2)}</p>
              <p>
                Quantidade:{' '}
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))
                  }
                />
              </p>
              <p>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
              <button
                className="cart__item-remove"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remover
              </button>
            </div>
          ))}
          <div className="cart__actions">
            <button
              className="cart__clear"
              onClick={() => dispatch(clearCart())}
            >
              Limpar Carrinho
            </button>
            <div className="cart__total">
              <h3>Total: R$ {total.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;