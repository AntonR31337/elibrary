import "./ProfilePage.scss";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import face from "../../assets/face.jpg";
import {
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    deleteUser 
  } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { useEffect, useState } from 'react';


const ProfilePage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
         onAuthStateChanged(auth, (user) => {
          setName(user.displayName);
          setEmail(user.email);
          setPhoneNumber(user.phoneNumber);
          console.log('user', user);
        });
        
      }, []);

   
      const deleteProfile = () => {
        deleteUser(auth.currentUser).then(() => {
            console.log('User deleted');
          }).catch((error) => {
            console.log('An error ocurred');
          });
      }

      const handleChangeUserInfo = (event) => {
        event.preventDefault();
        if (event.target[0].value !== '') {
            updateProfile(auth.currentUser, {
                displayName: event.target[0].value, 
                // photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
                console.log('Profile updated!');
            }).catch((error) => {
                console.log('An error occurred');
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
            setName(event.target[0].value);
            event.target[1].value = '';
        }
    }



    return (
        <div className="profile">
            <div className="container">
                <div className="crumbs">
                    <Link to="/">Главная</Link> - <p>Профиль</p>
                </div>
                <div className="profile-content">
                    <h2 className="profile-title">Фото профиля</h2>
                    <div className="profile-user">
                        <img className="profile-img" src={face} alt="" />
                        <button className="profile-btn">Выберите файл</button>
                        <p className="profile-icon"><BiTrash /></p>
                    </div>
                    <p className="profile-info">Максимальный размер фото 5 МБ</p>
                    <h3 className="profile-title main-title">Личная информация</h3>
                    
                    <form action="" onSubmit={handleChangeUserInfo}>
                        <p className="profile-title">Моё имя: {name}</p>
                        <input className="profile-input" placeholder="Введите имя" type="text" />
                        <p className="profile-title">Email: {email}</p>
                        <input className="profile-input" placeholder="Введите email" type="text" />
                        <p className="profile-title">Обо мне</p>
                        <input className="profile-input2" placeholder="Расскажите что-нибудь о себе" type="text" />
                        <p className="profile-title">Введите номер телефона: {phoneNumber} </p>
                        <input className="profile-input" placeholder="Введите номер телефона" type="tel" />
                        <button className="profile-btn2">Сохранить</button>
                    </form>
                    <h3 className="profile-title main-title">Измненение пароля</h3>
                    <form>
                        <p className="profile-title">Текущий пароль</p>
                        <input className="profile-input" placeholder="Текущий пароль" type="password" />
                        <p className="profile-title">Новый пароль</p>
                        <input className="profile-input" placeholder="Пароль" type="password" />
                        <p className="profile-title">Подтвердите пароль</p>
                        <input className="profile-input" placeholder="Пароль" type="password" />
                        <button className="profile-btn2">Сохранить</button>
                    </form>
                    <h3 className="profile-title main-title">Удаление профиля</h3>
                    <p className="profile-remove" onClick={deleteProfile}><span className="profile-remove-icon"><BiTrash /></span>Удалить профиль</p>
                </div>
            </div>
        </div>
    );
};






export default ProfilePage;