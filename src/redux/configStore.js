import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import word_list from './modules/word';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ word_list });
const store = createStore(rootReducer, enhancer);

export default store;