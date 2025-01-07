import React from 'react';
import styled from 'styled-components';

// Componente estilizado.
const Title = styled.h1`
  font-size: 2rem;
  color: blue;
`;

// Componente funcional do React. Função que retorna HTML.
function App() {
  return (
    <Title>Styled Components</Title>
  );
}

export default App;
