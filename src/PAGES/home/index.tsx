import {memo} from 'react';
import Appbar from "../../COMPONENTS/appbar";
import CardcoursesBm from "../../COMPONENTS/cardcourseBm";
import CardcoursesEng from "../../COMPONENTS/cardcourseEng";
import CardcoursesMath from "../../COMPONENTS/cardcourseMath";
import CardcoursesSc from "../../COMPONENTS/cardcourseSc";
import{ Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import React, { Suspense, lazy, useState } from 'react';
import'./index.scss'
import Banner_Icon from '../../ASSETS/Banner_Icon.png';
import Home_icon from '../../ASSETS/Home_icon.svg';
import logo_Xcelearn from '../../ASSETS/Logo_Xcelearn.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

import Classroom_icon from '../../ASSETS/Courses_Icon/Classroom_icon.jpg';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import GroupsIcon from '@mui/icons-material/Groups';
import TableChartIcon from '@mui/icons-material/TableChart';
import Image_progress from '../../ASSETS/Image_progress.png';
import Image_testskill from '../../ASSETS/Image_testskill.png';


const homepages = () => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F0F2F5',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  })); 

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#3C3C43',
  }));

  const SearchContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '250px',
    position:'initial',
    // border: '2px solid #3C3C43',  // Add border styling
    // borderRadius: '8px',         // Optional: Add border radius for rounded corners
    // padding: '10px',             // Optional: Add padding for better visual appearance
    // boxSizing: 'border-box',      // Include padding and border in the element's total width and height
    
  })); 

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      border: '1px solid #BABABA',
      borderRadius: '8px',
      width: '500px',
      height: '50px',
      [theme.breakpoints.up('md')]: {
        width: '750px',
        height: '50px',
      },
    },
  }));

  const StyledInputButton = styled(Button)(({ theme }) => ({
    borderRadius: '20px',
    position: 'absolute',
    textTransform: 'none',
    marginRight: '-100px',
    right: '105px',
    marginTop: '2px',
  }));

  const [keyword, setKeyword]: any = useState('');

  const onKeywordChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick =() => {
    console.info('You clicked the chip')
  }

  return (
    <div className='body'>
     <Appbar />
     <div
     style={{
      overflowY: "scroll",
      overflowX: "hidden",
     }}>
      <SearchContainer>
      <Search> 
        <SearchIconWrapper>         
            <SearchIcon />
        </SearchIconWrapper>        
            <StyledInputBase
              style={{color:'#3C3C43' }}
              placeholder="What do you want to learn today?"
              inputProps={{ 'Outfit': 'search' }}
            />
             </Search>
       </SearchContainer>
       <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Banner_Icon} style={{ width: '1080px', height: '240px'}} />
       </Box>
         <Box
             sx={{
             display: 'flex',
             flexWrap: 'wrap',
             '& > :not(style)': {
              m: 1,
             width: 128,
             height: 128,
               },
                  }}
            >
       <Grid 
       style={{
        margin:0,
        //padding:0,
        maxWidth:"100%",
        width:"100%",
        height:"815px",
        // overflowY: "scroll",
        borderRadius: "0px",
        backgroundColor:"#66B2FF",
       }}>
        <Box
        sx={{
        alignContent:'center',
        alignItems:'center',
        // marginLeft: { xs: '300px', sm:'320px'},
        marginTop:'60px'
        }}
        >
      <Typography
        style={{
        fontFamily:"Outfit",
        fontSize:'40px',
        fontWeight:900,
        color:'#FFF',
        textAlign:'center'
       }}>

        Let's Start Learning. Explore Now!
      </Typography>
       </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'0px',
            marginLeft:'autopx',
            //marginRight:'auto',
            
            '& > :not(style)': {
              m: 4,
              width: 180,
              height: 158,
            },
          }}
          >
            <Paper >
                <FolderOpenIcon style={{ marginLeft:'75px', marginTop:'40px'}} />
                <Typography
                  style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontWeight: "bold",
                    fontSize:"20px",
                  }}>
                  Courses
                </Typography>
                <Typography style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontSize:"10px",
                    marginTop:"-10px",
                  }}>
                  see list of courses
                </Typography>
            </Paper >
            <Paper >
              <YouTubeIcon style={{ marginLeft:'75px', marginTop:'40px'}}/> 
              <Typography
                  style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontWeight: "bold",
                    fontSize:"20px",
                  }}>
                  Video
                </Typography>
                <Typography style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontSize:"10px",
                    marginTop:"-10px",
                  }}>
                  see list of lesson
                </Typography>
            </Paper>
            <Paper>
            <SportsEsportsIcon style={{ marginLeft:'75px', marginTop:'40px'}}/>
            <Typography
                  style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontWeight: "bold",
                    fontSize:"20px",
                  }}>
                  Interactive
                </Typography>
                <Typography style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontSize:"10px",
                    marginTop:"-10px",
                  }}>
                  see list of game
                </Typography>
            </Paper>
            <Paper>
            < NoteAltOutlinedIcon style={{ marginLeft:'75px', marginTop:'40px'}}/>
            <Typography
                  style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontWeight: "bold",
                    fontSize:"20px",
                  }}>
                  Prep Test
                </Typography>
                <Typography style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontSize:"10px",
                    marginTop:"-10px",
                  }}>
                  see your understanding
                </Typography>
            </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems: 'center',
            marginTop:'40px',
            marginLeft:'auto',
            //marginRight:'auto',
            '& > :not(style)': {
              m: 4,
              width: 180,
              height: 158,
            },
          }}
          >
            <Paper>
                <WorkspacePremiumIcon style={{ marginLeft:'75px', marginTop:'40px'}} />
                <Typography
                  style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontWeight: "bold",
                    fontSize:"20px",
                  }}>
                  Mastery
                </Typography>
                <Typography style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontSize:"10px",
                    marginTop:"-10px",
                  }}>
                  How master you are
                </Typography>
            </Paper>
            <Paper>
                <InsertChartIcon style={{ marginLeft:'75px', marginTop:'40px'}} />
                <Typography
                  style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontWeight: "bold",
                    fontSize:"20px",
                  }}>
                  Report
                </Typography>
                <Typography style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontSize:"10px",
                    marginTop:"-10px",
                  }}>
                  see your progress
                </Typography>
            </Paper>
            <Paper>
                <GroupsIcon style={{ marginLeft:'75px', marginTop:'40px'}} />
                <Typography
                  style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontWeight: "bold",
                    fontSize:"20px",
                  }}>
                  Classroom
                </Typography>
                <Typography style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontSize:"10px",
                    marginTop:"-10px",
                  }}>
                  see your classes
                </Typography>
            </Paper>
            <Paper>
                <TableChartIcon style={{ marginLeft:'75px', marginTop:'40px'}} />
                <Typography
                  style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontWeight: "bold",
                    fontSize:"20px",
                  }}>
                  Mission
                </Typography>
                <Typography style={{
                    textAlign:'center',
                    paddingBottom:'10px',
                    fontFamily:"Outfit",
                    fontSize:"10px",
                    marginTop:"-10px",
                  }}>
                  see list of mission
                </Typography>
            </Paper>
        </Box>
        <Box 
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: " 400px",
          backgroundColor:"#F8F8F8",
          alignContent:'center',
          alignItems:'center',
        }}
        >
      <Typography
        style={{
        fontSize:'30px',
        fontWeight:900,
        color:'#000',
        position: 'relative',
        top:'100px',
        textAlign:'center',
        
       }}>
        Not sure where to begin? What is your main goal on Xcelearn? 
       </Typography>
         <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems: 'center',
            marginTop:'150px',
            //marginLeft:'-190px',
            
            //marginRight:'auto',
            '& > :not(style)': {
              m: 4,
              width: 300,
              height: 90,
            },
          }} 
          >
            <Paper>
              <Typography 
              style={{
                textAlign:'center',
                justifyContent:'center',
                fontFamily:"Outfit",
                font:"20px",
                lineHeight:"110%",
                letterSpacing:"-0.408px",
                marginTop:"35px",
                fontWeight:"bold"

              }}>
                I want to up my skills and knowledge
              </Typography>
            </Paper>
            <Paper>
              <Typography
              style={{
                textAlign:'center',
                justifyContent:'center',
                fontFamily:"Outfit",
                font:"20px",
                lineHeight:"110%",
                letterSpacing:"-0.408px",
                marginTop:"35px",
                fontWeight:"bold"
              }}
              >
                I want to see list of courses
              </Typography>
            </Paper>
            <Paper>
              <Typography
              style={{
                textAlign:'center',
                justifyContent:'center',
                fontFamily:"Outfit",
                font:"20px",
                lineHeight:"110%",
                letterSpacing:"-0.408px",
                marginTop:"35px",
                fontWeight:"bold"
              }}
              >
                I want to up my skills and knowledge 
              </Typography>
            </Paper>
              </Box>
          </Box>

              <Box 
               sx={{ 
                width: '100%', 
                bgcolor: '#FFF',
                alignContent:"center",
                alignItems:"center",
                borderBottom:1,
                borderColor: 'divider',
                 }}
                 >
                <Tabs 
                value={value} onChange={handleChange} centered>
                   <Tab label="Popular Courses" />
                   <Tab label="Interactive Learning" />
                   <Tab label="General Learning" />
                   <Tab label="Mastery Learning" />
                 </Tabs>
                 
              </Box>
              <Box
                   sx={{
                     display: 'flex',
                     flexWrap: 'wrap',
                     justifyContent:'center',
                     alignItems: 'center', 
                     backgroundColor:'#FFF',
                     height:'500px',
                     position: 'relative',
                    //marginRight:'auto',
                    '& > :not(style)': {
                     m: 4,
                     width: 238,
                     height: 332,
                  },
                    }} 
                      >
                      <CardcoursesBm/>
                      <CardcoursesSc/>
                      <CardcoursesMath/>
                      <CardcoursesEng/>
              </Box>
              <Grid
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent:'center',
                alignItems: 'center',
                //marginTop:'5px',
                marginLeft:'auto',
                bgcolor:"#FFF",
                 }}
                 >
                <Button 
                    variant="outlined"
                    size="small"
                    
                style={{
                    marginTop:'auto',
                    width:"275px",
                    height:"52px",
                    backgroundColor:"#F8F8F8",
                    color:"#000000", 
                    borderColor:"#C6C6C6",
                    whiteSpace:"nowrap", 
                    position:"relative",
                    bottom: '30px',
                    
                  }}
                  >Explore More
                    </Button>
                  </Grid>
          <Grid
             sx={{
              width:"100%",
              maxWidth:"100%",
              height:"1500px",
              justifyContent:"center",
              alignItems:"center",
              bgcolor:"#FFF",
              //marginTop: "20px",
              // padding: "20px",
              
             }}>
              <Typography  
               sx={{
                fontSize:'30px',
                fontWeight:900,
                textAlign:'center',
                margin:'auto',
                
               }}
               >
                Advance in study. Learn in demand skills
              </Typography>
              <Typography  
               sx={{
                fontSize:'30px',
                fontWeight:300,
                textAlign:'center',
                margin:'auto',
               }}
               >
                Up skills in design,management,Health and safety
              </Typography>
              <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent:'center',
                alignItems: 'center',
                marginTop:'40px',
                marginLeft:'auto',
              }}
                    >

                <Stack spacing={1} alignItems="center">
                 <Stack direction="row" spacing={1}>
                  <Chip label="Bahasa Melayu" onClick={handleClick} size="medium"/>
                  <Chip label="Kemahiran" onClick={handleClick} size="medium" /> 
                  <Chip label="Bertutur" onClick={handleClick} size="medium"/> 
                  <Chip label="Coding" onClick={handleClick} size="medium"/> 
                  <Chip label="Lukisan" onClick={handleClick} size="medium"/> 
                </Stack>
                <Stack direction="row" spacing={1}>
                <Chip label="Bertutur" onClick={handleClick} size="medium" /> 
                  <Chip label="Coding" onClick={handleClick} size="medium"/> 
                  <Chip label="Lukisan" onClick={handleClick} size="medium"/>
                  <Chip label="Bahasa Melayu" onClick={handleClick} size="medium"/>
                </Stack>
                <Stack direction="row" spacing={1}>
                <Chip label="Bertutur" onClick={handleClick} size="medium"/> 
                  <Chip label="Coding" onClick={handleClick} size="medium"/> 
                  <Chip label="Lukisan" onClick={handleClick} size="medium"/>
                  <Chip label="Bahasa Melayu" onClick={handleClick} size="medium"/>
                  <Chip label="Kemahiran" onClick={handleClick} size="medium"/> 
                </Stack>
              </Stack>
              </Box>
              <Box
                sx={{
                  width:"80%%",
                  maxWidth:"100%",
                  height:"216px",
                  marginTop:"30px",
                  position:"relative",
                  bgcolor:"#66B2FF",
                  //textAlign:"center"
                  
                }}>
                    <img src={Image_progress} 
                    style={{
                       width: '150px',
                       height: '150px',
                       position: 'absolute',
                       bottom:'0',
                       right:'50%',
                       }} />

                      <Typography
                        sx={{
                          fontSize:'25px',
                          fontWeight:600,
                          textAlign:'center',
                          //margin:'auto',
                          position:'absolute',
                          left:'30%',
                          bottom: '30px',
                          transform: 'translateX(-50%)'
                        }}>
                        Get to know your progress
                      </Typography>
                <Box
                sx={{
                  width:"100%",
                  maxWidth:"100%",
                  height:"216px",
                  marginTop:"30px",
                  marginLeft: '50%',
                  bgcolor:"#3298FF",
                  transform: 'skewX(-20deg)',
                  zIndex:-1, 
                }}>
                    <img src={Image_testskill} 
                       style={{
                       width: '190px',
                       height: '200px',
                       position: 'relative',
                       bottom:'-7.7%',
                       left:'30%',
                       transform: 'skewX(20deg)',
                       }}/>
              </Box>
              </Box>
          </Grid>
      </Grid>
    </Box>
  </div>
</div>
  );
};

export default homepages;
