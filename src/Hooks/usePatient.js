import axios from 'axios';
import { useEffect, useState } from 'react';
import { useModalController } from './useModalController';


const url = "https://itsc-proyectofinal.azurewebsites.net/paciente/";



export const usePatient = () => {
    const [State, setState] = useState([]);
    const { openCloseCreateModal,
        CreateState,
        openCloseEditModal,
        EditState, setEditState } = useModalController();


    const [Paciente, setPaciente] = useState({

        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        carrera: '',
        departamento: '',
        sexo: '',
        matricula: '',
        telefono: '',
        tipoPaciente: ''
    });

    const EditOrDeleteSelector = (data, caso) => {
       
        setPaciente(data);
        (caso === 'Editar') ? setEditState(true) : openCloseDeleteModal();

    }


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPaciente(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const PostPatient = async () => {
        console.log(Paciente);
        const { data } = await axios.post(url, Paciente).then();
        setState(State.concat(data));
        openCloseCreateModal();
    }

    const getData = async () => {
        const { data } = await axios.get(url).then();
        setState(data)
    }
    useEffect(() => {
        getData();
    }, [])

    const PutPatient = async () => {
        await axios.put(url + Paciente.pacienteId, Paciente)
            .then(response => {
                var dataNueva = State;
                dataNueva.map(dat => {
                    if (Paciente.pacienteId === dat.pacienteId) {
                        dat.nombre = Paciente.nombre;
                        dat.apellido = Paciente.apellido;
                        dat.fechaNacimiento = Paciente.fechaNacimiento;
                        dat.carrera = Paciente.carrera;
                        dat.matricula = Paciente.matricula;
                        dat.departamento = Paciente.departamento;
                        dat.sexo = Paciente.sexo;
                        dat.telefono = Paciente.telefono;
                        dat.tipoPaciente = Paciente.tipoPaciente;
                       
                    }
                })
                setState(dataNueva);
                openCloseEditModal();
            })

        setPaciente({
            nombre: '',
            apellido: '',
            fechaNacimiento: '',
            carrera: '',
            departamento: '',
            matricula: '',
            sexo: '',
            telefono: '',
            tipoPaciente: ''
        });
    }




    return {
        State,
        PostPatient,
        openCloseCreateModal,
        CreateState,
        openCloseEditModal,
        EditState,
        handleChange,
        Paciente,
        PutPatient,
        EditOrDeleteSelector
    }


}
