import React from 'react'
import { Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const GridPatient = (EditOrDeleteSelector) => {
  
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

            width: 125,
            editable: false,
            headerAlign: 'center',
            
        },
        {
            field: 'apellido',
            headerName: 'Apellido',
            width: 125,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'fechaNacimiento',
            headerName: 'Fecha De Nacimiento',
            width: 120,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
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
            width: 150,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'

        },
        {
            field: 'matricula',
            headerName: 'Matricula',
            width: 90,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'departamento',
            headerName: 'Departamento',
            width: 150,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'telefono',
            headerName: 'Telefono',
            width: 150,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'sexo',
            headerName: 'Sexo',
            width: 100,
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
        }





    ]

  
    return {
        customText,
        columns,
        
    }
}
