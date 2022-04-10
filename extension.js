const { commands } = require('vscode');
const reactRedux = require('./commands/reactredux.command');

function activate(context) {
	let disposable = commands.registerCommand('extension.reactredux', reactRedux);
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
