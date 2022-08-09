import { useEffect } from 'react';
import { Modal } from '@material-ui/core'
import { useAtention } from '../../../Hooks/useAtention'
import { BodyAtention } from '../../Modal/ModalBody/Atention/BodyAtention';
import { ViewAtentionPage } from './ViewAtentionPage';
import './AtentionPage.scss';



export const AtentionPage = () => {
  const { CreateState, openCloseCreateModal, Paciente, handleChange, AddOrEditSelector, getDateTime, DateTime, getAtention } = useAtention();
  const { bodyEdit } = BodyAtention(Paciente, handleChange, DateTime,getAtention, putAtention, openCloseEditModal);
  useEffect(() => {
    getDateTime();


  }, [])

  return (
    <>

      <div className='App content-edit'>
        <br />

        <br /> <br />

        <ViewAtentionPage AddOrEditSelector = {AddOrEditSelector} getAtention={getAtention}/>



        <Modal open={CreateState}
          onClose={openCloseCreateModal}
        >
          {bodyEdit}
        </Modal>



      </div>



    </>
  )
}
