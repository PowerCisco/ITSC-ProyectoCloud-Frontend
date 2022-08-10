
import { ProSidebar, Menu } from 'react-pro-sidebar';
import { NavBarComponents } from './NavBarComponents';
import { AuthenticatedTemplate } from "@azure/msal-react";
import NavBarHeadMessage from './NavBarHeadMessage';
import './NavBar.scss'


export const NavBar = () => {



  return (
    <>
   <AuthenticatedTemplate>
      <ProSidebar className="sidebar">
        <Menu iconShape="square">

          <NavBarHeadMessage />
          <hr />
       



            <NavBarComponents />

  


        </Menu>
      </ProSidebar>
      </AuthenticatedTemplate>
    </>
  )
}
