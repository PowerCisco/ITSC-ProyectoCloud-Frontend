
import { Link, NavLink } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa'
import {IoIosAddCircleOutline, BsEye} from 'react-icons/all'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './SidMenuStyle.scss';


export const SidMenu = () => {
  return (
    <>

      <ProSidebar className="sidebar">
        <Menu iconShape="square">
          <MenuItem  ><p className='sidebar-Title'>ISP</p></MenuItem>
            <hr/>
            <SubMenu title="Pacientes">
            <MenuItem icon={<BsEye/>}>Ver Pacientes<Link to='/mantenimiento_paciente' /></MenuItem>
            <MenuItem icon={<IoIosAddCircleOutline/>}>Agregar<Link to='/mantenimiento_paciente' /></MenuItem>
            </SubMenu>
            <MenuItem icon={<FaBeer/>}>Reporte <Link to='/reporte' /></MenuItem>
            <MenuItem>Atenciones<Link to='/atenciones' /></MenuItem>


          
        </Menu>
      </ProSidebar>

    </>
  )
}
