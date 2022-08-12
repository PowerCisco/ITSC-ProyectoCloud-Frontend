
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { MedicoApp } from "./Components/MedicoUserView/MedicoApp";


import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./Auth/authConfig";
import { App } from './Components/App';
export const msalInstance = new PublicClientApplication(msalConfig);

if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.enableAccountStorageEvents();

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});




ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App pca={msalInstance} />
  </Router>

)
