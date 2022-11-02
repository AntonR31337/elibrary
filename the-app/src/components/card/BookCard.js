import { Link } from "react-router-dom";
import "./bookCard.scss";
import BasicRating from '../UI components/BasicRating';

export const BookCard = ({ book }) => {
  const { id } = book;
  const { title, categories, authors, publishedDate } = book.volumeInfo;
  return (
    <figure className="book" >
      <div className="book__wrapper">
        <img className="book__img" src={book.volumeInfo.imageLinks.thumbnail} alt="BookImage" />
      </div>

      <figcaption className="book__description" >
        <h3 className="book__heading">{title ? title : "Нет информации"}</h3>
        <p className="book__text">Категория: {categories ? categories : "Нет информации"}</p>
        <p className="book__text">Авторы: {authors ? authors : "Нет информации"}</p>
        <p className="book__text">Год: {publishedDate ? publishedDate : "Нет информации"}</p>
        <BasicRating />
      </figcaption>
      <Link className="book__link" to={`/book/${id}`}>
        Подробнее...
      </Link>
    </figure >
  );
}
