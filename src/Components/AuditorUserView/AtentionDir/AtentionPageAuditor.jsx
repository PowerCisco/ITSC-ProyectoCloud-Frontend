import  './AtentionPageAuditor.scss';
import { TableAtentionPageAuditor } from './TableAtentionPageAuditor';
import { useAtention } from '../../../Hooks/useAtention'
export const AtentionPageAuditor = () => {

  const { State } = useAtention();
  

  



  
  return (
    <>  
    <div className='atentions'>

    <TableAtentionPageAuditor State={State} />

    </div>
    
    
    </>
  )
}
