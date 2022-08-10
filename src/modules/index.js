import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import logger from 'redux-logger'
import todo from './todo'

// 여기서 combine 해줬기 때문에
// ex) todo, counter 를 combine 했다면,
// state.todo -> todo 리듀서가 관리하는 상태에 접근
// state.counter -> counter 리듀서가 관리하는 상태에 접근
const rootReducer = combineReducers({
    todo,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

export default store