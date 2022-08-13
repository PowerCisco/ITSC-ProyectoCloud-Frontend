
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, TextField } from '@material-ui/core';
import { ReportStyleModal } from '../../ModalStyle/Report/ReportStyleModal';

export const BodyReportModal = (handleChange, openCloseReportModal, getDataReport) => {

    const { styles } = ReportStyleModal();


    const bodyreport = (
        <div className={styles.modal}>

            <div className={styles.title}>
                <center><h5>Generar Reporte</h5></center>
            </div>

            <div className={styles.firstColumn}>

                <TextField
                    className={styles.inputFechaInicio}
                    name="fechaInicio"
                    label="Fecha Inicio"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    onChange={handleChange}
                />


                <TextField
                    className={styles.inputFechaFin}
                    name="fechaFin"
                    label="Fecha Fin"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    onChange={handleChange}
                />
            </div>
          
                <FormControl className={styles.radiogroup__paciente}>
                    <FormLabel id="demo-radio-buttons-group-label">Tipo Paciente</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Colaborador"
                        name="TipoPaciente"
                    >
                        <FormControlLabel onChange={handleChange} value="colaborador" control={<Radio />} label="colaborador" />
                        <FormControlLabel onChange={handleChange}  value="Externo" control={<Radio />} label="Externo" />
                        <FormControlLabel onChange={handleChange} value="Estudiante" control={<Radio />} label="Estudiante" />
                        <FormControlLabel onChange={handleChange} value="Todos" control={<Radio />} label="Todos" />

                    </RadioGroup>
                </FormControl>
            



            <br />






            <div className={styles.buttonColumn} align="right">
            
                    <Button onClick={() => getDataReport()}>Generar</Button>
                    <Button onClick={() => openCloseReportModal()}>Cancelar</Button>
              
            </div>
        </div>
    )


    return {
        bodyreport

    }
}

