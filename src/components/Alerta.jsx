const Alerta = ({ mensaje }) => {
  return (
    <div className="bg-red-700 text-center p-3  text-white font-bold rounded-lg mb-5 shadow-lg uppercase animate__animated animate__bounceIn">
      <p>{mensaje}</p>
    </div>
  );
};

export default Alerta;
