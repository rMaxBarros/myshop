import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';


// Componente funcional do React. Função que retorna HTML.
function App() {
  return (
    // Envolvendo a aplicação com o provider que informa qual é o Reducer que existe na aplicação.
    // store: Para informar o que está sendo armazenando e para isso é passado um store.
    <Provider store={store}>
      <Header />
      <ProductsList />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
