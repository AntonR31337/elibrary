import { BookCard } from "../card/BookCard";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
import { postData } from "../../helpers/bookRequest";
import { useState } from "react";

const RecommendedBooks = ({ title = "Рекомендуем:", book }) => {

    let recBooks = [];

    const someData = {
        searchName: "book",
        maxResults: 3,
        sortParam: '',
        startIndex: 1
    }

    const getrecommendedBooks = postData('http://localhost:5000/api/booksearch/sortbook', someData)
        .then((data) => {
            console.log(data.items);
            return data.items
        });
    getrecommendedBooks.then(resolve => recBooks = resolve);


    return (
        <div className="recommended-books">
            <h2>{title}</h2>
            {/* {data.items.map(el => console.log(el))} */}
            <BookCard key={uniqid()} book={book} />
        </div>
    );
}

export default RecommendedBooks;