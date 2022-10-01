import { TEXT_SEARCH } from '../actions/textSearchAction'


const initialState = {
    book: '',
  }
  

export function textSearchReducer (state = initialState, action) {
    if (action.type === TEXT_SEARCH) {
        return {
            ...state,
            book: action.payload.book
        }
    }
    
    return state
}