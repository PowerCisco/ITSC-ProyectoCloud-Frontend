import { useState } from "react"

export const useModalController = () => {

const [CreateState, setCreateState] = useState(false);
const [EditState, setEditState] = useState(false);
const [Report, setReport] = useState(false)
const [reportButton, setreportButton] = useState(true)


  const openCloseCreateModal =()=>{
    setCreateState(!CreateState);
  }

  const openCloseEditModal = () => {

    setEditState(!EditState);
  }
const openCloserButtonReport = () =>{
  setreportButton(false);
}
  
  const openCloseReportModal = () => {

    setReport(!Report);
  }
  return{ 
        openCloseCreateModal,
        CreateState,
        setCreateState,

        
        openCloseEditModal,
        EditState,
        setEditState,

        openCloseReportModal,
        Report,
        setReport,


        openCloserButtonReport,
        setreportButton,
        reportButton


  }
}
