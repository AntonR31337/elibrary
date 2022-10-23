import { Link } from "react-router-dom";
import face from "../../assets/face.jpg";
import DeleteIcon from '@mui/icons-material/Delete';
import {
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword,
} from "firebase/auth"
import { auth, storage } from "../../firebase/firebase"
import { useEffect, useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { DeleteProfile } from "./DeleteProfile";
import { fileCheck } from "../../helpers/uploadFileToFirebase";

const ProfilePage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setName(user.displayName);
            setEmail(user.email);
            setPhoneNumber(user.phoneNumber);
            setImgUrl(user.photoURL);
            setPassword(user.password)
        });
    }, []);


    const handleChangeUserInfo = (event) => {
        event.preventDefault();
        if (event.target[0].value !== '') {
            updateProfile(auth.currentUser, {
                displayName: event.target[0].value,
            }).then(() => {
                console.log('Profile updated!');
            }).catch((error) => {
                console.log('An error occurred', error);
            });
            setName(event.target[0].value);
            event.target[0].value = '';
        }
        if (event.target[1].value !== '') {
            updateEmail(auth.currentUser, event.target[1].value).then(() => {
                console.log('Email updated!');
            }).catch((error) => {
                console.log('An error occurred');
            });
            setEmail(event.target[1].value);
            event.target[1].value = '';
        }
    }

    const handleSubmitImg = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        const resultOfCheckFile = fileCheck(file);

        if (resultOfCheckFile) {
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed",
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('downloadURL', downloadURL);
                        setImgUrl(downloadURL)
                        updateProfile(auth.currentUser, {
                            photoURL: downloadURL
                        }).then(() => {
                            console.log('ProfileFoto updated!');
                        }).catch((error) => {
                            console.log('An error occurred', error);
                        });
                    });
                }
            );
        }
    }

    const handleChangePwd = (e) => {
        e.preventDefault()
        const first_password = document.getElementById('first').value;
        const second_password = document.getElementById('second').value;
        if (first_password == second_password) {
            updatePassword(auth.currentUser, first_password).then(() => {
                console.log('Password updated!');
            }).catch((error) => {
                console.log('Password error occurred');
            });
            setPassword(first_password);
        } else if (first_password !== second_password) {
            alert("Новый пароль не совпадает!");
        }
    }

    return (
        <section className="profile">
            <div className="profile__content">
                <div className="crumbs">
                    <Link to="/">Главная</Link> - <p>Профиль</p>
                </div>
                <div className="profile-content">
                    <form action="" onSubmit={handleSubmitImg}>
                        <h2 className="profile-title">Фото профиля</h2>
                        <div className="profile-user">
                            <img src={imgUrl ? imgUrl : face} alt='uploaded file' className="profile-img" />
                            <label className="input-file">
                                <input type="file" name="file" />
                                <span>Выбрать файл</span>
                            </label>
                            <button className="profile-btn" type='submit'>Загрузить</button>
                            <p className="profile-icon"><DeleteIcon /></p>
                        </div>
                        <p className="profile-info">Максимальный размер фото 1 МБ</p>
                    </form>
                    <h3 className="profile-title main-title">Личная информация</h3>

                    <form action="" onSubmit={handleChangeUserInfo}>
                        <p className="profile-title">Моё имя: {name}</p>
                        <input className="profile-input" placeholder="Введите имя и фамилию" type="text" pattern="^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$" />
                        <p className="profile-title">Email: {email} </p>
                        <input className="profile-input" placeholder="например BookLib@mail.ru" type="email" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" />
                        {/* <p className="profile-title">Обо мне</p>
                        <input className="profile-input2" placeholder="Расскажите что-нибудь о себе" type="text" /> */}
                        <p className="profile-title">Номер телефона: {phoneNumber} </p>
                        <input className="profile-input" placeholder="Введите номер телефона" type="tel" pattern="^((\+7|7|8)+([0-9]){10})$" />
                        <button className="profile-btn2">Сохранить</button>
                    </form>
                    <h3 className="profile-title main-title">Измненение пароля</h3>
                    <form action="" onSubmit={handleChangePwd} >
                        <p className="profile-title">Текущий пароль</p>
                        <input className="profile-input" placeholder="Текущий пароль" type="password" />
                        <p className="profile-title">Новый пароль</p>
                        <input className="profile-input" placeholder="Пароль" type="password" id="first" />
                        <p className="profile-title">Подтвердите пароль</p>
                        <input className="profile-input" placeholder="Пароль" type="password" id="second" />
                        <button className="profile-btn2">Сохранить</button>
                    </form>
                    <DeleteProfile />
                </div>
            </div>
        </section>
    );
};






export default ProfilePage;