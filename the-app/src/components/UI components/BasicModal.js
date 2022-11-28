import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { auth } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { toFeedBack } from '../../store/actions/getListOfBooksActions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '3px solid #FFCA42',
    boxShadow: 24,
    borderRadius: "18px",
    p: 4,
};

export default function BasicModal({ open, setOpen }) {

    const handleClose = () => {

        dispatch(toFeedBack({
            text: feedBack,
            user: auth.currentUser.displayName,
            date: new Date()
        }))
        setFeedBack('');
        setOpen(false)
    };
    const [feedBack, setFeedBack] = React.useState("");

    const dispatch = useDispatch();

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Оставьте ваш отзыв
                    </Typography>
                    <TextField className="modal__input"
                        multiline
                        onChange={(e) => setFeedBack(e.target.value)}
                        value={feedBack} />
                    <Button onClick={() => handleClose()} >Оставить отзыв</Button>
                </Box>
            </Modal>
        </div>
    );
}