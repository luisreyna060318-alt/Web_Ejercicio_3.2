import type { Grupo } from '../ejercicio-4/datos';
import './ListaCompacta.css';

interface ListaCompactaProps {
  grupos: Grupo[];
  // Opcional (se agregó en el Ejercicio 6), igual que en ListaDeTarjetas.
  onSeleccionar?: (grupo: Grupo) => void;
}

// Vista alternativa del Buscador: solo texto, un renglón por grupo.
function ListaCompacta({ grupos, onSeleccionar }: ListaCompactaProps) {
  return (
    <ul className="lista-compacta">
      {grupos.map((grupo) => {
        const texto = (
          <>
            <strong>{grupo.titulo}</strong> · {grupo.dia} {grupo.horario} · {grupo.aula}
          </>
        );

        return (
          <li key={grupo.id} className="lista-compacta__elemento">
            {onSeleccionar ? (
              <button
                type="button"
                className="lista-compacta__contenido lista-compacta__boton"
                onClick={() => onSeleccionar(grupo)}
              >
                {texto}
              </button>
            ) : (
              <span className="lista-compacta__contenido">{texto}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ListaCompacta;
