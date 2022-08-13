import  './AtentionPageAdministrador.scss';
import { TableAtentionPageAdministrador } from './TableAtentionPageAdministrador';
import { useAtention } from '../../../Hooks/useAtention'
export const AtentionPageAdministrador = () => {

  const { State } = useAtention();
  

  



  
  return (
    <>  
    <div className='atentions'>

    <TableAtentionPageAdministrador State={State} />

    </div>
    
    
    </>
  )
}