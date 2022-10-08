import { useParams } from "react-router-dom";
import "./BookPage.style.scss";

import { randomBooks } from "../mainPage/randomBooks";

import FavoriteIcon from '@mui/icons-material/Favorite';
import BasicRating from '../UI components/BasicRating';
import BasicButton from "../UI components/BasicButton";

export const BookPage = () => {

    const params = useParams();
    const book = randomBooks.find(el => el.id === params.id);
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
                <div>
                    <BasicRating />
                </div>
                <div className="book__buttons">
                    <BasicButton textBtn={"В ИЗБРАННОЕ"} >
                        <FavoriteIcon sx={{
                            marginRight: "10px",
                            stroke: "#1976d2",
                            color: "white" 
                        }} />
                    </BasicButton>
                    <BasicButton textBtn={"ЧИТАТЬ"} />
                    <BasicButton textBtn={"СКАЧАТЬ"} />
                    <BasicButton textBtn={"КУПИТЬ"} />
                </div>
                <p className="book__text">{description ? description : "Нет информации"}</p>
            </figcaption>
        </main>
    )
}