


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
                {/* TODO:HomePage */}
                {/* <Route path='/' element={} /> */}
                {/* Rutas del auditor */}
                {/* Rutas del administrador */}
                <Route path='/admin/mantenimiento_paciente' element={<PatientPage />} />
                <Route path='/admin/reporte' element={<ReportPage />} />
                <Route path='/admin/atenciones' element={<AtentionPage />} />
                <Route path='/admin/config' element={<AtentionPage />} />

                {/* Rutas del auditor */}


                <Route path='/error' element={<NotFound />} />
                <Route path='/*' element={<Navigate to="error" />} />

            </Routes>
        </>
    )
}

