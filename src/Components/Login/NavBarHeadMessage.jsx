import { MenuItem } from "react-pro-sidebar";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { useGetRoleUser } from "../../Hooks/useGetRoleUser";

const NavBarHeadMessage = () => {
        const {rol,users} = useGetRoleUser();

    if (rol) {
        return <><MenuItem ><p className='sidebar-Title'>Centro de Riesgos</p>


        </MenuItem>;
            <AuthenticatedTemplate>
                <center><p>Bienvenido <b>{rol}</b> {users} </p></center>
            </AuthenticatedTemplate>
        </>
    } else {
        return null;
    }
};

export default NavBarHeadMessage;