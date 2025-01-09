import { Cart } from '../Cart/Cart';
import { useState } from 'react';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';

import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';

import * as S from "./styles"

export const Header: React.FC = () => {
    // Acessando o userReducer
    // Retorna os dados/estado que estão guardados no userReducer
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);

    console.log(user);

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