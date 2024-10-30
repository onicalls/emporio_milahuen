import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card__image" />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">${price}</p>
      <div className="product-card__actions">
        <button className="product-card__button add-to-cart">Agregar al carrito</button>
        <button className="product-card__button buy-now">Comprar ahora</button>
      </div>
    </div>
  );
}

export default ProductCard;
