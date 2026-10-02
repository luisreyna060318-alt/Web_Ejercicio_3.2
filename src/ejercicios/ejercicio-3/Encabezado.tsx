import './Encabezado.css';

interface EncabezadoProps {
  titulo: string;
  subtitulo: string;
}

// El título y el subtítulo no están escritos aquí: los decide el componente
// que use el Encabezado (en este ejercicio, PaginaPerfil).
function Encabezado({ titulo, subtitulo }: EncabezadoProps) {
  return (
    <header className="encabezado">
      <h1 className="encabezado__titulo">{titulo}</h1>
      <p className="encabezado__subtitulo">{subtitulo}</p>
    </header>
  );
}

export default Encabezado;
