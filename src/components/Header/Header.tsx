import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';

import * as S from "./styles"

export const Header: React.FC = () => {
    const isLogged = true;

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonsWrapper>
                    <S.AuthButton>
                        {isLogged ? 'Logout' : 'Login'}
                        {isLogged ? <FiLogOut/> : <FiLogIn/>}
                    </S.AuthButton>
                    
                    <S.CartButton>
                        Carrinho
                        <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonsWrapper>
            </S.Wrapper>

        </S.StyledHeader>
    )
}