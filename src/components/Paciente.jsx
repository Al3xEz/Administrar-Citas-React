const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, telefono, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
      setPaciente({});
    }
  };

  return (
    <div className="mx-5 mb-5 bg-white shadow-md px-5 py-8 rounded-lg last-of-type:mb-0 animate__animated animate__fadeInDown">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Telefono: <span className="font-normal normal-case">{telefono}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-10 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold uppercase"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
