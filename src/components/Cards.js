import React from 'react';
import { 
  Grid, 
  Container, 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  CardMedia 
} from '@mui/material';

const cards = [1, 2, 3, 4, 5, 6,7,8,9];

const Cards = ({ mode }) => {
  return (
    <Container sx={{ py: 8 }} >
      <Grid container spacing={4} justifyContent={'center'}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{ 
                maxWidth: '280px',
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                bgcolor: mode === 'dark' ? '#333333' : '#fff'
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  pt: '56.25%', 
                  bgcolor: 'grey.500',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: '#64b5f6' }}>View</Button>
                <Button size="small" sx={{ color: '#64b5f6' }}>Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;