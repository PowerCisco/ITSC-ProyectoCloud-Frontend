import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

export function SucessSnackbars({ Open, setOpen }) {

    const handleClose = (reason) => {
        if (reason === 'clickaway') return;

        setOpen(false);
    }
    return (
        <>
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }} open={Open} sx={{ left: '300%' }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={"success"} sx={{ width: '100%' }}>
                    Se ha agregado un nuevo paciente!
                </Alert>
            </Snackbar>
        </>
    )

};
export function InfoSnackbars({ AlertEdit,setAlertEdit }) {

    const handleClose = (reason) => {
        if (reason === 'clickaway') return;

        setAlertEdit(false);
    }
    return (
        <>
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }} open={AlertEdit} sx={{ left: '300%' }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={"info"} sx={{ width: '100%' }}>
                    Se ha modificado un paciente!
                </Alert>
            </Snackbar>
        </>
    )

};


