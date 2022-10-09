// import { BookCard } from "../card/BookCard";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
// import { useSelector } from "react-redux";
// import { randomBooks } from "../../helpers/randomBooks";
import { genres } from "../../helpers/vars";
import GenreItem from "./genreItem/GenreItem";
import "./mainPage.scss";

const MainPage = ({ authed }) => {

    // let books = useSelector((state) => state.books).books;

    // //при начальной загрузке в store Redux пусто,
    // // TODO определить, что будет загружаться при старте
    // if (books.length === 0) {
    //     books = randomBooks;
    // }

    return (
        <main className='main'>
            <div className="main__content">
                <h1 className="main__heading">
                    Рады приветствовать Вас на сайте-агрегаторе книг!
                </h1>
                <section className="genre">
                    <h2 className="genre__heading">
                        Популярные жанры книг
                    </h2>
                    <div className="genre__list">
                        {genres.map(genre => <GenreItem key={uniqid()} genre={genre} />)}
                    </div>
                    <Link className="genre__link" to={"/genre"}>
                        Посмотреть все жанры
                    </Link>
                </section>
            </div>
        </main>
    )
}


export default MainPage;
