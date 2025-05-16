import { Box, Typography, Paper } from '@mui/material';

const InstructoresPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
          Gestión de Instructores
        </Typography>
        <Typography variant="body1">
          En esta sección podrá gestionar toda la información relacionada con los instructores.
          Próximamente estará disponible la tabla de instructores.
        </Typography>
      </Paper>
    </Box>
  );
};

export default InstructoresPage;