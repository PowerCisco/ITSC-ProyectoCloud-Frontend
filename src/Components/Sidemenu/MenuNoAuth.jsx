
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { SignInButton } from '../Login/Botones Login/SignInButton';
import './SidMenuStyle.scss';


export const MenuNoAuth = () => {

  return (
    <>

      <ProSidebar className="sidebar">
        <Menu iconShape="square">
          <MenuItem  ><p className='sidebar-Title'>Ingrese al Sistema</p>
          </MenuItem>
          <SignInButton/>


        </Menu>
      </ProSidebar>

    </>
  )
}
