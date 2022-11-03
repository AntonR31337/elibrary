import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import FormBody from "../../UI components/FormBody";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";
import { passwordValidation, emailValidation } from "../../../helpers/vars";

const LoginForm = ({ onSubmit }) => {
    //локально сохраняем данные инпутов
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    //были внутри input или нет
    const [loginDirty, setLoginDirty] = useState(false);
    const [passDirty, setPassDirty] = useState(false);
    //ошибки по умолчанию
    const [loginError, setLoginError] = useState("Email не может быть пустым");
    const [passError, setPassError] = useState("Пароль не может быть пустым");
    //состояние формы
    const [formValid, setFormValid] = useState(false);

    //форма отсеживает ошибки инпутов
    useEffect(() => {
        if (loginError || passError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passError])

    //обработчики изменения инпутов
    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
        if (!emailValidation.test(String(e.target.value).toLowerCase())) {
            setLoginError("Введите корректный адрес электронной почты")
            if (!e.target.value) {
                setLoginError("Email не может быть пустым")
            }
        } else {
            setLoginError("")
        }
    };

    const handleChangePass = (e) => {
        setPass(e.target.value);
        if (!passwordValidation.test(String(e.target.value))) {
            setPassError("Невалидный пароль (см.подсказку)")
            if (!e.target.value) {
                setPassError("Пароль не может быть пустым")
            }
        } else {
            setPassError("")
        }
    };


    //обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit({ login, pass });
        setLogin("");
        setPass("");
    };

    //отслеживает действия в инпутах
    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setLoginDirty(true)
                break
            case "password":
                setPassDirty(true)
                break
        }
    }

    return (
        <FormBody onSubmit={handleSubmit}>
            {(loginDirty && loginError) && <div style={{ color: "red" }}>{loginError}</div>}
            <TextField
                type="email"
                name="email"
                value={login}
                onChange={e => handleChangeLogin(e)}
                label="Почта"
                variant="outlined"
                pattern={emailValidation}
                className="input-login"
                onBlur={e => blurHandler(e)}
            />
            {(passError && passDirty) && <div style={{ color: "red" }}>{passError}</div>}
            <TextField
                type="password"
                name="password"
                value={pass}
                onChange={e => handleChangePass(e)}
                label="Пароль"
                variant="outlined"
                pattern={passwordValidation}
                className="input-login"
                onBlur={e => blurHandler(e)}
            />
            <IconButton color="primary">
                <Tooltip title="Пароль не может быть короче восьми символов и должен содержать хотя бы одну цифру, одну маленькую и одну большую латинскую букву">
                    <QuestionMarkIcon sx={{
                        fontSize: "20px"
                    }} />
                </Tooltip>
            </IconButton>

            <Button
                type="submit"
                sx={{
                    backgroundColor: "#1B3764",
                    padding: "15px 82px",
                    border: "3px solid #FFCA42",
                    borderRadius: "8px"
                }}
                variant='contained'
                disabled={!formValid}
            >
                Войти!
            </Button>
        </FormBody>
    );
};

export default LoginForm;