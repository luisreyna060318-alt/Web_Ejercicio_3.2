import { OPCIONES_ORDEN, type Orden } from './orden';
import './SelectorOrden.css';

interface SelectorOrdenProps {
  orden: Orden;
  // Función recibida como prop: el selector no guarda el orden, solo le avisa
  // al padre cuál eligió el usuario.
  onCambiar: (orden: Orden) => void;
}

function SelectorOrden({ orden, onCambiar }: SelectorOrdenProps) {
  return (
    <label className="selector-orden">
      <span className="selector-orden__etiqueta">Ordenar por</span>
      <select
        className="selector-orden__campo"
        value={orden}
        // El valor siempre es uno de OPCIONES_ORDEN, por eso es seguro
        // tratarlo como Orden.
        onChange={(e) => onCambiar(e.target.value as Orden)}
      >
        {OPCIONES_ORDEN.map((opcion) => (
          <option key={opcion.valor} value={opcion.valor}>
            {opcion.texto}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectorOrden;
