import { randomBooks1, randomBooks2, randomBooks3 } from "../../helpers/randomBooks";
import { BOOKS_SEARCH, BOOKS_SORT, TEXT_SEARCH, TOTAL_BOOK_QUANTITY } from "../types/types";

const initialState = {
    sliderBooks: [
        ...randomBooks1,
        ...randomBooks2,
        ...randomBooks3,
    ],
    books: [],
    book: '',
    totalBookQuantity: 0,
}

export const getListOfBooksReducer = (state = initialState, { type, data }) => {
    switch (type) {
        case BOOKS_SEARCH:
            return {
                ...state,
                books: data,
            }
        case TEXT_SEARCH:
            return {
                ...state,
                book: data,
            }
        case BOOKS_SORT:
            return {
                ...state,
                books: data,
            }
        case TOTAL_BOOK_QUANTITY:
            return {
                ...state,
                totalBookQuantity: data,
            }
        default:
            return state
    }
}