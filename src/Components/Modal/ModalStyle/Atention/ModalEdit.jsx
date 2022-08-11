import { makeStyles } from '@material-ui/core/styles'

const styleEdit = makeStyles((theme) => ({

  modal: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
flexWrap:'wrap',
    width: 700,
    height: 400,
    backgroundColor:  theme.palette.background.paper,
    border: '2px solid #90CAF9',
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 2, 2),
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
    fontFamily:'sans-serif'
  },

  cajaDiagnostico: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '35%',
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

  },
  input_Atencion:{
    position:'relative',
    top:-40
  },
  input_Diagnostico:{
        position:'absolute',
        top:'25%',
        left:'0%'
  },
  input_fecha:{ 
    position:'absolute',
    top:'25%',
    left:'65%'
  },
  texarea:{
        position:'absolute',
       
  },
  modal__textarea_tratamiento:{
    maxWidth: 290, maxHeight: 100, minHeight:100, outline: 'none', padding: '2px',
    width:290,
    position: 'absolute',
    top:'95%',
    left:'55%'

  },
  modal__textarea_medicamentos:{

    maxWidth: 290, maxHeight: 100, minHeight:100, outline: 'none', padding: '2px',
    width:290,
    position: 'absolute',
    top:'95%',
    left:'0%'
  },
  titles:{
    fontFamily:'sans-serif'
  },
  button:{
    position:'relative',
    top:'17%',
    left:'75%'
  }
}));

export const ModalBodyEditAtention= () => {
  const stylesForEdit = styleEdit();


  return {
    stylesForEdit
  }
}
