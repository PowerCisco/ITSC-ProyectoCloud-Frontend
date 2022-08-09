import axios from 'axios';
import { useEffect, useState } from 'react';
import { useModalController } from './useModalController';


const urlPatient = "https://itsc-proyectofinal.azurewebsites.net/paciente/";
const urlAtention = "https://itsc-proyectofinal.azurewebsites.net/atencion/";



export const useAtention = () => {
    const [State, setState] = useState([]);
    const [getAtention, setAtention] = useState([]);
    const [DateTime, setDateTime] = useState("")
    const { openCloseCreateModal, setCreateState, CreateState, setEditState, openCloseEditModal} = useModalController();


    const [Paciente, setPaciente] = useState({
        pacienteId: '',
        diagnostico: '',
        tratamiento: '',
        fechaAtencion: '',
        medicamentosIndicados: '',
        pacienteId: '',

    });

    const AddOrEditSelector = (data, caso) => {
   
        setPaciente(data);
     
        (caso === 'Agregar') ? openCloseCreateModal() : setEditState(true)
        console.log("presionado boton:" + caso);
    
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


    const postAtention = async () => {
        let date = {
            fechaAtencion :DateTime
        }
        const medico = {
            medicoId:1
        }
        let AssingDateToPaciente = Object.assign(Paciente,date,medico);
        const {fechaNacimiento,sexo,matricula, carrera,tipoPaciente, departamento, ...UpdateObject} = AssingDateToPaciente;
        
       
         const { data } = await axios.post(urlAtention, UpdateObject).then();

         setAtention(getAtention.concat(data))
        
        openCloseCreateModal();

    }

    const getDataPatient = async () => {
        const { data } = await axios.get(urlPatient).then();
  
        setState(data);
    }
    const getDataAtention = async () => {
        const { data } = await axios.get(urlAtention).then();
        const newData = data.map((oldData)=>{
            let newDate = (oldData.fechaAtencion).slice(0,10);
            oldData.fechaAtencion=newDate;
            return oldData
        })
        setAtention(newData)
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
        openCloseEditModal
    }


}
