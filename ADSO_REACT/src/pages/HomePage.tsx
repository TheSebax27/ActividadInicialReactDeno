import { Box, Typography, Paper, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
          Sistema de Gestión SENA
        </Typography>
        <Typography variant="body1" paragraph>
          Bienvenido al sistema de gestión del SENA para el programa de Análisis y Desarrollo de Software (ADSO).
          Esta plataforma le permite administrar aprendices, instructores, programas y fichas.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.sena.edu.co/es-co/Noticias/NoticiasImg/noticias/Aprendices-SENA.jpg"
              alt="Aprendices SENA"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PeopleIcon color="primary" /> Aprendices
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gestione la información de los aprendices registrados en el sistema.
                Puede añadir, editar, eliminar y ver detalles de los aprendices.
              </Typography>
              <Button 
                component={Link}
                to="/aprendices"
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                fullWidth
              >
                Ver Aprendices
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.sena.edu.co/es-co/Noticias/NoticiasImg/noticias/Instructor-SENA.jpg"
              alt="Instructores SENA"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonIcon color="primary" /> Instructores
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Administre la información de los instructores que forman parte de los programas formativos.
                Gestione sus datos, especialidades y asignaciones.
              </Typography>
              <Button 
                component={Link}
                to="/instructores"
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                fullWidth
              >
                Ver Instructores
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.sena.edu.co/es-co/Noticias/NoticiasImg/noticias/programa-SENA.jpg"
              alt="Programas SENA"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolIcon color="primary" /> Programas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gestione los programas formativos ofrecidos por el SENA.
                Vea los detalles y estructura de cada programa.
              </Typography>
              <Button 
                component={Link}
                to="/programas"
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                fullWidth
              >
                Ver Programas
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.sena.edu.co/es-co/Noticias/NoticiasImg/noticias/Ficha-SENA.jpg"
              alt="Fichas SENA"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DescriptionIcon color="primary" /> Fichas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Administre las fichas de los grupos de aprendices.
                Gestione las asignaciones, horarios y seguimiento.
              </Typography>
              <Button 
                component={Link}
                to="/fichas"
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                fullWidth
              >
                Ver Fichas
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;