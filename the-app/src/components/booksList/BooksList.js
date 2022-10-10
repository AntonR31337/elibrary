import { BookCard } from "../card/BookCard";
import uniqid from "uniqid";
import { useSelector } from "react-redux";


export const BooksList = ({ authed }) => {

    let books = useSelector((state) => state.books).books;

    return (

        <main className='main'>
            <div className="main__content">
                {books.map((book) => (
                    <BookCard key={uniqid()} book={book} />
                ))}
            </div>
        </main>

    )
}