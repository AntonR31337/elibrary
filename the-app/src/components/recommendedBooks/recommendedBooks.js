import { BookCard } from "../card/BookCard";
import uniqid from "uniqid";
import "../style/_recommendedBooks.scss";
import { postData } from "../../helpers/bookRequest";
import { useEffect, useState } from "react";

const RecommendedBooks = ({ title = "Рекомендуем:", book }) => {

    const someData = {
        searchName: book.volumeInfo.categories,
        maxResults: 3,
        sortParam: '',
        startIndex: 1
    }

    const [recommendedBooks, setRecommendedBooks] = useState([]);

    useEffect(() => {
        postData('http://localhost:5000/api/booksearch/sortbook', someData)
            .then(data => {
                setRecommendedBooks(data.items);
            })
    }, []);

    return (
        <div className="recommended-books">
            <h2 className="recommended-books__title genre__heading">{title}</h2>
            <div className="recommended-books__items">
                {recommendedBooks.map(book => <BookCard key={uniqid()} book={book} />)}
            </div>
        </div>
    );
}

export default RecommendedBooks;