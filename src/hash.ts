export function classicHash(name: string, base: number) {
  let hash = 0;
  Array.from(name).forEach((symbol, index) => {
    hash = hash + Math.pow(base, index) * symbol.charCodeAt(0);
  });

  while (hash > 255) {
    hash = hash % 255;
  }

  return hash;
}