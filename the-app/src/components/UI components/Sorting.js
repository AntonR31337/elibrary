import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Sorting({ sortBooks, toSortBooks, books }) {

    const style = {
        marginBottom: "20px"
    }

    return (
        <ButtonGroup aria-label="outlined primary button group"
            sx={style}
        >
            <Button onClick={() => sortBooks(books, 'title')}>Название</Button>
            <Button onClick={() => sortBooks(books, 'authors[0]')}>Автор</Button>
            <Button onClick={()=> toSortBooks()}>Сначала новые</Button>
            <Button onClick={() => sortBooks(books, 'categories')}>Категория</Button>
        </ButtonGroup>
    );
}