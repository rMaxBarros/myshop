import { createStore } from 'redux';
import { rootReducer } from './root-reducer';

// Depois será substituído pelo ReduceToolKit
export const store = createStore(rootReducer);

