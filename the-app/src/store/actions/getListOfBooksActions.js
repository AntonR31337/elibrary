import { BOOKS_SEARCH, GENRE_SEARCH, TEXT_SEARCH, TOTAL_BOOK_QUANTITY, TOTAL_ITEMS } from "../types/types";

import axios from 'axios';
import { bookApiKey } from "../../firebase/firebaseConfig";
import { maxResults } from "../../helpers/vars";
import { missingData } from "../../helpers/bookRequest";

export const textSearch = (book) => ({
    type: TEXT_SEARCH,
    payload: {
        book,
    }
})


// export const genreSearch = (books) => ({
//     type: GENRE_SEARCH,
//     payload: {
//         books,
//     }
// })


export const bookSearch = (books) => ({
    type: BOOKS_SEARCH,
    payload: {
        books,
    }
})

export const setTotalItems = (totalBookQuantity) => ({
    type: TOTAL_BOOK_QUANTITY,
    payload: {
        totalBookQuantity,
    }
})
export const bookSearchRequest = (searchName, startIndex) => async (dispatch) => {
    try {
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`);
        console.log(books);
        dispatch(setTotalItems(books.data.totalItems));
        dispatch(bookSearch(missingData(books)));
        dispatch(textSearch(searchName));
    }
    catch (error) {
        console.log(error)
    }
}
export const bookGenreSearchRequest = (searchName, startIndex) => async (dispatch) => {
    try {
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`);
        console.log(books);
        dispatch(setTotalItems(books.data.totalItems));
        dispatch(bookSearch(missingData(books)));
        dispatch(textSearch(searchName));
    }
    catch (error) {
        console.log(error)
    }
}