# MKW Shortcuts and strategies (prototipo)

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # incluye el chequeo de tipos

## Dónde va cada cosa

Todo el contenido de la guía está en `src/data/pistas.ts`: una entrada por
pista del mapa del mundo, 30 en total.

Por ahora cada pista es solo su id y su nombre. **Cada cosa aparece en la web en
el momento en que la completás**, así que se carga todo de a poco y no hay
lugares vacíos ni botones que no hacen nada:

- `posMapa: { x, y }` — el pin en el mapa del mundo, en porcentaje. Sin esto la
  pista no aparece en el mapa.
- `estrategia` — el texto de arriba de la página de la pista.
- `atajos` — los grupos (NISC, champiñón, pluma, bala...) con sus clips. Los
  botones del menú se generan solos desde acá. Sin esto no aparece el botón
  "Atajo".
- `posBala: { x, y }` — dónde cae la bala en el minimapa. Sin esto no aparece el
  botón "Bala".

## Imágenes

Cada pista tiene su carpeta en `public/img/pistas/<id>/` con tres archivos y
nombres fijos:

    public/img/pistas/mario-bros-circuit/
      icono.png      -> el pin en el mapa
      card.png       -> la imagen del menú de selección
      minimapa.webp  -> el mapa de la pista (para el panel de la bala)

El `<id>` tiene que coincidir con el `id` de la entrada en `src/data/pistas.ts`.
Si declarás una imagen que no está, la build se frena y te dice cuál falta.

Los íconos de ítems van en `public/img/items/`.

## Pendiente

Las rutas entre pistas todavía no están. Cuando estén, el menú de selección va
a ofrecer, además de la pista, las otras a las que se llega desde ahí.