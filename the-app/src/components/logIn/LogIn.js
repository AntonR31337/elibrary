import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginForm from "./loginForm/LoginForm";
import "./logIn.scss";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import { FirebaseError } from "firebase/app";
import { logIn, signUp } from "../../firebase/firebaseConfig";

const LogIn = ({ authed }) => {
    //сообщание ошибки
    const [error, setError] = useState("");

    //авторизация
    const handleSubmit = async ({ login, pass }) => {
        try {
            if (authed) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        }
        catch (error) {
            if (error instanceof FirebaseError)
                setError(error.code.split("/")[1]);
        }
    };
    //сброс ошибки авторизации через 2 сек
    useEffect(() => {
        const timeout = setTimeout(() => setError(""), 2000);
        return () => clearTimeout(timeout)
    }, [error])

    return (
        <main className="main__wrapper">
            {authed
                ? <h2 className="main__heading">
                    Пожалуйста, введите адрес электроной почты и пароль для регистрации и входа.
                </h2>
                : <h2 className="main__heading">
                    Пожалуйста, введите адрес электроной почты и пароль указанный при регистрации.
                </h2>

            }

            <LoginForm onSubmit={handleSubmit} />
            {!authed
                ? <Link className="main__link" to={"/signup"}>
                    Если вы не зарегистрированы , пожалуйста, нажмите здесь для перехода на страницу регистрации.
                </Link>
                : null}
            <p className="main__text">
                <Tooltip title="На главную страницу">
                    <Link className="main__link" to={"/"}>
                        <HomeIcon sx={{ fontSize: "50px", color: "#4dabf5" }} />
                    </Link>
                </Tooltip>
            </p>


            {error && <h2 className="error">{error}</h2>}
        </main>
    )
}

export default LogIn;