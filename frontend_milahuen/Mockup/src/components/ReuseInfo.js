import React, { useContext } from 'react';
import { ReuseContext } from '../context/ReuseContext';
import '../styles/ReuseInfo.css';

function ReuseInfo() {
  const { reuseCount } = useContext(ReuseContext);

  return (
    <div className="reuse-info">
      <p className="reuse-info__intro">
        Con su ayuda hemos reutilizado miles de frascos de Milahuén para contribuir al medio ambiente. ¡Gracias por ser parte de este cambio!
      </p>
      <h2 className="reuse-info__counter">
        <span className="reuse-info__count">{reuseCount}</span> frascos reutilizados
      </h2>
    </div>
  );
}

export default ReuseInfo;