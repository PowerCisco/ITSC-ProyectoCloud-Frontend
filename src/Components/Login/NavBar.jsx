
import { ProSidebar, Menu } from 'react-pro-sidebar';
import { NavBarComponents } from './NavBarComponents';
import 'react-pro-sidebar/dist/css/styles.css';
import NavBarHeadMessage from './NavBarHeadMessage';
import '../Sidemenu/SidMenuStyle.scss';


export const NavBar = () => {



  return (
    <>

      <ProSidebar className="sidebar">
        <Menu iconShape="square">

          <NavBarHeadMessage />

          <hr />

          <NavBarComponents />

        </Menu>
      </ProSidebar>

    </>
  )
}
