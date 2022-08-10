import { useEffect } from 'react';
import { Modal } from '@material-ui/core'
import { useAtention } from '../../../Hooks/useAtention'
import { BodyAtention } from '../../Modal/ModalBody/Atention/BodyAtention';
import { ViewAtentionPage } from './ViewAtentionPage';
import './EditAtentionPage.scss';



export const EditAtentionPage = () => {
  const {  openCloseEditModal, Paciente, handleChange, AddOrEditSelector, getDateTime, DateTime, getAtention,EditState,PutAtention} = useAtention();
  const { bodyEdit } = BodyAtention(Paciente, handleChange, DateTime,getAtention, PutAtention, openCloseEditModal);
  useEffect(() => {
    getDateTime();


  }, [])

  return (
    <>

      <div className='Apps content-edit'>
        <br />

        <br /> <br />

        <ViewAtentionPage AddOrEditSelector = {AddOrEditSelector} getAtention={getAtention}/>



        <Modal open={EditState}
          onClose={openCloseEditModal}
        >
          {bodyEdit}
        </Modal>



      </div>



    </>
  )
}
