
import {
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword,
} from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { useEffect, useState } from 'react';
import { DeleteProfile } from "./DeleteProfile";
import ChangingPhoto from "./changingPhoto/ChangingPhoto";


const ProfilePage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [password, setPassword] = useState('');


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setName(user.displayName);
            setEmail(user.email);
            setPhoneNumber(user.phoneNumber);
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
                <h1 className="profile__heading">Информация о вашем профиле.</h1>
                <hr />
                <ChangingPhoto />
                <hr />
                <form action="" onSubmit={handleChangeUserInfo}>
                    <h2 className="profile-title">Информация</h2>
                    <p className="profile-title">Имя: {name}</p>
                    <input className="profile-input" placeholder="Введите имя и фамилию" type="text" pattern="^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$" />
                    <p className="profile-title">Email: {email} </p>
                    <input className="profile-input" placeholder="например BookLib@mail.ru" type="email" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" />
                    <p className="profile-title">Номер телефона: {phoneNumber} </p>
                    <input className="profile-input" placeholder="Введите номер телефона" type="tel" pattern="^((\+7|7|8)+([0-9]){10})$" />
                    <button className="profile-btn2">Сохранить</button>
                </form>
                <hr />
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
                <hr />
                <DeleteProfile />
            </div>
        </section>
    );
};






export default ProfilePage;