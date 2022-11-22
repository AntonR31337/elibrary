import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { toAddRating } from '../../store/actions/getListOfBooksActions';
import { useDispatch } from 'react-redux';

export default function BasicRating({ authed, book }) {

  const dispatch = useDispatch();

  const { averageRating, ratingsCount = 0 } = book.volumeInfo;

  const [value, setValue] = React.useState(averageRating);


  const navigate = useNavigate();

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Рейтинг ({ratingsCount})</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          if (!authed) {
            navigate("/login");
            return
          }
          // setValue(newValue);
          dispatch(toAddRating(newValue, book ));
        }}
      />
    </Box>
  );
}