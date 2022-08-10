import {  UnauthenticatedTemplate } from "@azure/msal-react";
import { MenuNoAuth } from "../Login/MenuNoAuth";


export function Home() {
  return (
      <>
          
          <UnauthenticatedTemplate>
          
            <MenuNoAuth/>
          </UnauthenticatedTemplate>
      </>
  );
}

