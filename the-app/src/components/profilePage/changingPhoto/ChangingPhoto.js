import { useEffect, useState } from "react";

import face from "../../../assets/face.jpg";

import {
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth"
import { auth, storage } from "../../../firebase/firebase";
import { fileCheck } from "../../../helpers/uploadFileToFirebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import PhotoButtons from "./photoButtons/PhotoButtons";

const ChangingPhoto = () => {

    const [imgUrl, setImgUrl] = useState('');
    const [error, setError] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => setError(""), 2000);
        return () => clearTimeout(timeout)
    }, [error])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setImgUrl(user?.photoURL);
        });
    }, []);

    const handleSubmitImg = (e) => {
        e.preventDefault()

        const file = e.target[0]?.files[0]
        const resultOfCheckFile = fileCheck(file);

        if (resultOfCheckFile[0]) {
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed",
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setImgUrl(downloadURL);
                    try {
                        await updateProfile(auth.currentUser, {
                            photoURL: downloadURL
                        });
                    }
                    catch (error) {
                        setError(error);
                    }
                }
            );
        }
        else setError(resultOfCheckFile[1])
    }

    return (
        <>
            <form className="profile__form " action="" onSubmit={handleSubmitImg}>
                <h2 className="profile__form-heading">Фото:</h2>
                <div className="profile__form-content ">
                    <div className="profile__img-wrapper">
                        <img className="profile__img" src={imgUrl ? imgUrl : face} alt='uploaded file' />
                    </div>
                    <PhotoButtons />
                </div>
            </form>
            {error && <h2 className="error">{error}</h2>}
        </>

    )
}

export default ChangingPhoto;