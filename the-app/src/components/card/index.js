import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export function BookCard(props) {
    const book = props.book;
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <React.Fragment>
    <CardContent>
    <CardMedia
        component="img"
        height="194"
        image={book.img}
        alt="Paella dish"
      />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="body2">
      {book.author}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}
