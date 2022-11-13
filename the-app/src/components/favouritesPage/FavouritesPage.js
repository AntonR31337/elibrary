import Favourites from "./favourites/Favourites";
import BuyList from "./buyList/BuyList";


const FavouritesPage = () => {
    return (
        <main className="favourites">
            <div className="favourites__content">
                <h1 className='favourites__heading'>
                    Мои книги
                </h1>
                <Favourites path={"favourites"} />
                <Favourites path={"recent"} />
                <BuyList />
            </div>
        </main>
    )
};

export default FavouritesPage;