import { BookCard } from "../card";
import { Footer } from "../footer";
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
            <main className='container main_wrapper'>
                
                {books.map((book) => (
                    <BookCard key={uniqid()} book={book} />
                ))}
            </main>
            <Footer />
        </>

    )
}


export default MainPage;
