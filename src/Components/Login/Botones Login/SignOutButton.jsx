import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import IconButton from '@material-ui/core/IconButton';
import { MdOutlineAccountCircle } from "react-icons/md";

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { AccountPicker } from "../AccountPicker";

export const SignOutButton = () => {
    const { instance } = useMsal();
    const [accountSelectorOpen, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleLogout = (logoutType) => {
        setAnchorEl(null);

        if (logoutType === "popup") {
            instance.logoutPopup();
        } else if (logoutType === "redirect") {
            instance.logoutRedirect();
        }
    }

    const handleAccountSelection = () => {
        setAnchorEl(null);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color="inherit"
            >
                <MdOutlineAccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => handleAccountSelection()} key="switchAccount">Cambiar Cuenta</MenuItem>
                <MenuItem onClick={() => handleLogout("popup")} key="logoutPopup">Salir por ventana</MenuItem>
                <MenuItem onClick={() => handleLogout("redirect")} key="logoutRedirect">Salir de redireccion</MenuItem>
            </Menu>
           <AccountPicker open={accountSelectorOpen} onClose={handleClose} />
        </div>
    )
};