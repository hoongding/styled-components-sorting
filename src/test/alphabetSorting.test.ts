import assert from 'assert'
import { sortCssAlphabetically } from '../sort-rules/alphabetSorting'

suite('alphabetSorting', () => {
  test('alphabet sorting test case1', () => {
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

    assert.strictEqual(sortCssAlphabetically(mockInput), expectedOutput)
  })

  test('alphabet sorting test case2: 중간에 /n이 있는 경우 sorting', () => {
    const mockInput = `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 110px;
      height: 110px;
      border: 1px solid {({ theme }) => theme.COLORS.NEUTRAL.BORDER.DEFAULT};
      border-radius: 50%;`

    const expectedOutput = `
      align-items: center;
      border: 1px solid {({ theme }) => theme.COLORS.NEUTRAL.BORDER.DEFAULT};
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      height: 110px;
      justify-content: center;
      
      width: 110px;`

    assert.strictEqual(sortCssAlphabetically(mockInput), expectedOutput)
  })
})
