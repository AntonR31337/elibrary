import { BookCard } from "../card/BookCard";
import uniqid from "uniqid";
import { shallowEqual, useSelector } from "react-redux";
import { getBooks } from "../../store/selectors/getListOfBooksSelectors";

export const BooksList = ({ genre }) => {

    const books = useSelector(getBooks, shallowEqual);

    return (

        <main className='books-list'>
            <div className="books-list__content">
                {!genre
                    ? <h2 className="books-list__heading">
                        Результаты поиска по запросу представлены ниже.
                    </h2>
                    : <h2 className="books-list__heading">
                        Результаты поиска по жанру представлены ниже.
                    </h2>
                }
                <div className="books-list__list">
                    {books.map((book) => (
                        <BookCard key={uniqid()} book={book} />
                    ))}
                </div>

            </div>
        </main>

    )
}