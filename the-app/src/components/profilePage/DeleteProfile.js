import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from "firebase/auth";
import { auth } from "../../firebase/firebase"
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const DeleteProfile = ({ setError }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 355,
        bgcolor: 'background.paper',
        border: '3px solid #FFCA42',
        boxShadow: 24,
        borderRadius: "18px",
        p: 4,

    };
    const deleteProfile = () => {
        deleteUser(auth.currentUser).then(() => {
            console.log('User deleted');
        }).catch((error) => {
            console.log('An error ocurred', error);
            setError(error.code.split(",")[0])
        });
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton className="profile__submit"
                color="primary" onClick={handleOpen}>
                <Tooltip title="Нажмите для сохранения информации ">
                    <DeleteIcon sx={{
                        fontSize: "30px"
                    }} />
                </Tooltip>
            </IconButton>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div className="modal__content">
                        <p className="modal__content-main">Вы действительно хотите удалить Ваш профиль?</p>
                        <p className="modal__content-sub">После удаления Вы не сможете восстановить сохраненые данные аккаунта </p>
                    </div>
                    <div className="modal__actions">
                        <IconButton className="profile__submit"
                            color="primary" onClick={() => {
                                deleteProfile();
                                handleClose()
                            }}>
                            <Tooltip title="Нажмите для подтверждения ">
                                <CheckIcon sx={{
                                    fontSize: "30px"
                                }} />
                            </Tooltip>
                        </IconButton>
                        <IconButton className="profile__submit"
                            color="primary" onClick={handleClose}>
                            <Tooltip title="Нажмите для отмены ">
                                <ClearIcon sx={{
                                    fontSize: "30px"
                                }} />
                            </Tooltip>
                        </IconButton>
                    </div>
                </Box>
            </Modal>
        </div >
    );
};






