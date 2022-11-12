import BasicRating from '../UI components/BasicRating';
import BasicButton from "../UI components/BasicButton";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { getBooks, getSliderBooks } from "../../store/selectors/getListOfBooksSelectors";
import ReadBtn from './readBtn/ReadBtn';
import FavoriteBtn from './favoriteBtn/FavoriteBtn';
import DownloadBtn from './downloadBtn/DownloadBtn';

export const BookPage = ({ authed }) => {

    const params = useParams();
    const books = useSelector(getBooks, shallowEqual);
    const sliderBooks = useSelector(getSliderBooks, shallowEqual);

    let book;

    if (localStorage.getItem(`${params.id}`)) {
        book = JSON.parse(localStorage.getItem(`${params.id}`))
    } else {
        book = [...books, ...sliderBooks].find(el => el.id === params.id);
        localStorage.setItem(`${params.id}`, JSON.stringify(book));
    }
    const { title, categories, authors, publishedDate } = book.volumeInfo;
    const description = book.volumeInfo.description || book.volumeInfo.subtitle;

    return (
        <div className="bookPage">
            <div className="bookPage__wrapper">
                <img className="bookPage__img" src={book.volumeInfo.imageLinks.thumbnail} alt="BookImage" />
                <div className="bookPage__startInfo" >
                    <h3 className="bookPage__startInfo-title boldText">{title ? title : "Нет информации"}</h3>
                    <p className="">Категория: {categories ? categories : "Нет информации"}</p>
                    <p className="">Авторы: {authors ? authors : "Нет информации"}</p>
                    <p className="">Год: {publishedDate ? publishedDate : "Нет информации"}</p>
                    <div>
                        <BasicRating authed={authed} />
                    </div>
                    <div className="book__buttons">
                        <FavoriteBtn authed={authed}
                            id={book.id} book={book} />
                        <ReadBtn book={book} />
                        <DownloadBtn  authed={authed} 
                            id={book.id} book={book}/>
                        <BasicButton textBtn={"КУПИТЬ"} />
                    </div>
                </div>

            </div>
            <div className="bookPage__description">
                <h4 className="bookPage__description-title boldText">О книге:</h4>
                <p className="">{description ? description : "Нет информации"}</p>
            </div>
        </div >
    )
}