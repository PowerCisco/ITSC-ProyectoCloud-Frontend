import { useState } from 'react';
import {  DataGrid,  GridToolbarContainer,GridToolbarColumnsButton,GridToolbarFilterButton,} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import {GridPatient} from '../../Modal/ModalBody/Patient/GridPatient'
import './TablePatient.scss';


export const TablePatinent = ({ State, EditOrDeleteSelector }) => {
 const { customText,columns} = GridPatient(EditOrDeleteSelector)
    const [pageSize, setPageSize] = useState(10)

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

            <Box className='Box'
          sx={{
           
            '& .super-app-theme--header': {
              backgroundColor: '#90CAF980',
                fontSize: '16px',
                fontWeight: 900
            },
          }}
            >
            
                <DataGrid
                    className='Box-DataGrid'
                    getRowId={(State) => State.pacienteId}

                    rows={State}
                    columns={columns}
                    checkboxSelection={false}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[]}
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
