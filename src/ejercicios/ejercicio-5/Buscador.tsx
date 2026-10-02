import { useState } from 'react';
import type { Grupo } from '../ejercicio-4/datos';
import ListaDeTarjetas from '../ejercicio-4/ListaDeTarjetas';
import ListaCompacta from './ListaCompacta';
import './Buscador.css';

interface BuscadorProps {
  grupos: Grupo[];
  // Opcional (se agregó en el Ejercicio 6): Buscador no la usa, solo la pasa
  // a la lista que esté mostrando para que el clic llegue hasta el padre.
  onSeleccionar?: (grupo: Grupo) => void;
}

// Minúsculas y sin acentos, para que "futbol" o "FÚTBOL" encuentren "Fútbol".
function normalizar(texto: string) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Ejercicio 5: el estado vive aquí porque Buscador es el componente que
// contiene tanto los controles que lo cambian como la lista que lo usa.
function Buscador({ grupos, onSeleccionar }: BuscadorProps) {
  // Estado 1: texto escrito; se reemplaza en cada pulsación de tecla.
  const [textoBusqueda, setTextoBusqueda] = useState('');
  // Estado 2: booleano que se invierte en cada clic del botón.
  const [vistaCompacta, setVistaCompacta] = useState(false);

  // Se recalcula en cada render a partir del arreglo completo. filter()
  // devuelve un arreglo nuevo: el arreglo original de grupos nunca se modifica.
  const busqueda = normalizar(textoBusqueda.trim());
  const gruposFiltrados = grupos.filter((grupo) =>
    normalizar(grupo.titulo).includes(busqueda),
  );

  return (
    <div className="buscador">
      <div className="buscador__controles">
        <input
          type="search"
          className="buscador__campo"
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          placeholder="Buscar por actividad…"
          aria-label="Buscar grupo por actividad"
        />
        <button
          type="button"
          className="buscador__boton"
          onClick={() => setVistaCompacta((compacta) => !compacta)}
        >
          {vistaCompacta ? 'Ver como tarjetas' : 'Ver como lista'}
        </button>
      </div>

      <p className="buscador__conteo" aria-live="polite">
        Mostrando {gruposFiltrados.length} de {grupos.length} grupos
      </p>

      {gruposFiltrados.length === 0 && (
        <p className="buscador__vacio">Ningún grupo coincide con «{textoBusqueda}».</p>
      )}
      {gruposFiltrados.length > 0 &&
        (vistaCompacta ? (
          <ListaCompacta grupos={gruposFiltrados} onSeleccionar={onSeleccionar} />
        ) : (
          <ListaDeTarjetas grupos={gruposFiltrados} onSeleccionar={onSeleccionar} />
        ))}
    </div>
  );
}

export default Buscador;
