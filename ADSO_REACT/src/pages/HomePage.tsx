import { Box, Typography, Paper, Grid, Card, CardContent, CardMedia, Button, Divider, Chip, Container, IconButton, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

// Importar imágenes locales
import aprendicesImg from '../assets/images/aprendices.jpg';
import instructoresImg from '../assets/images/instructores.jpg';
import programasImg from '../assets/images/programas.jpg';
import sebastianImg from '../assets/images/developers/sebastian.jpg';
import santiagoImg from '../assets/images/developers/santiago.jpg';

const HomePage = () => {
  // Función para lanzar confetti cuando se haga clic en las tarjetas de desarrolladores
  const handleDevCardClick = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#43a047', '#2e7d32', '#f57c00', '#e65100']
    });
  };

  return (
    <Box sx={{ 
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      pt: 4,
      pb: 8,
    }}>
      <Container maxWidth="lg">
        {/* Título de sección */}
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 4, 
            textAlign: 'center', 
            fontWeight: 700,
            color: '#37474f',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              backgroundColor: '#2e7d32',
              borderRadius: '2px'
            }
          }}
        >
          Módulos Principales
        </Typography>
          
        {/* Card 1 - Aprendices */}
        <Paper 
          elevation={1} 
          sx={{ 
            mb: 3, 
            borderRadius: 2, 
            overflow: 'hidden',
            bgcolor: 'white'
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box 
              component="img" 
              src={aprendicesImg}
              alt="Aprendices SENA"
              sx={{ 
                width: '100%', 
                height: 200, 
                objectFit: 'cover' 
              }}
            />
            <Box 
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
              }}
            >
              <Chip 
                label="Gestión de Aprendices" 
                size="small"
                sx={{ 
                  bgcolor: 'white', 
                  color: '#2e7d32',
                  fontWeight: 'medium',
                  fontSize: '0.75rem'
                }}
              />
            </Box>
          </Box>
          
          <Box sx={{ p: 3 }}>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                color: '#2e7d32',
                fontWeight: 'bold',
                mb: 1
              }}
            >
              <PeopleIcon sx={{ color: '#2e7d32', fontSize: 20 }} /> Aprendices
            </Typography>
            
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ mb: 2 }}
            >
              Gestione la información de los aprendices registrados en el sistema. Visualice sus perfiles, progreso académico y actualice sus datos.
            </Typography>
            
            <Button 
              component={Link}
              to="/aprendices"
              variant="contained" 
              color="primary" 
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                mt: 1,
                bgcolor: '#2e7d32',
                textTransform: 'none',
                fontWeight: 'medium',
                '&:hover': {
                  bgcolor: '#1b5e20'
                }
              }}
            >
              Ver Aprendices
            </Button>
          </Box>
        </Paper>
            
        {/* Card 2 - Instructores */}
        <Paper 
          elevation={1} 
          sx={{ 
            mb: 3, 
            borderRadius: 2, 
            overflow: 'hidden',
            bgcolor: 'white'
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box 
              component="img" 
              src={instructoresImg}
              alt="Instructores SENA"
              sx={{ 
                width: '100%', 
                height: 200, 
                objectFit: 'cover' 
              }}
            />
            <Box 
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
              }}
            >
              <Chip 
                label="Gestión de Instructores" 
                size="small"
                sx={{ 
                  bgcolor: 'white', 
                  color: '#f57c00',
                  fontWeight: 'medium',
                  fontSize: '0.75rem'
                }}
              />
            </Box>
          </Box>
          
          <Box sx={{ p: 3 }}>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                color: '#f57c00',
                fontWeight: 'bold',
                mb: 1
              }}
            >
              <PersonIcon sx={{ color: '#f57c00', fontSize: 20 }} /> Instructores
            </Typography>
            
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ mb: 2 }}
            >
              Administre la información de los instructores que forman parte de los programas formativos. Gestione sus competencias y asignaciones académicas.
            </Typography>
            
            <Button 
              component={Link}
              to="/instructores"
              variant="contained" 
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                mt: 1,
                bgcolor: '#f57c00',
                textTransform: 'none',
                fontWeight: 'medium',
                '&:hover': {
                  bgcolor: '#e65100'
                }
              }}
            >
              Ver Instructores
            </Button>
          </Box>
        </Paper>
            
        {/* Card 3 - Programas */}
        <Paper 
          elevation={1} 
          sx={{ 
            mb: 3, 
            borderRadius: 2, 
            overflow: 'hidden',
            bgcolor: 'white'
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box 
              component="img" 
              src={programasImg}
              alt="Programas SENA"
              sx={{ 
                width: '100%', 
                height: 200, 
                objectFit: 'cover' 
              }}
            />
            <Box 
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
              }}
            >
              <Chip 
                label="Gestión de Programas" 
                size="small"
                sx={{ 
                  bgcolor: 'white', 
                  color: '#1976d2',
                  fontWeight: 'medium',
                  fontSize: '0.75rem'
                }}
              />
            </Box>
          </Box>
          
          <Box sx={{ p: 3 }}>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                color: '#1976d2',
                fontWeight: 'bold',
                mb: 1
              }}
            >
              <SchoolIcon sx={{ color: '#1976d2', fontSize: 20 }} /> Programas
            </Typography>
            
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ mb: 2 }}
            >
              Gestione los programas formativos ofrecidos por el SENA. Configure los módulos, competencias y resultados de aprendizaje esperados.
            </Typography>
            
            <Button 
              component={Link}
              to="/programas"
              variant="contained" 
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                mt: 1,
                bgcolor: '#1976d2',
                textTransform: 'none',
                fontWeight: 'medium',
                '&:hover': {
                  bgcolor: '#0d47a1'
                }
              }}
            >
              Ver Programas
            </Button>
          </Box>
        </Paper>

        {/* Desarrolladores Section - Enhanced */}
        <Box sx={{ mt: 10, mb: 4 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              mb: 6 
            }}
          >
            <Divider sx={{ width: '80px', mx: 2, borderColor: 'rgba(0,0,0,0.2)' }} />
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                fontWeight: 800, 
                color: '#37474f',
                position: 'relative',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: { xs: '1.5rem', md: '1.75rem' }
              }}
            >
              <CodeIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
              Nuestro Equipo
            </Typography>
            <Divider sx={{ width: '80px', mx: 2, borderColor: 'rgba(0,0,0,0.2)' }} />
          </Box>
          
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto',
                color: '#546e7a',
                fontSize: '1.1rem'
              }}
            >
              Conoce a los desarrolladores detrás de esta plataforma, profesionales con amplia experiencia en
              tecnologías web y sistemas de gestión educativa.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {/* Developer Card 1 */}
            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: 4, 
                  background: 'linear-gradient(135deg, #43a047 0%, #2e7d32 100%)',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  '&:hover': { 
                    transform: 'translateY(-15px) scale(1.02)',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)'
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E")',
                    backgroundSize: 'cover',
                    opacity: 0.5
                  }
                }}
                onClick={handleDevCardClick}
              >
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: 'rgba(255,255,255,0.1)',
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  }} 
                />
                
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0,
                    width: '150px',
                    height: '150px',
                    background: 'rgba(255,255,255,0.1)',
                    clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
                  }} 
                />
                
                <CardContent sx={{ position: 'relative', zIndex: 1, p: { xs: 3, md: 4 } }}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    alignItems: { xs: 'center', sm: 'flex-start' }, 
                    mb: 4,
                    gap: { xs: 3, sm: 4 }
                  }}>
                    <Avatar
                      src={sebastianImg}
                      alt="Sebastian Silva"
                      sx={{ 
                        width: { xs: 120, sm: 140 }, 
                        height: { xs: 120, sm: 140 },
                        border: '4px solid rgba(255,255,255,0.8)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    
                    <Box sx={{ 
                      textAlign: { xs: 'center', sm: 'left' },
                      mt: { xs: 0, sm: 2 }
                    }}>
                      <Typography 
                        variant="h4" 
                        component="h3" 
                        fontWeight="bold"
                        sx={{ 
                          textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                          mb: 1
                        }}
                      >
                        Sebastian Silva
                      </Typography>
                      
                      <Box 
                        sx={{ 
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '30px',
                          px: 2,
                          py: 0.5,
                          mb: 2
                        }}
                      >
                        <Typography variant="h6">
                          Desarrollador Full Stack-Lider
                        </Typography>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        gap: 1.5,
                        justifyContent: { xs: 'center', sm: 'flex-start' }
                      }}>
                        <IconButton 
                          sx={{ 
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '&:hover': { 
                              bgcolor: 'rgba(255,255,255,0.2)',
                              transform: 'translateY(-3px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        
                        <IconButton 
                          sx={{ 
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '&:hover': { 
                              bgcolor: 'rgba(255,255,255,0.2)',
                              transform: 'translateY(-3px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <LinkedInIcon />
                        </IconButton>
                        
                        <IconButton 
                          sx={{ 
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '&:hover': { 
                              bgcolor: 'rgba(255,255,255,0.2)',
                              transform: 'translateY(-3px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <EmailIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      fontSize: '1.1rem', 
                      lineHeight: 1.7,
                      textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    Especialista en desarrollo web con React y TypeScript. Encargado del desarrollo frontend 
                    de la aplicación y la integración con las APIs del backend. Con más de 5 años de experiencia
                    en el desarrollo de aplicaciones web modernas y altamente interactivas.
                  </Typography>

                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap',
                      gap: 1,
                      mt: 'auto'
                    }}
                  >
                    {['React', 'TypeScript', 'Material UI', 'Node.js', 'MongoDB'].map((skill) => (
                      <Chip 
                        key={skill}
                        label={skill} 
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.2)', 
                          color: 'white',
                          fontWeight: 'medium',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Developer Card 2 */}
            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: 4, 
                  background: 'linear-gradient(135deg, #f57c00 0%, #e65100 100%)',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  '&:hover': { 
                    transform: 'translateY(-15px) scale(1.02)',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)'
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E")',
                    backgroundSize: 'cover',
                    opacity: 0.5
                  }
                }}
                onClick={handleDevCardClick}
              >
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: 'rgba(255,255,255,0.1)',
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  }} 
                />
                
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0,
                    width: '150px',
                    height: '150px',
                    background: 'rgba(255,255,255,0.1)',
                    clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
                  }} 
                />
                
                <CardContent sx={{ position: 'relative', zIndex: 1, p: { xs: 3, md: 4 } }}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    alignItems: { xs: 'center', sm: 'flex-start' }, 
                    mb: 4,
                    gap: { xs: 3, sm: 4 }
                  }}>
                    <Avatar
                      src={santiagoImg}
                      alt="Santiago Granados"
                      sx={{ 
                        width: { xs: 120, sm: 140 }, 
                        height: { xs: 120, sm: 140 },
                        border: '4px solid rgba(255,255,255,0.8)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    
                    <Box sx={{ 
                      textAlign: { xs: 'center', sm: 'left' },
                      mt: { xs: 0, sm: 2 }
                    }}>
                      <Typography 
                        variant="h4" 
                        component="h3" 
                        fontWeight="bold"
                        sx={{ 
                          textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                          mb: 1
                        }}
                      >
                        Santiago Granados
                      </Typography>
                      
                      <Box 
                        sx={{ 
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '30px',
                          px: 2,
                          py: 0.5,
                          mb: 2
                        }}
                      >
                        <Typography variant="h6">
                          Ingeniero de Backend
                        </Typography>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        gap: 1.5,
                        justifyContent: { xs: 'center', sm: 'flex-start' }
                      }}>
                        <IconButton 
                          sx={{ 
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '&:hover': { 
                              bgcolor: 'rgba(255,255,255,0.2)',
                              transform: 'translateY(-3px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        
                        <IconButton 
                          sx={{ 
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '&:hover': { 
                              bgcolor: 'rgba(255,255,255,0.2)',
                              transform: 'translateY(-3px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <LinkedInIcon />
                        </IconButton>
                        
                        <IconButton 
                          sx={{ 
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '&:hover': { 
                              bgcolor: 'rgba(255,255,255,0.2)',
                              transform: 'translateY(-3px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <EmailIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      fontSize: '1.1rem', 
                      lineHeight: 1.7,
                      textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    Especialista en desarrollo de APIs y bases de datos. Responsable de la arquitectura 
                    del sistema y el desarrollo de los servicios RESTful usando Deno y MySQL. Experto en optimización
                    de consultas y diseño de sistemas escalables.
                  </Typography>

                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap',
                      gap: 1,
                      mt: 'auto'
                    }}
                  >
                    {['Deno', 'MySQL', 'API REST', 'Docker', 'AWS'].map((skill) => (
                      <Chip 
                        key={skill}
                        label={skill} 
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.2)', 
                          color: 'white',
                          fontWeight: 'medium',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;