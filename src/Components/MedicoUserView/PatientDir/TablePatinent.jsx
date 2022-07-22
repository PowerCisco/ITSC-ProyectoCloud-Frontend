import { Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './TablePatient.scss';
import {
    DataGrid, GridToolbar, GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';



export const TablePatinent = ({ State, EditOrDeleteSelector }) => {
    const [pageSize, setPageSize] = useState(10)

    const customText = {
        toolbarExportPrint: "Imprimir",
        toolbarExportCSV: "Exportar Archivo .csv",
        toolbarColumns: "Columnas",
        toolbarFilters: "Filtros",
        toolbarExport: "Exportar Data",
        columnsPanelTextFieldLabel: 'Buscar Columna',
        columnsPanelTextFieldPlaceholder: 'Titulo de Columna',
        columnsPanelDragIconLabel: 'Ordenar Titulo',
        columnsPanelShowAllButton: 'Mostrar Todo',
        columnsPanelHideAllButton: 'Ocultar Todo',
        filterPanelLinkOperator: 'Logic operator',
        filterPanelOperators: 'Operador',
        filterPanelOperatorAnd: 'And',
        filterPanelOperatorOr: 'Or',
        filterPanelColumns: 'Columnas',
        filterPanelInputLabel: 'Data',
        filterPanelInputPlaceholder: 'Filtrar Data',
        filterOperatorContains: ' Contiene',
        filterOperatorEquals: ' Igual a ',
        filterOperatorStartsWith: ' Comienza con',
        filterOperatorEndsWith: ' Termina con',
        filterOperatorIs: '',
        filterOperatorIsEmpty: 'Esta vacio',
        filterOperatorIsNotEmpty: 'No esta vacio',
        filterOperatorIsAnyOf: 'Contiene alguna cosa de',
        // Column menu text
        columnMenuLabel: 'Menu',
        columnMenuShowColumns: 'Show columns',
        columnMenuFilter: 'Filtro',
        columnMenuHideColumn: 'Ocultar',
        columnMenuUnsort: 'Desordenar',
        columnMenuSortAsc: 'Ordenar por ASC',
        columnMenuSortDesc: 'Ordenar por DESC',
    }

    const theme = createTheme({
        palette: {
            primary: {

                main: '#64B5F6',
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#11cb5f',
            },
        },
    });
    const columns = [
        { field: 'pacienteId', headerName: 'PacienteID', width: 70 },
        {
            field: 'nombre',
            headerName: 'Nombre',
            headerClassName: 'super-app-theme--header',

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
            width: 90,
            editable: false,

        },
        {
            field: 'departamento',
            headerName: 'Departamento',
            width: 120,
            editable: false,

        },
        {
            field: 'telefono',
            headerName: 'Telefono',
            width: 150,
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
            width: 90,
            renderCell: (params) => {

                const data = params.row;
                return  <ThemeProvider theme={theme}>
                    <Button variant="contained" color = "primary"  onClick={() => EditOrDeleteSelector(data, "Editar")}>Editar</Button>;
                </ThemeProvider>
            },
        },
        {
            field: "Eliminar",
            headerName: "Eliminar",
            sortable: false,
            renderCell: (params) => {

                const data = params.row;
                return <ThemeProvider theme={theme}>
                    <Button  variant="contained"  color="secondary" onClick={() => EditOrDeleteSelector(data, "Eliminar")}>Eliminar</Button>;
                    </ThemeProvider>
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



    return (
        <>

            <Box className='Box'>
                <DataGrid
                    className='Box-DataGrid'
                    getRowId={(State) => State.pacienteId}

                    rows={State}
                    columns={columns}
                    checkboxSelection={false}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 25, 50]}
                    pagination
                    localeText={customText}
                    components={{ Toolbar: CustomToolbar }}
                    disableSelectionOnClick
                    sx={{
                        boxShadow: 5,
                        border: 0,
                        borderColor: '#00000',
                        '& .MuiDataGrid-cell:hover': {
                          color: '#42A5F5',
                        },
                      }}
                />
            </Box>



        </>
    )
}
