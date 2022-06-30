import React from 'react'
import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect( () => {
    if( Object.keys(pacientes).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId =() => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return fecha+random
  }

  const hadleSubmit = (e) => {
    e.preventDefault();

    if([nombre,propietario,email,alta,sintomas].includes('')){
      setError(true)
      return;
    } 
    setError(false)
    const objetoPacientes = {
      nombre,propietario,email,alta,sintomas
    }

    if(paciente.id){
      //editando
      objetoPacientes.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //nuevo registro
      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes]);
    }

    //reiniciar form
    setNombre('')
    setPropietario('')
    setAlta('')
    setEmail('')
    setSintomas('')
    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center'>
          añade Pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>
        <form onSubmit={hadleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

          { error && <Error> Todos los campos son obligatorios</Error>
           }

          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase '>Nombre Mascota</label>
            <input id="mascota" type="text" placeholder='Nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={nombre} onChange={ (e) => setNombre(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase '>Nombre Propietario</label>
            <input id="propietario" type="text" placeholder='Nombre del propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'value={propietario} onChange={ (e) => setPropietario(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase '>Email</label>
            <input id="email" type="email" placeholder='Email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase '>Fecha de alta</label>
            <input id="alta" type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'value={alta} onChange={ (e) => setAlta(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase '>Sintomas</label>
            <textarea in='sintomas' placeholder='Describe los sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md 'value={sintomas} onChange={ (e) => setSintomas(e.target.value) }/>
          </div>

          <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value={paciente.id ? "Editar paciente":"Agregar Paciente"}/>
          

        </form>
    </div>
  )
}

export default Formulario


