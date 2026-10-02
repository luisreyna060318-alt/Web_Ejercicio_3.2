import './TarjetaPersonal.css';

// Ejercicio 1: componente funcional con datos fijos (sin props todavía).
// Regresa un único elemento raíz (<article>) que envuelve todo el contenido.
function TarjetaPersonal() {
  return (
    <article className="tarjeta-personal">
      <h2 className="tarjeta-personal__nombre">Luis Reyna</h2>
      <p className="tarjeta-personal__descripcion">
        Estudiante de Ingeniería en Sistemas Computacionales en el Instituto
        Tecnológico de Ciudad Juárez. Este semestre estoy aprendiendo a
        construir aplicaciones web completas, del lado del cliente y del
        servidor.
      </p>
      <h3 className="tarjeta-personal__subtitulo">Tecnologías que estoy aprendiendo</h3>
      <ul className="tarjeta-personal__tecnologias">
        <li>React</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>FastAPI</li>
      </ul>
    </article>
  );
}

export default TarjetaPersonal;
