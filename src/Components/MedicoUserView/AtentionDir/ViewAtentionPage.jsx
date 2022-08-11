
import { DataGrid,  GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton} from '@mui/x-data-grid';
import { ViewBodyAtention } from '../../Modal/ModalBody/Atention/ViewBodyAtention';
import { useState } from 'react';
import './ViewAtentionPage.scss';
import { Box } from '@mui/material';


export const ViewAtentionPage = ({getAtention,AddOrEditSelector}) => {
    const [pageSize, setPageSize] = useState(10)
    const {customText,  columns} = ViewBodyAtention(AddOrEditSelector);
    
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
        
 
         <br/>
            <br/>
            <br/>
            <Box className='Box_view'
          sx={{
           
            '& .super-app-theme--header': {
              backgroundColor: '#90CAF980',
                fontSize: '16px',
                fontWeight: 900
            },
          }}
            >
          
                <DataGrid
                    className='Box-DataGrid_view'
                    getRowId={(getAtention) => getAtention.atencionId}

                    rows={getAtention}
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
