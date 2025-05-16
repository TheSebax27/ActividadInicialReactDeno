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
import AddIcon from '@mui/icons-material/Add';

interface Programa {
  idprograma: number;
  nombre_programa: string;
}

const ProgramasTable = () => {
  const [programas, setProgramas] = useState<Programa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPrograma, setCurrentPrograma] = useState<Programa | null>(null);
  const [formValues, setFormValues] = useState({
    nombre_programa: ''
  });

  const fetchProgramas = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/programas');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setProgramas(data.data || data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('No se pudieron cargar los programas. Intente nuevamente más tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgramas();
  }, []);

  const handleOpenDialog = (programa: Programa | null = null) => {
    if (programa) {
      setCurrentPrograma(programa);
      setFormValues({
        nombre_programa: programa.nombre_programa
      });
    } else {
      setCurrentPrograma(null);
      setFormValues({
        nombre_programa: ''
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
      const isUpdating = currentPrograma !== null;
      const url = isUpdating 
        ? `http://localhost:8000/programas/${currentPrograma.idprograma}`
        : 'http://localhost:8000/programas';
      
      const method = isUpdating ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el programa');
      }

      // Actualizar la lista después de guardar
      fetchProgramas();
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving data:', error);
      setError('Error al guardar los datos');
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Está seguro de que desea eliminar este programa?')) {
      try {
        const response = await fetch(`http://localhost:8000/programas/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Error al eliminar el programa');
        }

        // Actualizar la lista después de eliminar
        fetchProgramas();
      } catch (error) {
        console.error('Error deleting data:', error);
        setError('Error al eliminar el programa');
      }
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Lista de Programas Formativos</title>
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
              <h1>SENA - Lista de Programas Formativos</h1>
            </div>
            <button onclick="window.print()" style="padding: 8px 16px; background: #43a047; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 20px;">Imprimir</button>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre del Programa</th>
                </tr>
              </thead>
              <tbody>
                ${programas.map(programa => `
                  <tr>
                    <td>${programa.idprograma}</td>
                    <td>${programa.nombre_programa}</td>
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
          Lista de Programas Formativos
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
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Nuevo Programa
          </Button>
        </Box>
      </Box>
      
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="tabla de programas">
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre del Programa</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programas.map((programa) => (
              <TableRow key={programa.idprograma}>
                <TableCell>{programa.idprograma}</TableCell>
                <TableCell>{programa.nombre_programa}</TableCell>
                <TableCell align="center">
                  <IconButton 
                    color="primary" 
                    onClick={() => handleOpenDialog(programa)}
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    color="error" 
                    onClick={() => handleDelete(programa.idprograma)}
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

      {/* Diálogo para añadir/editar programa */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {currentPrograma ? 'Editar Programa Formativo' : 'Añadir Nuevo Programa Formativo'}
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}>
            <TextField
              autoFocus
              margin="dense"
              name="nombre_programa"
              label="Nombre del Programa"
              type="text"
              fullWidth
              variant="outlined"
              value={formValues.nombre_programa}
              onChange={handleInputChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="inherit">Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {currentPrograma ? 'Actualizar' : 'Guardar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProgramasTable;