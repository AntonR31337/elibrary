import { BookCard } from "../card";
import { Footer } from "../footer";
import { Header } from "../header/Header";
import uniqid from "uniqid";
import { useSelector } from "react-redux";
import { randomBooks } from "./randomBooks";


// const bookImage = "https://source.unsplash.com/random";

// const books = [
//     {
//         title: "Title_1",
//         author: "Author 1",
//         img: bookImage
//     },
//     {
//         title: "Title_2",
//         author: "Author 2",
//         img: bookImage
//     },
//     {
//         title: "Title_3",
//         author: "Author 3",
//         img: bookImage
//     },
//     {
//         title: "Title_4",
//         author: "Author 4",
//         img: bookImage
//     },
//     {
//         title: "Title_5",
//         author: "Author 5",
//         img: bookImage
//     },
//     {
//         title: "Title_6",
//         author: "Author 6",
//         img: bookImage
//     }
// ];


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
