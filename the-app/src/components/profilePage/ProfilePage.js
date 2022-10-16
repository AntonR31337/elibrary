import "./ProfilePage.scss";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";



const ProfilePage = () => {

    return (
        <div className="profile">
            <div className="container">
                <div className="crumbs">
                    <Link to="/">Главная</Link> - <p>Профиль</p>
                </div>
                <div className="profile-content">
                    <h2 className="profile-title">Фото профиля</h2>
                    <div className="profile-user">
                        <img className="profile-img" src="https://www.pngitem.com/pimgs/m/146-1468465_early-signs-of-conception-user-profile-icon-hd.png" alt="" />
                        <button className="profile-btn">Выберите файл</button>
                        <p className="profile-icon"><BiTrash /></p>
                    </div>
                    <p className="profile-info">Максимальный размер фото 5 МБ</p>
                    <h3 className="profile-title main-title">Личная информация</h3>
                    <p className="profile-title">Моё имя</p>
                    <form action="">
                        <input className="profile-input" placeholder="Введите имя" type="text" />
                        <p className="profile-title">Email</p>
                        <input className="profile-input" placeholder="Введите email" type="text" />
                        <p className="profile-title">Обо мне</p>
                        <input className="profile-input2" placeholder="Расскажите что-нибудь о себе" type="text" />
                        <p className="profile-title">Введите номер телефона</p>
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
                    <p className="profile-remove"><span className="profile-remove-icon"><BiTrash /></span>Удалить профиль</p>
                </div>
            </div>
        </div>
    );
};






export default ProfilePage;