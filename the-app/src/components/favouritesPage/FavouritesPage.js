import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';



const favouritesPage = () => {
    return (
        <section className="favouritesPage-content">

            <div className='favouritesPage-header'>

                <div className="favouritesPage-title">
                    Избранное
                </div>

                <div className="favouritesPage-add-new">
                    <Button ><p className='favouritesPage-add-btn'>Хочу добавить!</p><AddBoxIcon sx={{ fontSize: 35 }} /></Button>
                </div>
            </div>

            <div className='favouritesPage-books'>
                Здесь пока ничего нет...
            </div>
        </section>
    )
};

export default favouritesPage;