import React from 'react';
import { useMsal } from "@azure/msal-react";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoIosAddCircleOutline } from "react-icons/io";


import { loginRequest } from "../../Auth/authConfig";




export const AccountPicker = (props) => {
  const { instance, accounts } = useMsal();
  const { onClose, open } = props;

  const handleListItemClick = (account) => {
    instance.setActiveAccount(account);
    if (!account) {
      instance.loginRedirect({
        ...loginRequest,
        prompt: "login"
      })
    } else {
      // To ensure account related page attributes update after the account is changed
      window.location.reload();
    }

    onClose(account);
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Seleccione una cuenta</DialogTitle>
      <List>
        {accounts.map((account) => (
          <ListItem button onClick={() => handleListItemClick(account)} key={account.homeAccountId}>
            <ListItemAvatar>
              <Avatar>
                <BsFillPersonFill />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={account.name} secondary={account.username} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick(null)}>
          <ListItemAvatar>
            <Avatar>
              <IoIosAddCircleOutline />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Agregar Cuenta" />
        </ListItem>
      </List>
    </Dialog>
  );
};