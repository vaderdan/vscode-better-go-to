'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

class BetterGoToSymbolProvider implements vscode.DocumentSymbolProvider {
    public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.SymbolInformation[] {
        let symbols: vscode.SymbolInformation[] = []
        
        let text = document.getText()

        

        let marks = text.match(/\n?[ ]*((\/\/[ ]*mark[ ]*:[ ]*)|(\/\/[ ]*region[ ]*)|(#[ ]*region[ ]*)|(#[ ]*pragma[ ]*))([^\n]+)/gi)

        

        marks.forEach(function(value){
            let markLabel = value.trim().replace(/(\/\/[ ]*mark[ ]*:[ ]*)|(\/\/[ ]*region[ ]*)|(#[ ]*region[ ]*)|(#[ ]*pragma[ ]*)/i, '')
            let rangeStart = text.search(value)

            let sym = new vscode.SymbolInformation(markLabel+"----------------------------------------------------------------------------------------------------------------", vscode.SymbolKind.Null, new vscode.Range(document.positionAt(rangeStart), document.positionAt(rangeStart + 1)), undefined,'')
            symbols.push(sym)
        })
        
        
        
        return symbols
    }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    

    console.log('activate')

    

    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider('javascript', new BetterGoToSymbolProvider()));
}

// this method is called when your extension is deactivated
export function deactivate() {
}