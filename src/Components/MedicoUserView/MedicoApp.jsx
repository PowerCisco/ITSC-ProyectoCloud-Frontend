
import { Routes, Route, Navigate } from "react-router-dom";
import { AtentionPage } from "./AtentionDir/AtentionPage"
import { PatientPage } from "./PatientDir/PatientPage"
import { ReportPage } from "./ReportDir/ReportPage"
import { NotFound } from "../Not Found Page/NotFound"

import { EditAtentionPage } from "./AtentionDir/EditAtentionPage";



export function MedicoApp() {

    return (
        <Routes>
            <Route path='/' />

            <Route path='/medico/mantenimiento_paciente' element={<PatientPage />} />
            <Route path='/medico/reporte' element={<ReportPage />} />
            <Route path='/medico/atenciones' element={<AtentionPage />} />
            <Route path='/medico/atenciones_edit' element={<EditAtentionPage />} />



            <Route path='/error' element={<NotFound />} />
            <Route path='/*' element={<Navigate to="/medico/mantenimiento_paciente" />} />

        </Routes>
    )
}


