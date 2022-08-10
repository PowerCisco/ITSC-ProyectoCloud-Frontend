import { Modal } from '@material-ui/core'
import { usePatient } from '../../../Hooks/usePatient'
import { TablePatinent } from './TablePatient';
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BodyPatient } from '../../Modal/ModalBody/Patient/BodyPatient';
import { SucessSnackbars,InfoSnackbars } from '../../Snackbar/SnackBar';
import { loginRequest } from '../../../Auth/authConfig';
import { InteractionStatus, InteractionType, InteractionRequiredAuthError } from "@azure/msal-browser";
import { callMsGraph } from '../../../Auth/MsGraphApiCall';
import {ErrorComponent} from '../../Login/ErrorComponent';
import { LoadingPage } from '../../Login/Loading';
import { useState, useEffect } from 'react';
import './PatientPageStyle.scss';

const ProfileContent = () => {
  const { State, PostPatient,  PutPatient, handleChange,  Paciente,  openCloseCreateModal,  CreateState,  openCloseEditModal,
    EditOrDeleteSelector,
    EditState,Open,
    setOpen, AlertEdit,
    setAlertEdit
  } = usePatient();
  const { bodyEditar,  bodyInsertar} = BodyPatient ( PostPatient, PutPatient, handleChange, Paciente,openCloseCreateModal,openCloseEditModal)


  const { instance, inProgress } = useMsal();
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        if (!graphData && inProgress === InteractionStatus.None) {
            callMsGraph().then(response => setGraphData(response)).catch((e) => {
                console.log(response.role[0])
                if (e instanceof InteractionRequiredAuthError) {
                    instance.acquireTokenRedirect({
                        ...loginRequest,
                        account: instance.getActiveAccount()
                    });
                }
            });
        }
    }, [inProgress, graphData, instance]);
  

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
  )}
  
export const PatientPage = () => {
  const authRequest = {
    ...loginRequest
};

return (
    <MsalAuthenticationTemplate 
        interactionType={InteractionType.Popup} 
        authenticationRequest={authRequest} 
        errorComponent={ErrorComponent} 
        loadingComponent={LoadingPage}
    >
        <ProfileContent />
    </MsalAuthenticationTemplate>
  )
}
