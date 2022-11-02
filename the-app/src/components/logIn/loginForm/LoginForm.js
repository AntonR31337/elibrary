import { Button, TextField } from "@mui/material";
import { useState } from "react";
import FormBody from "../../UI components/FormBody";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";
import { passwordValidation, emailValidation } from "../../../helpers/vars";

const LoginForm = ({ onSubmit }) => {
    //локально сохраняем данные инпутов
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const btn = document.querySelector(".button");

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
    } 

    const inputValidation = () => {

    if((pass.match(passwordValidation)) || (login.match(emailValidation))){
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }}

   
    

    return (
        <FormBody onSubmit={handleSubmit}>
            <TextField
                type="email"
                value={login}
                onChange={handleChangeLogin}
                label="Почта"
                variant="outlined"
                pattern={emailValidation}
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
                className="button"
                onChange={inputValidation} 
                disabled               
            >
                Войти!
            </Button>
        </FormBody>
    );
};

export default LoginForm;