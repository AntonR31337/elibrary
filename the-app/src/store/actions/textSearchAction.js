export const TEXT_SEARCH = 'TEXT_SEARCH';



export const textSearch = (book) => ({
    type: TEXT_SEARCH,
    payload: {
        book: book,
    }
})