import axios from 'axios';
import { useEffect, useState } from 'react';
import { useGetRoleUser } from './useGetRoleUser';
import { useModalController } from './useModalController';


const urlPatient = "https://itsc-proyectofinal.azurewebsites.net/paciente/";
const urlAtention = "https://itsc-proyectofinal.azurewebsites.net/atencion/";


const urlUser ="https://itsc-proyectofinal.azurewebsites.net/medico/"
export const useAtention = () => {
    const [State, setState] = useState([]);
    const [getAtention, setAtention] = useState([]);
    const [DateTime, setDateTime] = useState("");
    const { openCloseCreateModal, setCreateState, CreateState, setEditState, openCloseEditModal, EditState } = useModalController();
    const [Open, setOpen] = useState(false);

    const [Data, setData] = useState([])

    const{role} = useGetRoleUser();
    const [Paciente, setPaciente] = useState({
        pacienteId: '',
        diagnostico: '',
        tratamiento: '',
        fechaAtencion: '',
        medicamentosIndicados: '',


    });

    const AddOrEditSelector = (data, caso) => {

        setPaciente(data);
        (caso === 'Agregar') ? openCloseCreateModal() : setEditState(true)
    }


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPaciente(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const getDateTime = () => {

        const MyDate = new Date();
        let time = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
        setDateTime(time);

    }
    const getUser = async () => {
        const { data } = await axios.get(urlUser).then();

        setData(data);
    }

    const postAtention = async () => {
       
        console.log(role)
        let date = {
            fechaAtencion: DateTime
        }
        const medico = {
            medicoId: 1
        }
        let AssingDateToPaciente = Object.assign(Paciente, date, medico);
        const { fechaNacimiento, sexo, matricula, carrera, tipoPaciente, departamento, ...UpdateObject } = AssingDateToPaciente;


        const { data } = await axios.post(urlAtention, UpdateObject).then();

        setAtention(getAtention.concat(data))

        openCloseCreateModal();
        setOpen(true);
    }

    const getDataPatient = async () => {
        const { data } = await axios.get(urlPatient).then();

        setState(data);
    }
    const getDataAtention = async () => {
        const { data } = await axios.get(urlAtention).then();
        const newData = data.map((oldData) => {
            let newDate = (oldData.fechaAtencion).slice(0, 10);
            oldData.fechaAtencion = newDate;
            return oldData
        })
        setAtention(newData)

    }
    useEffect(() => {

        getDataPatient();
        getDataAtention();
        getUser();
    }, [])

    const PutAtention = async () => {
        console.log()
        await axios.put(urlAtention + Paciente.atencionId, Paciente)
            .then(response => {
                let dataNueva = getAtention;
                console.log(dataNueva)
                dataNueva.map(dat => {
                    if (Paciente.atencionId === dat.atencionId) {
                        dat.pacienteId = Paciente.nombre;
                        dat.diagnostico = Paciente.diagnostico;
                        dat.tratamiento = Paciente.tratamiento;
                        dat.fechaAtencion = Paciente.fechaAtencion;
                        dat.medicamentosIndicados = Paciente.medicamentosIndicados;
                        dat.pacienteId = Paciente.pacienteId;


                    }
                })
                setAtention(dataNueva);
                openCloseEditModal();
                setAlertEdit(true);

            })
        setPaciente({
            pacienteId: '',
            diagnostico: '',
            tratamiento: '',
            fechaAtencion: '',
            medicamentosIndicados: '',
        });
    }




    return {
        State,
        getAtention,
        AddOrEditSelector,
        CreateState,
        setCreateState,
        openCloseCreateModal,
        Paciente,
        handleChange,
        postAtention,
        getDateTime,
        DateTime,
        openCloseEditModal,
        EditState,
        PutAtention,

        AlertEdit,
        setAlertEdit,

        Open, 
        setOpen
    }


}
