import TarjetaUsuario from './TarjetaUsuario';
import './Ejercicio2.css';

// Componente contenedor del Ejercicio 2: el mismo TarjetaUsuario se renderiza
// tres veces y produce tarjetas distintas según las props que recibe.
function Ejercicio2() {
  return (
    <div className="ejercicio2-tarjetas">
      <TarjetaUsuario
        nombre="Luis Reyna"
        descripcion="Estudiante de Ingeniería en Sistemas Computacionales, enfocado en el desarrollo web del lado del cliente."
        tecnologias={['React', 'TypeScript', 'Vite', 'FastAPI']}
      />
      <TarjetaUsuario
        nombre="Ana Torres"
        descripcion="Le interesa el diseño de interfaces y la accesibilidad; maqueta todo antes de programarlo."
        tecnologias={['HTML', 'CSS', 'Figma']}
      />
      <TarjetaUsuario
        nombre="Carlos Méndez"
        descripcion="Prefiere el backend: diseña APIs y modela las bases de datos del proyecto integrador."
        tecnologias={['Python', 'FastAPI', 'PostgreSQL', 'Git']}
      />

      {/* Verificación de tipos: si se descomenta la siguiente tarjeta, TypeScript
          marca el error "Type 'number' is not assignable to type 'string'"
          porque nombre se declaró como string en TarjetaUsuarioProps.

      <TarjetaUsuario nombre={123} descripcion="..." tecnologias={[]} />
      */}
    </div>
  );
}

export default Ejercicio2;
