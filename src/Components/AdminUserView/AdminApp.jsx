


import { Route, Routes, Navigate } from "react-router-dom"

import { AtentionPageAdministrador } from "./AtentionDir/AtentionPageAdministrador"
import { PatientPageAdministrador } from "./PatientDir/PatientPageAdministrador"
import { ReportPageAdmin } from "./ReportDir/ReportPageAdmin"


import { NotFound } from "../Not Found Page/NotFound"
import { ConfigUserPage } from "./ConfigDir/ConfigUserPage"


export const AdminApp = () => {


    return (
        <>
          

            <Routes>
            
            
                <Route path='/admin/mantenimiento_paciente' element={<PatientPageAdministrador />} />
                <Route path='/admin/reporte' element={<ReportPageAdmin />} />
                <Route path='/admin/atenciones' element={<AtentionPageAdministrador />} />
                <Route path='/admin/config' element={<ConfigUserPage />} />



                <Route path='/error' element={<NotFound />} />
                <Route path='/*' element={<Navigate to="/admin/mantenimiento_paciente" />} />

            </Routes>
        </>
    )
}

