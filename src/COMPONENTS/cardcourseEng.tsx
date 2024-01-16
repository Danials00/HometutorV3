import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardcoursesEng = () => {
    return(
        <Card 
        sx={{ 
        maxWidth: 345,
        background: "#E6E6E6",
        }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="../../src/ASSETS/English_pic.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          English
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button 
        variant="outlined"
        size="small"
        sx={{
            marginTop:'60px',
            width:"90px",
            height:"40px",
            backgroundColor:"#F8F8F8",
            color:"#000000", 
            borderColor:"#C6C6C6",
            whiteSpace:"nowrap"    
        }}
        >More Info
        </Button>
        <Button 
        size="small"
        variant="contained"
        sx={{
            width:"120px",
            height:"40px",
            marginTop:'60px',
            marginLeft: '90px',
            backgroundColor:"#009B5D",
            whiteSpace:"nowrap"
            
        }}
        >
        Start Learning
        </Button>
      </CardActions>
    </Card>
    );
}
export default CardcoursesEng;