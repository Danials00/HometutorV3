import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import signin_logo from '../../public/Logo_Xcelearn_main.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FolderIcon from '@mui/icons-material/Folder';
import GroupsIcon from '@mui/icons-material/Groups';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const appbar = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handleNavigate = (route: string) => {
    //     //window.open(route, '_blank');
    
    //     window.location.href = route;
    //   };

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

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

  const [, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // const handleHomeClick = () => {
  //   // Handle Home icon click
  //   console.log('Home icon clicked');
  // };

  // const handleYouTubeClick = () => {
  //   // Handle YouTube icon click
  //   console.log('YouTube icon clicked');
  // };

  // const handleFolderClick = () => {
  //   // Handle Folder icon click
  //   console.log('Folder icon clicked');
  // };

  // const handleGroupsClick = () => {
  //   // Handle Groups icon click
  //   console.log('Groups icon clicked');
  // };

    const [value, setValue] = React.useState(0);
  
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
 

  return (
    <AppBar position="static" style={{ background: '#FFFFFF' }}
     >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box>
          <img src={signin_logo} style={{ width: '43x', height: '35px'}} />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              style={{color:'#3C3C43' }}
              placeholder="Search…"
              inputProps={{ 'Outfit': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center'  }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          {/* <Box sx={{ 
            //flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center', 
            alignItems: 'center',
            // flexDirection: 'row' ,
            // flexShrink:0,
            gap:15, 
            }}>
                <HomeIcon onClick={handleHomeClick}  style={{ color: 'black', marginLeft:40}}/>
                <YouTubeIcon onClick={handleYouTubeClick} style={{ color: 'black', marginLeft:40 }}/>
                <FolderIcon onClick={handleFolderClick} style={{ color: 'black', marginLeft:40 }}/>
                <GroupsIcon onClick={handleGroupsClick} style={{ color: 'black', marginLeft:40 }}/>
          </Box> */}

          <Box sx={{ 
            width: '100%', 
            bgcolor: 'background.paper',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center', 
            alignItems: 'center', 
            marginLeft:'-150px'
            }}>
              <Tabs value={value} onChange={handleChange} centered>
                 <Tab icon={<HomeIcon/>} />
                 <Tab icon={<YouTubeIcon/>} />
                 <Tab icon={<FolderIcon/>} />
                 <Tab icon={<GroupsIcon/>} />
              </Tabs>
          </Box>
          <Stack direction="row" spacing={1}>
          <Tooltip title="Open Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>
                <AppsIcon style={{ color: 'black' }}/>
              </Avatar>
              </IconButton>
            </Tooltip>
          <Tooltip title="Open Notification">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>
                <NotificationsIcon style={{ color: 'black' }}/>
              </Avatar>
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default appbar;