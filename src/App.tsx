import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';


// Componente funcional do React. Função que retorna HTML.
function App() {
  return (
    <>
      <Header />
      <GlobalStyles />
    </>
  );
}

export default App;
