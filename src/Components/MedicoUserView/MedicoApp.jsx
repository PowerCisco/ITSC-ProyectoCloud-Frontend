
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AtentionPage } from "./AtentionDir/AtentionPage"
import { PatientPage } from "./PatientDir/PatientPage"
import { ReportPage } from "./ReportDir/ReportPage"
import { NotFound } from "../Not Found Page/NotFound"
import { CustomNavigationClient } from "../../Auth/NavigationClient";
import { MsalProvider } from "@azure/msal-react";
import { PageLayout } from "../Login/PageLayout";
import { EditAtentionPage } from "./AtentionDir/EditAtentionPage";
import { Home } from "../Principal Page/Home"


export const MedicoApp = ({ pca }) => {

    const history = useNavigate();
    const navigationClient = new CustomNavigationClient(history);
    pca.setNavigationClient(navigationClient);

    return (
        <MsalProvider instance={pca}>
            <PageLayout>
              
                    <Pages />
            
            </PageLayout>
        </MsalProvider>
    );
}




function Pages() {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/medico/mantenimiento_paciente' element={<PatientPage />} />
            <Route path='/medico/reporte' element={<ReportPage />} />
            <Route path='/medico/atenciones' element={<AtentionPage />} />
            <Route path='/medico/atenciones_edit' element={<EditAtentionPage />} />



            <Route path='/error' element={<NotFound />} />
            <Route path='/*' element={<Navigate to="error" />} />

        </Routes>
    )
}


