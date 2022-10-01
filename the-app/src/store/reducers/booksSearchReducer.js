import { BOOKS_SEARCH } from "../actions/booksSearchAction"


const initialState = {books:[]}

export function booksSearchReducer (state = initialState, action) {
    if (action.type === BOOKS_SEARCH) {
        return {
            ...state,
            books: action.payload.books
        }
    }
    
    return state
}