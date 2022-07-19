import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import { ModalBodyPacientes } from '../../../Styles For Components/ModalStyle';
import { Edit, Delete } from '@mui/icons-material';
import './TablePatient.scss';

export const TablePatinent = ({State,EditOrDeleteSelector }) => {
    const { styles } = ModalBodyPacientes();
    return (
        <>
            <TableContainer className="Tb">
                <Table stickyHeader aria-label="sticky table" >
                    <TableHead >
                        <TableRow className="Pr-Row">
                            <TableCell >PacienteID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>FechaDeNacimiento</TableCell>
                            <TableCell>Carrera</TableCell>
                            <TableCell>Departamento</TableCell>
                            <TableCell>Sexo</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Tipo de Paciente</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>



                    <TableBody className="Table-box">
                        {State.map(cons => (
                            <TableRow key={cons.pacienteId}>
                                <TableCell>{cons.pacienteId}</TableCell>
                                <TableCell>{cons.nombre}</TableCell>
                                <TableCell>{cons.apellido}</TableCell>
                                <TableCell>{cons.fechaNacimiento}</TableCell>
                                <TableCell>{cons.carrera}</TableCell>
                                <TableCell>{cons.departamento}</TableCell>
                                <TableCell>{cons.sexo}</TableCell>
                                <TableCell>{cons.telefono}</TableCell>
                                <TableCell>{cons.tipoPaciente}</TableCell>
                                <TableCell>
                                    <Edit className={styles.iconos} onClick={() => EditOrDeleteSelector(cons, 'Editar')} />
                                    &nbsp; &nbsp;
                                    <Delete className={styles.iconos} onClick={() => EditOrDeleteSelector(cons, 'Eliminar')} />

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}
