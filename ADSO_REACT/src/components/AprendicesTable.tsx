import { useEffect, useState } from 'react';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Typography,
  Button,
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

interface Aprendiz {
  idaprendiz: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
}

const AprendicesTable = () => {
  const [aprendices, setAprendices] = useState<Aprendiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAprendiz, setCurrentAprendiz] = useState<Aprendiz | null>(null);
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });

  const fetchAprendices = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/aprendices');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setAprendices(data.data || data); // Adaptado según la estructura de respuesta
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('No se pudieron cargar los aprendices. Intente nuevamente más tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAprendices();
  }, []);

  const handleOpenDialog = (aprendiz: Aprendiz | null = null) => {
    if (aprendiz) {
      setCurrentAprendiz(aprendiz);
      setFormValues({
        nombre: aprendiz.nombre,
        apellido: aprendiz.apellido,
        email: aprendiz.email,
        telefono: aprendiz.telefono
      });
    } else {
      setCurrentAprendiz(null);
      setFormValues({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const isUpdating = currentAprendiz !== null;
      const url = isUpdating 
        ? `http://localhost:8000/aprendices/${currentAprendiz.idaprendiz}`
        : 'http://localhost:8000/aprendices';
      
      const method = isUpdating ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el aprendiz');
      }

      // Actualizar la lista después de guardar
      fetchAprendices();
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving data:', error);
      setError('Error al guardar los datos');
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Está seguro de que desea eliminar este aprendiz?')) {
      try {
        const response = await fetch(`http://localhost:8000/aprendices/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Error al eliminar el aprendiz');
        }

        // Actualizar la lista después de eliminar
        fetchAprendices();
      } catch (error) {
        console.error('Error deleting data:', error);
        setError('Error al eliminar el aprendiz');
      }
    }
  };

  const handlePrint = () => {
    // Abrir en nueva pestaña para imprimir
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Lista de Aprendices</title>
            <style>
              body { font-family: Arial, sans-serif; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
              h1 { text-align: center; color: #43a047; }
              .header { display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
              .logo { width: 50px; margin-right: 10px; }
              @media print {
                button { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <img src="https://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png" class="logo">
              <h1>SENA - Lista de Aprendices</h1>
            </div>
            <button onclick="window.print()" style="padding: 8px 16px; background: #43a047; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 20px;">Imprimir</button>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                ${aprendices.map(aprendiz => `
                  <tr>
                    <td>${aprendiz.idaprendiz}</td>
                    <td>${aprendiz.nombre}</td>
                    <td>${aprendiz.apellido}</td>
                    <td>${aprendiz.email}</td>
                    <td>${aprendiz.telefono}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, alignItems: 'center' }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#43a047' }}>
          Lista de Aprendices
        </Typography>
        <Box>
          <Button 
            variant="outlined" 
            onClick={handlePrint}
            sx={{ mr: 2 }}
          >
            Imprimir
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<PersonAddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Nuevo Aprendiz
          </Button>
        </Box>
      </Box>
      
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="tabla de aprendices">
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aprendices.map((aprendiz) => (
              <TableRow key={aprendiz.idaprendiz}>
                <TableCell>{aprendiz.idaprendiz}</TableCell>
                <TableCell>{aprendiz.nombre}</TableCell>
                <TableCell>{aprendiz.apellido}</TableCell>
                <TableCell>{aprendiz.email}</TableCell>
                <TableCell>{aprendiz.telefono}</TableCell>
                <TableCell align="center">
                  <IconButton 
                    color="primary" 
                    onClick={() => handleOpenDialog(aprendiz)}
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    color="error" 
                    onClick={() => handleDelete(aprendiz.idaprendiz)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo para añadir/editar aprendiz */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {currentAprendiz ? 'Editar Aprendiz' : 'Añadir Nuevo Aprendiz'}
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}>
            <TextField
              autoFocus
              margin="dense"
              name="nombre"
              label="Nombre"
              type="text"
              fullWidth
              variant="outlined"
              value={formValues.nombre}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="apellido"
              label="Apellido"
              type="text"
              fullWidth
              variant="outlined"
              value={formValues.apellido}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="telefono"
              label="Teléfono"
              type="text"
              fullWidth
              variant="outlined"
              value={formValues.telefono}
              onChange={handleInputChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="inherit">Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {currentAprendiz ? 'Actualizar' : 'Guardar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AprendicesTable;