import type { Grupo } from '../ejercicio-4/datos';

export type Orden = 'original' | 'titulo-asc' | 'titulo-desc' | 'inverso';

export const OPCIONES_ORDEN: { valor: Orden; texto: string }[] = [
  { valor: 'original', texto: 'Orden original' },
  { valor: 'titulo-asc', texto: 'Actividad (A–Z)' },
  { valor: 'titulo-desc', texto: 'Actividad (Z–A)' },
  { valor: 'inverso', texto: 'Orden inverso al original' },
];

// Devuelve los grupos en el orden pedido sin tocar el arreglo recibido:
// sort() y reverse() modifican el arreglo sobre el que se llaman, por eso
// siempre se aplican a una copia hecha con [...grupos].
export function ordenarGrupos(grupos: Grupo[], orden: Orden): Grupo[] {
  switch (orden) {
    case 'original':
      return grupos;
    case 'titulo-asc':
      return [...grupos].sort((a, b) => a.titulo.localeCompare(b.titulo, 'es'));
    case 'titulo-desc':
      return [...grupos].sort((a, b) => b.titulo.localeCompare(a.titulo, 'es'));
    case 'inverso':
      return [...grupos].reverse();
  }
}
