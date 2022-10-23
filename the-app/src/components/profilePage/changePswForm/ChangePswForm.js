import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useEffect, useState } from "react";
import { onAuthStateChanged, updatePassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";


const ChangePswForm = ({ setError }) => {

    const [currentPassword, SetCurrentPassword] = useState("");
    const [newPassword, SetNewPassword] = useState("");
    const [repeatPassword, SetRepeatPassword] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setPassword(user.password)
        });
    }, []);

    const handleChangePwd = async (e) => {
        e.preventDefault()
        console.log(currentPassword, newPassword, repeatPassword)
        if (password === currentPassword) {
            if (newPassword === repeatPassword) {
                try {
                    await updatePassword(auth.currentUser, newPassword)
                    console.log('Password updated!');
                } catch (error) {
                    setError(error.code.split(",")[0]);
                }
                setPassword(newPassword);
            } else if (newPassword !== repeatPassword) {
                setError("Введенные пароли не совпадают");
            }
        } else {
            setError("Вы неверно ввели текущий пароль");
        }
        SetCurrentPassword("");
        SetNewPassword("");
        SetRepeatPassword("");
    }

    return (
        <>
            <form className="profile__form " onSubmit={handleChangePwd}>
                <div className="profile__form-content profile__form-content--input">
                    <div className="profile__container">
                        <div className="profile__left">
                            <p className="profile__info">Текущий пароль:</p>
                            <input className="profile__input"
                                placeholder="Введите текущий пароль"
                                type="password"
                                onChange={(e) => SetCurrentPassword(e.target.value)}
                                value={currentPassword} />
                        </div>
                    </div>
                    <div className="profile__container">
                        <div className="profile__left">
                            <p className="profile__info">Новый пароль:</p>
                            <input className="profile__input"
                                placeholder="Введите новый пароль"
                                type="password"
                                onChange={(e) => SetNewPassword(e.target.value)}
                                value={newPassword} />
                        </div>
                    </div>
                    <div className="profile__container">
                        <div className="profile__left">
                            <p className="profile__info">Новый пароль:</p>
                            <input className="profile__input"
                                placeholder="Повторно введите новый пароль"
                                type="password"
                                onChange={(e) => SetRepeatPassword(e.target.value)}
                                value={repeatPassword} />
                        </div>
                    </div>
                    <IconButton className="profile__submit"
                        color="primary" onClick={handleChangePwd}>
                        <Tooltip title="Нажмите для сохранения информации ">
                            <FileDownloadIcon sx={{
                                fontSize: "30px"
                            }} />
                        </Tooltip>
                    </IconButton>

                </div>
            </form>
        </>
    )
}

export default ChangePswForm;