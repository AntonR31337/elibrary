import { createStore, combineReducers } from 'redux';
import { getListOfBooksReducer } from './reducers/getListOfBooksReducer';

const rootReducer = combineReducers({
    search: getListOfBooksReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)