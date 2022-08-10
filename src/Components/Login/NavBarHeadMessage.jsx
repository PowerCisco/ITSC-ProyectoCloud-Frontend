import { useEffect, useState } from "react";
import { MenuItem } from "react-pro-sidebar";
import { useMsal } from "@azure/msal-react";
import { AuthenticatedTemplate } from "@azure/msal-react";

const NavBarHeadMessage = () => {
    const { instance } = useMsal();
    const [name, setName] = useState(null);

    const activeAccount = instance.getActiveAccount();
    useEffect(() => {
        if (activeAccount) {
            setName(activeAccount.name.split(' ')[0]);
        } else {
            setName(null);
        }
    }, [activeAccount]);

    if (name) {
        return <><MenuItem ><p className='sidebar-Title'>Centro de Riesgos</p>


        </MenuItem>;
            <AuthenticatedTemplate>
                <center><p>Bienvenido <b>{name}</b></p></center>
            </AuthenticatedTemplate>
        </>
    } else {
        return null;
    }
};

export default NavBarHeadMessage;