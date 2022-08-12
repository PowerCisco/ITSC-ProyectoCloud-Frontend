import React from 'react';
import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { IoIosAddCircleOutline, BsEye, TbReportMedical,HiOutlineDocumentReport } from 'react-icons/all';


const fontStyles = {
  fontSize: "1.1em", fontFamily: "sans-serif",
  fontSmooth: "always", letterSpacing: '.5px'
}

export const NavBarComponents = () => {
  const [rol, setrol] = useState(null);
  const [users, setUsers] = useState(null);
  const {instance} =useMsal();
  const activeAccount = instance.getActiveAccount();


  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])


  useEffect(() => {
    if (activeAccount) {
        const nameAcc = activeAccount.username.split(0, 10)[0];
        const user = activeAccount.name.split(0,10)[0];
        const admin = nameAcc.match("administrador");
        const auditor = nameAcc.match("administrativo");
        const medico = nameAcc.match("medico");
       
       
        if (admin != undefined) {
            setrol(admin)
           
        }else if( auditor != undefined){
            setrol(auditor)
        }else if (medico != undefined){
            setrol(medico);
        }
        setUsers(user)
    } else {
        setrol(null);
    }
}, []);

  if (rol == "medico") {
    return (
      <>

        <p className='clock'>
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
          })}
        </p>
        <hr />
        <SubMenu style={fontStyles} title="Pacientes">
          <IconContext.Provider value={{ size: "1.5em" }}  >
            <MenuItem icon={<IoIosAddCircleOutline />} >Agregar Paciente<Link to='/medico/mantenimiento_paciente' /></MenuItem>
          </IconContext.Provider>
        </SubMenu>

        <SubMenu style={fontStyles} title="Atenciones">
          <MenuItem icon={<BsEye />}>Ver/Editar Atenciones <Link to='/medico/atenciones_edit' /></MenuItem>
          <MenuItem icon={<TbReportMedical />}>Agregar Atenciones <Link to='/medico/atenciones' /></MenuItem>


        </SubMenu>
        <MenuItem style={fontStyles}>Reporte<Link to='/medico/reporte' /></MenuItem>
      </>
    )
  } else if(rol=="administrativo"){
     return (
      <>
            <SubMenu style={fontStyles} title="Pacientes">
          <IconContext.Provider value={{ size: "1.5em" }}  >
            <MenuItem icon={<IoIosAddCircleOutline />} >Ver  Paciente<Link to='/auditor/mantenimiento_sololectura' /></MenuItem>
          </IconContext.Provider>
        </SubMenu>

        <SubMenu style={fontStyles} title="Atenciones">
          <MenuItem icon={<BsEye />}>Ver Atenciones<Link to='/auditor/atenciones_sololectura' /></MenuItem>
     


        </SubMenu>
        <SubMenu style={fontStyles} title="Reporte">

        <MenuItem icon={<HiOutlineDocumentReport/>}>Generar Reporte<Link to='/auditor/reporte_sololectura' /></MenuItem>
        </SubMenu>
       
      </>
     )
  }
}
