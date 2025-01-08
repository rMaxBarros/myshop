import styled from "styled-components";

export const Container =  styled.main`
    max-width: 1240px;
    height: 100%;
    margin: 4rem auto;
    padding: 0 2rem;

    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;

    flex-wrap: wrap; // Para o flex abaixo funcionar.

    // Mantendo apenas  3 cards por linha

    // &: é do SCSS. o que vier logo após o elemento estilizado (Container) no nível abaixo dele, aplique os estilos
    & > * {
        flex: 1 300px; // 1: O item estica o máximo que puder. 300px: no mínimo.

    }
`;