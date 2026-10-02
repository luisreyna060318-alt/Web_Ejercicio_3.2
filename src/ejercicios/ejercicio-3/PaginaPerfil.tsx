import TarjetaUsuario from '../ejercicio-2/TarjetaUsuario';
import Encabezado from './Encabezado';
import PiePagina from './PiePagina';

// Ejercicio 3: la página no tiene marcado propio, solo ensambla a sus tres
// hijos en orden. El Fragmento (<>...</>) los agrupa sin agregar un <div>
// extra, y todos los datos que muestran los hijos fluyen desde aquí como props.
function PaginaPerfil() {
  return (
    <>
      <Encabezado titulo="Mi perfil" subtitulo="Programación Web · Unidad 3" />
      <TarjetaUsuario
        nombre="Luis Reyna"
        descripcion="Estudiante de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Ciudad Juárez, aprendiendo a construir interfaces web con React."
        tecnologias={['React', 'TypeScript', 'Vite', 'FastAPI']}
      />
      <PiePagina texto="© 2026 Luis Reyna · Programación Web — Instituto Tecnológico de Ciudad Juárez" />
    </>
  );
}

export default PaginaPerfil;
