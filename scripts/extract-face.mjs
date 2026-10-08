import fs from 'node:fs/promises';
import { parse } from 'acorn';
import { analyze } from 'eslint-scope';
import prettier from 'prettier';
import { fileURLToPath } from 'node:url';

const destination = fileURLToPath(new URL('../', import.meta.url)).replace(/\/$/, '');
await fs.mkdir(`${destination}/src/vendor`, { recursive: true });
await fs.mkdir(`${destination}/src/shaders`, { recursive: true });
await fs.mkdir(`${destination}/reference`, { recursive: true });
const original = await fs.readFile(new URL('../reference/entry.3e07ed2f.js', import.meta.url), 'utf8');
const ast = parse(original, { ecmaVersion: 'latest', sourceType: 'module', ranges: true });
const scopeManager = analyze(ast, { ecmaVersion: 2022, sourceType: 'module', optimistic: true, ignoreEval: true });
const moduleScope = scopeManager.scopes.find(scope => scope.type === 'module');
const units = [];
for (const statement of ast.body) {
  if (statement.type === 'ExportNamedDeclaration') continue;
  if (statement.type === 'VariableDeclaration') {
    for (const d of statement.declarations) {
      units.push({ start: d.start, end: d.end, name: d.id.name, code: `${statement.kind} ${original.slice(d.start, d.end)};`, declaration: true, initializer: d.init, dependencies: new Set(), effects: new Set() });
    }
  } else {
    units.push({ start: statement.start, end: statement.end, name: statement.id?.name, code: original.slice(statement.start, statement.end), declaration: ['FunctionDeclaration', 'ClassDeclaration'].includes(statement.type), dependencies: new Set(), effects: new Set() });
  }
}
const moduleReferences = new Map();
for (const scope of scopeManager.scopes) {
  for (const reference of scope.references) {
    if (reference.resolved?.scope !== moduleScope) continue;
    moduleReferences.set(reference.identifier.start, reference.resolved.name);
    const position = reference.identifier.start;
    const unit = units.find(u => u.start <= position && position < u.end);
    if (unit) unit.dependencies.add(reference.resolved.name);
  }
}
function findEffects(node, effects) {
  if (!node || typeof node !== 'object') return;
  if (['FunctionExpression', 'ArrowFunctionExpression', 'ClassExpression'].includes(node.type)) return;
  if (node.type === 'AssignmentExpression' || node.type === 'UpdateExpression') {
    let target = node.left ?? node.argument;
    while (target?.type === 'MemberExpression') target = target.object;
    const name = target?.type === 'Identifier' && moduleReferences.get(target.start);
    if (name) effects.add(name);
  }
  for (const [key, value] of Object.entries(node)) {
    if (['start', 'end', 'range'].includes(key)) continue;
    if (Array.isArray(value)) value.forEach(child => findEffects(child, effects));
    else if (value && typeof value === 'object') findEffects(value, effects);
  }
}
for (const unit of units) findEffects(unit.initializer, unit.effects);
const definitions = new Map(units.filter(u => u.name).map(u => [u.name, u]));
const overrides = {
  xe: 'const xe = { active: false, queryDebug: () => false, addBlade: () => {} };',
  je: 'const je = { cursor: [0, 0] };',
  vi: 'const vi = !window.matchMedia("(max-width: 768px)").matches;',
};
for (const [name, code] of Object.entries(overrides)) {
  const unit = definitions.get(name);
  unit.code = code;
    unit.dependencies.clear();
    unit.effects.clear();
}
const seeds = ['T1', 'xa', 'tt', 'xt', 'vi', 'xi', 'Ji', 'er', 'xe', 'Pe', 'Ie', 'je', 'Mu', 'ke', 'G3', 'Ea', 'oA'];
const names = new Set(seeds);
const selected = new Set();
let changed = true;
while (changed) {
  changed = false;
  for (const name of names) {
    const unit = definitions.get(name);
    if (!unit || selected.has(unit)) continue;
    selected.add(unit);
    changed = true;
    for (const dependency of unit.dependencies) names.add(dependency);
  }
  for (const unit of units) {
    if (selected.has(unit)) continue;
    if ((!unit.declaration && [...unit.dependencies].some(name => names.has(name))) || [...unit.effects].some(name => names.has(name))) {
      selected.add(unit);
      changed = true;
      for (const dependency of unit.dependencies) names.add(dependency);
    }
  }
}
const exports = `export { T1, xa, tt, xt, vi, xi, Ji, er, xe, Pe, Ie, je, Mu, ke, G3 as Renderer, Ea as Transform, oA as Camera };`;
const runtime = `/* Runtime dependencies extracted from the public frontend of preparetopioneer.com, 2026-10-09. Browser/math/GSAP helpers are retained; Nuxt boot, site pages, trackers and backend calls are excluded. This does not establish an open-source license. */\n${units.filter(u => selected.has(u)).map(u => u.code).join('\n')}\n${exports}`;
await fs.writeFile(`${destination}/src/vendor/renderer-runtime.js`, await prettier.format(runtime, { parser: 'babel' }));

