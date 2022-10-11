export const GENRE_SEARCH = 'GENRE_SEARCH';



export const genreSearch = (booksGenre) => ({
    type: GENRE_SEARCH,
    payload: {
        booksGenre: booksGenre,
    }
})