import './TableConfigUserPage.scss';
import { DataGrid,GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
     } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { GridUser } from '../../Modal/ModalBody/config/GridUser';






export const TableConfigUserPage = ({ Data , EditOrDeleteSelector }) => {
    const [pageSize, setPageSize] = useState(10);
    const { customText,columns} = GridUser(EditOrDeleteSelector);
    

    


    
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

            <Box className='Boxs'
          sx={{
           
            '& .super-app-theme--header': {
              backgroundColor: '#90CAF980',
              fontFamily: "sans-serif",
                fontSize: '16px',
                fontWeight: 'bold',
              
            },
          }}
            >
            
                <DataGrid
                    className='Box-DataGrids'
                    getRowId={(Data) => Data.medicoId}

                    rows={Data}
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
