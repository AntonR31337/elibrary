import { Link } from "react-router-dom";

const GenreItem = ({ genre }) => {
    const [name, img, id] = genre;
    return (
        <Link to={`/genre/${id}`}>
            <div className="genre__wrapper">
                <img className="genre__img" src={img} alt={name} />
            </div>
        </Link>
    )
}

export default GenreItem;