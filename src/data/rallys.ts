import { pistas, type Categoria, type Pista } from './pistas';

export type Rally = {
  id: string;
  nombre: string;
  icono: string;
  habilitado: boolean;
  pistasIds: string[];
  descripcion: string;
  estrategia?: string;
  atajos?: Categoria[];
};

export const rallys: Rally[] = [
  {
    id: 'golden-rally',
    nombre: 'Rally Turbo',
    icono: '/img/rallys/golden-rally.png',
    habilitado: true,
    pistasIds: [
      'desert-hills',
      'mario-bros-circuit',
      'choco-mountain',
      'moo-moo-meadows',
      'mario-circuit',
      'acorn-heights',
    ],
    descripcion:
      'El Rally Turbo atraviesa 6 circuitos desafiantes de Knockout Tour, desde las ardientes arenas de Desierto Sol-Sol hasta las alturas de Aldea Arbórea.',
    estrategia:
      'En el modo Knockout Tour, el objetivo no es solo ganar, sino sobrevivir corte tras corte. En Desierto Sol-Sol y Circuito Mario Bros., mantente al frente para esquivar los objetos masivos de la retaguardia. En Monte Chocolate y Pradera Mu-Mu, aprovecha las curvas cerradas y terrenos irregulares guardando Champiñones para los cortes de hierba y barro. Finalmente, en Circuito Mario y Aldea Arbórea, equipa siempre objetos defensivos traseros y optimiza los saltos con truco (trick) en las rampas para asegurar la victoria final.',
    atajos: [
      {
        id: 'nisc',
        nombre: 'NISC',
        icono: '',
        atajos: [
          {
            titulo: 'Corte de duna en Desierto Sol-Sol',
            clip: '',
            descripcion: 'Aprovecha la cresta de la duna con miniturbo sin necesidad de champiñón.',
          },
          {
            titulo: 'Gap jump en Monte Chocolate',
            clip: '',
            descripcion: 'Salto directo sobre el barranco antes de la curva en S para recortar segundos vitales.',
          },
        ],
      },
      {
        id: 'mushroom',
        nombre: 'Champiñón',
        icono: 'mushroom.webp',
        atajos: [
          {
            titulo: 'Corte de flores en Pradera Mu-Mu',
            clip: '',
            descripcion: 'Atraviesa el campo de vacas con champiñón evitando los montículos de lodo.',
          },
          {
            titulo: 'Corte por las raíces en Aldea Arbórea',
            clip: '',
            descripcion: 'Usa el turbo para pasar por encima de las raíces elevadas en la última sección.',
          },
        ],
      },
    ],
  },
  {
    id: 'ice-rally',
    nombre: 'Rally Hielo',
    icono: '/img/rallys/ice-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'moon-rally',
    nombre: 'Rally Luna',
    icono: '/img/rallys/moon-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'spiny-rally',
    nombre: 'Rally Espinas',
    icono: '/img/rallys/spiny-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'cherry-rally',
    nombre: 'Rally Cerezas',
    icono: '/img/rallys/cherry-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'acorn-rally',
    nombre: 'Rally Bellota',
    icono: '/img/rallys/acorn-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'cloud-rally',
    nombre: 'Rally Nube',
    icono: '/img/rallys/cloud-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'heart-rally',
    nombre: 'Rally Corazón',
    icono: '/img/rallys/heart-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'drill-rally',
    nombre: 'Rally Taladro',
    icono: '/img/rallys/drill-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'boomerang-rally',
    nombre: 'Rally Bumerán',
    icono: '/img/rallys/boomerang-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'propeller-rally',
    nombre: 'Rally Hélice',
    icono: '/img/rallys/propeller-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
  {
    id: 'turnip-rally',
    nombre: 'Rally Nabo',
    icono: '/img/rallys/turnip-rally.png',
    habilitado: false,
    pistasIds: [],
    descripcion: 'Rally del modo Knockout Tour. Próximamente disponible.',
  },
];

export type PistaDeRally = Pista & {
  ronda: number;
};

export const getPistasDeRally = (rally: Rally): PistaDeRally[] => {
  return rally.pistasIds
    .map((id, index) => {
      const p = pistas.find((x) => x.id === id);
      return p ? { ...p, ronda: index + 1 } : null;
    })
    .filter((p): p is PistaDeRally => Boolean(p));
};

export type RallyParaMapa = {
  id: string;
  nombre: string;
  icono: string;
  habilitado: boolean;
  href: string;
  pistas: {
    id: string;
    nombre: string;
    x: number;
    y: number;
    ronda: number;
  }[];
};

export const getRallysParaMapa = (): RallyParaMapa[] => {
  return rallys.map((r) => {
    const pistasRally = getPistasDeRally(r);
    return {
      id: r.id,
      nombre: r.nombre,
      icono: r.icono,
      habilitado: r.habilitado,
      href: `/rally/${r.id}`,
      pistas: pistasRally
        .filter((p) => p.posMapa)
        .map((p) => ({
          id: p.id,
          nombre: p.nombre,
          x: p.posMapa!.x,
          y: p.posMapa!.y,
          ronda: p.ronda,
        })),
    };
  });
};
