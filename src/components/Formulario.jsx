import Alerta from "./Alerta";
import { useState, useEffect } from "react";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setTelefono(paciente.telefono);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ([nombre, propietario, telefono, fecha, sintomas].includes("")) {
      setError(false);
      setTimeout(() => {
        setError(true);
      }, 1);
      return;
    }

    setError(false);

    if (paciente.id) {
      const pacientesActualizados = pacientes.map((item) =>
        item.id === paciente.id
          ? {
              nombre,
              propietario,
              telefono,
              fecha,
              sintomas,
              id: paciente.id,
            }
          : item
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      setPacientes([
        ...pacientes,
        { nombre, propietario, telefono, fecha, sintomas, id: generarId() },
      ]);
    }

    setNombre("");
    setPropietario("");
    setTelefono("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-8">
        Añade Pacientes y{" "}
        <span className="text-cyan-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-8 px-5"
        onSubmit={handleSubmit}
      >
        {error && <Alerta mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            name="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(event) => {
              setNombre(event.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>

          <input
            id="propietario"
            name="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(event) => {
              setPropietario(event.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="telefono"
          >
            Telefono
          </label>

          <input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="Telefono del propietario"
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={(event) => {
              setTelefono(event.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha"
          >
            Fecha
          </label>

          <input
            id="fecha"
            name="fecha"
            type="date"
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(event) => {
              setFecha(event.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas
          </label>

          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="sintomas"
            id="sintomas"
            rows="3"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(event) => {
              setSintomas(event.target.value);
            }}
          />
        </div>

        <input
          className="bg-cyan-600 w-full p-3 rounded-tl-lg rounded-br-lg text-white uppercase font-bold hover:bg-cyan-700 cursor-pointer transition-all"
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
