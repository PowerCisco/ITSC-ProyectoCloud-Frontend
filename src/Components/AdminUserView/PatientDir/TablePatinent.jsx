import { Button } from '@material-ui/core';
import './TablePatient.scss';
import { DataGrid,GridToolbar,GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
     } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';


export const TablePatinent = ({State,EditOrDeleteSelector }) => {
    const [pageSize, setPageSize] = useState(10)

    const columns = [
        { field: 'pacienteId', headerName: 'PacienteID', width: 70 },
        {
            field: 'nombre',
            headerName: 'Nombre',
            width: 125,
            editable: false,

        },
        {
            field: 'apellido',
            headerName: 'Apellido',
            width: 125,
            editable: false,

        },
        {
            field: 'fechaNacimiento',
            headerName: 'Fecha De Nacimiento',
            width: 120,
            editable: false,

        },
        {
            field: 'tipoPaciente',
            headerName: 'Tipo de Paciente',
            width: 200,
            editable: false,

        },
        {
            field: 'carrera',
            headerName: 'Carrera',
            width: 200,
            editable: false,

        },
        {
            field: 'matricula',
            headerName: 'Matricula',
            width: 200,
            editable: false,

        },
        {
            field: 'departamento',
            headerName: 'Departamento',
            width: 100,
            editable: false,

        },
        {
            field: 'telefono',
            headerName: 'Telefono',
            width: 200,
            editable: false,

        },
        {
            field: 'sexo',
            headerName: 'Sexo',
            width: 100,
            editable: false,

        },
        {
            field: "Editar",
            headerName: "Editar",
            sortable: false,
            renderCell: (params) => {
         
                const data = params.row;
              return <Button onClick={()=>EditOrDeleteSelector(data,"Editar")}>Editar</Button>;
            },
          },
          {
            field: "Eliminar",
            headerName: "Eliminar",
            sortable: false,
            renderCell: (params) => {
         
                const data = params.row;
              return <Button onClick={()=>EditOrDeleteSelector(data,"Eliminar")}>Eliminar</Button>;
            },
          }



        

    ]
    
    function CustomToolbar() {
        return (
          <GridToolbarContainer>
        
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarExport />
          </GridToolbarContainer>
        )
      }


//sx={{ height: '90vh' , width: '100%' }}
    return (
        <>

            <Box className='Box'>
                <DataGrid
                  className='Box-DataGrid'
                    getRowId={(State) => State.pacienteId}
                    
                    rows={State}
                    columns={columns}
                    checkboxSelection = {false}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 25, 50]}
                    pagination
                    localeText={{
                        toolbarExportLabel:"Exportar",
                        toolbarColumns: "Columnas",
                        toolbarFilters: "Filtros",
                        toolbarExport: "Exportar Data"
                      }}
                    components={{ Toolbar: CustomToolbar }}
                    disableSelectionOnClick
                />
            </Box>


          
        </>
    )
}
