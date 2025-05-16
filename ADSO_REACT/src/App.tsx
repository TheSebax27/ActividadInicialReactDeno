import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AprendicesPage from './pages/AprendicesPage';
import InstructoresPage from './pages/InstructoresPage';
import ProgramasPage from './pages/ProgramasPage';

// Creamos un tema personalizado con colores del SENA
const theme = createTheme({
  palette: {
    primary: {
      main: '#43a047', // Verde SENA
    },
    secondary: {
      main: '#f57c00', // Naranja complementario
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aprendices" element={<AprendicesPage />} />
          <Route path="/instructores" element={<InstructoresPage />} />
          <Route path="/programas" element={<ProgramasPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;