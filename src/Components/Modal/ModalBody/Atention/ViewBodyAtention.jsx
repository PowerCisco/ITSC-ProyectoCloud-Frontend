export const ViewBodyAtention = () => {

    
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





    ]

  return {
    customText,
    columns
  }
}
