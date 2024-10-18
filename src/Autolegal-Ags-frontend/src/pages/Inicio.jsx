import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';

const Inicio = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h2" gutterBottom>
        Autolegal | Ags
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <Button variant="outlined" size="large">
          Ya tengo una licencia
        </Button>
        <Button variant="contained" size="large">
          Tramitar licencia
        </Button>
      </Box>
      <Grid container spacing={4} sx={{ mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Vertical
          </Typography>
          <Typography variant="body1">
            Integrar soluciones que permitan la generación de identificaciones a conductores y vehículos, registro de incidencias de seguridad, pagos descentralizados de multas.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Solución
          </Typography>
          <Typography variant="body1">
            Somos una plataforma innovadora que transforma la gestión de licencias en Aguascalientes. A través de tecnología blockchain, garantizamos la seguridad, transparencia y eficiencia en la generación, pago y seguimiento de licencias. Además, contamos con un botón de robo y extravío, que permite a los usuarios notificar de inmediato al C5 en caso de que su vehículo sea robado. Con un solo clic, se enviarán todos los datos del vehículo directamente a las autoridades, facilitando la comunicación y el seguimiento del incidente.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Inicio;
