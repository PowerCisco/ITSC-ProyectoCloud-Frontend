import React from 'react';
import { Box, Button, Container, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Error from './Error.jpg'


const cargarLogin = ()=>{
setTimeout(() => {
        location.reload()
    }, 2000);
}
export const ErrorComponent = ({error}) => {
    return(
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={10}>
            <Grid xs={9}>
              <Typography variant="h1">
                ERROR DE ACCESO
              </Typography>
              <Typography variant="h6">
                Esta pagina esta restringida, debe de iniciar sesion para continuar
                Redirigiendo a inicio de sesion...
              </Typography>
        {cargarLogin()}
            </Grid>
            <Grid xs={3}>
              <img
                src={Error}
                alt=""
                width={500} height={500}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
}