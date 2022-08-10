import { useEffect, useState } from "react";
import { MenuItem } from "react-pro-sidebar";
import { useMsal } from "@azure/msal-react";
import SignInSignOutButton from "./Botones Login/SignInSignOutButton";

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
        return <MenuItem ><p className='sidebar-Title'>Registro de casos</p>
        <SignInSignOutButton/>
        <center><p>Bienvenido {name}</p></center>
        </MenuItem>;
    } else {
        return null;
    }
};

export default NavBarHeadMessage;