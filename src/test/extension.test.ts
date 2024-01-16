// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import vscode from 'vscode'

import { isStyledComponentsFile } from '../extension'

describe('isStyledComponentsFile', () => {
  it('should return true for files with styled-components import', () => {
    const mockDocument = {
      uri: vscode.Uri.file('/path/to/file'),
      fileName: '/path/to/file',
      isUntitled: false,
      languageId: 'typescript',
      getText: () => "import styled from 'styled-components';\nconst Button = styled.button``;",
    }
    expect(isStyledComponentsFile(mockDocument as vscode.TextDocument)).toBe(true)
  })

  it('should return true for files with styled and css imports from styled-components', () => {
    const mockDocument = {
      uri: vscode.Uri.file('/path/to/file'),
      fileName: '/path/to/file',
      isUntitled: false,
      languageId: 'typescript',
      getText: () => "import styled, { css } from 'styled-components';\nconst Button = styled.button``;",
    }
    expect(isStyledComponentsFile(mockDocument as vscode.TextDocument)).toBe(true)
  })

  it('should return false for files without styled-components import', () => {
    const mockDocument = {
      uri: vscode.Uri.file('/path/to/file'),
      fileName: '/path/to/file',
      isUntitled: false,
      languageId: 'typescript',
      getText: () => 'const Button = styled.button``;',
    }
    expect(isStyledComponentsFile(mockDocument as vscode.TextDocument)).toBe(false)
  })
})
