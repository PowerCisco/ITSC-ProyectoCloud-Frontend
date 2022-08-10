import { useState } from "react"

export const useModalController = () => {

const [CreateState, setCreateState] = useState(false);
const [EditState, setEditState] = useState(false);


  const openCloseCreateModal =()=>{
    setCreateState(!CreateState);
  }

  const openCloseEditModal = () => {

    setEditState(!EditState);
  }
  return{ 
        openCloseCreateModal,
        CreateState,
        setCreateState,

        
        openCloseEditModal,
        EditState,
        setEditState,
  }
}
