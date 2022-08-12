import { useEffect, useState } from 'react'
import { useMsal } from "@azure/msal-react";

export const useGetRoleUser = () => {


    
    const [rol, setrol] = useState(null);
    const [users, setUsers] = useState(null);
    const {instance} =useMsal();
    const activeAccount = instance.getActiveAccount();
  
    
  
    useEffect(() => {
      if (activeAccount) {
          const nameAcc = activeAccount.username.split(0, 10)[0];
          const user = activeAccount.name.split(0,10)[0];
          const admin = nameAcc.match("administrador");
          const auditor = nameAcc.match("administrativo");
          const medico = nameAcc.match("medico");
         
         
          if (admin != undefined) {
              setrol(admin)
             
          }else if( auditor != undefined){
              setrol(auditor)
          }else if (medico != undefined){
              setrol(medico);
          }
          setUsers(user)
      } else {
          setrol(null);
      }
  }, []);
  return {
    rol,
    users
  }

}