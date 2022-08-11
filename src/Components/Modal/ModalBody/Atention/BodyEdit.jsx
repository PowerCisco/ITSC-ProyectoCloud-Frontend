import { useState, useEffect} from 'react';
import { Button, TextField } from '@material-ui/core'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { ModalBodyEditAtention } from '../../ModalStyle/Atention/ModalEdit';
import { useMsal } from "@azure/msal-react";


export const BodyEdit = (Paciente, handleChange, PutAtention, openCloseEditModal) => {
    const { instance } = useMsal();
    const [name, setName] = useState(null);
  
    const activeAccount = instance.getActiveAccount();
    useEffect(() => {
        if (activeAccount) {
            setName(activeAccount.name.split(' ')[0]);
        } else {
            setName(null);
        }
    }, [activeAccount]);

    const { stylesForEdit } = ModalBodyEditAtention();
    const EditarBody = (
        <div className={stylesForEdit.modal}>
  
          <center><h4 className={stylesForEdit.titles}>Diagnostico</h4></center>
    
    
          <div className={stylesForEdit.cajaDiagnostico}>

          <TextField name="pacienteId"
               className={stylesForEdit.input_Atencion}
              label="Paciente ID"
              onChange={handleChange}
              disabled
              value={Paciente ? Paciente.pacienteId : "No existe"}
    
            />
          <TextField name="medicoId"
               className={stylesForEdit.input_Atencion}
              label="Medico ID"
              onChange={handleChange}
              disabled
              value={Paciente ? Paciente.medicoId : "No existe"}
    
            />
          <TextField name="Usuario"
              className={stylesForEdit.input_Atencion}
              label="Nombre Usuario"
              onChange={handleChange}
              disabled
              value={name}
    
            />
            <TextField name="diagnostico"
              className={stylesForEdit.input_Diagnostico}
              label="Diagnostico"
              onChange={handleChange}
              value={Paciente ? Paciente.diagnostico : "No existe"}
    
            />
         
            <br />
    
            <TextField
              className={stylesForEdit.input_fecha}
              name="fechaAtencion"
              label="Fecha de Atencion"
              InputLabelProps={{ shrink: true, required: true }}
              type="date"
              onChange={handleChange}
              defaultValue={Paciente ? Paciente.fechaAtencion : "No existe"}
              disabled
            />
    
            <TextareaAutosize
              aria-label="Tratamiento"
              name="tratamiento"
              placeholder="Tratamiento"
              minRows={4}
              maxRows={4}
              onChange={handleChange}
              value={Paciente ? Paciente.tratamiento : "No existe"}
              className={stylesForEdit.modal__textarea_tratamiento}

    
            />
    
            <TextareaAutosize
              aria-label="MedicamentosIndicados"
           
              name="medicamentosIndicados"
              placeholder="Medicamentos Indicados"
              minRows={4}
              maxRows={4}
              onChange={handleChange}
              className={stylesForEdit.modal__textarea_medicamentos}

              value={Paciente ? Paciente.medicamentosIndicados : "No existe"}
    
            />
    
    
            <br />
          </div>
    
    
          <div  className={stylesForEdit.button} align="right">
            <Button color="primary" onClick={()=>PutAtention()}>Guardar</Button>
            <Button onClick={() => openCloseEditModal()}>Cancelar</Button>
            
          </div>
        </div>
      )
  return{

    EditarBody
  }
    

}
