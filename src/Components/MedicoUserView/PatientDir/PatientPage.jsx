import { Modal } from '@material-ui/core'
import { usePatient } from '../../../Hooks/usePatient'
import { TablePatinent } from './TablePatient';
import { IoIosAddCircleOutline } from "react-icons/io";
import './PatientPageStyle.scss';
import { BodyPatient } from '../../Modal/ModalBody/Patient/BodyPatient';
import { SucessSnackbars,InfoSnackbars } from '../../Snackbar/SnackBar';





export const PatientPage = () => {

  const { State, PostPatient,  PutPatient, handleChange,  Paciente,  openCloseCreateModal,  CreateState,  openCloseEditModal,
    EditOrDeleteSelector,
    EditState,Open,
    setOpen, AlertEdit,
    setAlertEdit
  } = usePatient();
  const { bodyEditar,  bodyInsertar} = BodyPatient ( PostPatient, PutPatient, handleChange, Paciente,openCloseCreateModal,openCloseEditModal)




  return (
    <>

      <div className='App content'>
        <br />

        <br /> <br />

        <TablePatinent State={State} EditOrDeleteSelector={EditOrDeleteSelector} />


          <IoIosAddCircleOutline className="insertar" onClick={() => openCloseCreateModal()} />
          
          <SucessSnackbars setOpen={setOpen}Open={Open}/>
          <InfoSnackbars AlertEdit={AlertEdit} setAlertEdit={setAlertEdit}/>

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



      </div>



    </>
  )
}
