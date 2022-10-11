import uniqid from "uniqid";
import "./style.scss"
import { genres } from "../../helpers/genres"
import axios from 'axios';
// import { genreSearch } from '../../store/actions/genreSearchAction';
import { bookSearch } from '../../store/actions/booksSearchAction';
import { missingData } from '../../helpers/bookRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";



export const GenreList = ({ authed }) => {
   
    const maxResults = 21;
    const startIndex = 0;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookApiKey = "AIzaSyCAYJ7mjkMe1kdmZQbgayiO5QcfDUgAQEQ";
    const searchName = 'sonnet';
    
    function handleSearchGenre () {

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)

        .then(data => {
            dispatch(bookSearch(missingData(data)));
            navigate("/bookslist");
        })
        .catch((error) => {
            console.log(error)
            navigate("/404")
        })
    }

    return (
        <>
            <div className="main-genre">
                {genres.map((genre) => (
                            <img className="main-genre__img" key={uniqid()} src={genre} alt="" onClick={handleSearchGenre}/>
                        ))
                }
            </div>
        </>
    )
}