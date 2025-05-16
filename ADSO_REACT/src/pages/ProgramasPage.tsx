import { Box, Typography, Paper } from '@mui/material';

const ProgramasPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
          Gestión de Programas Formativos
        </Typography>
        <Typography variant="body1">
          En esta sección podrá gestionar toda la información relacionada con los programas formativos.
          Próximamente estará disponible la tabla de programas.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProgramasPage;