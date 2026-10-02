import type { Grupo } from '../ejercicio-4/datos';
import './ListaCompacta.css';

interface ListaCompactaProps {
  grupos: Grupo[];
}

// Vista alternativa del Buscador: solo texto, un renglón por grupo.
function ListaCompacta({ grupos }: ListaCompactaProps) {
  return (
    <ul className="lista-compacta">
      {grupos.map((grupo) => (
        <li key={grupo.id} className="lista-compacta__elemento">
          <strong>{grupo.titulo}</strong> · {grupo.dia} {grupo.horario} · {grupo.aula}
        </li>
      ))}
    </ul>
  );
}

export default ListaCompacta;
