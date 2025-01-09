// Agrupa todos os Reducers da aplicação

import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";

// combineReducers: combina todos os reducers dentro de um só
// passa dentro do root todos os reducers que tem dentro da aplicação/objeto
export const rootReducer = combineReducers({
    userReducer: userReducer,
});
