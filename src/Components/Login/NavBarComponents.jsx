import React from 'react';
import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { IoIosAddCircleOutline, BsEye, TbReportMedical } from 'react-icons/all';


const fontStyles = {
  fontSize: "1.1em", fontFamily: "sans-serif",
  fontSmooth: "always", letterSpacing: '.5px'
}

export const NavBarComponents = () => {
  const { instance } = useMsal();
  const [name, setName] = useState(null);
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])
  const activeAccount = instance.getActiveAccount();
  useEffect(() => {
    if (activeAccount) {
      setName(activeAccount.name.split(' ')[0]);
    } else {
      setName(null);
    }
  }, [activeAccount]);

  if (name) {
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
        <MenuItem style={fontStyles}>Reporte<Link to='/reporte' /></MenuItem>
      </>
    )
  } else {
    return null
  }
}
