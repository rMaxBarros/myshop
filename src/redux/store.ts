import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger'

// Depois será substituído pelo ReduceToolKit
export const store = createStore(rootReducer, applyMiddleware(logger));
//applyMiddleware(logger) intercepta tudo que vem do redux, sempre que um estado mudar, ele pega ela e mostra no log o que está acontecendo.

