const { commands } = require('vscode');
const reactReduxGenerator = require('./app/generators/reactRedux.generator');

function activate(context) {
	let disposable = commands.registerCommand('react-redux-code-generator.helloWorld', reactReduxGenerator);
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
