import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from "./Components/MedicoUserView/MedicoApp";





import "/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>




)
