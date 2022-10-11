import { GENRE_SEARCH } from "../actions/genreSearchAction"


const initialState = { booksGenre: [] }

export function genreSearchReducer(state = initialState, { type, payload }) {
    if (type === GENRE_SEARCH) {
        return {
            ...state,
            booksGenre: payload.booksGenre
        }
    }

    return state
}