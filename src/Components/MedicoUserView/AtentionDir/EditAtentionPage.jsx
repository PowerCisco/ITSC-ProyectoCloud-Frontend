import { useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { useAtention } from '../../../Hooks/useAtention';
import { BodyEdit } from '../../Modal/ModalBody/Atention/BodyEdit';
import { ViewAtentionPage } from './ViewAtentionPage';
import { InfoSnackbarsEdit } from '../../Snackbar/SnackBar';
import './EditAtentionPage.scss';



export const EditAtentionPage = () => {
  const {  openCloseEditModal, Paciente, handleChange, AddOrEditSelector, getDateTime, getAtention,EditState,PutAtention,AlertEdit,
    setAlertEdit} = useAtention();
  const { EditarBody } = BodyEdit(Paciente, handleChange, PutAtention, openCloseEditModal);
  useEffect(() => {
    getDateTime();
   

  }, [])
  

  return (
    <>

      <div className='Apps content-edit'>
        <br />

        <br /> <br />
        <ViewAtentionPage AddOrEditSelector = {AddOrEditSelector} getAtention={getAtention}/>
        <InfoSnackbarsEdit AlertEdit={AlertEdit} setAlertEdit ={setAlertEdit}/>

        <Modal open={EditState}
          onClose={openCloseEditModal}
        >
          {EditarBody}
        </Modal>



      </div>



    </>
  )
}
