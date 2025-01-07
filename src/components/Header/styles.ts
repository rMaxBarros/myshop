import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: navy;
`;

// Wrapper: Usado para envolver outras coisas
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 60px;
`;

export const HeaderTitle = styled.h1`
    color: white;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const AuthButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: green;
    color: white;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg {
        font-size: 0.7rem;
    }
`;

export const CartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: violet;
    color: black;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg {
        font-size: 0.7rem;
    }
`;