// Todo el contenido de la guía vive acá: una entrada por pista del mapa del mundo.
//
// Las 30 pistas tienen la misma estructura. Todos los campos son opcionales:
// lo que dejes vacío simplemente no aparece en la web.
//
//   posMapa    -> el pin en el mapa del mundo (%, sobre /img/mapa-mundo.webp).
//                 Sacá las coordenadas clickeando en la página /colocar.
//   posBala    -> dónde cae la bala en el minimapa de la pista.
//   estrategia -> el texto de arriba de la página de la pista.
//   atajos     -> los grupos de atajos. Los botones del menú se arman solos
//                 desde acá, no hay que tocar ninguna página.
//
// Las imágenes no se nombran: se sacan solas de public/img/pistas/<id>/ con los
// nombres icono, card y minimapa.
// Íconos de ítems: public/img/items/{mushroom,feather,bullet-bill}.webp
// Clips: subilos a R2 con `node scripts/subir-clips.mjs "grabacion.mov=nombre.mp4"`
// y poné acá SOLO el nombre del archivo. El prefijo lo agrega CLIPS_BASE al renderizar,
// así si algún día cambiás de dominio editás un solo lugar.

import { existsSync } from 'node:fs';

// ponytail: sin fallback real. Si PUBLIC_CLIPS_URL falta, las URL quedan rotas y se ven
// al instante en devtools; poner un default silencioso esconderia el error.
export const CLIPS_BASE =
  import.meta.env.PUBLIC_CLIPS_URL || 'https://REEMPLAZAR-POR-TU-URL-PUBLICA.r2.dev/mkw-shortcuts-project';

export type Atajo = {
  titulo: string;
  clip: string; // nombre del .mp4 en R2, ej. "mario-bros-circuit-nisc-1.mp4" ("" = sin clip)
  descripcion: string;
};

export type Categoria = {
  id: string;
  nombre: string;
  icono: string; // archivo dentro de /img/items/ ("" = sin ícono)
  atajos: Atajo[];
};

export type Pista = {
  id: string;
  nombre: string;
  // Solo si el archivo de la imagen no se llama icono / card / minimapa.
  icono?: string;
  card?: string;
  minimapa?: string;
  posMapa?: { x: number; y: number };
  posBala?: { x: number; y: number };
  estrategia?: string;
  atajos?: Categoria[];
  rutasPendientes?: number;
  subpistas?: string[];
};

// Copa de cada pista. Va en un mapa aparte y no repetido en las 30 entradas,
// así que agregar o corregir una copa es una línea. Los .webp están en
// public/img/copas/. Esto es solo de las pistas del mapa: las rutas no tienen copa.
const COPAS: Record<string, string[]> = {
  champinon: ['mario-bros-circuit', 'crown-city', 'whistlestop-summit', 'dk-spaceport'],
  flor: ['desert-hills', 'shy-guy-bazaar', 'wario-stadium', 'airship-fortress'],
  estrella: ['dk-pass', 'starview-peak', 'sky-high-sundae', 'warios-shipyard'],
  caparazon: ['koopa-troopa-beach', 'faraway-oasis'],
  banana: ['peach-beach', 'salty-salty-speedway', 'dino-dino-jungle', 'great-block-ruins'],
  hoja: ['cheep-cheep-falls', 'dandelion-depths', 'boo-cinema', 'dry-bones-burnout'],
  rayo: ['moo-moo-meadows', 'choco-mountain', 'toads-factory', 'bowsers-castle'],
  especial: ['acorn-heights', 'mario-circuit', 'peach-stadium', 'rainbow-road'],
  vs: [
    'choco-island-1',
    'choco-island-2',
    'mario-circuit-1',
    'mario-circuit-2',
    'mario-circuit-3',
    'ghost-valley-1',
    'ghost-valley-2',
    'ghost-valley-3',
    'vanilla-lake-1',
    'koopa-beach-1',
  ],
};

const COPA_DE = new Map(Object.entries(COPAS).flatMap(([copa, ids]) => ids.map((id) => [id, copa])));

/** Ruta del .webp de la copa de una pista, o undefined si no tiene. */
export const copaDe = (id: string) => {
  const copa = COPA_DE.get(id);
  return copa ? `/img/copas/${copa}.webp` : undefined;
};

