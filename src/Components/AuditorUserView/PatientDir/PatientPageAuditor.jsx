import { usePatient } from '../../../Hooks/usePatient'
import { TablePatinentAuditor } from './TablePatinentAuditor'



import './PatientPageAuditor.scss'



export const PatientPageAuditor = () => {


  const { State,


  
  } = usePatient();





  return (
    <>

      <div className='Apps contents'>
        <br />
        <br /> 
        <br />

         <TablePatinentAuditor State={State}  />


   

      </div>



    </>
  )
}
