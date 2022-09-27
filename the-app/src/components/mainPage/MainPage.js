import { BookCard } from "../card";
import { Footer } from "../footer";
import { Header } from "../header/Header";
import uniqid from "uniqid";

const books = [
    {
        title: "Title_1",
        author: "Author 1"
    },
    {
        title: "Title_2",
        author: "Author 2"
    },
    {
        title: "Title_3",
        author: "Author 3"
    },
    {
        title: "Title_4",
        author: "Author 4"
    },
    {
        title: "Title_5",
        author: "Author 5"
    },
    {
        title: "Title_6",
        author: "Author 6"
    }
];

const MainPage = ({ authed }) => {
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
