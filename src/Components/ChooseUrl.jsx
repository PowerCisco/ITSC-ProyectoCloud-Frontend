import React, { useEffect, useState } from 'react'
import { MedicoApp } from "./MedicoUserView/MedicoApp";
import { AuditorApp } from "./AuditorUserView/AuditorApp";
import { useGetRoleUser } from '../Hooks/useGetRoleUser';
import { AdminApp } from './AdminUserView/AdminApp';

export const ChooseUrl = () => {

    const {rol} = useGetRoleUser()

    if (rol =="medico"){
  
  return  (
            <MedicoApp/>
    )
  }else if(rol == "administrativo"){
    return (
        
        <AuditorApp />
    )
  }else if(rol == "administrador"){
    return(
        <AdminApp/>
    )
  }
}


