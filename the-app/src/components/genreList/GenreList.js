import uniqid from "uniqid";
import { genres } from "../../helpers/genres";
import GenreItem from "../genreItem/GenreItem";

export const GenreList = () => {

    return (
        <main className="genre-list">
            <div className="genre-list__content">
                <h1 className="genre-list__heading">
                    Ниже представлены доступные жанры произведений.
                </h1>
                <div className="genre-list__list">
                    {genres.map((genre) => <GenreItem key={uniqid()} genre={genre} />)}
                </div>
            </div>
        </main>
    )
}