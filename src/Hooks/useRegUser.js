import axios from 'axios';
import { useEffect, useState } from 'react';
import { useModalController } from './useModalController';

const urlUsuario = "https://itsc-proyectofinal.azurewebsites.net/medico/";

export const useReguser = () => {
    const [OpenSnack, setOpenSnack] = useState(false);
    const [AlertSnack, setAlertSnack] = useState(false);
    const [DeleteSnack, setDeleteSnack] = useState(false);

    const { openCloseDeleteModal,
        Delete,
        setDelete,
        openCloseCreateModal,
        CreateState,
        setCreateState,

        
        openCloseEditModal,
        EditState,
        setEditState,
    } = useModalController();
    const [Data, setData] = useState([]);
    const [user, setUser] = useState({
        diagnostico: "",
        pNombre: "",
        sNombre: "",
        pApellido: "",
        email: "",
        especialidad: ""
    })

    const EditOrDeleteSelector = (data, caso) => {
        setUser(data);
        (caso === 'Editar') ? setEditState(true) : openCloseDeleteModal();

    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const getUser = async () => {
        const { data } = await axios.get(urlUsuario).then();
        setData(data);
    }

    const postUser = async()=>{
        const {data} = await axios.post(urlUsuario, user).then();
        setData(Data.concat(data));
        openCloseCreateModal();
        setOpenSnack(true);

    }

    const deleteUser = async () => {
        await axios.delete(urlUsuario + user.medicoId).then(response => {
            setData(Data.filter(datas=>datas.medicoId !== user.medicoId))
        })
        openCloseDeleteModal();
        setDeleteSnack(true);
    }

    useEffect(()=>{
        getUser();
    },[])

    const putUser = async () => {
        await axios.put(urlUsuario + user.medicoId, user)
            .then(response => {
                var dataNueva = Data;
                dataNueva.map(dat => {
                    if (user.medicoId === dat.medicoId) {
                        dat.diagnostico = user.diagnostico;
                        dat.pNombre = user.pNombre;
                        dat.sNombre = user.sNombre;
                        dat.pApellido = user.pApellido;
                        dat.email = user.email;
                        dat.especialidad = user.especialidad;


                    }
                })
                setData(dataNueva);
                openCloseEditModal();
                setAlertSnack(true);

            })
        setUser({
            medicoId:"",
            diagnostico: "",
            pNombre: "",
            sNombre: "",
            pApellido: "",
            email: "",
            especialidad: ""
        });
    }


    return {
        Data,
        getUser,
        putUser,
        deleteUser,
        postUser,
        user,

        openCloseDeleteModal,
        Delete,
        setDelete,

        openCloseCreateModal,
        CreateState,
        setCreateState,

        openCloseEditModal,
        EditState,
        setEditState,

        EditOrDeleteSelector,
        handleChange,


        AlertSnack,
        OpenSnack,
        DeleteSnack,

        setOpenSnack,
        setAlertSnack,
        setDeleteSnack

    }
}