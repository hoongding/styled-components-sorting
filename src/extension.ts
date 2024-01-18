import * as vscode from 'vscode'
import { sortCssAlphabetically } from './sorting-convention/alphabetSorting'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('styled-components-sorting.styled-sorting', () => {
    const { activeTextEditor } = vscode.window

    if (!activeTextEditor || !isSupportedLanguage(activeTextEditor.document.languageId)) {
      return
    }

    const { document } = activeTextEditor

    if (isStyledComponentsFile(document)) {
      const sortedContent = sortCssInFileContent(document.getText(), sortCssAlphabetically)
      activeTextEditor.edit((editBuilder) => {
        const entireRange = new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length))
        editBuilder.replace(entireRange, sortedContent)
      })
    }
  })
}

// This method is called when your extension is deactivated
export function deactivate() {}

/**
 * @description styled-components를 사용하는 파일인지 확인하는 함수
 * @param document
 * @returns boolean
 */
export function isStyledComponentsFile(document: vscode.TextDocument): boolean {
  // 여기에서 document의 파일 타입이 styled-components인지 확인
  const fileContent = document.getText()
  const styledImportRegex = /import\s+(\w+,\s*\{.*\}|\w+)\s+from\s+'styled-components';/

  return styledImportRegex.test(fileContent)
}

export function sortCssInFileContent(fileContent: string, sortFunc: (cssContent: string) => string) {
  // 여기에서 fileContent를 파싱해서 정렬한 후 반환
  const regex = /styled\.\w+\s*`([\s\S]*?)`|css\s*`([\s\S]*?)`/g
  return fileContent.replace(regex, (match, p1, p2) => {
    const cssContent = p1 || p2 // CSS 내용 추출
    const sortedCssContent = sortFunc(cssContent) // CSS 정렬 함수 사용
    return match.replace(cssContent, sortedCssContent) // 정렬된 CSS로 교체
  })
}

function isSupportedLanguage(language: string) {
  switch (language) {
    case 'javascript':
    case 'javascriptreact':
    case 'typescript':
    case 'typescriptreact':
      return true
    default:
      return false
  }
}
