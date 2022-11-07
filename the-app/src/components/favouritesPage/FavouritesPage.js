import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';



const favouritesPage = () => {
    return (
        <section className="favouritesPage-content">

            <div className='favouritesPage-header'>
                <div className="favouritesPage-title-main">
                    Мои книги
                </div>
            </div>

            <div className="favouritesPage-wish books-list">
                <div className="favouritesPage-title-mini">
                    Буду читать
                </div>

                <div className='wish-content books-content'>
                    Здесь пока ничего нет...
                </div>
            </div>

            <div className="favouritesPage-continue books-list">
                <div className="favouritesPage-title-mini">
                    Продолжить чтение
                </div>

                <div className='continue-content books-content'>
                    Здесь пока ничего нет...
                </div>
            </div>

            <div className="favouritesPage-shopping books-list">
                <div className="favouritesPage-title-mini">
                    Покупки
                </div>

                <div className='shopping-content books-content'>
                    Список покупок пуст
                </div>
            </div>

        </section>
    )
};

export default favouritesPage;