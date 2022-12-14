import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';


import { bookSearchRequest } from '../../store/actions/getListOfBooksActions';

const SearchForm = () => {

    const theme = useTheme();
    const dispatch = useDispatch();

    //состояние инпута
    const [searchName, setSearchName] = useState("");

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
        if (location.pathname.slice(0, 9) !== '/bookslist') {
            navigate("/bookslist/1")
        }
        dispatch(bookSearchRequest(searchName, 0));
        setSearchName("");
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