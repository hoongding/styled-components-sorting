import * as vscode from 'vscode'
import { expect } from 'chai'
import { isStyledComponentsFile } from '../extension'
import assert from 'assert'

suite('isStyledComponentsFile', () => {
  test('should return true for files with styled-components import', () => {
    const mockDocument = {
      uri: vscode.Uri.file('/path/to/file'),
      fileName: '/path/to/file',
      isUntitled: false,
      languageId: 'typescript',
      getText: () => "import styled from 'styled-components';\nconst Button = styled.button``;",
    }
    assert.strictEqual(isStyledComponentsFile(mockDocument as vscode.TextDocument), true)
  })

  test('should return true for files with styled and css imports from styled-components', () => {
    const mockDocument = {
      uri: vscode.Uri.file('/path/to/file'),
      fileName: '/path/to/file',
      isUntitled: false,
      languageId: 'typescript',
      getText: () => "import styled, { css } from 'styled-components';\nconst Button = styled.button``;",
    }
    assert.strictEqual(isStyledComponentsFile(mockDocument as vscode.TextDocument), true)
  })

  test('should return false for files without styled-components import', () => {
    const mockDocument = {
      uri: vscode.Uri.file('/path/to/file'),
      fileName: '/path/to/file',
      isUntitled: false,
      languageId: 'typescript',
      getText: () => 'const Button = styled.button``;',
    }
    assert.strictEqual(isStyledComponentsFile(mockDocument as vscode.TextDocument), false)
  })
})
