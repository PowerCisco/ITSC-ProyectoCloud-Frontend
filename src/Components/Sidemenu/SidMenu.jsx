
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline, BsEye, TbReportMedical } from 'react-icons/all'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './SidMenuStyle.scss';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';


export const SidMenu = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])
  const fontStyles = {
    fontSize: "1.1em", fontFamily: "sans-serif",
    fontSmooth: "always", letterSpacing: '.5px'
  }
  return (
    <>

      <ProSidebar className="sidebar">
        <Menu iconShape="square">
          <MenuItem  ><p className='sidebar-Title'>Registro de casos</p>
          </MenuItem>
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



        </Menu>
      </ProSidebar>

    </>
  )
}
