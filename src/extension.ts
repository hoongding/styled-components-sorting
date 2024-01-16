import * as vscode from 'vscode'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push()
}

// This method is called when your extension is deactivated
export function deactivate() {}

export function isStyledComponentsFile(document: vscode.TextDocument): boolean {
  // 여기에서 document의 파일 타입이 styled-components인지 확인
  const fileContent = document.getText()
  const styledImportRegex = /import\s+(\w+,\s*\{.*\}|\w+)\s+from\s+'styled-components';/

  return styledImportRegex.test(fileContent)
}
