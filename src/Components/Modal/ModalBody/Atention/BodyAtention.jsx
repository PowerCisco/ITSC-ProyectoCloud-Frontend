import React from 'react'
import {Button, TextField } from '@material-ui/core'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { ModalBodyAtention } from '../../ModalStyle/Atention/ModalStyle';

export const BodyAtention = (Paciente,handleChange,openCloseCreateModal, postAtention, DateTime) => {
    const { styles } = ModalBodyAtention();

  const bodyAgregar = (
    <div className={styles.modal}>
      <h3>Agregar Atenciones</h3>
      <div className={styles.cajaPaciente}>
        <TextField name="nombre" className={styles.inputMaterial} disabled label="Nombre" defaultValue={Paciente ? Paciente.nombre : "No tiene"} />
        <br />
        <TextField name="apellido" className={styles.inputMaterial} disabled label="Apellido" value={Paciente ? Paciente.apellido : "No tiene"} />
        <br />
        <TextField name="carrera" className={styles.inputMaterial} disabled label="Carrera" onChange={handleChange} value={Paciente ? Paciente.carrera : "No tiene"} />
        <br />
        <TextField name="departamento" className={styles.inputMaterial} disabled label="Departamento" onChange={handleChange} value={Paciente ? Paciente.departamento : "No tiene"} />
        <br />
        <TextField name="telefono" className={styles.inputMaterial} disabled label="Telefono" onChange={handleChange} value={Paciente ? Paciente.telefono : "No tiene"} />
        <br />
        <TextField name="tipoPaciente" className={styles.inputMaterial} disabled label="Tipo de Paciente" onChange={handleChange} value={Paciente ? Paciente.tipoPaciente : "No tiene"} />
        <br />
      </div>

      <hr />
      <h4>Diagnostico</h4>


      <div className={styles.cajaDiagnostico}>
        <TextField name="diagnostico" className='{styles.input_Atencion}' label="Diagnostico" onChange={handleChange} />
        <br />

        <TextField
          className='{styles.inputMaterial}'
          name="fechaAtencion"
          label="Fecha de Atencion"
          InputLabelProps={{ shrink: true, required: true }}
          type="date"
          onChange={handleChange} 
          defaultValue={DateTime}
          disabled
        />

        <TextareaAutosize
          aria-label="Tratamiento"
          name="tratamiento"
          placeholder="Tratamiento"
          minRows={4}
          maxRows={4}
          onChange={handleChange} 
          className={styles.modal__textarea_diagnostico}

        />

        <TextareaAutosize
          aria-label="MedicamentosIndicados"
          name ="medicamentosIndicados"
          placeholder="Medicamentos Indicados"
          minRows={4}
          maxRows={4}
          onChange={handleChange} 
          className={styles.modal__textarea_medicamentos}

        />


        <br />
      </div>


      <div align="right">
        <Button color="primary" onClick ={()=>postAtention()}>Agregar</Button>
        <Button onClick={() => openCloseCreateModal()}>Cancelar</Button>
      </div>
    </div>
  )

  return {
    bodyAgregar

  }
}
