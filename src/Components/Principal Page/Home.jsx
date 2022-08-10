import {  UnauthenticatedTemplate } from "@azure/msal-react";
import { MenuNoAuth } from "../Sidemenu/MenuNoAuth";


export function Home() {
  return (
      <>
          
          <UnauthenticatedTemplate>
          
            <MenuNoAuth/>
          </UnauthenticatedTemplate>
      </>
  );
}

