import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CartReducer from './cartReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['CartReducer'],
};

const rootReducer = combineReducers({
  CartReducer,
});

export default persistReducer(persistConfig, rootReducer);
