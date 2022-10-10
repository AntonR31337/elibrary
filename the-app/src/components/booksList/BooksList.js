import { BookCard } from "../card/BookCard";
import uniqid from "uniqid";
import { useSelector } from "react-redux";

export const BooksList = ({ authed }) => {

    let books = useSelector((state) => state.books).books;

    return (

        <main className='books-list'>
            <div className="books-list__content">
                <h2 className="books-list__heading">
                    Результаты поиска представлены ниже.
                </h2>
                <div className="books-list__list">
                    {books.map((book) => (
                        <BookCard key={uniqid()} book={book} />
                    ))}
                </div>

            </div>
        </main>

    )
}