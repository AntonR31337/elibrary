import { createStore, combineReducers } from 'redux';
import { textSearchReducer } from './reducers/textSearchReducer';
import { booksSearchReducer } from './reducers/booksSearchReducer';


const rootReducer = combineReducers({
    textSearch: textSearchReducer,
    books: booksSearchReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)