import uniqid from "uniqid";
import { useEffect, useState } from 'react';
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { BookCard } from "../card/BookCard";
import FavouriteBookCard from "./favouriteBookCard/FavouriteBookCard";


const FavouritesPage = () => {
    const userId = async () => await auth.currentUser.uid;
    const docRef = doc(db, "users", `${userId}`);
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const getInfo = async () => {
            try {
                const userData = await getDoc(docRef)
                const favorites = userData._document.data.value.mapValue.fields.favoritesList.arrayValue.values
                const currentList = favorites.map(item => {
                    const { id, title, thumbnail } = item.mapValue.fields;
                    const number = id.stringValue;
                    const name = title.stringValue;
                    const img = thumbnail.stringValue;
                    return { id: number, title: name, thumbnail: img }
                })
                setFavourites(currentList)
            } catch (error) {
                console.log(error)
            }
        }
        getInfo();
    }, [])


    return (
        <main className="favourites">
            <div className="favourites__content">
                <h1 className='favourites__heading'>

                    Мои книги

                </h1>

                <div className="favourites__favourites">
                    <h2 className="favourites__favourites-heading">
                        Избранное
                    </h2>

                    <div className='favourites__favourites-list'>
                        {favourites.length
                            ? favourites.map((book) => (
                                <FavouriteBookCard key={uniqid()} book={book} />
                            ))
                            : "Список пуст"}
                    </div>
                </div>

                <div className="favourites__last-read">
                    <h2 className="favourites__last-read-heading">
                        Продолжить чтение
                    </h2>

                    <div className='favourites__last-read-list'>
                        Здесь пока ничего нет...
                    </div>
                </div>

                <div className="favourites__buy">
                    <h2 className="favourites__buy-heading">
                        Покупки
                    </h2>

                    <div className='favourites__buy-list'>
                        Список покупок пуст
                    </div>
                </div>

            </div>

        </main>
    )
};

export default FavouritesPage;