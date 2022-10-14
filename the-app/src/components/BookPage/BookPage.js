import "./BookPage.style.scss";

import FavoriteIcon from '@mui/icons-material/Favorite';
import BasicRating from '../UI components/BasicRating';
import BasicButton from "../UI components/BasicButton";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { getBooks, getSliderBooks } from "../../store/selectors/getListOfBooksSelectors";

export const BookPage = () => {

    const params = useParams();

    const books = useSelector(getBooks, shallowEqual);
    const sliderBooks = useSelector(getSliderBooks, shallowEqual);

    const book = [...books, ...sliderBooks].find(el => el.id === params.id);
    const { title, categories, authors } = book.volumeInfo;
    const description = book.volumeInfo.description || book.volumeInfo.subtitle;

    return (
        <div className="bookPage">
            <div className="bookPage__wrapper">
                <img className="bookPage__img" src={book.volumeInfo.imageLinks.thumbnail} alt="BookImage" />
                <div className="bookPage__startInfo" >
                    <h3 className="bookPage__startInfo-title boldText">{title ? title : "Нет информации"}</h3>
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
                <h4 className="bookPage__description-title boldText">О книге:</h4>
                <p className="">{description ? description : "Нет информации"}</p>
            </div>
        </div>
    )
}