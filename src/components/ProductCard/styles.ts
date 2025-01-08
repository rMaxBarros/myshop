import styled from 'styled-components';

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 2rem;
    margin: 0 auto; // Centraliza a imagem

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductImage = styled.img`
    width: 200px;
`;

export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;
`;

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const AddToCartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: blue;
    color: white;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg {
        font-size: 0.7rem;
    }
`;