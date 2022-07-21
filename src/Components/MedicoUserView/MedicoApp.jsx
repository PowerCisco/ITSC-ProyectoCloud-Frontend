
import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "../Login/LoginPage"
import { AtentionPage } from "../AdminUserView/AtentionDir/AtentionPage"
import { PatientPage } from "./PatientDir/PatientPage"
import { ReportPage } from "./ReportDir/ReportPage"


import { NotFound } from "../Not Found Page/NotFound"
import { SidMenu } from "../Sidemenu/SidMenu"


export const MainApp = () => {


    return (
        <>
            <SidMenu />

            <Routes>
                <Route path='/' element={<LoginPage />} />

                {/* Rutas del medico */}
                <Route path='/medico/mantenimiento_paciente' element={<PatientPage />} />
                <Route path='/medico/reporte' element={<ReportPage />} />
                <Route path='/medico/atenciones' element={<AtentionPage />} />

        


                <Route path='/error' element={<NotFound />} />
                <Route path='/*' element={<Navigate to="error" />} />

            </Routes>
        </>
    )
}