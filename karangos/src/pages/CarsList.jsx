import React from 'react'
import { Typography, Paper, IconButton, Box, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import EditIcon from '@mui/icons-material/Edit'
import {Link} from 'react-router-dom'

export default function CarsList() {

  const [state, setState] = React.useState({
    cars: {}
  })

  // Desestruturando as variáveis de estado
  const {
    cars
  } = state

  // Este useEffect() será executado apenas uma vez, durante o
  // carregamento da página
  React.useEffect(() => {
    loadData()    // Carrega dos dados do back-end
  }, [])

  async function loadData() {
    try {
      const result = await fetch('https://api.faustocintra.com.br/cars')

      // Requisição OK
      if(result.ok) setState({...state, cars: await result.json()})
      
      // Requisição com erro
      else throw new Error(`[HTTP ${result.status}] ${result.statusText}`)

    }
    catch(error) {
      // Exibimos o erro no console
      console.error(error)
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'brand',
      headerName: 'Marca',
      width: 200
    },
    {
      field: 'model',
      headerName: 'Modelo',
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'color',
      headerName: 'Cor',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano de Fabricação',
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'imported',
      headerName: 'Importado',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'plates',
      headerName: 'Placa',
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'edit',
      headerName: 'Editar',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      renderCell: params => 
      <Link to={'./'+params.id}>
        <IconButton aria-label="Editar">
          <EditIcon />
        </IconButton>
      </Link>
    },
    {
      field: 'delete',
      headerName: 'Excluir',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      renderCell: params =>
        <IconButton aria-label="Excluir" onClick={()=>handleDeleteButtonClick(params.id)}>
          <DeleteForeverIcon color="error" />
        </IconButton>
    }
  ];
  
  async function handleDeleteButtonClick(id){
    if(confirm('Deseja realmente excluir?')){
      try{
        const result = await fetch(`https://api.faustocintra.com.br/cars/${id}`, {method:'DELETE'})
        if(result.ok) loadData()
        alert('Carro excluido')
      }
      catch(error){
        console.error(error)
      }
    }
  }
  
  return (
    <>
      <Typography variant="h1" sx={{ mb: '50px' }}>
        Listagem de carros
      </Typography>

      <Box sx={{display: 'flex', justifyContent: 'right', mb: '25px'}}>
        <Link to="new">
          <Button variant="contained" color="secondary" size='large' startIcon={<AddBoxOutlinedIcon />}>
            Cadastrar novo Carro
          </Button>
        </Link>
      </Box>

      <Paper elevation={4} sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={cars}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </>
  )
}