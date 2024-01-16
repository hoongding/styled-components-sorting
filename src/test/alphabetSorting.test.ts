import * as vscode from 'vscode'
import assert from 'assert'
import { sortCssAlphabetically } from '../sorting-convention/alphabetSorting'

suite('alphabetSorting', () => {
  test('should return true for files with styled-components import', () => {
    const mockInput = `
      width: 100px;
      color: blue;
      background: white;
      height: 50px;`

    const expectedOutput = `
      background: white;
      color: blue;
      height: 50px;
      width: 100px;`
    console.log(sortCssAlphabetically(mockInput))

    assert.strictEqual(sortCssAlphabetically(mockInput), expectedOutput)
  })
})
