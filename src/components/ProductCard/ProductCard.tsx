import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import * as S from './styles';
import { Product } from '../../data/products';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
}) => {
    return (
        <S.Card>
            <S.ProductImage src={product.image}
                alt={product.description}
            />

            <S.ProductTitle>{product.title}</S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>
                    {/* Array.from( { length: 5}): Cria um array de tamanho 5 com valores undefined.
                        Percorre o valor dele com .map e IGNORA o valor por conta do _, e pega o index (indíce) do array
                        Condicional ternário:
                        O index vai de 0 a 4
                        Arredonda a avaliação
                        3.9 -> 4
                        Se o index for 0, 1, 2, 3 vai colocar estrela preenchida
                        quando chega no 4, como 4 não é menor que o valor (3.9) vai ser colocado uma estrela vazia.
                    */}
                    { Array.from( { length: 5}).map((_, index) => 
                        index < Math.round(product.rating.rate) ? <AiFillStar key={index}/> : <AiOutlineStar key={index}/>) }
                    ({` ${product.rating.rate}`})
                </S.Review>

                <S.Price>{product.price}</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
                <S.AddToCartButton>
                    Adicionar ao carrinho
                    <FiShoppingCart />
                </S.AddToCartButton>
            </S.AddToCartButtonWrapper>
        </S.Card>
    )
}