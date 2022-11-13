import Loader from "../UI components/Loader";
import BasicButton from "../UI components/BasicButton";
import { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { setDoc } from "firebase/firestore";
import { docRef } from "../../firebase/firebase";
import { adapter, getInfo } from "../../helpers/getInfoFromFB";

const ReadBook = () => {
    const canvasRef = useRef();
    const params = useParams();
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState();

    const book = JSON.parse(localStorage.getItem(`${params.id}`));
    const currentBook = adapter(book);

    const handleError = () => {
        setError(true);
        setTimeout(() => navigate("/"), 2000)
    }

    const onReload = () => window.location.reload()

    useEffect(() => {
        try {
            window.google.books.load();
            window.google.books.setOnLoadCallback(() => {
                const viewer = new window.google.books.DefaultViewer(canvasRef.current);
                viewer.load(`${currentBook.id}`, handleError);
            });
            setLoaded(true)

        } catch (error) {
            console.log(error)
            onReload()
        }
    }, []);

    useEffect(() => {
        getInfo(setData, null, "recent");
    }, [])

    useEffect(() => {
        const setInfoToFb = async () => {
            try {
                const isInTheList = data.findIndex(item => item.id === currentBook.id) === -1;
                if (isInTheList) {
                    const newData = [...data, currentBook]
                    if (newData.length > 6) {
                        newData.splice(0, 1);
                    }
                    await setDoc(docRef, { recent: newData }, { merge: true });
                } else {
                    const newData = data.filter(item => item.id !== params.id);
                    newData.push(currentBook)
                    await setDoc(docRef, { recent: newData }, { merge: true });
                }
            } catch (error) {
                console.log(error);
            }
        }
        setInfoToFb()
    }, [data])

    return (
        <section className="read-book">
            <div className="read-book__content">
                {loaded
                    ? <>
                        <BasicButton
                            textBtn={"Нажмите, если книга не отображается"}
                            handleDoing={onReload}
                        />
                        <div className="read-book__book-wrapper">
                            <div ref={canvasRef} className="read-book__book" ></div>
                        </div>
                    </>
                    : <Loader />
                }
                {error && <h2 className="error">Книга не найдена</h2>}
            </div >
        </section >
    )
}

export default ReadBook;