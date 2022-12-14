import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { Link } from "react-router-dom";

import { logOut } from '../../firebase/firebaseAuth';

import SearchForm from "../UI components/SearchForm";
import logo from "../../assets/bookLogo.svg";
import { memo, useState } from 'react';

export const Header = memo(({ authed }) => {

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <header className="header">
            <div className="header__content">
                <ul className="header__left">
                    <li className="header__logo">
                        <img className="header__img" src={logo} alt="Logo" />
                    </li>
                    <li className="header__heading">
                        <Tooltip title="Нажмите для перехода на главную страницу ">
                            <Link className="header__link" to={"/"}>
                                BookLib
                            </Link >
                        </Tooltip>
                    </li>
                    <li className="header__genre">
                        <Tooltip title="Нажмите для перехода на страницу с полным списком жанров">
                            <Link className="header__link" to={"/genres/1"}>
                                Жанры
                            </Link >
                        </Tooltip>
                    </li>
                </ul>
                <div className="header__right">
                    <SearchForm />
                    {authed
                        ? <>
                            <Tooltip title="Открыть меню профиля">
                                <IconButton onClick={handleOpenUserMenu} sx={{ size: "large", color: 'white' }}>
                                    <AccountBoxIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Нажмите для выхода из профиля">
                                <IconButton onClick={logOut} sx={{ size: "large", color: 'white' }}>
                                    <LogoutIcon />
                                </IconButton>
                            </Tooltip>
                        </>

                        : <Tooltip title="Нажмите для входа в профиль">
                            <Link to={"/login"}>
                                <IconButton sx={{ size: "large", color: 'white' }}>
                                    <LoginIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Link className="header__profile-link" to={"/profilepage"} >
                                Профиль
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Link className="header__profile-link" to={"/favourites"} >
                                Избранное
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </header >
    );
});
