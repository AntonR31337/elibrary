import { BookCard } from "../card/BookCard";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import uniqid from "uniqid";
import { useSelector } from "react-redux";


export const BooksList = ({ authed }) => {
   
    let books = useSelector((state) => state.books).books;

    return (
        <>
                <Header  authed={authed}/>
                <main className='main'>
                    <div className="main__content">
                        {books.map((book) => (
                            <BookCard key={uniqid()} book={book} />
                        ))}
                    </div>
                </main>
                <Footer />
            </>
    )
}