const faceClass = definitions.get('Tz');
let faceCode = faceClass.code.replace('class Tz', 'export class ParticleFace');
faceCode = faceCode.replace('new jn(Zt.particlesFacePlane,1,this.defines)', "{vert:'#define HAS_VIDEO_TEXTURE 0\\n'+faceVertexShader,frag:'#define HAS_VIDEO_TEXTURE 0\\n'+faceFragmentShader}");
if (faceCode.includes('new jn')) throw new Error('Shader replacement failed');
const header = `/** Particle face implementation recovered from the released frontend (class Tz). Readable formatting does not restore the original .vue/TS source. */\nimport { T1, xa, tt, xt, vi, xi, Ji, er, xe, Pe, Ie, je, Mu, ke } from './vendor/renderer-runtime.js';\nimport { faceVertexShader, faceFragmentShader } from './shaders/face-shader.js';\n`;
await fs.writeFile(`${destination}/src/ParticleFace.js`, await prettier.format(header + faceCode, { parser: 'babel' }));
const shaderNode = ast.body.flatMap(n => n.declarations ?? []).find(d => d.id.name === 'FE').init;
const template = shaderNode.quasis[0].value.cooked;
const vertex = template.match(/<% if \(vert\) \{ %>([\s\S]*?)<% \} %>/)[1].trim() + '\n';
const fragment = template.match(/<% if \(frag\) \{ %>([\s\S]*?)<% \} %>/)[1].trim() + '\n';
await fs.writeFile(`${destination}/src/shaders/face.vert.glsl`, vertex);
await fs.writeFile(`${destination}/src/shaders/face.frag.glsl`, fragment);
await fs.writeFile(`${destination}/src/shaders/face-shader.js`, `// Generated from the two GLSL files. Run npm run shaders after editing them.\nexport const faceVertexShader = ${JSON.stringify(vertex)};\nexport const faceFragmentShader = ${JSON.stringify(fragment)};\n`);
const palettesNode = ast.body.flatMap(n => n.declarations ?? []).find(d => d.id.name === 'Oe');
function readLiteral(node) {
  if (node.type === 'Literal') return node.value;
  if (node.type === 'ObjectExpression') return Object.fromEntries(node.properties.map(p => [p.key.name ?? p.key.value, readLiteral(p.value)]));
  throw new Error(node.type);
}
await fs.mkdir(`${destination}/config`, { recursive: true });
await fs.writeFile(`${destination}/config/palettes.json`, JSON.stringify(readLiteral(palettesNode.init), null, 2) + '\n');
const manifest = { origin: 'https://preparetopioneer.com/', capturedAt: '2026-10-09', sourceBundle: 'entry.3e07ed2f.js', faceClass: 'Tz', faceShader: 'FE', retainedRuntimeDeclarations: selected.size, runtimeBytes: runtime.length, overrides: Object.keys(overrides), publicRepositoryFound: false, originalDevelopmentSourceRecovered: false };
await fs.writeFile(`${destination}/reference/extraction.json`, JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify(manifest, null, 2));
