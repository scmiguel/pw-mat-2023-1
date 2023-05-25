import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton'

export default function CustomersList() {

  const [state, setState] = React.useState({
    customers: {}
  })

  // Desestruturando as variáveis de estado
  const {
    customers
  } = state

  // Este useEffect() será executado apenas uma vez, durante o
  // carregamento da página
  React.useEffect(() => {
    loadData()    // Carrega dos dados do back-end
  }, [])

  async function loadData() {
    try {
      const result = await fetch('https://api.faustocintra.com.br/customers')

      // Requisição OK
      if(result.ok) setState({...state, customers: await result.json()})
      
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
      field: 'name',
      headerName: 'Nome',
      width: 300
    },
    {
      field: 'ident_document',
      headerName: 'CPF',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'birth_date',
      headerName: 'Data nasc.',
      align: 'center',
      headerAlign: 'center',
      width: 100,
      valueFormatter: params => {
        if(params.value) return format(new Date(params.value), 'dd/MM/yyyy')
        else return ''
      }
    },
    {
      field: 'city',
      headerName: 'Município/UF',
      width: 300,
      // Colocando dois campos na mesma célula
      valueGetter: params => params.row.city + '/' + params.row.uf
    },
    {
      field: 'phone',
      headerName: 'Celular',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 200
    },
    {
      field: 'edit',
      headerName: 'Editar',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      renderCell: params => 
        <IconButton aria-label="Editar">
          <EditIcon />
        </IconButton>
    },
    {
      field: 'delete',
      headerName: 'Excluir',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      renderCell: params =>
        <IconButton aria-label="Excluir">
          <DeleteForeverIcon color="error" />
        </IconButton>
    }
  ];
  
  return (
    <>
      <Typography variant="h1" sx={{ mb: '50px' }}>
        Listagem de clientes
      </Typography>

      <Paper elevation={4} sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={customers}
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