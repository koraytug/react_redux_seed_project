import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import customerListReducer from './customerlist/customerlist.reducer';

import sectionReducer from './section/section.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  section: sectionReducer,
  customerList: customerListReducer,
});

export default persistReducer(persistConfig, rootReducer);
