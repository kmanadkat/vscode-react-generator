const getComponentScssTemplate = (componentName) => {
    return `.${componentName.toLowerCase()}-wrapper{
    padding: 18px;
}

button {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 24px;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    color: #fff;
    background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
    background-origin: border-box;
    box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    min-width: 84px;
    margin-right: 12px;

    &:focus {
        box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
                            0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
                            0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
        outline: 0;
    }
}
`
}

module.exports = getComponentScssTemplate
