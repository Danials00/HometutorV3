import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Grid,
  IconButton,
  Button,
  InputAdornment,
  TextField,
  Typography,
  Divider,
  Stack,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
//import Logo from '../../CONTAINERS/logo';
import { handleSnackbar } from '../../REDUX/reducer_app';
import { handleReqSessionTime } from '../../REDUX/reducer_user';
import { setUserToken } from '../../SERVICES/sessions';
import { passwordValidator } from '../../UTILS/input-validator';
import SocialLogin from '../register/component/social-login';
import logo_Xcelearn from '../../ASSETS/Logo_Xcelearn.png';
// import logo_main from '../../ASSETS/Logo_main.png';
import signin_logo from '../../ASSETS/Signin_logo.svg';
import { axios_login, axios_loginByToken } from './axios';
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [registerMode, setRegisterMode] = useState(false);

  const [values, setValues]: any = useState({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  });

  const handleValuesChange = (obj: any) => {
    setValues({ ...values, ...obj });
  };

  const handleLoginPressed = () => {
    const emailError =
      values.email.trim().length == 0 ? 'Email cannot be empty' : '';
    const passwordError = passwordValidator(values.password);

    if (passwordError || emailError) {
      handleValuesChange({
        passwordError: passwordError,
        emailError: emailError,
      });
      return;
    }

    handle_login();
  };

  const handle_login = async () => {
    setIsLoading(true);
    handleSnackbar({ open: false });

    const result: any = await axios_login({
      data: {
        user_key: values.email,
        password: values.password,
      },
    });

    if (result.status) {
      dispatch(
        handleSnackbar({ open: true, message: result.message, type: 'success' })
      );
      setUserToken(result.data.token);
      dispatch(handleReqSessionTime());
      setTimeout(() => {
        navigate('/');
      }, 500);
    } else {
      dispatch(
        handleSnackbar({ open: true, message: result.message, type: 'error' })
      );
      setIsLoading(false);
    }
  };

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const tokenURL: any = params.get('token');

  useLayoutEffect(() => {
    if (tokenURL) {
      handle_loginByToken();
    }
  }, [tokenURL]);

  const handle_loginByToken = async () => {
    setIsLoading(true);
    handleSnackbar({ open: false });

    const result: any = await axios_loginByToken({
      data: {
        token: decodeURIComponent(tokenURL),
      },
    });

    if (result.status) {
      dispatch(
        handleSnackbar({ open: true, message: result.message, type: 'success' })
      );
      setUserToken(result.data.token);
      dispatch(handleReqSessionTime());
      setTimeout(() => {
        navigate('/');
      }, 500);
    } else {
      dispatch(
        handleSnackbar({ open: true, message: result.message, type: 'error' })
      );
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleLoginPressed();
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const headline2 = {
    color: '#14171A',
    fontFamily: 'Passion One',
    fontSize: 64,
    fontWeight: 700,
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
    {/* Left Section */}
    <Grid item lg={6} sx={{ display: {xs:'none', lg:'flex'}, backgroundColor: '#F5F8FA' }}>
      <Box>
        <img src={logo_Xcelearn} style={{ width: '160px', height: '37px', marginTop:'20px', marginLeft: '25px'}} />
      </Box>
      <Box sx={{ textAlign:'inherit',width: '500%', maxWidth: '500px', height: '500px', marginTop:'150px', marginLeft: 'none'}}>
        <Box>
        <img src={signin_logo} style={{ width: '200px', height: '240px', marginTop:'25px', marginLeft: '1px'}} />
       </Box>
        <Typography sx={{fontfamily: 'Folio Extra Bold'}}
        style={headline2}
        variant='h2'>
          Welcome Back to Xcelearn!
        </Typography>
        <Typography sx={{textAlign: 'inherit', marginTop: '10px', fontFamily: 'Outfit'}}
          >
          Sign in to Xcelearn.
        </Typography>
      </Box>
    </Grid>
    {/* Right Section */}
      <Grid item xs={12} sm={12} md={5} lg={6} >
        <Stack 
        direction="row" 
        spacing={1} 
        alignItems={"center"} 
        justifyContent={"stretch"}
        marginLeft= '570px'
        marginTop= '15px'
        >
        <LanguageIcon fontSize="small" />
        <Typography sx={{textAlign: 'flex',color:'#14171A',fontSize: '12px' }}
          >
          English
        </Typography>
        <Button
          onClick={() =>('/register')}
          variant='outlined'
          sx={{
            backgroundColor: '#FFF',
            color: '#14171A',
            borderRadius: '50px',
            padding: '12px',
            fontSize: '12px',
            width: '88px',
            height: '37px',
            border: '1px solid #0F6CA7',
            fontWeight:900,
          }}
        >
          SIGN UP
        </Button>        
        </Stack> 
      <Grid container component="main" 
         display={'flex'}
         spacing={1}
         justifyContent='center'
         alignItems='center'
         sx={{
          overflow: 'hidden',
          width:'100%',
          height: '100vh',
          marginTop:'-30px'
        }}
        >           
        <Grid item sm={7} lg={7} sx={{ display: {sm:'flex'}}}
        >
          <Grid sx={{
            MarginTop: '32px',
            padding: '32px',
            
            }}>
            <Box sx={{
              textAlign: 'center'
               }}>
              <Typography
                color='#14171A'
                variant='body2'
                fontFamily={'Outfit'}
                fontWeight={'900'}
                sx={{ MarginTop: '20px', marginBottom: '32px'}}
              >
                Sign Up
              </Typography>
            </Box>
              <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
              <SocialLogin />
              <Divider sx={{marginBottom: '30px', marginTop: '30px', color:'#14171A'}}>
                <Typography

                  fontFamily={'Outfit'}
                  fontWeight={'900'}
                >  
                     OR
                  </Typography>
                </Divider>
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Email/Username'
                    variant='outlined'
                    type='text'
                    required
                    inputProps={{
                      style: { 
                        fontSize: 14 ,
                        fontFamily: 'Outfit',
                        backgroundColor: '#F3F6F7',},
                    }}
                    InputLabelProps={{
                      sx: { fontSize: 14 },
                    }}
                    value={values.email}
                    onChange={(e: any) =>
                      handleValuesChange({
                        email: e.target.value,
                        emailError: '',
                      })
                    }
                    error={!!values.emailError}
                    helperText={values.emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Password'
                    variant='outlined'
                    type={values.showPassword ? 'text' : 'password'}
                    required
                    InputProps={{
                      style: { 
                        fontSize: 14,
                        fontFamily: 'Outfit',
                        backgroundColor: '#F3F6F7',
                       },
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{ sx: { fontSize: 14 } }}
                    value={values.password}
                    onChange={(e: any) =>
                      handleValuesChange({
                        password: e.target.value,
                        passwordError: '',
                      })
                    }
                    error={!!values.passwordError}
                    helperText={values.passwordError}
                  />
                </Grid>
                <FormGroup sx={{ marginLeft: 2}}>
                <FormControlLabel control={<Checkbox defaultChecked  size="small"
                />} 
                label={
                  <Typography sx={{ fontSize: '15px', fontFamily: 'Outfit'}}>
                    Keep me logged in
                       <Typography 
                       sx={{ fontSize: '14px', fontFamily: 'Outfit', textAlign:'left',textDecoration:'none'}} 
                      color='#3EAD78'
                      variant='caption'
                      fontWeight= '900'
                      component={NavLink}
                      to='/forgot-password'
                       >
                        Forgot Password?
                  </Typography>
                  </Typography>
                }
                />
                </FormGroup>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <LoadingButton
                  loading={isLoading}
                  // disabled={isLoading}
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{
                    borderRadius: '7px',
                    padding: '12px',
                    backgroundColor: '#3EAD78',
                  }}
                >
                  Sign In
                </LoadingButton>
              </Box>
            </form>
            <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
              <Typography color='text.secondary' variant='caption'>
                Don't have an account?{' '}
                  <Typography sx={{
                    textDecoration:'none'
                  }} 
                color='#3EAD78'
                variant='caption'
                fontWeight= '600'
                component={NavLink}
                to='/reset-password'
              >
                Sign up
                  </Typography>
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', marginTop: '32px' }}>
              <Typography 
            
              font-family= {'Outfit'}
              fontSize={'13px'}
              font-weight= {'300'}
              style={{ color: '#0E6BAF'}}
              >
                <NavLink to='/register' style={{ textDecoration: 'none', color: '#0E6BAF'}} >
                  Term Of Service</NavLink>{' '}
                  <span style={{ margin: '0 12px' }}></span>
                  <NavLink to='/policy' style={{ textDecoration: 'none', color: '#0E6BAF' }}>  
                  Policy
                </NavLink>
              </Typography>
              <Grid item xs={12} sm={6} >
              <Box sx={{ flexGrow: 1, padding: '16px' }}>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
     </Grid>
    </Grid>
  );
}

export default LoginPage;
