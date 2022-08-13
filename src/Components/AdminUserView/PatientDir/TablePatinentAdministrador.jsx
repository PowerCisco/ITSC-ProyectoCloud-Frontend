import { GridPatient } from '../../Modal/ModalBody/Patient/GridPatient';
import { DataGrid,GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
     } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './TablePatinentAdministrador.scss';


export const TablePatinentAdministrador = ({State}) => {
    const [pageSize, setPageSize] = useState(10)
    const {customText} = GridPatient();

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


    return (
        <>

            <Box className='cajaas'>
                <DataGrid
                  className='caja-Data'
                    getRowId={(State) => State.pacienteId}
                    
                    rows={State}
                    columns={columns}
                    checkboxSelection = {false}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            
                    pagination
                    localeText={customText}
                    components={{ Toolbar: CustomToolbar }}
                    disableSelectionOnClick
                />
            </Box>


          
        </>
    )
}
