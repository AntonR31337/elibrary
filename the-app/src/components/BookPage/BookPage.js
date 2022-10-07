import { useParams } from "react-router-dom";
import "./BookPage.style.scss";

import { randomBooks } from "../mainPage/randomBooks";

export const BookPage = () => {
    
    const params = useParams();
    const book = randomBooks[0];
    const { title, categories, authors } = book.volumeInfo;
    const description = book.searchInfo.textSnippet

    return (
        <main className='main'>
            <div className="book__wrapper">
                <img className="book__img" src={book.volumeInfo.imageLinks.thumbnail} alt="BookImage" />
            </div>

            <figcaption className="book__description" >
                <h3 className="book__heading">{title ? title : "Нет информации"}</h3>
                <p className="book__text">{description ? description : "Нет информации"}</p>
                <p className="book__text">Категория: {categories ? categories : "Нет информации"}</p>
                <p className="book__text">Авторы: {authors ? authors : "Нет информации"}</p>
            </figcaption>
        </main>
    )
}