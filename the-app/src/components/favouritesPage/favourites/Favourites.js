import uniqid from "uniqid";
import { useEffect, useState } from 'react';
import FavouriteBookCard from "../favouriteBookCard/FavouriteBookCard";
import Loader from "../../UI components/Loader";
import { getInfo } from "../../../helpers/getInfoFromFB";

const Favourites = ({ path }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState("");

    useEffect(() => {
        getInfo(setData, setLoading, path);
    }, [])

    return (
        <div className={`favourites__${path}`}>
            <h2 className={`favourites__${path}-heading`}>
                Избранное
            </h2>

            <div className={`favourites__${path}-list`}>
                {loading === "pending"
                    ? <Loader />
                    : data.length
                        ? data.map((book) => (
                            <FavouriteBookCard key={uniqid()} book={book} />
                        ))
                        : "Список пуст"
                }
            </div>
        </div >
    )
}

export default Favourites;