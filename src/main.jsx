import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { LoginPage } from "./Components/Login/LoginPage";
import { MedicoApp } from "./Components/MedicoUserView/MedicoApp";





import "/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MedicoApp />
  </BrowserRouter>




)
