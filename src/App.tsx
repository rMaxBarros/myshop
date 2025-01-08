import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';


// Componente funcional do React. Função que retorna HTML.
function App() {
  return (
    <>
      <Header />
      <ProductsList />

      <GlobalStyles />
    </>
  );
}

export default App;
