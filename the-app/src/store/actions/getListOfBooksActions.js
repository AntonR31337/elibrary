import { BOOKS_SEARCH, GENRE_SEARCH, TEXT_SEARCH } from "../types/types";

export const textSearch = (book) => ({
    type: TEXT_SEARCH,
    payload: {
        book,
    }
})


export const genreSearch = (books) => ({
    type: GENRE_SEARCH,
    payload: {
        books,
    }
})


export const bookSearch = (books) => ({
    type: BOOKS_SEARCH,
    payload: {
        books,
    }
})