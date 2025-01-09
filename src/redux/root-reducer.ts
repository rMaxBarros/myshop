// Agrupa todos os Reducers da aplicação

import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";

// combineReducers: combina todos os reducers dentro de um só
// passa dentro do root todos os reducers que tem dentro da aplicação/objeto
export const rootReducer = combineReducers({
    userReducer: userReducer,
});

// Quando usa o redux com typescript, no root-reducer, é preciso informar qual é o tipo dele.
// Aqui, está sendo exportado o tipo dele para que seja possível utilizar no header.
export type RootReducer = ReturnType<typeof rootReducer>;