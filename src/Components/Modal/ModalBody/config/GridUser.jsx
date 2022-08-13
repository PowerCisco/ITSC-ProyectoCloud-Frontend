import React from 'react'
import { Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const GridUser = (EditOrDeleteSelector) => {
  
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
              
                main: '#be0e0e',
            },
        },
    });
    const columns = [
        { field: 'medicoId', headerName: 'medico ID', width: 90,
        headerClassName: 'super-app-theme--header', },
        {
            field: 'pNombre',
            headerName: 'Nombre',
            headerClassName: 'super-app-theme--header',

            width: 125,
            editable: false,
            headerAlign: 'center',
            
        },
        {
            field: 'sNombre',
            headerName: 'Segundo Nombre',
            width: 125,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'pApellido',
            headerName: 'Apellido',
            width: 120,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'sApellido',
            headerName: 'Segundo Apellido',
            width: 150,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'especialidad',
            headerName: 'Especialidad',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'

        },
        {
            field: 'email',
            headerName: 'Email',
            width: 305,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: "Editar",
            headerName: "Editar",
            sortable: false,
            width: 90,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
            renderCell: (params) => {

                const data = params.row;
                return  <ThemeProvider theme={theme}>
                    <Button variant="contained" color = "primary"  onClick={() => EditOrDeleteSelector(data, "Editar")}>Editar</Button>
                 
                </ThemeProvider>
            },
        },
        {
            field: "Eliminar",
            headerName: "Eliminar",
            sortable: false,
            width: 90,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
            renderCell: (params) => {

                const data = params.row;
                return  <ThemeProvider theme={theme}>
                    <Button variant="contained" color = "secondary"  onClick={() => EditOrDeleteSelector(data, "Eliminar")}>Eliminar</Button>
                </ThemeProvider>
            },
        }





    ]

  
    return {
        customText,
        columns,
        
    }
}
