import FavoriteIcon from '@mui/icons-material/Favorite';
import BasicRating from '../UI components/BasicRating';
import BasicButton from "../UI components/BasicButton";
import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { getBooks, getSliderBooks } from "../../store/selectors/getListOfBooksSelectors";

export const BookPage = ({ authed }) => {

    const params = useParams();
    const navigate = useNavigate();
    const books = useSelector(getBooks, shallowEqual);
    const sliderBooks = useSelector(getSliderBooks, shallowEqual);

    const book = [...books, ...sliderBooks].find(el => el.id === params.id);
    const { title, categories, authors, publishedDate } = book.volumeInfo;
    const description = book.volumeInfo.description || book.volumeInfo.subtitle;
    const vision = book.accessInfo.viewability === "NO_PAGES";

    const onRead = () => navigate(`/read/${params.id}`)

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
                        <BasicButton textBtn={"В ИЗБРАННОЕ"} authed={authed} >
                            <FavoriteIcon sx={{
                                marginRight: "10px",
                                color: "white"
                            }} />
                        </BasicButton>
                        <BasicButton textBtn={"ЧИТАТЬ"} vision={vision} handleDoing={onRead} />
                        <BasicButton textBtn={"СКАЧАТЬ"} authed={authed} />
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