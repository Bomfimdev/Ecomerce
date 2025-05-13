import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from '../store';
import './Checkout.css';

interface FormData {
  name: string;
  address: string;
  city: string;
  zipcode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
}

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum: number, item) => sum + item.price * item.quantity, 0);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Formulário enviado:', data);
    // Aqui você pode adicionar a lógica de integração com Stripe/Mercado Pago
  };

  return (
    <div className="checkout">
      <h2>Finalizar Compra</h2>
      <div className="checkout__content">
        <div className="checkout__summary">
          <h3>Resumo do Pedido</h3>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <div className="checkout__items">
              {cartItems.map((item) => (
                <div key={item.id} className="checkout__item">
                  <h4>{item.name}</h4>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <h3>Total: R$ {total.toFixed(2)}</h3>
            </div>
          )}
        </div>
        <div className="checkout__form">
          <h3>Dados de Entrega</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Nome:
              <input
                type="text"
                {...register('name', { required: 'Nome é obrigatório' })}
              />
              {errors.name && <span className="error">{errors.name.message}</span>}
            </label>
            <label>
              Endereço:
              <input
                type="text"
                {...register('address', { required: 'Endereço é obrigatório' })}
              />
              {errors.address && <span className="error">{errors.address.message}</span>}
            </label>
            <label>
              Cidade:
              <input
                type="text"
                {...register('city', { required: 'Cidade é obrigatória' })}
              />
              {errors.city && <span className="error">{errors.city.message}</span>}
            </label>
            <label>
              CEP:
              <input
                type="text"
                {...register('zipcode', {
                  required: 'CEP é obrigatório',
                  pattern: {
                    value: /^\d{5}-\d{3}$/,
                    message: 'Formato de CEP inválido (ex.: 12345-678)',
                  },
                })}
              />
              {errors.zipcode && <span className="error">{errors.zipcode.message}</span>}
            </label>
            <h3>Dados de Pagamento</h3>
            <label>
              Número do Cartão:
              <input
                type="text"
                {...register('cardNumber', {
                  required: 'Número do cartão é obrigatório',
                  pattern: {
                    value: /^\d{16}$/,
                    message: 'Número do cartão deve ter 16 dígitos',
                  },
                })}
              />
              {errors.cardNumber && <span className="error">{errors.cardNumber.message}</span>}
            </label>
            <label>
              Validade:
              <input
                type="text"
                placeholder="MM/AA"
                {...register('cardExpiry', {
                  required: 'Validade é obrigatória',
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                    message: 'Formato inválido (ex.: 12/25)',
                  },
                })}
              />
              {errors.cardExpiry && <span className="error">{errors.cardExpiry.message}</span>}
            </label>
            <label>
              CVV:
              <input
                type="text"
                {...register('cardCvv', {
                  required: 'CVV é obrigatório',
                  pattern: {
                    value: /^\d{3}$/,
                    message: 'CVV deve ter 3 dígitos',
                  },
                })}
              />
              {errors.cardCvv && <span className="error">{errors.cardCvv.message}</span>}
            </label>
            <button type="submit" className="checkout__button">
              Finalizar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;