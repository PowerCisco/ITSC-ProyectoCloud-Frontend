import React, { useMemo, useState } from 'react'
import MaterialReactTable from 'material-react-table';
export const TableExportData = ({ Data }) => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 7 //customize the default page size
      });
      
    const columns = useMemo(
        () => [
            {
                accessorKey: 'fecha',
                header: 'Fecha',
            },
            {
                accessorKey: 'nombreCompleto',
                header: 'Nombre Completo'
            },

            {
                accessorKey: 'edad',
                header: 'Edad'

            },
            {
                accessorKey: 'diagnostico',
                header: 'Diagnostico'
            },
            {
                accessorKey: 'tratamiento',
                header: 'Tratamiento'
            },
            {
                accessorKey: 'medico',
                header: 'Medico'
            },
            {
                accessorKey: 'carrera',
                header: 'Carrera'
            },
            {
                accessorKey: 'matricula',
                header: 'Matricula'
            },
            {
                accessorKey: 'departamento',
                header: 'Departamento'
            },
            {
                accessorKey: 'telefono',
                header: 'Telefono'
            }


        ]
    )

    return (
        <>
            <MaterialReactTable  
            columns={columns} data={Data}
            state={{pagination}}
            paginateExpandedRows={false}
            onPaginationChange={setPagination}
            rowNumberMode="static"
              localization={{
          actions: 'Acciones',
          cancel: 'Cancelar',
          changeFilterMode: 'Cambia el modo de filtro',
          clearFilter: 'Filtro claro',
          clearSearch: 'Borrar búsqueda',
          clearSort: 'Ordenar claro',
          columnActions: 'Acciones de columna',
          edit: 'Editar',
          expand: 'Expandir',
          expandAll: 'Expandir todo',
          filterByColumn: 'Filtrar por {column}',
          filterMode: 'Modo de filtro: {filterType}',
          grab: 'Agarrar',
          groupByColumn: 'Agrupar por {column}',
          groupedBy: 'Agrupados por ',
          hideAll: 'Ocultar todo',
          hideColumn: 'Ocultar columna de {column}',
          rowActions: 'Acciones de fila',
          pinToLeft: 'Alfile a la izquierda',
          pinToRight: 'Alfile a la derecha',
          save: 'Salvar',
          search: 'Búsqueda',
          selectedCountOfRowCountRowsSelected:
            '{selectedCount} de {rowCount} fila(s) seleccionadas',
          showAll: 'Mostrar todo',
          showAllColumns: 'Mostrar todas las columnas',
          showHideColumns: 'Mostrar/Ocultar columnas',
          showHideFilters: 'Alternar filtros',
          showHideSearch: 'Alternar búsqueda',
          sortByColumnAsc: 'Ordenar por {column} ascendente',
          sortByColumnDesc: 'Ordenar por {column} descendiendo',
          thenBy: ', entonces por ',
          toggleDensity: 'Alternar relleno denso',
          toggleFullScreen: 'Alternar pantalla completa',
          toggleSelectAll: 'Seleccionar todo',
          toggleSelectRow: 'Seleccionar fila',
          ungroupByColumn: 'Desagrupar por {column}',
          unpin: 'Quitar pasador',
          unsorted: 'Sin clasificar',
        }}
            />

        </>
    )
}
