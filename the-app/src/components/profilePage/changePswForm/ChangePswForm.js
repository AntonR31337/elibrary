import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState } from "react";
import { updatePassword, } from "firebase/auth";
import { reauthenticate } from '../../../firebase/firebaseAuth'
import ModalWindow from '../../UI components/ModalWindow';



const ChangePswForm = ({ setError }) => {

    const [newPassword, SetNewPassword] = useState("");
    const [repeatPassword, SetRepeatPassword] = useState("");

    const [open, setOpen] = useState(false);
    const handleOpen = (event) => {
        event.preventDefault()
        setOpen(true);
    }
    const handleChangePwd = async (password) => {
        try {
            if (newPassword === repeatPassword) {
                const data = await reauthenticate(password);
                await updatePassword(data.user, newPassword);
                console.log('Password updated!');
            } else if (newPassword !== repeatPassword) {
                setError("Введенные пароли не совпадают");
            }
        } catch (error) {
            console.log('An error ocurred', error);
            setError("Вы неверно ввели текущий пароль");
        } finally {
            SetNewPassword("");
            SetRepeatPassword("");
        }
    }

    return (
        <>
            <form className="profile__form " onSubmit={handleOpen}>
                <div className="profile__form-content profile__form-content--input">
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
                        color="primary" onClick={handleOpen}>
                        <Tooltip title="Нажмите для сохранения информации ">
                            <FileDownloadIcon sx={{
                                fontSize: "30px"
                            }} />
                        </Tooltip>
                    </IconButton>
                    <ModalWindow
                        confirmFunction={handleChangePwd}
                        open={open}
                        setOpen={setOpen}
                    />
                </div>
            </form>
        </>
    )
}

export default ChangePswForm;