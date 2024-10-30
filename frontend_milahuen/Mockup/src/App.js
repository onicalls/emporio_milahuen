import React, { useState } from 'react';
import './styles/App.css';
import ProductView from './views/ProductView';
import ReuseView from './views/ReuseView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('product');

  return (
    <div className="App">
      <Header />
      
      <nav className="app-nav">
        <button onClick={() => setView('product')} className={view === 'product' ? 'active' : ''}>
          Productos
        </button>
        <button onClick={() => setView('reuse')} className={view === 'reuse' ? 'active' : ''}>
          Sustentabilidad
        </button>
      </nav>

      <main className="app-content">
        {view === 'product' && <ProductView />}
        {view === 'reuse' && <ReuseView />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
