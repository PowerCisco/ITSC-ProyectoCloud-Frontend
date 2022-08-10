
import { SignInButton } from './Botones Login/SignInButton';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import video from './backgroundLogin.mp4';
import './MenuNoAuth.scss';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.proyectofinal.cloud">
        Centro de Riesgos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export const MenuNoAuth = () => {

  return (
    <>

      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          

          <Grid
            item
            xs={false}
            sm={5}
            md={8}
            
          />
          <video className='video-wrapper' autoPlay loop muted> <source className='video'src={video} type='video/mp4' /></video>
          <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 25,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ width: 70, height: 70, m: 2, bgcolor: '#31c' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Centro de Riesgos
              </Typography>
              <Box x={{ mt: 5 }}>

                <br />
                <br />
                <br />
                <SignInButton />
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>


    </>
  )
}
