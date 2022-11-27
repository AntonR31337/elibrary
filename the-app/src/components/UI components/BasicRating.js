import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { toAddRating } from '../../store/actions/getListOfBooksActions';
import { useDispatch } from 'react-redux';

export default function BasicRating({ authed, averageRating = 0, ratingsCount }) {

  const dispatch = useDispatch();

  const [defaultValue, setDefaultValue] = React.useState();
  if (averageRating !== undefined && defaultValue == undefined) {
    setDefaultValue(averageRating);
  }

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Рейтинг ({averageRating})</Typography>
      <Rating
        key="rating"
        name="simple-controlled"
        disabled={!authed}
        defaultValue={defaultValue || 0}
        value={averageRating}
        onChange={(event, newValue) => {
          if (!authed) {
            navigate("/login");
            return
          }
          dispatch(toAddRating(newValue, averageRating, ratingsCount));
        }}
      />
    </Box>
  );
}