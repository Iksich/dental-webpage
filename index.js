import { createStore, combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({
  myReducer, // Add more reducers if needed
});

const store = createStore(rootReducer);