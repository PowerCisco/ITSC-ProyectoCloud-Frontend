import axios from 'axios';
import { useEffect, useState } from 'react';
import { useModalController } from './useModalController';




export const useReport = () => {
  const [State, setState] = useState([]);
  const [Data, setData] = useState([
    {fecha: "",
    nombreCompleto: "",
    edad: '',
    diagnostico: "",
    tratamiento: '',
    medico: "",
    carrera: '',
    matricula: "",
    departamento: '',
    telefono: ""
  }
  ]);
  const { openCloseReportModal, Report, setReport, openCloserButtonReport,
    setreportButton,
    reportButton
} = useModalController();

  //Estados del componente de alerta Snackba
  const [Open, setOpen] = useState(false);


  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }







  const getDataReport = async () => {
    const fechaInicio = State.fechaInicio;
    const fechaFin = State.fechaFin;
    const tipoPaciente = State.TipoPaciente;
 

    let config = {
      method: 'get',
      url: `https://itsc-proyectofinal.azurewebsites.net/reporte?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&TipoPaciente=${tipoPaciente}`,
  
    };

    const { data } = await axios(config).then();

    setData(data);
    openCloseReportModal();
    openCloserButtonReport();
  }



  return {
    State,

    getDataReport,
    Report,
    setReport,
    openCloseReportModal,

    Open,
    setOpen,
    Data,
    handleChange,

    openCloserButtonReport,
    setreportButton,
    reportButton
  }


}
