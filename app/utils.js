const _ = require("lodash");
const { window } = require('vscode');
const mkdirp = require('mkdirp');
const { existsSync, writeFile } = require("fs");

const { PROMPT_TYPES } = require('./enums');
const getComponentTemplate = require("./templates/react-redux/componentTemplate");
const getComponentScssTemplate = require("./templates/react-redux/componentScss");
const getComponentUtilsTemplate = require("./templates/react-redux/componentUtils");
const getComponentHookTemplate = require("./templates/react-redux/componentHook");
const getComponentSliceTemplate = require("./templates/react-redux/componentSlice");
const getComponentSelectorTemplate = require("./templates/react-redux/componentSelector");

const notifyUser = (message, type = '') => {
	switch (type) {
		case PROMPT_TYPES.warning:
			window.showWarningMessage(message)
			break;
		case PROMPT_TYPES.error:
			window.showErrorMessage(message)
			break;
		default:
			window.showInformationMessage(message);		
			break;
	}
}

const promptForTargetDirectory = async () => {
    const options = {
        canSelectMany: false,
        openLabel: "Select folder for component",
        canSelectFolders: true,
    };

    return window.showOpenDialog(options).then((uri) => {
        if (_.isNil(uri) || _.isEmpty(uri)) {
        return undefined;
        }
        return uri[0].fsPath;
    });
}

const validateUserAction = (valueToValidate) => {
    if(!valueToValidate){
        throw new Error("Invalid user action, aborted")
    }
}


/* ComponentName 
*  		styles > ComponentName.scss
*		viewComponents
*		hooks > useComponentName.js
*		redux > slice.js, selector.js, saga.js
*		utils.js
*/
const createComponent = async (componentName, sliceName, currentDirectory) => {
    const createDirPath = `${currentDirectory}/${componentName}`
    if (!existsSync(createDirPath)) {
        await _createDirectory(createDirPath);
        await _createDirectory(`${createDirPath}/styles`)
        await _createDirectory(`${createDirPath}/viewComponents`)
        await _createDirectory(`${createDirPath}/hooks`)
        await _createDirectory(`${createDirPath}/redux`)
    }

    await Promise.all([
        _createFileTemplate({
            templateStr: getComponentTemplate(componentName, sliceName),
            fileName: '/index.jsx',
            targetPath: createDirPath,
        }),
        _createFileTemplate({
            templateStr: getComponentScssTemplate(componentName),
            fileName: `/styles/${componentName}.scss`,
            targetPath: createDirPath,
        }),
        _createFileTemplate({
            templateStr: getComponentUtilsTemplate(),
            fileName: `/utils.js`,
            targetPath: createDirPath,
        }),
        _createFileTemplate({
            templateStr: getComponentHookTemplate(componentName, sliceName),
            fileName: `/hooks/use${componentName}.js`,
            targetPath: createDirPath,
        }),
        _createFileTemplate({
            templateStr: getComponentSliceTemplate(sliceName),
            fileName: `/redux/slice.js`,
            targetPath: createDirPath,
        }),
        _createFileTemplate({
            templateStr: getComponentSelectorTemplate(sliceName),
            fileName: `/redux/selector.js`,
            targetPath: createDirPath,
        }),
    ]);
}

const _createDirectory = async (targetDirectory) => {
      const directoryResult = await mkdirp(targetDirectory)
      if(!directoryResult) {
          throw new Error("Error creating directory")
      }
}

const _createFileTemplate = ({templateStr, fileName, targetPath}) => {  
    const filePath = targetPath + fileName
    if (existsSync(filePath)) {
        throw Error(`File ${fileName} already exists`);
    }
    return new Promise(async (resolve, reject) => {
        writeFile(filePath, templateStr, "utf8", (error) => {
            if (error) return reject(error);
            resolve();
        });
    });
}

module.exports = {
    validateUserAction,
    notifyUser,
    promptForTargetDirectory,
    createComponent
}