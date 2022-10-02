import { BookCard } from "../card/BookCard";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import uniqid from "uniqid";
import { useSelector } from "react-redux";
import { randomBooks } from "./randomBooks";

const MainPage = ({ authed }) => {

    let books = useSelector((state) => state.books).books;

    //при начальной загрузке в store Redux пусто,
    // TODO определить, что будет загружаться при старте
    if (books.length === 0) {
        books = randomBooks;
    }

    return (
        <>
            <Header authed={authed} />
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


export default MainPage;
