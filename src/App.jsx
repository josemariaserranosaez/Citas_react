import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  // curso comentado
  /*const sumar = () => {
    const numero = 5;
    if(numero>5){
      console.log('es mayor')
    } else {
      console.log('no es mayor')
    }
  }

  sumar();

  const numero = 5;

  return (
    <>
      {1+1}
      {numero > 5 ? 'es mayor':'no es mayor'}
      <div>
        <h1>{'Hola mundo'.toUpperCase()}</h1>
        <input type={"text"}/>
      </div>
    </>
  )*/

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente=>paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])

  return(
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  ) 

}

export default App
