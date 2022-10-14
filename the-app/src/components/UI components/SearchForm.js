import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import axios from 'axios';

import { missingData } from '../../helpers/bookRequest';
import { bookApiKey } from '../../firebase/firebaseConfig';
import { bookSearch } from '../../store/actions/getListOfBooksActions';

const SearchForm = () => {
    //количество отображаемых на странице книг
    const maxResults = 9;
    const startIndex = 0;

    const theme = useTheme();
    const dispatch = useDispatch();
    //общее количество книг, найденных по результатам поиска
    const [totalItems, setTotalItems] = useState('');
    //состояние инпута
    let [searchName, setSearchName] = useState("");
    // const book = useSelector(state => state.textSearch.book)
    // const handleChange = (e) => {
    //     dispatch(textSearch(e.target.value))
    // }

    //обработчик изменения инпута
    const handleChange = (event) => {
        const item = event.target.value;
        setSearchName(item);
    }

    const navigate = useNavigate();
    const location = useLocation();

    //обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchName === '') {
            searchName = 'random'
        }
        if (location.pathname !== '/bookslist') {
            navigate("/bookslist")
        }
        // e.target[0].value = ''
        setSearchName("");
        //поиск только по названию книги
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)
        //поиск по названию или автору
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)
            //поиск по жанру, на на деле по любому совпадению
            // axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchName}&key=${bookApiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)

            .then(data => {
                console.log(data);
                setTotalItems(data.data.totalItems);
                dispatch(bookSearch(missingData(data)));
            })
            .catch((error) => {
                console.log(error)
                navigate("/404")
            })
    }


    return (
        <Box component="form"
            onSubmit={handleSubmit}
            sx={{
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(1),
                    width: 'auto',
                },
            }}>
            <Box
                sx={{
                    padding: theme.spacing(0, 2),
                    height: '100%',
                    position: 'absolute',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <SearchIcon />
            </Box>
            <InputBase
                placeholder="Search…"
                sx={{
                    color: 'inherit',
                    '& .MuiInputBase-input': {
                        padding: theme.spacing(1, 1, 1, 0),
                        // vertical padding + font size from searchIcon
                        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                        transition: theme.transitions.create('width'),
                        width: '100%',
                        [theme.breakpoints.up('sm')]: {
                            width: '12ch',
                            '&:focus': {
                                width: '20ch',
                            },
                        },
                    },
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchName}
                onChange={handleChange}
            />
        </Box>
    )
}

export default SearchForm;