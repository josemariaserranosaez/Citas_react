

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, alta, sintomas, id}=paciente

  const handleEliminar = () => {
    const respuesta = confirm("deseas eliminar el cliente")

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className='bg-white m-3 shadow-md px-5 py-10 rounded-lg'>

          <p className='font-bold mb-3 text-grey-700 uppercase'>Nombre: {''}
            <span className='font-normal normal-case'>{paciente.nombre}</span>
          </p>

          <p className='font-bold mb-3 text-grey-700 uppercase'>Propietario: {''}
            <span className='font-normal normal-case'>{paciente.propietario}</span>
          </p>

          <p className='font-bold mb-3 text-grey-700 uppercase'>Email: {''}
            <span className='font-normal normal-case'>{paciente.email}</span>
          </p>

          <p className='font-bold mb-3 text-grey-700 uppercase'>Fecha de alta: {''}
            <span className='font-normal normal-case'>{paciente.alta}</span>
          </p>

          <p className='font-bold mb-3 text-grey-700 uppercase'>Sintomas: {''}
            <span className='font-normal normal-case'>{paciente.sintomas}</span>
          </p>
          <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
              onClick={() => setPaciente(paciente)}
              >Editar
            </button>

            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
              onClick={handleEliminar}
              >Eliminar
            </button>

          </div>
        </div>
  )
}

export default Paciente
