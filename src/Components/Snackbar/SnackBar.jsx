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
export function SnackUserAdd({ Open, setOpen }) {

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
                    Se ha agregado un nuevo usuario!
                </Alert>
            </Snackbar>
        </>
    )

};
export function SucessSnackbarsAtention({ Open, setOpen }) {

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
                    Se ha agregado una nueva atencion!
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

export function InfoSnackbarsEdit({ AlertEdit,setAlertEdit }) {

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
                    Se ha modificado una atencion!
                </Alert>
            </Snackbar>
        </>
    )

};
export function InfoSnackbarsAdmin({ AlertEdit,setAlertEdit }) {

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
                    Se ha modificado un usuario!
                </Alert>
            </Snackbar>
        </>
    )

};
export function DeleteSnackbars({ DeleteSnack,setDeleteSnack }) {

    const handleClose = (reason) => {
        if (reason === 'clickaway') return;

        setDeleteSnack(false);
    }
    return (
        <>
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }} open={DeleteSnack} sx={{ left: '300%' }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={"warning"} sx={{ width: '100%' }}>
                    Se ha eliminado un usuario!
                </Alert>
            </Snackbar>
        </>
    )

};

