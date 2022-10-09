import { BOOKS_SEARCH } from "../actions/booksSearchAction"


const initialState = { books: [] }

export function booksSearchReducer(state = initialState, { type, payload }) {
    if (type === BOOKS_SEARCH) {
        return {
            ...state,
            books: payload.books
        }
    }

    return state
}