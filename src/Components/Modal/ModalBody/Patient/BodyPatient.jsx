import React from 'react';
import { Button, TextField, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { ModalBodyPacientes } from '../../ModalStyle/Patient/ModalStyle';

export const BodyPatient = ( PostPatient, PutPatient, handleChange, Paciente,openCloseCreateModal,openCloseEditModal) => {

    const { styles } = ModalBodyPacientes();
    const bodyInsertar = (
        <div className={styles.modal}>
               <center><h5>Agregar Paciente</h5></center> 

            <TextField name="nombre" className='{styles.inputMaterial} ' label="Nombre" onChange={handleChange} />
            <br />
            <TextField name="apellido" className='{styles.inputMaterial} ' label="Apellido" onChange={handleChange} />
            <br />
            <TextField name="carrera" className='{styles.inputMaterial} ' label="Carrera" onChange={handleChange} />
            <br />
            <TextField name="matricula" className='{styles.inputMaterial} ' label="Matricula" onChange={handleChange} />
            <br />
            <TextField name="departamento" className='{styles.inputMaterial} ' label="Departamento" onChange={handleChange} />
            <br />

            <FormLabel>Genero</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="genderRadio"
            >
                <FormControlLabel name="sexo" value="femenino" control={<Radio />} label="Femenino" onChange={handleChange} />
                <FormControlLabel name="sexo" value="masculino" control={<Radio />} label="Masculino" onChange={handleChange} />


            </RadioGroup>
            <TextField name="telefono" className='{styles.inputMaterial} ' label="Telefono" onChange={handleChange} />
            <br />
            <TextField name="tipoPaciente" className='{styles.inputMaterial} ' label="Tipo de Paciente" onChange={handleChange} />
            <br />

            <TextField
                className='{styles.inputMaterial}'
                name="fechaNacimiento"
                label="Fecha de nacimiento"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                onChange={handleChange}
            />
            <br />


            <div align="right">
                <Button onClick={() => PostPatient()}>Insertar</Button>
                <Button onClick={() => openCloseCreateModal()}>Cancelar</Button>
            </div>
        </div>
    )


    const bodyEditar = (
        <div className={styles.modal}>
           <center><h5>Editar Paciente</h5></center> 

            <TextField name="nombre" className='{styles.inputMaterial} ' label="Nombre" onChange={handleChange} value={Paciente && Paciente.nombre} />
            <br />
            <TextField name="apellido" className='{styles.inputMaterial} ' label="Apellido" onChange={handleChange} value={Paciente && Paciente.apellido} />
            <br />
            
            <TextField name="carrera" className='{styles.inputMaterial} ' label="Carrera" onChange={handleChange} value={Paciente && Paciente.carrera} />
            <br />
            <TextField name="matricula" className='{styles.inputMaterial} ' label="Matricula" onChange={handleChange} value = {Paciente && Paciente.matricula}/>
            <br />
            <TextField name="departamento" className='{styles.inputMaterial} ' label="Departamento" onChange={handleChange} value={Paciente && Paciente.departamento} />
            <br />

            <FormLabel>Genero</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={Paciente && Paciente.sexo}
                name="genderRadio"
            >
                <FormControlLabel name="sexo" value="femenino" control={<Radio />} label="Femenino" onChange={handleChange} />
                <FormControlLabel name="sexo" value="masculino" control={<Radio />} label="Masculino" onChange={handleChange} />


            </RadioGroup>
            <TextField name="telefono" className='{styles.inputMaterial} ' label="Telefono" onChange={handleChange} value={Paciente && Paciente.telefono} />
            <br />
            <TextField name="tipoPaciente" className='{styles.inputMaterial} ' label="Tipo de Paciente" onChange={handleChange} value={Paciente && Paciente.tipoPaciente} />
            <br />

            <TextField
                className='{styles.inputMaterial}'
                name="fechaNacimiento"
                label="Fecha de nacimiento"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                onChange={handleChange}
                value={Paciente && Paciente.fechaNacimiento}
            />
            <br />


            <div align="right">
                <Button color="primary" onClick={() => PutPatient()}>Editar</Button>
                <Button onClick={() => openCloseEditModal()}>Cancelar</Button>
            </div>
        </div>
    )




    return {
        bodyEditar,
        bodyInsertar
        
    }


}

