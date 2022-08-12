import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

  modal: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',

    width: 650,
    height: 450,
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

    width: '30%',

  },
  title:{
    height:'15%'
  },
  firstColumn:{
    display:'flex',
    flexDirection:'row',
    height:'24%',
    justifyContent:'space-around'

  },
  secondColumn:{
    height:'24%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  thirdColumn:{
    height:'24%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  buttonColumn:{
    position:'relative',
    height:'10%'
  },
  button:{
    position:'absolute',
    left:'70%',
    top:'80%'
  }
}));
  
export const ModalBodyPacientes = () => {
    const styles = useStyles();


  return{
    styles
  }
}
