import { Button, TextField } from '@material-ui/core';
import { ModalBodyUser } from '../../ModalStyle/config/ModalStyle';


export const BodyUser = (
    user,
    putUser,
    deleteUser,
    postUser,
    openCloseDeleteModal,
    handleChange, openCloseCreateModal, openCloseEditModal) => {


    const { styles } = ModalBodyUser();
    const bodyInsertar = (
        <div className={styles.modal}>

            <div className={styles.title}>
                <center><h5>Agregar Usuarios</h5></center>
            </div>

            <div className={styles.firstColumn}>
                <TextField name="pNombre" className={styles.inputMaterial} label="Nombre" onChange={handleChange} />
                <br />
                <TextField name="sNombre" className={styles.inputMaterial} label="Segundo Nombre" onChange={handleChange} />
                <br />
                <TextField name="pApellido" className={styles.inputMaterial} label="Primer Apellido" onChange={handleChange} />
                <br />
            </div>

            <div className={styles.secondColumn}>
                <TextField name="sApellido" className={styles.inputMaterial} label="Segundo Apellido" onChange={handleChange} />
                <br />
                <TextField name="especialidad" className={styles.inputMaterial} label="Especialidad" onChange={handleChange} />
                <br />
                <TextField name="email" className={styles.inputMaterial} label="Email" onChange={handleChange} />
                <br />

            </div>

            <div className={styles.buttonColumn} align="right">
                <div className={styles.button}>
                    <Button onClick={() => postUser()}>Insertar</Button>
                    <Button onClick={() => openCloseCreateModal()}>Cancelar</Button>
                </div>
            </div>
        </div>
    )


    const bodyEditar = (
        <div className={styles.modal}>

            <div className={styles.title}>
                <center><h5>Editar Usuarios</h5></center>
            </div>

            <div className={styles.firstColumn}>
                <TextField name="pNombre" className={styles.inputMaterial} label="Nombre" onChange={handleChange} value={user && user.pNombre} />
                <br />
                <TextField name="sNombre" className={styles.inputMaterial} label="Segundo Nombre" onChange={handleChange} value={user && user.sNombre} />
                <br />
                <TextField name="pApellido" className={styles.inputMaterial} label="Primer Apellido" onChange={handleChange} value={user && user.pApellido} />
                <br />
            </div>

            <div className={styles.secondColumn}>
                <TextField name="sApellido" className={styles.inputMaterial} label="Segundo Apellido" onChange={handleChange} value={user && user.sApellido} />
                <br />
                <TextField name="especialidad" className={styles.inputMaterial} label="Especialidad" onChange={handleChange} value={user && user.especialidad} />
                <br />
                <TextField name="email" className={styles.inputMaterial} label="Email" onChange={handleChange} value={user && user.email} />
                <br />

            </div>

            <div className={styles.buttonColumn} align="right">
                <div className={styles.button}>
                    <Button onClick={() => putUser()}>Insertar</Button>
                    <Button onClick={() => openCloseEditModal()}>Cancelar</Button>
                </div>
            </div>
        </div>
    )

    const bodyEliminar = (
        <div className={styles.eliminar}> 
    
            <p>Estas Seguro que deseas eliminar el usuario <b>{user && user.pNombre} {user && user.pApellido}</b>? </p>

            <div align="right">
                <Button color="secondary" onClick={() => deleteUser()}>Si</Button>
                <Button onClick={() =>openCloseDeleteModal()}>No</Button>
            </div>
   
        </div>
    )



    return {
        bodyEditar,
        bodyInsertar,
        bodyEliminar

    }


}

