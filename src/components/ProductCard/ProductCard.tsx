import { FiShoppingCart } from 'react-icons/fi';
import * as S from './styles';

export const ProductCard: React.FC = () => {
    return (
        <S.Card>
            <S.ProductImage src='' alt='' />

            <S.ProductTitle>Mens Casual Premium Slim Fit T-Shirts</S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>4.1</S.Review>
                <S.Price>$22.3</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButton>
                Adicionar ao carrinho
                <FiShoppingCart />
            </S.AddToCartButton>
        </S.Card>
    )
}