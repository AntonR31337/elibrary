import Loader from "../UI components/Loader";
import BasicButton from "../UI components/BasicButton";
import { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const ReadBook = () => {

    const canvasRef = useRef();
    const params = useParams();
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");

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
                viewer.load(`${params.id}`, handleError);
            });
            console.log(params.id)
            setLoaded(true)
        } catch (error) {
            console.log(error)
            onReload()
        }
    }, []);


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