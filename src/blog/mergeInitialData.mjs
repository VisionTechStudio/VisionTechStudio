/** Combine the original flattened handover caches without changing either source export. */
export function mergeInitialData(baseJson, blogJson) {
  const base = JSON.parse(baseJson);
  const extra = JSON.parse(blogJson);
  const offset = base.length;
  const shift = value => {
    if (typeof value === 'number') return value < 0 ? value : value + offset;
    if (Array.isArray(value)) return value.map(shift);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, shift(entry)]));
    return value;
  };
  const combined = [...base, ...extra.map(value => value && typeof value === 'object' ? shift(value) : value)];
  for (const key of ['0', '1']) {
    const originalMap = base[base[0][key]];
    const extraMap = combined[extra[0][key] + offset];
    if (originalMap?.[0] !== 'Map' || extraMap?.[0] !== 'Map') throw new Error('Unexpected page cache format');
    const entries = new Map();
    for (const map of [originalMap, extraMap]) for (let index = 1; index < map.length; index += 2) entries.set(combined[map[index]], [map[index], map[index + 1]]);
    combined[base[0][key]] = ['Map', ...[...entries.values()].flat()];
  }
  return JSON.stringify(combined);
}
