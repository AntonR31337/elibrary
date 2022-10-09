import { TEXT_SEARCH } from '../actions/textSearchAction'


const initialState = {
    book: '',
}


export function textSearchReducer(state = initialState, { type, payload }) {
    if (type === TEXT_SEARCH) {
        return {
            ...state,
            book: payload.book
        }
    }

    return state
}