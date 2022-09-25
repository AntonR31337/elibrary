import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const card = (
    <div>{"book.title"}</div>
  );

export function BookCard() {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  }