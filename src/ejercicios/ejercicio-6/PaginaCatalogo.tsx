import { useState } from 'react';
import Encabezado from '../ejercicio-3/Encabezado';
import PiePagina from '../ejercicio-3/PiePagina';
import type { Grupo } from '../ejercicio-4/datos';
import Buscador from '../ejercicio-5/Buscador';
import { ordenarGrupos, type Orden } from './orden';
import SelectorOrden from './SelectorOrden';

interface PaginaCatalogoProps {
  grupos: Grupo[];
}

// Ejercicio 6: página completa armada con componentes de los ejercicios
// anteriores (Encabezado y PiePagina del 3, Buscador del 5) más SelectorOrden.
function PaginaCatalogo({ grupos }: PaginaCatalogoProps) {
  // Estado 3 (los otros dos viven en Buscador): criterio de orden. Vive aquí
  // porque lo cambia SelectorOrden y lo usa Buscador, y PaginaCatalogo es el
  // padre de ambos.
  const [orden, setOrden] = useState<Orden>('original');

  // Primero se ordena aquí y luego Buscador filtra; filter() respeta el orden.
  const gruposOrdenados = ordenarGrupos(grupos, orden);

  // Función que viaja como prop hasta cada tarjeta: el hijo avisa qué grupo
  // se eligió y el padre decide qué hacer con él.
  function mostrarSeleccion(grupo: Grupo) {
    console.log(`Grupo seleccionado: ${grupo.titulo} (id ${grupo.id})`, grupo);
  }

  return (
    <>
      <Encabezado
        titulo="Catálogo de grupos"
        subtitulo="Extra-Liebres · Actividades extraescolares del ITCJ"
      />
      <SelectorOrden orden={orden} onCambiar={setOrden} />
      <Buscador grupos={gruposOrdenados} onSeleccionar={mostrarSeleccion} />
      <PiePagina texto="© 2026 Luis Reyna · Extra-Liebres — Programación Web, Instituto Tecnológico de Ciudad Juárez" />
    </>
  );
}

export default PaginaCatalogo;
