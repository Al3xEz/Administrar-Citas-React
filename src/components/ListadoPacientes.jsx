import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  if (pacientes.length === 0) {
    return (
      <div className="mt-10 md:mt-0 md:w-1/2 lg:w-3/5 pb-3 md:pb-0">
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="text-xl mt-5 mb-6 text-center">
          Comienza agregando pacientes{" "}
          <span className="text-cyan-600 font-bold">
            y aparecerán en este lugar
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="mt-10 md:mt-0 md:w-1/2 lg:w-3/5 pb-3 md:pb-0">
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-6 text-center">
          Administra tus{" "}
          <span className="text-cyan-600 font-bold">Pacientes y Citas</span>
        </p>

        <div className="md:max-h-[41.5rem] md:overflow-y-auto py-2">
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default ListadoPacientes;
