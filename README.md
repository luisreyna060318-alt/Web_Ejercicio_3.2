# Ejercicio 3.2 — Compendio de páginas en React

Programación Web · Unidad 3 — Instituto Tecnológico de Ciudad Juárez.

Proyecto de Vite + React + TypeScript donde se resuelven los ejercicios del
compendio. Cada ejercicio vive en su propia carpeta dentro de `src/ejercicios/`
y se muestra en `App.tsx`.

A partir del Ejercicio 4, los datos de ejemplo pertenecen al proyecto
integrador **Extra-Liebres** (gestión de actividades extraescolares del ITCJ).

## Cómo ejecutarlo

```bash
npm install
npm run dev     # servidor de desarrollo en http://localhost:5173
npm run build   # verificación de tipos (tsc) + compilación de producción
npm run lint    # análisis estático con oxlint
```

## Estructura

```
src/
  ejercicios/
    ejercicio-1/   TarjetaPersonal (componente con datos fijos)
    ejercicio-2/   TarjetaUsuario (props tipadas) + contenedor Ejercicio2
    ejercicio-3/   PaginaPerfil = Encabezado + TarjetaUsuario + PiePagina
    ejercicio-4/   datos.ts (grupos de Extra-Liebres) + ListaDeTarjetas con map()
    ejercicio-5/   Buscador (useState: texto de búsqueda y vista) + ListaCompacta
  App.tsx          muestra cada ejercicio en su propia sección
```

## Avance

- [x] Ejercicio 1 — Tu primer componente y JSX
- [x] Ejercicio 2 — Props: de un componente fijo a uno reutilizable
- [x] Ejercicio 3 — Composición: una página armada de varios componentes
- [x] Ejercicio 4 — Listas: renderizar una colección de tarjetas
- [x] Ejercicio 5 — Estado con useState
- [ ] Ejercicio 6 — Reto integrador: una página completa
