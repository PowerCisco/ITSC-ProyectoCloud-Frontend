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
            onPaginationChange={setPagination}
            enableBottomToolbar={false}
            />

        </>
    )
}
