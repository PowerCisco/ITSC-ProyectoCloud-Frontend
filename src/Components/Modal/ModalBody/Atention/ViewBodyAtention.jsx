import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ViewBodyAtention = (AddOrEditSelector) => {

    
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
            width: 100,
            editable: false,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header'
        },

{
            field: "Editar",
            headerName: "Editar",
            sortable: false,
            headerAlign: 'center',
            width: 150,
            headerClassName: 'super-app-theme--header',
            renderCell: (params) => {

                const data = params.row;
                return <ThemeProvider theme={theme}>
                    <Button  variant="contained"  color="secondary" onClick={() => AddOrEditSelector(data, "Editar")}>Editar</Button>
                    </ThemeProvider>
                },
        }



    ]

  return {
    customText,
    columns
  }
}
