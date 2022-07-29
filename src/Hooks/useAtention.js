import axios from 'axios';
import { useEffect, useState } from 'react';
import { useModalController } from './useModalController';


const urlPatient = "https://itsc-proyectofinal.azurewebsites.net/paciente/";
const urlAtention = "https://itsc-proyectofinal.azurewebsites.net/atencion/";



export const useAtention = () => {
    const [State, setState] = useState([]);
    const [getAtention, setAtention] = useState([]);

    // const { openCloseCreateModal, setEditState, openCloseDeleteModal } = useModalController();

     const {nombre,apellido } = State;
    const [Paciente, setPaciente] = useState({
        pacienteId: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        carrera: '',
        departamento: '',
        sexo: '',
        telefono: '',
        tipoPaciente: ''
    });

    // const EditOrDeleteSelector = (data, caso) => {
       
    //     setPaciente(data);
    //     (caso === 'Editar') ? setEditState(true) : openCloseDeleteModal();

    // }


    // const handleChange = ({ target }) => {
    //     const { name, value } = target;
    //     setPaciente(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }


  
    // const postAtention = async () => {

    //     const { data } = await axios.post(urlAtencion, Paciente).then();
    //     setState(State.concat(data));
    //     openCloseCreateModal();
    // }

    const getDataPatient = async () => {
        const { data } = await axios.get(urlPatient).then();

        setState(data);
    }
    const getDataAtention = async () => {
        const { data } = await axios.get(urlAtention).then();
       
        setAtention(data)
    }
    useEffect(() => {
        getDataPatient();
        getDataAtention();
    }, [])

    // const PutPatient = async () => {
    //     await axios.put(url + Paciente.pacienteId, Paciente)
    //         .then(response => {
    //             var dataNueva = State;
    //             dataNueva.map(dat => {
    //                 if (Paciente.pacienteId === dat.pacienteId) {
    //                     dat.nombre = Paciente.nombre;
    //                     dat.apellido = Paciente.apellido;
    //                     dat.fechaNacimiento = Paciente.fechaNacimiento;
    //                     dat.carrera = Paciente.carrera;
    //                     dat.departamento = Paciente.departamento;
    //                     dat.sexo = Paciente.sexo;
    //                     dat.telefono = Paciente.telefono;
    //                     dat.tipoPaciente = Paciente.tipoPaciente;
                       
    //                 }
    //             })
    //             setState(dataNueva);
    //             openCloseEditModal();
    //         })
    //     setPaciente({
    //         pacienteId: '',
    //         nombre: '',
    //         apellido: '',
    //         fechaNacimiento: '',
    //         carrera: '',
    //         departamento: '',
    //         sexo: '',
    //         telefono: '',
    //         tipoPaciente: ''
    //     });
    // }




    return {
        State,
        getAtention
    }


}
