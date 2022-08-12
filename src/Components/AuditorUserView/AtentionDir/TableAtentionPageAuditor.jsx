import React from 'react'
import { useState } from 'react';
import { DataGrid,  GridToolbarContainer, GridToolbarColumnsButton,  GridToolbarExport,GridToolbarFilterButton} from '@mui/x-data-grid';
import {GridAtention} from  '../../Modal/ModalBody/Atention/GridAtention';
import Box from '@mui/material/Box';
import './TableAtentionPageAuditor.scss';

export const TableAtentionPageAuditor = ({State}) => {
    const [pageSize, setPageSize] = useState(10)
  
const { customText,columnsAuditor} = GridAtention();


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

            <Box className='caja'
          sx={{
           
            '& .super-app-theme--header': {
              backgroundColor: '#90CAF980',
                fontSize: '16px',
                fontWeight: 900
            },
          }}
            >
            
                <DataGrid
                    className='Box-data'
                    getRowId={(State) => State.pacienteId}

                    rows={State}
                    columns={columnsAuditor}
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
