import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut } from '../../../firebase/firebaseConfig';

import {useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { textSearch } from '../../../store/actions/textSearchAction';
import { bookSearch } from '../../../store/actions/booksSearchAction';

import "./style.scss";

const pages = ['Жанры', 'Популярное', 'Подборки'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const SearchAppBar = ({ authed }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  //количество отображаемых на странице книг
  let maxResults = 8;
  let startIndex = 0 ;

  const [apiKey, setApiKey] = useState('AIzaSyCAYJ7mjkMe1kdmZQbgayiO5QcfDUgAQEQ');

  //общее количество книг, найденных по результатам поиска
  const [totalItems, setTotalItems] = useState('');

  const dispatch = useDispatch();
  const book = useSelector(state => state.textSearch.book)

  function handleChange(e) {
    dispatch(textSearch(e.target.value))
  }

  // корректировка данных, полученных от API 
  function missingData(data) {
    const missData = data.data.items.map((item) => {
      if (item.volumeInfo.hasOwnProperty('imageLinks') === false) {
        item.volumeInfo['imageLinks'] = {thumbnail: 'http://placehold.it/128x190'};
      }
      if (item.volumeInfo.imageLinks.hasOwnProperty('thumbnail') === false) {
        item.volumeInfo.imageLinks['thumbnail'] = 'http://placehold.it/128x190';
      }
      if (item.volumeInfo.hasOwnProperty('categories') === false) {
        item.volumeInfo['categories'] = [];
      }
      if (item.volumeInfo.categories.length > 0) {
        item.volumeInfo.categories = item.volumeInfo.categories[0].split(' ')[0];
      }
      if (item.volumeInfo.hasOwnProperty('title') === false) {
        item.volumeInfo['title'] = '';
      }
      if (item.volumeInfo.hasOwnProperty('authors') === false) {
        item.volumeInfo['authors'] = '';
      }
      if (item.volumeInfo.authors.length > 1) {
        item.volumeInfo.authors = item.volumeInfo.authors.join(', ');
      }
      return item;
    })
    return missData;
  }


  function handleSubmit(e) {
    e.preventDefault();
    e.target[0].value = ''

    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey + '&maxResults='+ maxResults + '&startIndex=' + startIndex )
      .then(data => {
        setTotalItems(data.data.totalItems);
        dispatch(bookSearch(missingData(data)))
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='container'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOOKlib
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOOKlib
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <form className='searchForm' onSubmit={handleSubmit}>
            <input className='searchForm__input'
                placeholder="Search…"
                type="text"
                onChange={handleChange}
              />
            <button className='searchForm__btn' type="submit"><SearchIcon /></button>
        </form>

          <Box sx={{ flexGrow: 0 }}>
            {authed
              ? <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Click here to LogOut">
                  <IconButton onClick={logOut} color="secondary" sx={{ size: "large", p: 2, color: 'white' }}>
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </>

              : <Tooltip title="Click here to LogIN">
                <Link to={"/login"}>
                  <IconButton color="secondary" sx={{ size: "large", p: 2, color: 'white' }}>
                    <LoginIcon />
                  </IconButton>
                </Link>
              </Tooltip>}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
