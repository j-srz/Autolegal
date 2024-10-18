import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">AutoLegal</Typography>
        <Box>
          {/* Icono de perfil */}
          <Button variant="outlined" sx={{ borderRadius: '50%', minWidth: '40px' }}>
            M
          </Button>
        </Box>
      </Box>
      
      <Grid container spacing={4}>
        {/* Sección principal de multas */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Tus multas
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* Tabla de multas */}
                {[
                  { id: '#34576', multa: 'Paso un alto', descripcion: 'En av. Independencia', monto: '$1,100', pago: 'Pagar', pagada: false },
                  { id: '#34576', multa: 'Paso un alto', descripcion: 'En av. Independencia', monto: '$1,100', pago: 'Pagada', pagada: true }
                ].map((multa, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, backgroundColor: multa.pagada ? '#b0ffa2' : '#f8d7da', borderRadius: 2 }}>
                    <Typography>{multa.id}</Typography>
                    <Typography>{multa.multa}</Typography>
                    <Typography>{multa.descripcion}</Typography>
                    <Typography>{multa.monto}</Typography>
                    {!multa.pagada ? (
                      <Button variant="contained" color="primary">{multa.pago}</Button>
                    ) : (
                      <Typography>{multa.pago}</Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Sección de licencias y carros */}
        <Grid item xs={12} md={4}>
          {/* Licencias */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6">Tus licencias</Typography>
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="h2" color="primary">B</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Te quedan 2 años 5 meses para renovar tu licencia
                </Typography>
                <Button variant="outlined" sx={{ width: '100%' }}>
                  Añadir licencia
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Automóviles */}
          <Card>
            <CardContent>
              <Typography variant="h6">Tus carros</Typography>
              <Box sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, p: 2, backgroundColor: '#f8d7da', borderRadius: 2 }}>
                  <Typography>Nissan Versa | Rojo</Typography>
                  <Button color="error" onClick={handleOpen}>Emergencia</Button>
                </Box>
                <Button variant="outlined" sx={{ width: '100%' }}>
                  Añadir Automóvil
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Modal para marcar el carro como perdido */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Marcar como perdido</DialogTitle>
        <DialogContent>
          <Typography>Atención, estás haciendo una operación con el C5 y tu carro será rastreado.</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Nissan Versa | Rojo</Typography>
          <Typography variant="subtitle1">ABD-234</Typography>
          <Typography>Descripción: Carro con un leve golpe en la parte frontal</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancelar</Button>
          <Button onClick={handleClose} color="error" variant="contained">Enviar informe</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;
