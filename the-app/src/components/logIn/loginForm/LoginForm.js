import { Button, TextField } from "@mui/material";
import { useState } from "react";
import FormBody from "../../UI components/FormBody";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";
import { passwordValidation } from "../../../helpers/vars";

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

    };

    return (
        <FormBody onSubmit={handleSubmit}>
            <TextField
                type="email"
                value={login}
                onChange={handleChangeLogin}
                label="Почта"
                variant="outlined"
                pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                className="input-login"
            />
            <TextField
                type="password"
                value={pass}
                onChange={handleChangePass}
                label="Пароль"
                variant="outlined"
                pattern={passwordValidation}
                className="input-login"
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
            >
                Войти!
            </Button>
        </FormBody>
    );
};

export default LoginForm;