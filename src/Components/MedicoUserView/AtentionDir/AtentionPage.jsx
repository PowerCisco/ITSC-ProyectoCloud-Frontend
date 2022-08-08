import { useEffect } from 'react';
import { Modal } from '@material-ui/core'
import { useAtention } from '../../../Hooks/useAtention'
import { BodyAtention } from '../../Modal/ModalBody/Atention/BodyAtention';
import { TableAtention } from './TableAtention';
import './AtentionPage.scss';



export const AtentionPage = () => {
 
  const {State,CreateState,openCloseCreateModal,Paciente,handleChange,AddOrEditSelector, postAtention,getDateTime,DateTime} = useAtention();
  const { bodyAgregar} = BodyAtention(Paciente,handleChange,openCloseCreateModal, postAtention, DateTime);

  useEffect(() => {
    getDateTime();


  }, [])


  return (
    <>

      <div className='App content'>
        <br />

        <br /> <br />

        <TableAtention State={State} AddOrEditSelector={AddOrEditSelector}/>

        <Modal open={CreateState}
          onClose={openCloseCreateModal}
        >
          {bodyAgregar}
        </Modal>



      </div>



    </>
  )
}
