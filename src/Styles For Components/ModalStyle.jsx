import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modalEliminar: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%'
  },
  modal: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    height: 750,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #90CAF9',
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0%'
  },
  iconos: {
    cursor: 'pointer'
  },
  inputMaterial: {
    marginTop:'3px',
    marginLeft:'10px',
    width: '10%',
    borderRadius: '2%'
  }
}));
  
export const ModalBodyPacientes = () => {
    const styles = useStyles();


  return{
    styles
  }
}
