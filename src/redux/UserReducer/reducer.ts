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
// Todo reducer precisa retornar o nosso estado atualizado. Ou seja, após a aplicação da Action
export function userReducer(state = initialState, action: userAction): UserState {
    // :UserState informa que a função é do tipo UserState, retornando um valor deste tipo.
    // Lidando com as ações de login e logout
    // Padronização dos nomes das actions: nomeDoReducer/nomeDaAção
    if (action.type === 'user/login') {
        return {
            // Retorna o estado do jeito que ele está, nesse caso, o usuário logado.
            ...state,
            user: action.payload as User,
            // Quando estiver fazendo login, diz que o usuário vai receber o action.payload como um User, afirmando que ele irá vir no login e removendo o erro que estava antes em "user:"
        }
    } else if (action.type === 'user/logout') {
        return {
            ...state, // Precisa ter esse state pra garantir que nada será sobrescrito, pois poderia haver outras informações no UserState.
            user: null,
        }
    }

    return state;
}