import './PiePagina.css';

interface PiePaginaProps {
  texto: string;
}

function PiePagina({ texto }: PiePaginaProps) {
  return (
    <footer className="pie-pagina">
      <p className="pie-pagina__texto">{texto}</p>
    </footer>
  );
}

export default PiePagina;
