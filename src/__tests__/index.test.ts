import convert from '../index';

const dataset: string[] = [
  "Name",
  "Sergey Klinov",
  "Сергей Клинов",
  "Sergey Vladimirovich Klinov",
  "another string that looks like name",
  "_#5&893       ",
  "❤️",
  "🫶 🔥",
  "1231412434124123512512",
  "Pretty long string to check the proformance of the converter, to see if it can handle long string values well enough",
]

const hexRegex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");

describe("Test set of strings", () => {
  
  test.each(dataset)("Input is: %s", (name) => {
    const colorCode = convert(name);
    expect(colorCode).toMatch(hexRegex);
  })
})