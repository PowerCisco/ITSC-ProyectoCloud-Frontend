import React from 'react'
import { Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const GridAtention = (AddOrEditSelector) => {
    
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
        columnMenuLabel: 'Menu',
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
                main: '#11cb5f',
            },
        },
    });
    const columns = [
        { field: 'pacienteId', headerName: 'ID', width: 60,
        headerClassName: 'super-app-theme--header', },
        {
            field: 'nombre',
            headerName: 'Nombre',
            headerClassName: 'super-app-theme--header',

            width: 137,
            editable: false,
            headerAlign: 'center',
            
        },
        {
            field: 'apellido',
            headerName: 'Apellido',
            width: 150,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'tipoPaciente',
            headerName: 'Tipo de Paciente',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'carrera',
            headerName: 'Carrera',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'

        },
        {
            field: 'matricula',
            headerName: 'Matricula',
            width: 100,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'departamento',
            headerName: 'Departamento',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },

        {
            field: "Agregar Atencion",
            headerName: "Agregar Atencion",
            sortable: false,
            width: 250,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
            renderCell: (params) => {

                const data = params.row;
                return  <ThemeProvider theme={theme}>
                    <Button variant="contained" color = "primary"  onClick={() =>AddOrEditSelector(data, "Agregar")}>Agregar Atencion</Button>
                </ThemeProvider>
            },
        }
        



    ]


    const columnsAuditor = [
        { field: 'pacienteId', headerName: 'ID', width: 60,
        headerClassName: 'super-app-theme--header', },
        {
            field: 'nombre',
            headerName: 'Nombre',
            headerClassName: 'super-app-theme--header',

            width: 137,
            editable: false,
            headerAlign: 'center',
            
        },
        {
            field: 'apellido',
            headerName: 'Apellido',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'tipoPaciente',
            headerName: 'Tipo de Paciente',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'carrera',
            headerName: 'Carrera',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'

        },
        {
            field: 'matricula',
            headerName: 'Matricula',
            width: 200,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'departamento',
            headerName: 'Departamento',
            width: 290,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },

        
        ]
  return {
    customText,
    columnsAuditor,
    columns
  }
}
