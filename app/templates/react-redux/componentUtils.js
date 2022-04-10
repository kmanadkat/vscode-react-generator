const getComponentUtilsTemplate = () => {
    return `const parseData = (number) => {
    if(!number) return 0
        return number
    }

export {
    parseData
}`
}

module.exports = getComponentUtilsTemplate
