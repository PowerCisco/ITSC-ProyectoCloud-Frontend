import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import IconButton from '@material-ui/core/IconButton';
import { IoMdLogOut } from "react-icons/io";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { AccountPicker } from "../AccountPicker";
import './SignOutButton.scss';

export const SignOutButton = () => {
    const { instance } = useMsal();
    const [accountSelectorOpen, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleLogout = () => {
        setAnchorEl(null);
            instance.logoutRedirect();
      
    }

    const handleAccountSelection = () => {
        setAnchorEl(null);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="icons">
            <IconButton
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color="inherit"
                className="iconWrapper"
            >
                <IoMdLogOut className="icon"/>
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
                <MenuItem onClick={() => handleLogout()} key="logoutRedirect">Cerrar sesion</MenuItem>
            </Menu>
           <AccountPicker open={accountSelectorOpen} onClose={handleClose} />
        </div>
    )
};