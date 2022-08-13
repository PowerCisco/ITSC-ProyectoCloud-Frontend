
import { usePatient } from '../../../Hooks/usePatient'
import { TablePatinentAdministrador } from './TablePatinentAdministrador';

import './PatientPageAdministrador.scss'



export const PatientPageAdministrador = () => {

  const { State  } = usePatient();

  
  


  return (
    <>

      <div className='apps contenido'>
        <br />



        <TablePatinentAdministrador State={State}  />


        


      </div>



    </>
  )
}
