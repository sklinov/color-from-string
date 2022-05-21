export function rgbToHex([red = 0, green = 0, blue = 0] = []) {
  return `#${((red << 16) | (green << 8) | blue).toString(16)}`;
}