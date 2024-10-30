// src/components/SidebarCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/SidebarCart.css';

function SidebarCart({ isOpen, onClose }) {
  const { cartItems } = useContext(CartContext);

  // Calcular el total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`sidebar-cart ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-cart__close" onClick={onClose}>×</button>
      <h2>Carrito de Compras</h2>
      <div className="sidebar-cart__items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="sidebar-cart__item">
              <img src={item.image} alt={item.name} className="sidebar-cart__item-image" />
              <div className="sidebar-cart__item-details">
                <p>{item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío.</p>
        )}
      </div>

      {/* Mostrar el total */}
      <div className="sidebar-cart__total">
        <p>Total: ${total.toFixed(2)}</p>
      </div>

      <button className="sidebar-cart__checkout">Continuar Compra</button>
    </div>
  );
}

export default SidebarCart;
