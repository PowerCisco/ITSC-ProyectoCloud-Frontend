
import { Route, Routes, Navigate } from "react-router-dom"
import { PatientPageAuditor } from "./PatientDir/PatientPageAuditor"
import { ReportPageAuditor } from "./ReportDir/ReportPageAuditor"
import { AtentionPageAuditor } from "./AtentionDir/AtentionPageAuditor"


import { NotFound } from "../Not Found Page/NotFound"


export const AuditorApp = () => {


    return (
        <>
       
            <Routes>
           
           
                <Route path='/auditor/mantenimiento_sololectura' element={<PatientPageAuditor />} />
                <Route path='/auditor/reporte_sololectura' element={<ReportPageAuditor />} />
                <Route path='/auditor/atenciones_sololectura' element={<AtentionPageAuditor />} />
    

                <Route path='/*' element={<Navigate to="/auditor/mantenimiento_sololectura" />} />

            </Routes>
        </>
    )
}
