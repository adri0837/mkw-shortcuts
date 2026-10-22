import { pistas, type Categoria, type Pista } from './pistas';

export type Rally = {
  id: string;
  nombre: string;
  icono: string;
  habilitado: boolean;
  pistasIds: string[];
  descripcion: string;
  // Una entrada por sección del carrusel (índice 0 = Sección 1).
  secciones?: SeccionRally[];
};

export type SeccionRally = {
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
    secciones: [
      {
        estrategia:
          'En el modo Knockout Tour, el objetivo no es solo ganar, sino sobrevivir corte tras corte. En Desierto Sol-Sol y Circuito Mario Bros., mantente al frente para esquivar los objetos masivos de la retaguardia.',
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
            ],
          },
          {
            id: 'mushroom',
            nombre: 'Champiñón',
            icono: 'mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón (Sección 1)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón en la Sección 1.',
              },
            ],
          },
          {
            id: 'golden-mushroom',
            nombre: 'Champiñón Dorado',
            icono: 'golden-mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón Dorado (Sección 1)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón Dorado en la Sección 1.',
              },
            ],
          },
          {
            id: 'dash-food',
            nombre: 'Comida Turbo',
            icono: '/img/dash-food-icon.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Dash Food (Sección 1)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Dash Food en la Sección 1.',
              },
            ],
          },
        ],
      },
      {
        estrategia: 'Texto placeholder de la estrategia de la Sección 2.',
        atajos: [
          {
            id: 'nisc',
            nombre: 'NISC',
            icono: '',
            atajos: [
              {
                titulo: 'Atajo placeholder de la Sección 2',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de la Sección 2.',
              },
            ],
          },
          {
            id: 'mushroom',
            nombre: 'Champiñón',
            icono: 'mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón (Sección 2)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón en la Sección 2.',
              },
            ],
          },
          {
            id: 'golden-mushroom',
            nombre: 'Champiñón Dorado',
            icono: 'golden-mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón Dorado (Sección 2)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón Dorado en la Sección 2.',
              },
            ],
          },
          {
            id: 'dash-food',
            nombre: 'Comida Turbo',
            icono: '/img/dash-food-icon.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Dash Food (Sección 2)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Dash Food en la Sección 2.',
              },
            ],
          },
        ],
      },
      {
        estrategia:
          'En Monte Chocolate y Pradera Mu-Mu, aprovecha las curvas cerradas y terrenos irregulares guardando Champiñones para los cortes de hierba y barro.',
        atajos: [
          {
            id: 'nisc',
            nombre: 'NISC',
            icono: '',
            atajos: [
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
            ],
          },
          {
            id: 'golden-mushroom',
            nombre: 'Champiñón Dorado',
            icono: 'golden-mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón Dorado (Sección 3)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón Dorado en la Sección 3.',
              },
            ],
          },
          {
            id: 'dash-food',
            nombre: 'Comida Turbo',
            icono: '/img/dash-food-icon.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Dash Food (Sección 3)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Dash Food en la Sección 3.',
              },
            ],
          },
        ],
      },
      {
        estrategia: 'Texto placeholder de la estrategia de la Sección 4.',
        atajos: [
          {
            id: 'nisc',
            nombre: 'NISC',
            icono: '',
            atajos: [
              {
                titulo: 'Atajo placeholder de la Sección 4',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de la Sección 4.',
              },
            ],
          },
          {
            id: 'mushroom',
            nombre: 'Champiñón',
            icono: 'mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón (Sección 4)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón en la Sección 4.',
              },
            ],
          },
          {
            id: 'golden-mushroom',
            nombre: 'Champiñón Dorado',
            icono: 'golden-mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón Dorado (Sección 4)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón Dorado en la Sección 4.',
              },
            ],
          },
          {
            id: 'dash-food',
            nombre: 'Comida Turbo',
            icono: '/img/dash-food-icon.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Dash Food (Sección 4)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Dash Food en la Sección 4.',
              },
            ],
          },
        ],
      },
      {
        estrategia:
          'Finalmente, en Circuito Mario y Aldea Arbórea, equipa siempre objetos defensivos traseros y optimiza los saltos con truco (trick) en las rampas para asegurar la victoria final.',
        atajos: [
          {
            id: 'nisc',
            nombre: 'NISC',
            icono: '',
            atajos: [
              {
                titulo: 'Atajo placeholder de NISC (Sección 5)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de NISC en la Sección 5.',
              },
            ],
          },
          {
            id: 'mushroom',
            nombre: 'Champiñón',
            icono: 'mushroom.webp',
            atajos: [
              {
                titulo: 'Corte por las raíces en Aldea Arbórea',
                clip: '',
                descripcion: 'Usa el turbo para pasar por encima de las raíces elevadas en la última sección.',
              },
            ],
          },
          {
            id: 'golden-mushroom',
            nombre: 'Champiñón Dorado',
            icono: 'golden-mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón Dorado (Sección 5)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón Dorado en la Sección 5.',
              },
            ],
          },
          {
            id: 'dash-food',
            nombre: 'Comida Turbo',
            icono: '/img/dash-food-icon.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Dash Food (Sección 5)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Dash Food en la Sección 5.',
              },
            ],
          },
        ],
      },
      {
        estrategia: 'Texto placeholder de la estrategia de la Sección 6.',
        atajos: [
          {
            id: 'nisc',
            nombre: 'NISC',
            icono: '',
            atajos: [
              {
                titulo: 'Atajo placeholder de la Sección 6',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de la Sección 6.',
              },
            ],
          },
          {
            id: 'mushroom',
            nombre: 'Champiñón',
            icono: 'mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón (Sección 6)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón en la Sección 6.',
              },
            ],
          },
          {
            id: 'golden-mushroom',
            nombre: 'Champiñón Dorado',
            icono: 'golden-mushroom.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Champiñón Dorado (Sección 6)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Champiñón Dorado en la Sección 6.',
              },
            ],
          },
          {
            id: 'dash-food',
            nombre: 'Comida Turbo',
            icono: '/img/dash-food-icon.webp',
            atajos: [
              {
                titulo: 'Atajo placeholder de Dash Food (Sección 6)',
                clip: '',
                descripcion: 'Descripción placeholder del atajo de Dash Food en la Sección 6.',
              },
            ],
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
