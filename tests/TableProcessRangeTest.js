import { TableDecision } from '../lib/index'

const TEST_DATA = [
  ['[tc1-3]', ['tc1', 'tc2', 'tc3'], 'Valid range with base text'],
  ['[15-17]', ['15', '16', '17'], 'Valid range numbers only'],
  ['[23]', ['23'], 'Not a range. Number only'],
  ['[gum-bo4]', ['gum-bo4'], 'No Valid range 1'],
  ['[gumbo-4]', ['gumbo-4'], 'No Valid range 2'],
  ['tc1-3', ['tc1-3'], 'No Range, because no brackets 1'],
  ['15-17', ['15-17'], 'No Range, because no brackets 2'],
  ['gum,bo', ['gum,bo'], 'Comma separated: No Range, because no brackets'],
  ['[gum,bo]', ['gum', 'bo'], 'Comma separated'],
  [
    '[gum,tc3-5,bo]',
    ['gum', 'tc3', 'tc4', 'tc5', 'bo'],
    'Comma separated and range',
  ],
  ['[tc15-13]', ['tc13', 'tc14', 'tc15'], 'Range descending'],
  ['[tc15-15]', ['tc15'], 'Range only one value'],
]

const table = new TableDecision()

for (const testData of TEST_DATA) {
  const range = testData[0]
  const expected = testData[1]
  const name = testData[2]

  test(`${name}`, () => {
    const result = table.processRanges(range)
    expect(result).toEqual(expected)
  })
}
