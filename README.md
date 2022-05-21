# color-from-string

Zero-dependency, lightweight package to convert a given string (intended to use with user names) to a HEX color code.
The library uses classic hash algorithm.

https://www.npmjs.com/package/color-from-string

## Installation 
```bash
npm i color-from-string
```

## Usage

```typescript
import colorFromString from 'color-from-string';

const name: string = "Sergey Klinov";

const colorCode: string = colorFromString(name);

console.log(colorCode); // #352475
```

## Tests

```bash
npm run test
```