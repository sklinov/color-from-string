import { Base } from "./config/constants";
import { classicHash } from "./hash";
import { rgbToHex } from "./rgbToHex";

/**
 *
 * @param name - any string you'd like to convert to a HEX color
 * @returns HEX color string prefixed with #
 */
export function getColor(name: string): string {
  const code: [number, number, number] = [
    classicHash(name, Base.segment1),
    classicHash(name, Base.segment2),
    classicHash(name, Base.segment3),
  ];
  return rgbToHex(code);
}