export const pistas: Pista[] = [
  {
    id: 'acorn-heights',
    nombre: 'Aldea Arbórea',
    posMapa: { x: 50.2, y: 12.0 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'airship-fortress',
    nombre: 'Fortaleza Aérea',
    posMapa: { x: 14.7, y: 31.6 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'boo-cinema',
    nombre: 'Cine Boo',
    posMapa: { x: 63.2, y: 17.9 },
    posBala: { x: 50, y: 50 },
    subpistas: ['ghost-valley-1', 'ghost-valley-2', 'ghost-valley-3'],
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'bowsers-castle',
    nombre: 'Castillo de Bowser',
    posMapa: { x: 26.9, y: 19.9 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'cheep-cheep-falls',
    nombre: 'Cascadas Cheep Cheep',
    posMapa: { x: 62.1, y: 52.2 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'choco-mountain',
    nombre: 'Monte Chocolate',
    posMapa: { x: 38.1, y: 51.4 },
    posBala: { x: 50, y: 50 },
    subpistas: ['choco-island-1', 'choco-island-2'],
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'crown-city',
    nombre: 'Ciudad Corona',
    posMapa: { x: 37.3, y: 70.4 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'dandelion-depths',
    nombre: 'Gruta Diente de León',
    posMapa: { x: 61.8, y: 37.0 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'desert-hills',
    nombre: 'Desierto Sol-Sol',
    posMapa: { x: 11.9, y: 69.9 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'dino-dino-jungle',
    nombre: 'Jungla Dino Dino',
    posMapa: { x: 64.4, y: 86.7 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'dk-pass',
    nombre: 'DK Alpino',
    posMapa: { x: 73.5, y: 43.4 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'dk-spaceport',
    nombre: 'Puerto Espacial DK',
    posMapa: { x: 38.9, y: 84.5 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'dry-bones-burnout',
    nombre: 'Caverna Ósea',
    posMapa: { x: 37.6, y: 18.1 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'faraway-oasis',
    nombre: 'Sabana Salpicante',
    posMapa: { x: 60.6, y: 68.7 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'great-block-ruins',
    nombre: 'Templo del Bloque ?',
    posMapa: { x: 77.0, y: 80.7 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'koopa-troopa-beach',
    nombre: 'Playa Koopa',
    posMapa: { x: 49.2, y: 80.2 },
    posBala: { x: 50, y: 50 },
    subpistas: ['koopa-beach-1'],
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'mario-bros-circuit',
    nombre: 'Circuito Mario Bros.',
    posMapa: { x: 24.1, y: 60.1 },
    posBala: { x: 50, y: 50 },
    estrategia:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [
          { titulo: 'NISC #1', clip: 'mario-bros-circuit-nisc-1.mp4', descripcion: 'En la secuencia inicial, te direccionas al segundo cartel verde de Luigi Tires, dirigiéndote a la letra "E" de la palabra "TIRES" mientras realizas un salto cargado con el turbo del Start Boost. Al estar muy cerca del cartel, sueltas el salto cargado, golpeando el cartel y elevándote en el aire. Ahí, rápidamente haces un Trick a la derecha para direccionarte y, sobre todo, tener un turbo al caer en el riel verde. Con esto, tomas una curva mucho más cerrada.' },
          { titulo: 'NISC #2', clip: 'mario-bros-circuit-nisc-2.mp4', descripcion: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
          { titulo: 'NISC #3', clip: 'mario-bros-circuit-nisc-3.mp4', descripcion: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
        ],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [
          { titulo: 'Atajo con champiñón 1', clip: 'mario-bros-circuit-mushroom-1.mp4', descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
          { titulo: 'Atajo con champiñón 2', clip: 'mario-bros-circuit-mushroom-2.mp4', descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
        ],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [
          { titulo: 'Atajo con pluma 1', clip: 'mario-bros-circuit-feather-1.mp4', descripcion: 'Duis aute reprehenderit in voluptate.' },
          { titulo: 'Atajo con pluma 2', clip: 'mario-bros-circuit-feather-2.mp4', descripcion: 'Duis aute reprehenderit in voluptate.' },
        ],
      },
    ],
  },
  {
    id: 'mario-circuit',
    nombre: 'Circuito Mario',
    posMapa: { x: 50.4, y: 27.9 },
    posBala: { x: 50, y: 50 },
    subpistas: ['mario-circuit-1', 'mario-circuit-2', 'mario-circuit-3'],
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'moo-moo-meadows',
    nombre: 'Pradera Mu-Mu',
    posMapa: { x: 50.0, y: 42.3 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'peach-beach',
    nombre: 'Playa Peach',
    posMapa: { x: 85.2, y: 69.6 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'peach-stadium',
    nombre: 'Estadio Peach',
    posMapa: { x: 50.1, y: 58.2 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'rainbow-road',
    nombre: 'Senda Arco Iris',
    posMapa: { x: 49.9, y: 71.1 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'salty-salty-speedway',
    nombre: 'Ciudad Salina',
    posMapa: { x: 74.3, y: 60.7 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'shy-guy-bazaar',
    nombre: 'Bazar Shy Guy',
    posMapa: { x: 12.7, y: 49.3 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'sky-high-sundae',
    nombre: 'Cielos Helados',
    posMapa: { x: 84.7, y: 35.3 },
    posBala: { x: 50, y: 50 },
    subpistas: ['vanilla-lake-1'],
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'starview-peak',
    nombre: 'Mirador Estelar',
    posMapa: { x: 73.8, y: 24.9 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'toads-factory',
    nombre: 'Fábrica de Toad',
    posMapa: { x: 39.2, y: 35.3 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'wario-stadium',
    nombre: 'Estadio Wario',
    posMapa: { x: 26.3, y: 42.9 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'warios-shipyard',
    nombre: 'Galeón de Wario',
    posMapa: { x: 85.3, y: 54.1 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'whistlestop-summit',
    nombre: 'Cañón Ferroviario',
    posMapa: { x: 24.5, y: 79.3 },
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'choco-island-1',
    nombre: 'Isla Chocolate 1',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'choco-island-2',
    nombre: 'Isla Chocolate 2',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'mario-circuit-1',
    nombre: 'Circuito Mario 1',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'mario-circuit-2',
    nombre: 'Circuito Mario 2',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'mario-circuit-3',
    nombre: 'Circuito Mario 3',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'ghost-valley-1',
    nombre: 'Valle Fantasma 1',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'ghost-valley-2',
    nombre: 'Valle Fantasma 2',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'ghost-valley-3',
    nombre: 'Valle Fantasma 3',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'vanilla-lake-1',
    nombre: 'Lago Vainilla 1',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
  {
    id: 'koopa-beach-1',
    nombre: 'Playa Koopa 1',
    posBala: { x: 50, y: 50 },
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [{ titulo: 'Atajo NISC 1', clip: '', descripcion: '' }],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: '' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: '' }],
      },
    ],
  },
];

const IMAGENES = { icono: 'icono.png', card: 'card.png', minimapa: 'minimapa.webp' } as const;

export type Imagen = keyof typeof IMAGENES;

export const imgDe = (p: Pista, cual: Imagen) => `/img/pistas/${p.id}/${p[cual] ?? IMAGENES[cual]}`;

// Las pistas sin posición todavía no se muestran en el mapa.
export const enElMapa = () => pistas.filter((p) => p.posMapa);

// Con 30 pistas son 90 archivos colocados a mano: si declarás una imagen que no
// está, la build se frena en vez de dejar un 404 en vivo.
for (const p of pistas) {
  for (const cual of ['icono', 'card', 'minimapa'] as const) {
    const archivo = p[cual] ?? IMAGENES[cual];
    const ruta = new URL(`../../public/img/pistas/${p.id}/${archivo}`, import.meta.url);
    if (!existsSync(ruta)) throw new Error(`Falta la imagen: public/img/pistas/${p.id}/${archivo}`);
  }
}

// Una ruta une dos pistas del mapa. Reusa Categoria/Atajo tal cual, así que los
// atajos de una ruta se escriben exactamente igual que los de una pista.
export type Ruta = {
  id: string;
  desde: string; // id de pista
  hasta: string; // id de pista
  estrategia?: string;
  atajos?: Categoria[];
};

export const rutas: Ruta[] = [
  {
    id: 'acorn-heights-a-boo-cinema',
    desde: 'acorn-heights',
    hasta: 'boo-cinema',
    estrategia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    atajos: [],
  },
];

// Igual que con las imágenes: un id de pista mal escrito en una ruta se vería
// como una página medio vacía sin explicar por qué. Se frena la build.
const pistasPorId = new Set(pistas.map((p) => p.id));
for (const r of rutas) {
  for (const [extremo, id] of [
    ['desde', r.desde],
    ['hasta', r.hasta],
  ] as const) {
    if (!pistasPorId.has(id)) throw new Error(`La ruta ${r.id} apunta a una pista inexistente en ${extremo}: ${id}`);
  }
}

/** Todas las rutas que salen de una pista. */
export const rutasDesde = (pistaId: string) => rutas.filter((r) => r.desde === pistaId);

/** La primera ruta que sale de una pista, si hay. */
export const rutaDesde = (pistaId: string) => rutas.find((r) => r.desde === pistaId);