import { Cart } from '../Cart/Cart';
import { useState } from 'react';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';

import * as S from "./styles"

export const Header: React.FC = () => {
    // Acessando o userReducer
    // Retorna os dados/estado que estão guardados no userReducer
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);

    const dispatch = useDispatch(); // Hook para dispachar as ações.

    const [showCart, setShowCart] = useState(false);
    // Lógica para saber se o usuário está logado ou não
    const isLogged = user !== null;

    // Dispachando a ação de login ou de logout por meio do redux
    function handleUserAuth() {
        // Usuário não está logado
        if (user === null) {
            // Despachar a action de login
            // Sempre que faz um dispatch, precisa passar uma ação, essa tem o type e o payload abaixo.
            // Ação: um objeto que tem um type e um payload.
            // O nome do type PRECISA bater com o que está definido no reducer.
            dispatch({
                type: 'user/login',
                payload: {
                    name: 'Max Barros',
                    email: 'max@email.com'
                },
            });
            // Quando despacha a ação de login, o reducer pega a action despachada e atualiza o User pra ter os dados do payload.
        } else {
            dispatch({
                type: 'user/logout',
                // O payload não é necessário pois não é preciso passar nenhuma informação.
            });
        }
    }

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonsWrapper>
                    <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
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