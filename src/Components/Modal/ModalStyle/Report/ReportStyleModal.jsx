import { makeStyles } from '@material-ui/core/styles'

const StylesReports = makeStyles((theme) => ({

  modal: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',

    width: 250,
    height: 420,
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

  
  autocomplete:{
    width: '90%'
  },
  buttonColumn:{
    display:'flex',
    flexDirection:'row',
    position:'absolute',
    top:'90%',
    left:'30%'
    
  },
  firstColumn:{
      position:'flex',
      justifyContent:'space-between'
  },
  button:{
    position:'absolute',
    left:'20%',
    top:'75%'
  },
  inputFechaInicio:{
    marginTop:'20px',
    position:'absolute',
    left:'20%',
  },
  inputFechaFin:{
    position:'absolute',
    left:'20%',
    top:'30%'
  },
  radiogroup__paciente:{
    position:'absolute',
    left:'20%',
    top:'40%'
  }

}));
  
export const ReportStyleModal = () => {
    const styles = StylesReports();


  return{
    styles
  }
}
