import { Cart } from '../Cart/Cart';
import { useState } from 'react';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';

import { useSelector } from 'react-redux';

import * as S from "./styles"

export const Header: React.FC = () => {
    // Acessando o userReducer
    // Retorna os dados/estado que estão guardados no userReducer
    const objeto = useSelector((rootReducer: any) => rootReducer.userReducer);

    console.log(objeto);

    const [showCart, setShowCart] = useState(false);
    const isLogged = false;

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonsWrapper>
                    <S.AuthButton isLogged={isLogged}>
                        {isLogged ? 'Logout' : 'Login'}
                        {isLogged ? <FiLogOut /> : <FiLogIn />}
                    </S.AuthButton>

                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho
                        <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonsWrapper>
            </S.Wrapper>

            <Cart showCart={showCart} />
        </S.StyledHeader>
    )
}