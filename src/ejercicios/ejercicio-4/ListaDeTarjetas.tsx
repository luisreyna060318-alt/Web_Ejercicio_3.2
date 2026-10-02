import TarjetaUsuario from '../ejercicio-2/TarjetaUsuario';
import type { Grupo } from './datos';
import './ListaDeTarjetas.css';

interface ListaDeTarjetasProps {
  grupos: Grupo[];
}

// Ejercicio 4: una tarjeta por cada elemento del arreglo, generada con map().
// Funciona igual con 3, 8 o 20 grupos sin cambiar una sola línea.
function ListaDeTarjetas({ grupos }: ListaDeTarjetasProps) {
  return (
    <div className="lista-tarjetas">
      {grupos.map((grupo) => (
        // key = id único del grupo: ni el título (se repite) ni el índice
        // (cambia si la lista se reordena o se filtra).
        // TarjetaUsuario se reutiliza tal cual del Ejercicio 2: su prop
        // "tecnologias" es la lista de etiquetas de la tarjeta, que para un
        // grupo son el día, el horario y el aula.
        <TarjetaUsuario
          key={grupo.id}
          nombre={grupo.titulo}
          descripcion={grupo.descripcion}
          tecnologias={[grupo.dia, grupo.horario, grupo.aula]}
        />
      ))}
    </div>
  );
}

export default ListaDeTarjetas;
