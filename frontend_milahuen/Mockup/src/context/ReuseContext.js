import React, { createContext, useState } from 'react';

export const ReuseContext = createContext();

export function ReuseProvider({ children }) {
  const [reuseCount, setReuseCount] = useState(100); // Valor de los frascos, ir cambiando aquí

  return (
    <ReuseContext.Provider value={{ reuseCount, setReuseCount }}>
      {children}
    </ReuseContext.Provider>
  );
}