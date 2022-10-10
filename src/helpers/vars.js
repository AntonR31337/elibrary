import { Link } from "react-router-dom";
import "./vars.scss";

export const pages = ['Жанры', 'Популярное', 'Подборки'];



export const settings = [
    <Link className="settings-item" to={"/profilepage"}>Профиль</Link>,
    <Link className="settings-item" to="" >Избранное</Link>,
    <Link className="settings-item" to="">Выход</Link>
];
