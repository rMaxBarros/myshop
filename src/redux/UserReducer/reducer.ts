// Reducer para guardar os dados do usuário.
// Reducer: caixa que guarda o estado que deseja ser armazenado e compartilhado com a aplicação.

// Informações do usuário
interface User {
    name: string;
    email: string;
}

// Define a tipagem do estado. O UserState pode ter os dados de User ou ser nulo.
interface UserState {
    user: User | null;
}

// Assim que a aplicação iniciar, o estado que guarda os dados do usuário comece com alguma coisa.
const initialState: UserState = {
    user: null, // De início inicia sem nada.
}

// Reducer: guarda o estado que desejamos compartilhar na aplicação 
//          e também manipula/altera o estado.

// Tipagem do action
// Payload: O corpo da informação. O que está sendo transmitido. Tudo que é importante.
interface userAction {
    type: string; // Toda action tem um type que é uma string
    payload?: User; // Toda action tem um payload. ~ ?: opcional
    // Quando o usuário for logar, passa os dados dele, quando estiver deslogando, apenas remove sem passar nada.
}

// TODOS os Reducers precisam estar dentro de um Root Reducer.
// Função que altera o estado inicial
export function userReducer(state = initialState, action: userAction) {}