import { createStore, combineReducers } from 'redux';
import { textSearchReducer } from './reducers/textSearchReducer';
import { booksSearchReducer } from './reducers/booksSearchReducer';
import { genreSearchReducer } from './reducers/genreSearchReducer';


const rootReducer = combineReducers({
    textSearch: textSearchReducer,
    books: booksSearchReducer,
    booksGenre: genreSearchReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)