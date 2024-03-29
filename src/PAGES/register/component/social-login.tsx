
import { Button, Grid } from '@mui/material';
import { memo } from 'react';

// Import the PNG images
import GoogleIcon from '../../../../public/Google_Icon.png';
import TwitterIcon from '../../../../public/Twitter_Icon.png';
import LinkedInIcon from '../../../../public/Linkedin _Icon.png';
import FacebookIcon from '../../../../public/Facebook_Icon.png';

const SocialLogin = () => {
  const handleBtn = (type: string) => {
    window.location.href = `${process.env.REACT_APP_SERVER_AUTH_ENDPOINT}/${type}`;
  };
  

  const renderIcon = (type: string) => {

    switch (type) {
      case 'google':
        return <img src={GoogleIcon} alt="Google Icon" style={{ width: '45px', height: '45px', marginRight: '5px' }}/>;
      case 'twitter':
        return <img src={TwitterIcon} alt="Twitter Icon" style={{ width: '45px', height: '45px', marginRight: '5px' }}/>;
      case 'linkedin':
        return <img src={LinkedInIcon} alt="LinkedIn Icon" style={{ width: '45px', height: '45px', marginRight: '5px' }}/>;
      case 'facebook':
        return <img src={FacebookIcon} alt="Facebook Icon" style={{ width: '45px', height: '45px', marginRight: '5px' }}/>;
      default:
        return null;
    };
  };

  return (
    <Grid container
    direction="row"
    spacing={1}
    justifyContent="center"
    alignItems="center"
    //marginTop="50px"

    >
      <Grid 
      >
        <Button
          onClick={() => handleBtn('google')}
          fullWidth
          startIcon={renderIcon('google')}
          
        >
        </Button>
      </Grid>
      {/* Add similar Button components for other social logins */}
      <Grid >
        <Button
          onClick={() => handleBtn('facebook')}
          fullWidth
          startIcon={renderIcon('facebook')}
        >   
        </Button>
      </Grid>
      <Grid >
        <Button
          onClick={() => handleBtn('twitter')}
          fullWidth
          startIcon={renderIcon('twitter')}
        >
        </Button>
      </Grid>
      <Grid >
        <Button
          onClick={() => handleBtn('linkedin')}
          fullWidth
          startIcon={renderIcon('linkedin')}
        >
        </Button>
      </Grid>
    </Grid>
  );
};
export default memo(SocialLogin);


