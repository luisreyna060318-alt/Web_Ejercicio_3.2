import TarjetaPersonal from './ejercicios/ejercicio-1/TarjetaPersonal';
import Ejercicio2 from './ejercicios/ejercicio-2/Ejercicio2';
import PaginaPerfil from './ejercicios/ejercicio-3/PaginaPerfil';
import { grupos } from './ejercicios/ejercicio-4/datos';
import ListaDeTarjetas from './ejercicios/ejercicio-4/ListaDeTarjetas';
import Buscador from './ejercicios/ejercicio-5/Buscador';
import PaginaCatalogo from './ejercicios/ejercicio-6/PaginaCatalogo';
import './App.css';

function App() {
  return (
    <main className="app">
      <header className="app__encabezado">
        <p className="app__materia">Programación Web · Unidad 3</p>
        <h1>Ejercicio 3.2 — Compendio de páginas en React</h1>
      </header>

      <section className="app__ejercicio">
        <h2 className="app__titulo-ejercicio">Ejercicio 1 — Tu primer componente y JSX</h2>
        <TarjetaPersonal />
      </section>

      <section className="app__ejercicio">
        <h2 className="app__titulo-ejercicio">
          Ejercicio 2 — Props: de un componente fijo a uno reutilizable
        </h2>
        <Ejercicio2 />
      </section>

      <section className="app__ejercicio">
        <h2 className="app__titulo-ejercicio">
          Ejercicio 3 — Composición: una página armada de varios componentes
        </h2>
        {/* PaginaPerfil devuelve un Fragmento, así que este marco solo sirve
            para mostrarla aquí como si fuera una página independiente. */}
        <div className="app__marco-pagina">
          <PaginaPerfil />
        </div>
      </section>

      <section className="app__ejercicio">
        <h2 className="app__titulo-ejercicio">
          Ejercicio 4 — Listas: renderizar una colección de tarjetas
        </h2>
        <p className="app__nota">
          Grupos de actividades extraescolares del proyecto integrador Extra-Liebres.
        </p>
        <ListaDeTarjetas grupos={grupos} />
      </section>

      <section className="app__ejercicio">
        <h2 className="app__titulo-ejercicio">
          Ejercicio 5 — Estado con useState: una página que reacciona a la interacción
        </h2>
        <p className="app__nota">
          Escribe el nombre de una actividad para filtrar los grupos de Extra-Liebres.
        </p>
        <Buscador grupos={grupos} />
      </section>

      <section className="app__ejercicio">
        <h2 className="app__titulo-ejercicio">Ejercicio 6 — Reto integrador: una página completa</h2>
        <p className="app__nota">
          Haz clic en un grupo y abre la consola del navegador (F12) para ver cuál se seleccionó.
        </p>
        <div className="app__marco-pagina app__marco-pagina--ancho">
          <PaginaCatalogo grupos={grupos} />
        </div>
      </section>
    </main>
  );
}

export default App;
