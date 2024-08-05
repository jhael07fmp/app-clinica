function Home(): React.JSX.Element {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <img
          src="https://cache.clinic.co/assets/img/logo.png"
          alt="Clinic"
          className="img-fluid rounded-circle mb-4"
          style={{ width: "200px" }}
        />
        <h1 className="display-4 mb-4">Bienvenido a Clinic WebApp</h1>
        <p className="lead mb-4">
          En nuestra clínica, estamos dedicados a proporcionar servicios de atención médica de alta
          calidad a nuestros pacientes. Con nuestro experimentado equipo de médicos y nuestras
          instalaciones de última generación, nos esforzamos por asegurar su bienestar y comodidad.
        </p>
        <p className="mb-4">
          Ya sea que necesite un chequeo de rutina, tratamiento especializado o asesoramiento
          experto, estamos aquí para ayudar. Nuestro enfoque centrado en el paciente garantiza que
          reciba atención personalizada adaptada a sus necesidades únicas.
        </p>
      </div>
    </div>
  );
}

export default Home;
