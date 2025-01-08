import { ProductCard } from '../ProductCard/ProductCard';
import {products} from '../../data/products';

import * as S from './styles';

export const ProductsList: React.FC = () => {
    // Se preferir, pode utilizar um useEffect para puxar os dados da API de produtos.
    return (
        <S.Container>
            {/* Acessando e renderizando em loop(map) os produtos vindo de products.ts 
                Passa o produto no ProductCard como propriedade
                Sempre que usa o map, é OBRIGATÓRIO uma propriedade key.
            */}
            { products.map((product) =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </S.Container>
    )
}