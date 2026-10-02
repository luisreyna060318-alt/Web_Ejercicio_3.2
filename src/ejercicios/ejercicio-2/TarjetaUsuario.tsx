import './TarjetaUsuario.css';

// Tipo explícito de las props que recibe el componente.
interface TarjetaUsuarioProps {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
}

// Ejercicio 2: la TarjetaPersonal del Ejercicio 1 convertida en un componente
// genérico. Los datos ya no están escritos aquí: llegan por props y se
// desestructuran directamente en los parámetros de la función.
function TarjetaUsuario({ nombre, descripcion, tecnologias }: TarjetaUsuarioProps) {
  return (
    <article className="tarjeta-usuario">
      <h3 className="tarjeta-usuario__nombre">{nombre}</h3>
      <p className="tarjeta-usuario__descripcion">{descripcion}</p>
      <ul className="tarjeta-usuario__tecnologias">
        {/* Cada <li> generado con map() necesita una key única entre sus hermanos;
            el nombre de la tecnología ya es único dentro del arreglo. */}
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
    </article>
  );
}

export default TarjetaUsuario;
