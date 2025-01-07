import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

// Componente estilizado.
const Title = styled.h1`
  font-size: 2rem;
  color: blue;

  p {
    font-size: 1rem;
    color: black;
  }
`;

// Componente funcional do React. Função que retorna HTML.
function App() {
  return (
    <>
    <Title>Styled Components</Title>
      <GlobalStyles />
    </>
  );
}

export default App;
