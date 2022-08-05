import { Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAtention } from '../../../Hooks/useAtention';
import {
    DataGrid,  GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';

import './ViewAtentionPage.scss';


export const ViewAtentionPage = () => {
    const [pageSize, setPageSize] = useState(10)
    const {getAtention} = useAtention();

    
    const customText = {
        toolbarColumns: "Columnas",
        toolbarFilters: "Filtros",
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
        { field: 'atencionId', headerName: 'ID', width: 60,
        headerClassName: 'super-app-theme--header', },
        {
            field: 'diagnostico',
            headerName: 'Diagnostico',
            headerClassName: 'super-app-theme--header',

            width: 256,
            editable: false,
            headerAlign: 'center',
            
        },
        {
            field: 'tratamiento',
            headerName: 'Tratamiento',
            width: 300,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'fechaAtencion',
            headerName: 'Fecha De Atencion',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'medicamentosIndicados',
            headerName: 'Medicamentos Indicados',
            width: 290,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'

        },
        {
            field: 'pacienteId',
            headerName: 'Paciente ID',
            width: 90,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'medicoId',
            headerName: 'Medico ID',
            width: 150,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },

        // {
        //     field: "Agregar Atencion",
        //     headerName: "Agregar Atencion",
        //     sortable: false,
        //     width: 200,
        //     headerAlign: 'center',
        //     headerClassName: 'super-app-theme--header',
        //     renderCell: (params) => {

        //         const data = params.row;
        //         return  <ThemeProvider theme={theme}>
        //             <Button variant="contained" color = "primary"  onClick={() => EditOrDeleteSelector(data, "Agregar")}>Agregar Atencion</Button>
        //         </ThemeProvider>
        //     },
        // },
        // {
        //     field: "Editar",
        //     headerName: "Editar",
        //     sortable: false,
        //     headerAlign: 'center',
        //     width: 150,
        //     headerClassName: 'super-app-theme--header',
        //     renderCell: (params) => {

        //         const data = params.row;
        //         return <ThemeProvider theme={theme}>
        //             <Button  variant="contained"  color="secondary" onClick={() => EditOrDeleteSelector(data, "Eliminar")}>Editar</Button>
        //             </ThemeProvider>
        //         },
        // }





    ]

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
            </GridToolbarContainer>
        )
    }



    return (
        <>
            <br/>
            <br/>
            <br/>
            <Box className='Box_view'
          sx={{
           
            '& .super-app-theme--header': {
              backgroundColor: '#90CAF980',
                fontSize: '16px',
                fontWeight: 900
            },
          }}
            >
            
                <DataGrid
                    className='Box-DataGrid_view'
                    getRowId={(getAtention) => getAtention.atencionId}

                    rows={getAtention}
                    columns={columns}
                    checkboxSelection={false}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
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
                        
                        '.MuiDataGrid-cell':{
                            display: 'block',
                            position: 'relative',
                            textAlign: 'center ',
                        }
                       
                    }}
                />
            </Box>



        </>
    )
}
