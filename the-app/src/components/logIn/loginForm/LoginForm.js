import { Button, TextField } from "@mui/material";
import { useState } from "react";
import FormBody from "../../UI components/FormBody";
import { auth } from "../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = ({ onSubmit }) => {
    //локально сохраняем данные инпутов
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    //обработчики изменения инпутов
    const handleChangeLogin = (event) => {
        setLogin(event.target.value);
    };
    const handleChangePass = (event) => {
        setPass(event.target.value);
    };
    //обработчик отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();
        onSubmit({ login, pass });
        setLogin("");
        setPass("");

        try {
            const user = await signInWithEmailAndPassword (
                auth,
                login,
                pass
            )
            console.log(user);
        } catch (error) {
            console.log(error.message);
            alert('Неверный логин или пароль');
        }
    };

    return (
        <FormBody onSubmit={handleSubmit}>
            <TextField
                type="email"
                value={login}
                onChange={handleChangeLogin}
                label="Почта"
                variant="outlined" />
            <TextField
                type="password"
                value={pass}
                onChange={handleChangePass}
                label="Пароль"
                variant="outlined" />
            <Button
                type="submit"
                sx={{ backgroundColor: "#4dabf5", padding: "15px 82px" }}
                variant='contained'
            >
                Войти!
            </Button>
        </FormBody>
    );
};

export default LoginForm;