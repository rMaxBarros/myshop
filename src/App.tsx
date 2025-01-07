import React from 'react';
import styled from 'styled-components';

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
    <Title>Styled Components
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sunt sit nostrum mollitia voluptate atque et consectetur facilis ut, eligendi saepe consequatur ad unde dolores dolor ea, laboriosam, rerum iure.</p>
    </Title>
  );
}

export default App;
