import { useState } from 'react';
import { DataGrid,  GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton} from '@mui/x-data-grid';
import {GridAtention} from  '../../Modal/ModalBody/Atention/GridAtention';
import Box from '@mui/material/Box';
import './TableAtention.scss';


export const TableAtention = ({ State,AddOrEditSelector }) => {
    const [pageSize, setPageSize] = useState(10)
  
const { customText, columns} = GridAtention(AddOrEditSelector);


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

            <Box className='Boxs'
          sx={{
           
            '& .super-app-theme--header': {
              backgroundColor: '#90CAF980',
                fontSize: '16px',
                fontWeight: 900
            },
          }}
            >
            
                <DataGrid
                    className='Box-DataGrids'
                    getRowId={(State) => State.pacienteId}

                    rows={State}
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
