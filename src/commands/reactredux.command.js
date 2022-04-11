const { window } = require("vscode")
const { PROMPT_TYPES } = require("../enums")
const { validateUserAction, promptForTargetDirectory, createComponent, notifyUser } = require("../utils")

const reactRedux = async () =>  {
    try {
        // 1. Input Component Name
        const componentName = await window.showInputBox({
            ignoreFocusOut: true,
            placeHolder: "Enter Component Name",
            prompt: "Keep it TitleCase"
        })
        validateUserAction(componentName)

        // 2. Ask Redux Store Slice Name
        const reduxSliceName = await window.showInputBox({
            ignoreFocusOut: true,
            placeHolder: "Enter Redux Store Slice Name",
            prompt: "Keep it camelCase"
        })
        validateUserAction(reduxSliceName)

        // 3. Input Folder Path
        const currentDirectory = await promptForTargetDirectory()
        validateUserAction(currentDirectory)

        // 4. Create Files & Folders
        createComponent(componentName, reduxSliceName, currentDirectory)

        // 5. Inform User
        notifyUser(`${componentName} component successfully created`)
    } catch (error) {
        notifyUser(error.message, PROMPT_TYPES.error)
    }
}

module.exports = reactRedux