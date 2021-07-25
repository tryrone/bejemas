import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export const persistor = persistStore(store);
