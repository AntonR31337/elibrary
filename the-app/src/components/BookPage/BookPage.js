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
            <div className="bookPage">
                    <div className="bookPage__wrapper">
                        <img className="bookPage__img" src={book.volumeInfo.imageLinks.thumbnail} alt="BookImage" />
                        <div className="" >
                            <h3 className="">{title ? title : "Нет информации"}</h3>
                            <p className="">Категория: {categories ? categories : "Нет информации"}</p>
                            <p className="">Авторы: {authors ? authors : "Нет информации"}</p>
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
                        </div>
                    </div>
                    <div className="bookPage__description">
                        <p className="">{description ? description : "Нет информации"}</p>
                    </div>
                </div>
    )
}