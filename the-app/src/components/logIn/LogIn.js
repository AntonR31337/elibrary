import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginForm from "./loginForm/LoginForm";
import "./logIn.scss";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';

const LogIn = () => {
    //сообщание ошибки
    const [error, setError] = useState("");

    //авторизация
    const handleSubmit = () => { }

    //сброс ошибки авторизации через 2 сек
    useEffect(() => {
        const timeout = setTimeout(() => setError(""), 2000);
        return () => clearTimeout(timeout)
    }, [error])

    return (
        <main className="main__wrapper">
            <h2 className="main__heading">
                Пожалуйста, введите адрес электроной почты и пароль указанный при регистрации.
            </h2>

            <LoginForm onSubmit={handleSubmit} />
            <p className="main__text">
                <Tooltip title="На главную страницу">
                    <Link className="main__link" to={"/"}>
                        <HomeIcon sx={{ fontSize: "50px", color: "#4dabf5" }} />
                    </Link>
                </Tooltip>

            </p>


            {error && <h2 className="error">Ошибка авторизации</h2>}
        </main>
    )
}

export default LogIn;