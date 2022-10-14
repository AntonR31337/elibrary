import { bookGenreSearchRequest, bookSearch } from '../../store/actions/getListOfBooksActions';
// import { missingData } from '../../helpers/bookRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
// import { bookApiKey } from "../../helpers/googleBookApiKey";
// import axios from 'axios';

const GenreItem = ({ genre }) => {
    const [img, name] = genre;
    // const maxResults = 21;
    // const startIndex = 0;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearchGenre = () => {
        dispatch(bookGenreSearchRequest(name, 0));
        navigate(`/genre/${name}`);
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${name}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)

        //     .then(data => {
        //         dispatch(bookSearch(missingData(data)));
        //         navigate(`/genre/${name}`);
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         navigate("/404")
        //     })
    }
    return (
        <div className="genre-item" to={`/genre/${name}`}>
            <img className="genre-item__img" src={img} alt={`жанр ${name}`} onClick={handleSearchGenre} />
        </div>
    )
}

export default GenreItem;