import { BOOKS_SEARCH, BOOKS_SORT, TEXT_SEARCH, TOTAL_BOOK_QUANTITY, } from "../types/types";

import { setLoading, setError, setSuccess } from "./commonActions";

import axios from 'axios';
import { bookApiKey } from "../../helpers/googleBookApiKey";
import { maxResults } from "../../helpers/vars";
import { missingData } from "../../helpers/bookRequest";
import { useHttp, postData } from  "../../hooks/http.hook"


export const textSearch = (data) => ({
    type: TEXT_SEARCH,
    data
})

export const bookSearch = (data) => ({
    type: BOOKS_SEARCH,
    data
})

export const sortBooksByTitle = (data) => ({
    type: BOOKS_SORT,
    data
});

export const setTotalItems = (data) => ({
    type: TOTAL_BOOK_QUANTITY,
    data
})
export const bookSearchRequest = (searchName, startIndex) => async (dispatch) => {
    try {
        dispatch(setLoading());
        // const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`);

        // const { request } = useHttp()
        // const books = await request('http://localhost:5000/api/booksearch', 'POST', {searchName, maxResults, startIndex})

        let books;
        // const data = {
        //     searchName, maxResults, startIndex
        // }
        // await fetch('http://localhost:5000/api/booksearch',
        // {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       redirect: 'follow',
        //       body: JSON.stringify(data)
        // })
        // .then(res =>{ console.log('resReact',res); res.json()})
        // .then(data => { books = data
        //     console.log('booksReact',books);
        // })

        await postData('http://localhost:5000/api/booksearch', { searchName, maxResults, startIndex})
        .then((data) => {
            books = data
          console.log('boooooooooooooooooooooks',books); 
        });



        console.log(books);
        dispatch(setTotalItems(books.totalItems));
        dispatch(bookSearch(missingData(books)));
        dispatch(textSearch(searchName));
        dispatch(setSuccess());
    }
    catch (error) {
        console.log(error);
        dispatch(setError(error));
    }
}
export const bookGenreSearchRequest = (searchName, startIndex) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`);
        console.log(books);
        dispatch(setTotalItems(books.data.totalItems));
        dispatch(bookSearch(missingData(books)));
        dispatch(textSearch(searchName));
        dispatch(setSuccess());
    }
    catch (error) {
        console.log(error);
        dispatch(setError(error));
    }
}
export const booksSortRequest = (searchName, startIndex, sortParam = 'orderBy=newest') => async (dispatch) => {
    try {
        dispatch(setLoading());
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&${sortParam}&startIndex=${startIndex}`);
        console.log(books);
        dispatch(setTotalItems(books.data.totalItems));
        dispatch(bookSearch(missingData(books)));
        dispatch(textSearch(searchName));
        dispatch(setSuccess());
    }
    catch (error) {
        console.log(error);
        dispatch(setError(error));
    }
}