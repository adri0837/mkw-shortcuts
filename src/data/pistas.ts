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
};

export const pistas: Pista[] = [
  {
    id: 'acorn-heights',
    nombre: 'Aldea Arbórea',
    posMapa: { x: 50.2, y: 12.0 },
    posBala: { x: 50, y: 50 },
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
          { titulo: 'Atajo NISC 1', clip: 'mario-bros-circuit-nisc-1.mp4', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { titulo: 'Atajo NISC 2', clip: '', descripcion: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
        ],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [{ titulo: 'Atajo con champiñón 1', clip: '', descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation.' }],
      },
      {
        id: 'feather',
        nombre: 'Pluma',
        icono: 'feather.webp',
        atajos: [{ titulo: 'Atajo con pluma 1', clip: '', descripcion: 'Duis aute reprehenderit in voluptate.' }],
      },
    ],
  },
  {
    id: 'mario-circuit',
    nombre: 'Circuito Mario',
    posMapa: { x: 50.4, y: 27.9 },
    posBala: { x: 50, y: 50 },
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
    estrategia: '',
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
  // Cuántas rutas del juego todavía no están escritas para este par. Cada una
  // ocupa una fila del menú con el texto de "próximamente". Es opcional a
  // propósito: solo se pone en las pistas cuyo número de rutas está confirmado
  // mirando el juego, no en todas. Mario Bros. Circuit tiene 8 rutas en total
  // (la pista, la que va a Ciudad Corona y estas 6), ya verificado.
  rutasPendientes?: number;
  estrategia?: string;
  atajos?: Categoria[];
};

export const rutas: Ruta[] = [
  {
    id: 'mario-bros-circuit-a-crown-city',
    desde: 'mario-bros-circuit',
    hasta: 'crown-city',
    rutasPendientes: 6,
    estrategia: '',
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

/** La ruta que sale de una pista, si hay. El menú la usa para saber si enlazar. */
export const rutaDesde = (pistaId: string) => rutas.find((r) => r.desde === pistaId);