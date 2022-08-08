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
    width: 500,
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
    marginBottom: '0px',
  },

  cajaDiagnostico: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '35%',
    marginBottom: '30px',
    width: '100%',

  },
  cajaPaciente: {
    position: 'relative',
    top: '50px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '35%',
    width: '105%',
    marginBottom: '30px',

  },
  modal__textarea_diagnostico:{
    maxWidth: 150, maxHeight: 100, minHeight:100, outline: 'none', padding: '2px',


  },
  modal__textarea_medicamentos:{

    maxWidth: 150, maxHeight: 100, minHeight:100, outline: 'none', padding: '2px',
    marginLeft: "130px"

  }
}));

export const ModalBodyAtention= () => {
  const styles = useStyles();


  return {
    styles
  }
}
