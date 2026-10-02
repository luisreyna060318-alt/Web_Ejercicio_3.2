import TarjetaPersonal from './ejercicios/ejercicio-1/TarjetaPersonal';
import Ejercicio2 from './ejercicios/ejercicio-2/Ejercicio2';
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
    </main>
  );
}

export default App;
