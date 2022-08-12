
import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "../Login/LoginPage"
import { AtentionPage } from "../AdminUserView/AtentionDir/AtentionPage"
import { PatientPage } from "./PatientDir/PatientPage"
import { ReportPage } from "./ReportDir/ReportPage"


import { NotFound } from "../Not Found Page/NotFound"
import { SidMenu } from "../Sidemenu/SidMenu"


export const AuditorApp = () => {


    return (
        <>
       
            <Routes>
           
           
                <Route path='/auditor/mantenimiento_paciente' element={<PatientPage />} />
                <Route path='/auditor/reporte' element={<ReportPage />} />
                <Route path='/auditor/atenciones' element={<AtentionPage />} />
            


                <Route path='/error' element={<NotFound />} />
                <Route path='/*' element={<Navigate to="error" />} />

            </Routes>
        </>
    )
}
