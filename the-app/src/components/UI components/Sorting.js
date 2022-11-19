import * as React from 'react';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Sorting({ sortBooks, toSortBooks, books }) {

    const style = {
        marginBottom: "20px"
    }

    const listOfLanguages = [
        {
            code: "",
            name: "Выбрать язык"
        },
        {
            code: "&langRestrict=ru",
            name: "Русский"
        },
        {
            code: "&langRestrict=en",
            name: "Английский"
        },
        {
            code: "&langRestrict=de",
            name: "Немецкий"
        },
    ]

    const handleClick = (param) => {
        toSortBooks(param);
        console.log(param);
    }

    const [language, setLanguage] = React.useState("");

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    React.useEffect(() => handleClick(language), [language])

    return (
        <Accordion sx={{ display: "contents" }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <div>Фильтры</div>
            </AccordionSummary>
            <AccordionDetails>
                <ButtonGroup aria-label="outlined primary button group"
                sx={style} >
                    {/* <Button onClick={() => sortBooks(books, 'title')}>Название</Button>
                    <Button onClick={() => sortBooks(books, 'authors[0]')}>Автор</Button>
                    <Button onClick={()=> handleClick('&orderBy=newest')}>Сначала новые</Button>
                    <Button onClick={()=> handleClick('&langRestrict=el')}>RU</Button>
                    <Button onClick={()=> handleClick('&download=epub')}>epub</Button>
                    <Button onClick={() => sortBooks(books, 'categories')}>Категория</Button> */}
                    <Button onClick={() => handleClick('&orderBy=newest')}>Сначала новые</Button>
                    <Button onClick={() => handleClick('&filter=free-ebooks')}>Бесплатные</Button>
                    <Button onClick={() => handleClick('&filter=paid-ebooks')}>Платные</Button>
                    <Button onClick={() => handleClick('&printType=books')}>Книги</Button>
                    <Button onClick={() => handleClick('&printType=magazines')}>Журналы</Button>
                    <Button onClick={() => handleClick('&download=epub')}>epub</Button>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={language}
                        sx={{minWidth: "150px"}}
                        onChange={handleChange}
                    >
                        {listOfLanguages.map(el => <MenuItem value={el.code}>{el.name}</MenuItem>)}
                    </Select>
                </ButtonGroup>
            </AccordionDetails>
        </Accordion>
    );
}