import FavoriteIcon from '@mui/icons-material/Favorite';
import BasicRating from '../UI components/BasicRating';
import BasicButton from "../UI components/BasicButton";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { getBooks, getSliderBooks } from "../../store/selectors/getListOfBooksSelectors";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';

export const BookPage = ({ authed }) => {

    const params = useParams();



    const books = useSelector(getBooks, shallowEqual);
    const sliderBooks = useSelector(getSliderBooks, shallowEqual);

    const book = [...books, ...sliderBooks].find(el => el.id === params.id);
    const { title, categories, authors, previewLink } = book.volumeInfo;
    const description = book.volumeInfo.description || book.volumeInfo.subtitle;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const canvasRef = useRef()

    const initialise = () => {
        const viewer = new window.google.books.DefaultViewer(canvasRef.current);
        viewer.load('ISBN:0738531367');
    }

    useEffect(() => {
        const view = async () => {
            await window.google.books.load();
            await window.google.books.setOnLoadCallback(initialise);
        }
        view()
    }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className="bookPage">
            <div ref={canvasRef} style={{ width: "100%", height: "500px" }}></div>

            <div className="bookPage__wrapper">
                <img className="bookPage__img" src={book.volumeInfo.imageLinks.thumbnail} alt="BookImage" />
                <div className="bookPage__startInfo" >
                    <h3 className="bookPage__startInfo-title boldText">{title ? title : "Нет информации"}</h3>
                    <p className="">Категория: {categories ? categories : "Нет информации"}</p>
                    <p className="">Авторы: {authors ? authors : "Нет информации"}</p>
                    <div>
                        <BasicRating authed={authed} />
                    </div>
                    <div className="book__buttons">
                        <BasicButton textBtn={"В ИЗБРАННОЕ"} authed={authed} >
                            <FavoriteIcon sx={{
                                marginRight: "10px",
                                color: "white"
                            }} />
                        </BasicButton>
                        <BasicButton textBtn={"ЧИТАТЬ"} handleDoing={handleOpen} />
                        <BasicButton textBtn={"СКАЧАТЬ"} authed={authed} />
                        <BasicButton textBtn={"КУПИТЬ"} />
                        {/* <Modal
                            open={open}
                            onClose={handleClose} >
                            <Box sx={style} >
                                <div ref={canvasRef} style={{ width: "100%", height: "500px", position: "relative", zIndex: "10" }}></div>
                            </Box>
                        </Modal> */}
                    </div>
                </div>

            </div>
            <div className="bookPage__description">
                <h4 className="bookPage__description-title boldText">О книге:</h4>
                <p className="">{description ? description : "Нет информации"}</p>
            </div>
        </div>
    )
}