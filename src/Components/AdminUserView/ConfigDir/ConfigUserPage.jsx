import React from 'react'
import { useReguser } from '../../../Hooks/useRegUser'
import { BodyUser } from '../../Modal/ModalBody/config/BodyUser'
import { TableConfigUserPage } from './TableConfigUserPage';
import { Modal } from '@material-ui/core'
import { IoIosAddCircleOutline } from "react-icons/io";

import { SnackUserAdd,InfoSnackbarsAdmin, DeleteSnackbars } from '../../Snackbar/SnackBar';


import './ConfigUserPage.scss';

export const ConfigUserPage = () => {
  const{Data,
    putUser,
    deleteUser,
    postUser,
    handleChange,
    user,
    openCloseDeleteModal,
    Delete,

    openCloseCreateModal,
    CreateState,

    openCloseEditModal,
    EditState,
  

    EditOrDeleteSelector,



    AlertSnack,
    OpenSnack,
    DeleteSnack,

    setOpenSnack,
    setAlertSnack,
    setDeleteSnack} = useReguser()

const {  bodyEditar,
  bodyInsertar,
  bodyEliminar} = BodyUser( user,
    putUser,
    deleteUser,
    postUser,
    openCloseDeleteModal,
    handleChange, openCloseCreateModal, openCloseEditModal)



  
    



  return (
    <div className='App content'>
    <br />

    <br /> <br />

    <TableConfigUserPage Data={Data} EditOrDeleteSelector={EditOrDeleteSelector} />


      <IoIosAddCircleOutline className="insertar" onClick={() => openCloseCreateModal()} />
      
      <SnackUserAdd setOpen={setOpenSnack}Open={OpenSnack}/>
      <InfoSnackbarsAdmin setAlertEdit={setAlertSnack} AlertEdit={AlertSnack} />
      <DeleteSnackbars setDeleteSnack={setDeleteSnack} DeleteSnack={DeleteSnack}/>

    <Modal open={CreateState}
      onClose={openCloseCreateModal}
    >
      {bodyInsertar}
    </Modal>

    <Modal open={EditState}
      onClose={openCloseEditModal}
    >
      {bodyEditar}
    </Modal>

    <Modal open={Delete}
      onClose={openCloseDeleteModal}
    >
      {bodyEliminar}
    </Modal>



  </div>


  )
}