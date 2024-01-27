import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AccessTimeOutlineIcon from '@mui/icons-material/AccessTime';
import SchoolOutlineIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import Bm_pic from '../../public/Bm_pic.jpg'

const CardcoursesBm = () => {
    return(
        <Card sx={{
         maxWidth: 300,
         background: "#E6E6E6",
         }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Bm_pic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bahasa Melayu
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center',color:"#3C3C43", marginTop: '20%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '10%'}}>
        <AccessTimeOutlineIcon style={{ marginRight: '4px', fontSize:'small'}} />
        <Typography variant="body2" color="textSecondary">
          2 - 3 hrs
        </Typography>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', whiteSpace:"nowrap",}}>
        <SchoolOutlineIcon style={{ marginRight: '4px',fontSize:'small'}} />
        <Typography variant="body2" color="textSecondary">
          2,987 Learners
        </Typography>
            </div>
      </div>
      </CardContent>
      <CardActions >
      <Button 
        variant="outlined"
        size="small"
        sx={{
            width:"90px",
            height:"40px",
            backgroundColor:"#F8F8F8",
            color:"#3C3C43", 
            borderColor:"#C6C6C6",
            whiteSpace:"nowrap",
            fontWeight: 'bold',    
        }}
        >More Info
        </Button>
        
        <Button 
        size="small"
        variant="contained"
        sx={{
            width:"120px",
            height:"40px",
            backgroundColor:"#009B5D",
            whiteSpace:"nowrap",
            fontWeight: 'bold' 
            
        }}
        >
        Start Learning
        </Button>
      </CardActions>
    </Card>
    );
}
export default CardcoursesBm;