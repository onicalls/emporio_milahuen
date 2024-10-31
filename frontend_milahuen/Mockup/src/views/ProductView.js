import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
import JoinSection from '../components/JoinSection';
import '../styles/ProductView.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductView() {
  const products = [
    { id: 1, image: '/images/almendras.png', name: 'Almendras', price: 5000 },
    { id: 2, image: '/images/nuez.jpeg', name: 'Nueces', price: 4000 },
    { id: 3, image: '/images/mani.jpg', name: 'Maní', price: 3000 },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="product-view">
      <div className="product-view__carousel">
        <Slider {...carouselSettings}>
          <div>
            <img src="/images/almendras.png" alt="Producto destacado 1" />
          </div>
          <div>
            <img src="/images/nuez.jpeg" alt="Producto destacado 2" />
          </div>
          <div>
            <img src="/images/mani.jpg" alt="Producto destacado 3" />
          </div>
        </Slider>
      </div>

      <h2 className="product-view__title">Nuestros Productos</h2>

      <div className="product-view__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

      <JoinSection />
    </div>
  );
}

export default ProductView;
