// Sube clips a Cloudflare R2: recodifica con ffmpeg, renombra y sube.
//
//   node scripts/subir-clips.mjs "origen=destino.mp4" [...]
//   node scripts/subir-clips.mjs "grabacion1.mov=mario-bros-circuit-nisc-1.mp4"
//
// Lee el bucket y las credenciales desde .env.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, statSync } from 'node:fs';

try {
  process.loadEnvFile('.env');
} catch {
  // sin .env: se avisa más abajo cuando haga falta
}

const ORIGEN = 'clips';
const TMP = 'clips/tmp';
const BUCKET = process.env.R2_BUCKET || 'mkw-shortcuts-project';
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ACCOUNT = process.env.CLOUDFLARE_ACCOUNT_ID;

// {id-pista}-{nisc|mushroom|feather}-{n}.mp4
const VALIDO = /^[a-z0-9]+(?:-[a-z0-9]+)*-(?:nisc|mushroom|feather)-\d+\.mp4$/;

const pares = process.argv.slice(2);
if (pares.length === 0) {
  console.error('Uso: node scripts/subir-clips.mjs "origen=clip.mp4" [...]');
  process.exit(1);
}

mkdirSync(TMP, { recursive: true });

for (const par of pares) {
  const corte = par.lastIndexOf('=');
  if (corte < 1) {
    console.error(`✗ ${par}: se esperaba "origen=destino.mp4"`);
    process.exit(1);
  }

  const origen = par.slice(0, corte).trim();
  const destino = par.slice(corte + 1).trim();
  const src = `${ORIGEN}/${origen}`;

  if (!existsSync(src)) {
    console.error(`✗ no existe ${src}`);
    process.exit(1);
  }
  if (!VALIDO.test(destino)) {
    console.error(`✗ ${destino}: debe ser {id-pista}-{nisc|mushroom|feather}-{n}.mp4`);
    process.exit(1);
  }

  const tmp = `${TMP}/${destino}`;
  try {
    execFileSync(
      'ffmpeg',
      ['-y', '-i', src, '-vf', 'scale=1280:-2', '-c:v', 'libx264', '-crf', '28',
        '-an', '-movflags', '+faststart', tmp],
      { stdio: 'inherit' },
    );
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.error('✗ ffmpeg no está en el PATH. Reiniciá la terminal y volvé a intentar.');
      process.exit(1);
    }
    throw e;
  }

  if (!TOKEN || !ACCOUNT) {
    console.error(`\n✗ Falta CLOUDFLARE_API_TOKEN o CLOUDFLARE_ACCOUNT_ID en .env`);
    console.error(`  ${destino} ya quedó recodificado en ${tmp}`);
    process.exit(1);
  }

  execFileSync(
    'npx',
    ['wrangler', 'r2', 'object', 'put', `${BUCKET}/${destino}`,
      '--file', tmp,
      '--content-type', 'video/mp4',
      '--cache-control', 'public, max-age=86400',
      '--force',
      '--remote'],
    { stdio: 'inherit' },
  );

  console.log(`✓ ${destino}  ${(statSync(tmp).size / 1048576).toFixed(1)} MB`);
}

rmSync(TMP, { recursive: true, force: true });
console.log('\nSubidos. Los crudos siguen en clips/; borralos cuando confirmes que se ven bien.');