import * as vscode from 'vscode'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push()
}

// This method is called when your extension is deactivated
export function deactivate() {}

function isStyledComponentsFile(document: vscode.TextDocument): boolean {
  // 여기에서 document의 파일 타입이 styled-components인지 확인합니다.
  // 예를 들어, 파일 확장자나 특정 문법 구조를 체크할 수 있습니다.
  return document.languageId === 'javascript' || document.languageId === 'typescript'
}
