// Grupo de actividad extraescolar del proyecto integrador Extra-Liebres
// (entidad "grupo"). Como todavía no hay API, los datos de las tablas
// relacionadas (extraescolar, semestre y promotor) ya vienen como texto.
export interface Grupo {
  id: number; // idgrupo
  titulo: string; // nombre de la actividad extraescolar
  descripcion: string; // semestre y promotor a cargo
  dia: string;
  horario: string; // horainicio–horatermino
  aula: string;
}

// Registros de ejemplo anteriores a 2023, como los que se digitalizan en
// Extra-Liebres. "Fútbol soccer" aparece en dos semestres: el título se repite,
// por eso la key de cada tarjeta debe ser el id.
export const grupos: Grupo[] = [
  {
    id: 101,
    titulo: 'Fútbol soccer',
    descripcion: 'Grupo del semestre agosto–diciembre 2021, a cargo de Jorge Ramírez Soto.',
    dia: 'Lunes',
    horario: '16:00–18:00',
    aula: 'Cancha de fútbol',
  },
  {
    id: 102,
    titulo: 'Danza folklórica',
    descripcion: 'Grupo del semestre agosto–diciembre 2021, a cargo de Patricia Luna Herrera.',
    dia: 'Martes',
    horario: '13:00–15:00',
    aula: 'Salón de danza',
  },
  {
    id: 103,
    titulo: 'Ajedrez',
    descripcion: 'Grupo del semestre agosto–diciembre 2021, a cargo de Ricardo Salas Ortiz.',
    dia: 'Miércoles',
    horario: '12:00–14:00',
    aula: 'Aula B-4',
  },
  {
    id: 104,
    titulo: 'Básquetbol',
    descripcion: 'Grupo del semestre enero–junio 2022, a cargo de Miguel Ángel Torres Ruiz.',
    dia: 'Jueves',
    horario: '17:00–19:00',
    aula: 'Gimnasio',
  },
  {
    id: 105,
    titulo: 'Fútbol soccer',
    descripcion: 'Grupo del semestre enero–junio 2022, a cargo de Jorge Ramírez Soto.',
    dia: 'Viernes',
    horario: '16:00–18:00',
    aula: 'Cancha de fútbol',
  },
  {
    id: 106,
    titulo: 'Banda de guerra',
    descripcion: 'Grupo del semestre enero–junio 2022, a cargo de Héctor Villalobos Díaz.',
    dia: 'Sábado',
    horario: '09:00–12:00',
    aula: 'Explanada',
  },
  {
    id: 107,
    titulo: 'Teatro',
    descripcion: 'Grupo del semestre agosto–diciembre 2022, a cargo de Claudia Medina Ríos.',
    dia: 'Lunes',
    horario: '14:00–16:00',
    aula: 'Auditorio',
  },
  {
    id: 108,
    titulo: 'Voleibol',
    descripcion: 'Grupo del semestre agosto–diciembre 2022, a cargo de Andrea Castillo Peña.',
    dia: 'Miércoles',
    horario: '17:00–19:00',
    aula: 'Gimnasio',
  },
];
