
import { Link } from 'react-router-dom';
import {IoIosAddCircleOutline, BsEye, TbReportMedical} from 'react-icons/all'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './SidMenuStyle.scss';
import { IconContext } from 'react-icons';


export const SidMenu = () => {
  return (
    <>

      <ProSidebar className="sidebar">
        <Menu iconShape="square">
          <MenuItem  ><p className='sidebar-Title'>Registro de casos</p></MenuItem>
            <hr/>
            <SubMenu title="Pacientes">
            <IconContext.Provider value={{ color: "grey", size: "1.5em" }}  >
            <MenuItem icon={<IoIosAddCircleOutline/>}>Agregar Paciente<Link to='/medico/mantenimiento_paciente' /></MenuItem>
            </IconContext.Provider>
            </SubMenu>

            <SubMenu title="Atenciones">
            <MenuItem icon={<BsEye/>}>Ver Atenciones <Link to='/medico/atenciones_view' /></MenuItem>
            <MenuItem icon={<TbReportMedical/>}>Agregar Atenciones <Link to='/medico/atenciones' /></MenuItem>


            </SubMenu>
            <MenuItem>Reporte<Link to='/reporte' /></MenuItem>
        

          
        </Menu>
      </ProSidebar>

    </>
  )
}
