import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";

import { useState } from 'react';

const PhotoButtons = () => {

    const [submitVision, setSubmitVision] = useState(false);

    return (
        <div className="profile__button-wrapper">
            <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => setSubmitVision(true)} >
                <input type="file" hidden />
                <Tooltip title="Нажмите для изменения фотографии пользователя ">
                    <CreateIcon sx={{
                        fontSize: "30px"
                    }} />
                </Tooltip>
            </IconButton>
            <IconButton color="primary" aria-label="upload picture"
                component="label" disabled={!submitVision}
                onClick={() => setSubmitVision(false)}>
                <input type="submit" hidden />
                <Tooltip title="Нажмите для обновления фотографии ">
                    <FileDownloadIcon sx={{
                        fontSize: "30px"
                    }} />
                </Tooltip>
            </IconButton>
            <IconButton color="primary" component="label">
                <Tooltip title="Нажмите для удаления сохраненного фото">
                    <DeleteIcon sx={{
                        fontSize: "30px"
                    }} />
                </Tooltip>
            </IconButton>
            <IconButton color="primary">
                <Tooltip title="Требования к фото: максимальный размер фото не 
                должен превышать 1MB, допустимые расширения файлов jpg и png">
                    <QuestionMarkIcon sx={{
                        fontSize: "30px"
                    }} />
                </Tooltip>
            </IconButton>
        </div >
    )
}

export default PhotoButtons;