import { BookCard } from "../card/BookCard";
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
            <main className='main'>
                <div className="main__content">
                    {books.map((book) => (
                        <BookCard key={uniqid()} book={book} />
                    ))} 
                    {/* <h2>Sliders</h2> */}
                </div>
            </main>
        </>

    )
}


export default MainPage;
