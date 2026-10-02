import TarjetaUsuario from '../ejercicio-2/TarjetaUsuario';
import type { Grupo } from './datos';
import './ListaDeTarjetas.css';

interface ListaDeTarjetasProps {
  grupos: Grupo[];
  // Opcional (se agregó en el Ejercicio 6): si se recibe, cada tarjeta se
  // vuelve seleccionable y le avisa al componente padre cuál se eligió.
  onSeleccionar?: (grupo: Grupo) => void;
}

// Ejercicio 4: una tarjeta por cada elemento del arreglo, generada con map().
// Funciona igual con 3, 8 o 20 grupos sin cambiar una sola línea.
function ListaDeTarjetas({ grupos, onSeleccionar }: ListaDeTarjetasProps) {
  return (
    <div className="lista-tarjetas">
      {grupos.map((grupo) => {
        // key = id único del grupo: ni el título (se repite) ni el índice
        // (cambia si la lista se reordena o se filtra).
        // TarjetaUsuario se reutiliza tal cual del Ejercicio 2: su prop
        // "tecnologias" es la lista de etiquetas de la tarjeta, que para un
        // grupo son el día, el horario y el aula.
        const tarjeta = (
          <TarjetaUsuario
            key={grupo.id}
            nombre={grupo.titulo}
            descripcion={grupo.descripcion}
            tecnologias={[grupo.dia, grupo.horario, grupo.aula]}
          />
        );

        // Sin onSeleccionar (Ejercicios 4 y 5) la tarjeta solo se muestra.
        if (!onSeleccionar) {
          return tarjeta;
        }

        // Con onSeleccionar (Ejercicio 6) se envuelve para responder al clic,
        // y también a Enter o Espacio para quien navega con el teclado.
        return (
          <div
            key={grupo.id}
            className="lista-tarjetas__seleccionable"
            role="button"
            tabIndex={0}
            onClick={() => onSeleccionar(grupo)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSeleccionar(grupo);
              }
            }}
          >
            {tarjeta}
          </div>
        );
      })}
    </div>
  );
}

export default ListaDeTarjetas;
