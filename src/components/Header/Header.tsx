import * as S from "./styles"

export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonsWrapper>
                    <S.AuthButton>Login</S.AuthButton>
                    <S.CartButton>Carrinho</S.CartButton>
                </S.ButtonsWrapper>
            </S.Wrapper>

        </S.StyledHeader>
    )
}