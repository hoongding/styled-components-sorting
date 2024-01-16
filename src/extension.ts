import * as vscode from 'vscode'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument((document: vscode.TextDocument) => {
      if (isStyledComponentsFile(document)) {
        // 만약 Styled Components 파일이라면 여기서 정렬로직 실행
        vscode.window.showInformationMessage('This is a styled-components file!')
      }
    }),
  )
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
