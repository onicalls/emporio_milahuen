import React, { useState } from 'react';
import BenefitCard from './BenefitCard';
import '../styles/BenefitsSection.css';

function BenefitsSection() {
  const [jarsReused, setJarsReused] = useState(100); // Cantidad de frascos reutilizados

  // Cálculos de ahorro de recursos
  const treesSaved = Math.round(jarsReused * 0.1); // 0.1 árboles por frasco
  const waterSaved = Math.round(jarsReused * 0.9); // 0.9 litros de agua por frasco

  const benefits = [
    {
      id: 1,
      image: '/images/tree.jpg',
      title: 'Tala de árboles evitada',
      description: (
        <>
          Al reutilizar frascos, reducimos la necesidad de tala de árboles. Aproximadamente, se evitaron <strong>{treesSaved}</strong> árboles.
        </>
      ),
    },
    {
      id: 2,
      image: '/images/water.png',
      title: 'Ahorro de agua',
      description: (
        <>
          La economía circular permite conservar miles de litros de agua. Aproximadamente, se ahorraron <strong>{waterSaved}</strong> litros de agua.
        </>
      ),
    },
  ];

  return (
    <div className="benefits-section">
      <div className="benefits-section__content">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>

      <div className="benefits-section__reward">
        <p className="benefits-section__reward-text">
          Reutilizar es una de las prácticas más efectivas en la economía circular.
          Al hacerlo, reducimos el impacto ambiental y promovemos un uso más consciente de los recursos.
          <br /><br />
          Reutiliza tus frascos y Milahuén te premia con descuentos especiales.
        </p>
      </div>
    </div>
  );
}

export default BenefitsSection;
