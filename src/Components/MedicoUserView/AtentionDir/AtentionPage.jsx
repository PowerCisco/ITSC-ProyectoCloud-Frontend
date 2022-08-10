import { useEffect,useState } from 'react';
import { Modal } from '@material-ui/core'
import { useAtention } from '../../../Hooks/useAtention'
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionType, InteractionRequiredAuthError } from "@azure/msal-browser";
import { BodyAtention } from '../../Modal/ModalBody/Atention/BodyAtention';
import { TableAtention } from './TableAtention';
import { loginRequest } from '../../../Auth/authConfig';
import { callMsGraph } from '../../../Auth/MsGraphApiCall';
import {ErrorComponent} from '../../Login/ErrorComponent';
import { LoadingPage } from '../../Login/Loading';

import './AtentionPage.scss';




export const ProfileContent = () => {
 
  const {State,CreateState,openCloseCreateModal,Paciente,handleChange,AddOrEditSelector, postAtention,getDateTime,DateTime} = useAtention();
  const { bodyAgregar} = BodyAtention(Paciente,handleChange,openCloseCreateModal, postAtention, DateTime);
  const { instance, inProgress } = useMsal();
    const [graphData, setGraphData] = useState(null);
  useEffect(() => {
    getDateTime();


  }, [])




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
export const AtentionPage = ()=>{
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