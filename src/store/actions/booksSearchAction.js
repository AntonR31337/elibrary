export const BOOKS_SEARCH = 'BOOKS_SEARCH';



export const bookSearch = (books) => ({
    type: BOOKS_SEARCH,
    payload: {
        books: books,
    }
})